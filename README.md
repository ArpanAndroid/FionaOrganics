# Fiona Organics Website

A modern, responsive Next.js website for Fiona Organics - showcasing 100% pure, farm-fresh organic superfoods.

## Features

- 🚀 **Next.js 16** with App Router
- 📱 **Fully Responsive** - Mobile-first design
- 🔒 **Security First** - Input sanitization, rate limiting, XSS protection
- ⚡ **Performance Optimized** - Image optimization, code splitting
- 🎨 **Modern UI** - Clean, organic-themed design
- 📧 **Secure Contact Form** - Server-side email handling

## Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.4
- **Styling**: CSS with CSS Variables
- **Email Service**: EmailJS (via secure API route)
- **Font**: Outfit (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website-fibona
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
EMAIL_SERVICE_ID=your_emailjs_service_id
EMAIL_TEMPLATE_ID=your_emailjs_template_id
EMAIL_PUBLIC_KEY=your_emailjs_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
website-fibona/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Secure email API endpoint
│   ├── components/
│   │   ├── Header.jsx            # Navigation header
│   │   ├── Footer.jsx            # Site footer
│   │   └── InterestModal.jsx     # Contact form modal
│   ├── models/
│   │   └── data.js               # Product and navigation data
│   ├── services/
│   │   └── emailService.js       # Email service client
│   ├── viewmodels/
│   │   ├── useFormViewModel.js   # Form state management
│   │   └── useUIViewModel.js     # UI state management
│   ├── globals.css               # Global styles
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── public/
│   └── assets/
│       └── images/               # Static images
├── next.config.js                # Next.js configuration
└── package.json
```

## Security Features

- ✅ Input sanitization on client and server
- ✅ Rate limiting (3 requests per minute per IP)
- ✅ XSS protection via input filtering
- ✅ Secure headers (CSP, X-Frame-Options, etc.)
- ✅ Server-side email validation
- ✅ No sensitive data in client-side code

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

Make sure to set your environment variables in your hosting platform's dashboard.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_EMAIL_SERVICE_ID` | EmailJS Service ID | Yes |
| `NEXT_PUBLIC_EMAIL_TEMPLATE_ID` | EmailJS Template ID | Yes |
| `NEXT_PUBLIC_EMAIL_PUBLIC_KEY` | EmailJS Public Key | Yes |

## Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## Form Behavior

After successful form submission:
- ✅ Form data is automatically cleared
- ✅ localStorage is cleared
- ✅ Success message displays for 3 seconds
- ✅ Modal auto-closes after success
- ✅ Form resets completely for next use
