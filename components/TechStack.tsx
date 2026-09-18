"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function TechStack() {
  const [active, setActive] = useState(siteConfig.techStack[0].category);
  const activeGroup =
    siteConfig.techStack.find((g) => g.category === active) ?? siteConfig.techStack[0];

  return (
    <section id="technology" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Technology</span>
          <h2>The engineering stack behind Scalwe.</h2>
        </div>

        <div className="tech-panel reveal" data-reveal-delay="1">
          <div className="tech-tabs" role="tablist" aria-label="Technology categories">
            {siteConfig.techStack.map((group) => (
              <button
                key={group.category}
                role="tab"
                aria-selected={active === group.category}
                className={`tech-tab${active === group.category ? " is-active" : ""}`}
                onClick={() => setActive(group.category)}
              >
                {group.category}
              </button>
            ))}
          </div>

          <div className="tech-pills" role="tabpanel">
            {activeGroup.items.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
