"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "./ServiceIcons";
import WorkScene from "./illustrations/WorkScene";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const items =
    active === "All"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((p) => p.category === active);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Our work</span>
          <h2>A look at what we've built.</h2>
        </div>

        <div className="tech-tabs reveal" role="tablist" aria-label="Portfolio categories">
          {siteConfig.portfolioCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`tech-tab${active === cat ? " is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {items.map((item, i) => (
            <article key={item.id} className="portfolio-card reveal" data-reveal-delay={i % 4}>
              <div className="portfolio-media">
                <WorkScene variant={item.scene} />
                <span className="portfolio-icon">{serviceIcons[item.icon]}</span>
              </div>
              <span className="portfolio-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
