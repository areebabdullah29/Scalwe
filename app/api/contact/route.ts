import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  website?: string;
  recaptchaToken?: string;
};

async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return true; // not configured yet — don't block submissions
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, service, message, website, recaptchaToken } = body || {};

  // Honeypot field — bots tend to fill every input, real users never see it.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and project details are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const recaptchaOk = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaOk) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    console.log("Contact form submission (RESEND_API_KEY not set):", {
      name,
      email,
      company,
      service,
      message,
    });
    return NextResponse.json({
      ok: true,
      warning:
        "Email delivery isn't configured yet — this submission was only logged on the server.",
    });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Scalwe Website <onboarding@resend.dev>`,
        to: toEmail,
        reply_to: email,
        subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
        text: `${message}\n\n---\nFrom: ${name} <${email}>\nCompany: ${company || "Not specified"}\nService: ${service || "Not specified"}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend API error:", detail);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
