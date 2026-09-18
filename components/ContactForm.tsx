"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { siteConfig } from "@/lib/site-config";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setStatus("error");
      setFeedback("Please confirm you're not a robot.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        recaptchaRef.current?.reset();
        return;
      }

      setStatus("success");
      setFeedback(data.warning || "Thanks — your inquiry is in. We'll reply within 24 hours.");
      setForm(initialForm);
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again in a moment.");
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section id="contact" className="section contact-section-dark">
      <div className="container contact-layout">
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h2>Tell us what you&apos;re building.</h2>
          <p>
            Fill out the form and we&apos;ll reply within 24 hours to schedule a
            short discovery call.
          </p>
          <ul className="contact-info-list">
            <li>{siteConfig.email}</li>
          </ul>
        </div>

        <form className="contact-form reveal" data-reveal-delay="1" onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={form.company}
              onChange={handleChange}
              placeholder="Your company"
            />
          </div>

          <div className="form-row">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service</option>
              {siteConfig.services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you looking to build?"
            />
          </div>

          <div className="recaptcha-row">
            <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} theme="dark" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Inquiry"}
            <span aria-hidden="true">→</span>
          </button>

          {feedback && (
            <p className={`form-feedback form-feedback-${status}`} role="status">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
