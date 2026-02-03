import { NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3;

// Input sanitization helper
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 500); // Limit length
}

// Validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Indian phone number
function isValidPhone(phone) {
  const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Rate limiting check
function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

  if (now > userRequests.resetTime) {
    userRequests.count = 0;
    userRequests.resetTime = now + RATE_LIMIT_WINDOW;
  }

  if (userRequests.count >= MAX_REQUESTS) {
    return false;
  }

  userRequests.count++;
  rateLimitMap.set(ip, userRequests);
  return true;
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many requests. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Sanitize and validate inputs
    const name = sanitizeInput(body.name || '');
    const phone = sanitizeInput(body.phone || '');
    const email = sanitizeInput(body.email || '').toLowerCase();

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { message: 'Please provide a valid Indian phone number (10 digits starting with 6-9).' },
        { status: 400 }
      );
    }

    // Use EmailJS REST API directly (more secure than browser SDK)
    const SERVICE_ID = process.env.EMAIL_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAIL_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS configuration missing');
      return NextResponse.json(
        { message: 'Email service is not configured. Please contact support directly.' },
        { status: 500 }
      );
    }

    // Send email via EmailJS REST API
    const templateParams = {
      to_name: 'Fiona Organics Team',
      name: name,
      phone: phone,
      email: email,
      message: `New Lead!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`
    };

    try {
      // Use EmailJS REST API endpoint
      const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (!emailjsResponse.ok) {
        const errorData = await emailjsResponse.text();
        console.error('EmailJS API error:', errorData);
        throw new Error('Email service failed');
      }

      return NextResponse.json(
        { message: 'Thank you! Your interest has been saved. We will contact you soon.' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { message: 'Failed to send email. Please try again later or contact us directly.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
