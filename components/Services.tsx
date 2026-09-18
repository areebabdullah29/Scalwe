"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "./ServiceIcons";

export default function Services() {
  const [active, setActive] = useState(0);
  const activeService = siteConfig.services[active];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Services</span>
          <h2>What we do.</h2>
        </div>

        <div className="services-interactive reveal" data-reveal-delay="1">
          <ul className="services-list" role="tablist" aria-label="Services">
            {siteConfig.services.map((service, i) => (
              <li key={service.slug}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`services-list-item${active === i ? " is-active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="service-name">{service.name}</span>
                  <span className="service-arrow" aria-hidden="true">→</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="services-detail" aria-live="polite">
            <div className="services-detail-icon">{serviceIcons[activeService.slug]}</div>
            <p className="services-detail-desc">{activeService.description}</p>
            <ul className="services-detail-tags">
              {activeService.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="services-accordion">
          {siteConfig.services.map((service, i) => (
            <details key={service.slug} className="service-panel">
              <summary>
                <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="service-name">{service.name}</span>
                <span className="service-panel-icon" aria-hidden="true">+</span>
              </summary>
              <div className="service-panel-body">
                <p>{service.description}</p>
                <ul className="services-detail-tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
