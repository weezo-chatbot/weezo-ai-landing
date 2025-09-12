// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or your provider (e.g., "SendGrid", "Outlook")
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // HTML email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9fafb; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 24px;">
          <h2 style="color: #16a34a; margin-bottom: 16px;">📩 New Demo Request</h2>
          <p style="font-size: 16px; color: #374151; margin-bottom: 12px;">
            You have received a new demo request from <strong>${name}</strong>.
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #111827;">Name:</td>
              <td style="padding: 8px; color: #374151;">${name}</td>
            </tr>
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 8px; font-weight: bold; color: #111827;">Email:</td>
              <td style="padding: 8px; color: #374151;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #111827;">Company:</td>
              <td style="padding: 8px; color: #374151;">${company || "N/A"}</td>
            </tr>
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 8px; font-weight: bold; color: #111827;">Message:</td>
              <td style="padding: 8px; color: #374151;">${message || "No message provided."}</td>
            </tr>
          </table>

          <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
            This request was submitted via the <strong>Weezo AI</strong> landing page.
          </p>
        </div>
        <div style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 16px;">
          © ${new Date().getFullYear()} Weezo AI. All rights reserved.
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Weezo AI Demo" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // destination email
      subject: `Demo Request from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
