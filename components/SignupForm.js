"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialForm = { name: "", email: "", password: "" };

export default function SignupForm() {
  const router = useRouter();
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
      const res = await fetch("/api/auth/signup", {
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
      router.push("/dashboard");
      router.refresh();
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again in a moment.");
    }
  };

  return (
    <section className="section auth-section">
      <div className="container auth-layout">
        <form className="contact-form auth-card" onSubmit={handleSubmit}>
          <span className="eyebrow">Get started</span>
          <h1>Create your account</h1>
          <p className="auth-subtitle">
            Already have an account?{" "}
            <Link href="/login" className="auth-link">
              Log in
            </Link>
          </p>

          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
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
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Creating account..." : "Create account"}
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
