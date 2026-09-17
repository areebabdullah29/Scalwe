"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { countries } from "@/lib/countries";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const initialForm = {
  challenge: "",
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  country: "",
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [consent, setConsent] = useState(false);
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
        body: JSON.stringify({ ...form, consent, recaptchaToken }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        recaptchaRef.current?.reset();
        return;
      }

      setStatus("success");
      setFeedback(
        data.warning || "Thanks — your enquiry is in. We'll get back to you within 24 hours."
      );
      setForm(initialForm);
      setConsent(false);
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again in a moment.");
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section id="contact" className="contact-hero">
      <div className="contact-hero-visual" aria-hidden="true">
        <span className="contact-hero-stripes"></span>
        <span className="contact-hero-glow"></span>
      </div>

      <div className="contact-hero-copy reveal">
        <h2>
          <span className="accent">Let&apos;s build</span> what&apos;s next, together.
        </h2>
      </div>

      <div className="contact-hero-form-wrap reveal" data-reveal-delay="1">
        <form className="contact-card" onSubmit={handleSubmit}>
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
            <label htmlFor="challenge">
              Your challenge/goal <span className="required">*</span>
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={2}
              required
              value={form.challenge}
              onChange={handleChange}
            />
          </div>

          <div className="form-row-group">
            <div className="form-row">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-group">
            <div className="form-row">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="company">
                Company name <span className="required">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={form.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="country">
              Country <span className="required">*</span>
            </label>
            <select
              id="country"
              name="country"
              required
              value={form.country}
              onChange={handleChange}
            >
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="recaptcha-row">
            <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
          </div>

          <label className="consent-row">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I would like to sign up with my email address to receive{" "}
              <strong>Scalwe</strong> communications with updates, valuable resources
              and useful tips.
            </span>
          </label>

          <p className="contact-legal">
            By submitting this form you confirm that you agree to Scalwe&apos;s{" "}
            <a href="#">privacy policy</a>.
          </p>
          <p className="contact-legal">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
          </p>

          <button type="submit" className="btn btn-dark" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
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
