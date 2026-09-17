"use client";

import { openChatWidget } from "./ChatWidget";
import OrbitRings from "./illustrations/OrbitRings";

export default function CtaBand() {
  return (
    <section className="section cta-section">
      <div className="container cta-box reveal">
        <div className="cta-blob" aria-hidden="true"></div>
        <OrbitRings />
        <div>
          <span className="eyebrow">Let's build</span>
          <h2>
            Need a technology partner that can move at startup speed and
            enterprise standards?
          </h2>
        </div>
        <button type="button" className="btn btn-primary" onClick={openChatWidget}>
          Talk to Scalwe
        </button>
      </div>
    </section>
  );
}
