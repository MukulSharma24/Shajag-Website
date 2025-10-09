// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "6LcHQsIrAAAAAAZhOBQJuNnpfDo5_ktyPOShE8xb"; // Add your secret key here

// Setup your SMTP transporter (update with your email provider credentials)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function verifyRecaptcha(token: string): Promise<boolean> {
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await response.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, company, phone, service, message, token } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!token || !(await verifyRecaptcha(token))) {
      return NextResponse.json(
        { success: false, message: "Invalid reCAPTCHA." },
        { status: 400 }
      );
    }

    // Construct email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: process.env.CONTACT_RECEIVER_EMAIL || "", // receiver address
      subject: `New Contact Submission - ${service || "General Inquiry"}`, // Subject line
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Service Interest: ${service || "N/A"}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
