import type { ReactNode } from "react";

export const serviceIcons: Record<string, ReactNode> = {
  "ai-development": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  "saas-development": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  "mobile-development": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  "cloud-devops": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17.5a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.9A4.25 4.25 0 0 1 17 17.5H7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "data-engineering": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  "ai-automation": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17.5 3v3.5H14M6.5 21v-3.5H10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "staff-augmentation": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M2.5 20c0-3.31 2.69-5.5 6-5.5s6 2.19 6 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.5a3 3 0 0 1 0 5.9M20 20c0-2.7-1.9-4.6-4.4-5.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "technical-consulting": (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2 3 6.5v6C3 16.9 6.9 21 12 22c5.1-1 9-5.1 9-9.5v-6L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
