"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const initialForm = { name: "", email: "", service: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(
        data.warning ||
          "Thanks — your message is in. We'll get back to you within 24 hours."
      );
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again in a moment.");
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-layout">
        <div className="reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Tell us about your project.</h2>
          <p>
            Fill out the form and we'll reply within 24 hours to schedule a
            short discovery call.
          </p>
          <ul className="contact-info-list">
            <li>Email: {siteConfig.email}</li>
            <li>Phone: {siteConfig.phone}</li>
            <li>Available worldwide</li>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
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

          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send message"}
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
