"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const OPEN_EVENT = "scalwe:open-chat";

const interestOptions = [
  ...siteConfig.services.slice(0, 5).map((s) => s.name),
  "Something else",
];

const timelineOptions = ["ASAP", "1–3 months", "Just exploring"];

type ChatEntry = { from: "bot" | "user"; text: string };
type Step = "interest" | "timeline" | "contact" | "done";
type Status = "idle" | "submitting" | "success" | "error";

const initialHistory: ChatEntry[] = [
  {
    from: "bot",
    text: "Hi, I'm the Scalwe concierge. What are you looking to build?",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("interest");
  const [history, setHistory] = useState<ChatEntry[]>(initialHistory);
  const [answers, setAnswers] = useState({ interest: "", timeline: "" });
  const [contact, setContact] = useState({ name: "", email: "", note: "" });
  const [status, setStatus] = useState<Status>("idle");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, openChat);
    return () => window.removeEventListener(OPEN_EVENT, openChat);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, step]);

  const say = (from: ChatEntry["from"], text: string) => {
    setHistory((prev) => [...prev, { from, text }]);
  };

  const pickInterest = (value: string) => {
    setAnswers((prev) => ({ ...prev, interest: value }));
    say("user", value);
    say("bot", "Good choice. What's your timeline?");
    setStep("timeline");
  };

  const pickTimeline = (value: string) => {
    setAnswers((prev) => ({ ...prev, timeline: value }));
    say("user", value);
    say("bot", "Last step — how should we reach you?");
    setStep("contact");
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const message = `Interest: ${answers.interest}\nTimeline: ${answers.timeline}${
      contact.note ? `\nNote: ${contact.note}` : ""
    }\n\n(Submitted via chat concierge)`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          service: answers.interest,
          message,
          website: "",
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        say("bot", data.error || "Something went wrong — please try again.");
        return;
      }

      setStatus("success");
      say(
        "user",
        `${contact.name} — ${contact.email}${contact.note ? ` (${contact.note})` : ""}`
      );
      say(
        "bot",
        "Thanks — that's in. We'll follow up within 24 hours to schedule a call."
      );
      setStep("done");
    } catch {
      setStatus("error");
      say("bot", "Network error — please try again in a moment.");
    }
  };

  const reset = () => {
    setHistory(initialHistory);
    setAnswers({ interest: "", timeline: "" });
    setContact({ name: "", email: "", note: "" });
    setStatus("idle");
    setStep("interest");
  };

  if (!open) return null;

  return (
    <div className="chat-panel" role="dialog" aria-label="Scalwe concierge chat">
      <div className="chat-header">
        <span>Scalwe Concierge</span>
        <button
          type="button"
          className="chat-close"
          aria-label="Close chat"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      </div>

      <div className="chat-body" ref={bodyRef}>
        {history.map((entry, i) => (
          <p key={i} className={`chat-bubble chat-bubble-${entry.from}`}>
            {entry.text}
          </p>
        ))}
      </div>

      <div className="chat-controls">
        {step === "interest" && (
          <div className="chat-quick-replies">
            {interestOptions.map((option) => (
              <button key={option} type="button" onClick={() => pickInterest(option)}>
                {option}
              </button>
            ))}
          </div>
        )}

        {step === "timeline" && (
          <div className="chat-quick-replies">
            {timelineOptions.map((option) => (
              <button key={option} type="button" onClick={() => pickTimeline(option)}>
                {option}
              </button>
            ))}
          </div>
        )}

        {step === "contact" && (
          <form className="chat-form" onSubmit={handleContactSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={contact.name}
              onChange={handleContactChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              value={contact.email}
              onChange={handleContactChange}
            />
            <input
              type="text"
              name="note"
              placeholder="Anything else? (optional)"
              value={contact.note}
              onChange={handleContactChange}
            />
            <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send"}
            </button>
          </form>
        )}

        {step === "done" && (
          <button type="button" className="btn btn-secondary" onClick={reset}>
            Start a new conversation
          </button>
        )}
      </div>
    </div>
  );
}

export function openChatWidget() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
