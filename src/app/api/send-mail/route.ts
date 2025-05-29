import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: "arpanbagui7@gmail.com",
      subject: subject,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
