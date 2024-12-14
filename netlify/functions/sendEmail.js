// netlify/functions/sendEmail.js

import { createTransport } from "nodemailer";


const rateLimitWindow = 60 * 1000; // 60 seconds in milliseconds
const maxRequestsPerWindow = 1; // Max number of requests per IP in the rate limit window

const requestCounts = {}; // Store request counts per IP address


function isRateLimited(ip) {
  const currentTime = Date.now();
  const requests = requestCounts[ip] || []; 

  // Remove requests older than the rate limit window
  const validRequests = requests.filter(time => time >= currentTime - rateLimitWindow);
  requestCounts[ip] = validRequests;

  console.log(`IP: ${ip}, requests count: ${validRequests.length}`); // Log the number of valid requests from the IP address

  // If the number of remaining requests is less than the max allowed, record the new request and return false (not rate-limited)
  if (validRequests.length < maxRequestsPerWindow) {
    validRequests.push(currentTime);
    console.log(`Not rate-limited: ${ip}`); // Log that the IP is not rate-limited
    return false;
  }

  // If the number of remaining requests is equal to or greater than the max allowed, return true (rate-limited)
  console.log(`Rate-limited: ${ip}`); // Log that the IP is rate-limited
  return true;
}

export async function handler(event, context) {


  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const clientIp = event.headers["client-ip"];

  if (isRateLimited(clientIp)) {
    return {
      statusCode: 429,
      body: "Too Many Requests",
    };
  }



  const formData = JSON.parse(event.body);

  const YOUR_EMAIL = process.env.YOUR_EMAIL;
  const YOUR_EMAIL_PASSWORD = process.env.YOUR_EMAIL_PASSWORD;

  const transporter = createTransport({
    debug: true,
    // Configure your email service here
    service: "hotmail", // Use your email service here
    auth: {
      user: YOUR_EMAIL,
      pass: YOUR_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: YOUR_EMAIL,
    to: YOUR_EMAIL,
    subject: `New message from ${formData.name}`,
    text: formData.message,
    replyTo: formData.email,
  };

  try {

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email", error: error.message }),
    };
  }
}