export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// rate limit storage
const rateLimit = new Map();

const LIMIT = 5; // max 5 email
const WINDOW = 10 * 60 * 1000; // 10 menit

export async function POST(request: NextRequest) {
  try {

    // ambil IP user
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const user = rateLimit.get(ip);

    if (user) {
      if (now - user.startTime < WINDOW) {
        if (user.count >= LIMIT) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        user.count += 1;
      } else {
        rateLimit.set(ip, { count: 1, startTime: now });
      }
    } else {
      rateLimit.set(ip, { count: 1, startTime: now });
    }

    const { firstName, lastName, email, subject, message } =
      await request.json();

    // validasi sederhana
    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "vlasmamokiak@gmail.com",
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Message from ${firstName} ${lastName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}