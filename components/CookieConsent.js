"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "scalwe-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        Scalwe uses cookies to improve your browsing experience and understand
        site usage. Read our privacy policy to learn more.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-secondary" onClick={() => choose("rejected")}>
          Reject All
        </button>
        <button className="btn btn-primary" onClick={() => choose("accepted")}>
          Accept All
        </button>
      </div>
    </div>
  );
}
