"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discover",
    variant: "discover",
    description:
      "We align on business goals, technical constraints, users, and priorities.",
  },
  {
    number: "02",
    title: "Design",
    variant: "design",
    description:
      "We define architecture, experiences, and a roadmap that balances speed and durability.",
  },
  {
    number: "03",
    title: "Build",
    variant: "build",
    description:
      "We develop, integrate, and validate solutions using proven engineering practices.",
  },
  {
    number: "04",
    title: "Scale",
    variant: "scale",
    description:
      "We optimize infrastructure, performance, automation, and long-term operations.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = panelRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    panelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">How We Work</span>
          <h2>A structured process for faster, smarter delivery.</h2>
        </div>

        <div className="process-sticky-grid">
          <div className="process-sticky-col">
            <span className="process-active-number">{steps[active].number}</span>
            <h3 className="process-active-title">{steps[active].title}</h3>
            <p className="process-active-desc">{steps[active].description}</p>
            <ul className="process-dots" aria-hidden="true">
              {steps.map((s, i) => (
                <li key={s.number} className={i === active ? "is-active" : ""}></li>
              ))}
            </ul>
          </div>

          <div className="process-panels-col">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                className={`process-panel${i === active ? " is-active" : ""}`}
              >
                <div className="process-panel-media">
                  <Image
                    src={`/process/${step.variant}.jpg`}
                    alt=""
                    fill
                    sizes="(max-width: 980px) 90vw, 45vw"
                    className="process-media-img"
                  />
                </div>
                <div className="process-panel-mobile-text">
                  <span className="process-active-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
