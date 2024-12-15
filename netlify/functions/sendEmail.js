import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "hotmail", // Or any other service like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Your email address to receive the contact messages
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};

export { Handler };
