"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialForm = { email: "", password: "" };

export default function LoginForm() {
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
      const res = await fetch("/api/auth/login", {
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
          <span className="eyebrow">Welcome back</span>
          <h1>Log in to your account</h1>
          <p className="auth-subtitle">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="auth-link">
              Sign up
            </Link>
          </p>

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
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              placeholder="Your password"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Logging in..." : "Log in"}
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
