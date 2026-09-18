"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Industries() {
  const [active, setActive] = useState(0);
  const industry = siteConfig.industries[active];

  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Industries</span>
          <h2>Where we build.</h2>
        </div>

        <div className="industries-panel reveal" data-reveal-delay="1">
          <ul className="industries-list" role="tablist" aria-label="Industries">
            {siteConfig.industries.map((ind, i) => (
              <li key={ind.name}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`industries-list-item${active === i ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {ind.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="industries-detail" aria-live="polite">
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
            <ul className="industries-capabilities">
              {industry.capabilities.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
