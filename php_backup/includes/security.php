<?php
// Security Headers for fionaorganics.com

// 1. Force HTTPS (HSTS) - Tells browsers to only use HTTPS for the next year
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");

// 2. Prevent Clickjacking - Stop other sites from embedding your site in an iframe
// Note: We allow 'self' so you can frame your own pages if needed, but block others.
header("X-Frame-Options: SAMEORIGIN");

// 3. XSS Protection - specific for older browsers
header("X-XSS-Protection: 1; mode=block");

// 4. Prevent MIME Sniffing - Stops browser from guessing file types (security risk)
header("X-Content-Type-Options: nosniff");

// 5. Referrer Policy - specific control over what information is sent when clicking links
header("Referrer-Policy: strict-origin-when-cross-origin");

// 6. Content Security Policy (CSP) - The most important one!
// This restricts where resources (scripts, images, frames) can load from.
// We allow:
// - 'self': files from your own domain
// - google.com/gstatic.com: for Google Fonts, Analytics, Forms
// - unpkg.com/cdnjs.com: if you use specific CDNs (adjusted as needed)
// - inline styles/scripts: 'unsafe-inline' (needed for some current inline CSS/JS, 
//   ideally this should be removed in a strict audit but fine for now)
header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://docs.google.com; img-src 'self' data: https:;");

// 7. Permissions Policy - Restrict access to browser features like geolocation, camera, etc.
header("Permissions-Policy: geolocation=(), camera=(), microphone=()");

?>
