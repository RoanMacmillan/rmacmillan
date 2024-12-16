import { RateLimiterMemory } from 'rate-limiter-flexible';
import nodemailer from 'nodemailer';

// Initialize rate limiter
const rateLimiter = new RateLimiterMemory({
  points: 5, // Number of requests allowed
  duration: 60, // Per 60 seconds
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    if (!ip) {
      return new Response('Could not determine client IP.', { status: 400 });
    }

    // Apply rate limiting
    try {
      await rateLimiter.consume(ip); // Consumes 1 point for this request
    } catch (rateLimiterRes) {
      return new Response('Too many requests. Please try again later.', { status: 429 });
    }

    // Handle email sending
    const data = await req.json();

    if (!data.name || !data.email || !data.message) {
      return new Response('Missing required fields: name, email, or message.', { status: 400 });
    }

    const YOUR_EMAIL = process.env.YOUR_EMAIL;
    const YOUR_EMAIL_PASSWORD = process.env.YOUR_EMAIL_PASSWORD;

    if (!YOUR_EMAIL || !YOUR_EMAIL_PASSWORD) {
      return new Response('Server configuration error: email credentials are missing.', { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: YOUR_EMAIL,
        pass: YOUR_EMAIL_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: data.email,
      to: YOUR_EMAIL,
      subject: `Message From ${data.name}`,
      text: `${data.message} | Sent from: ${data.email}`,
      html: `<div>${data.message}</div><p>Sent from: ${data.email}</p>`,
    };

    await transporter.sendMail(mailData);

    return new Response('Message sent successfully.', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send message.', { status: 500 });
  }
}
