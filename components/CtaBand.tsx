"use client";

import { openChatWidget } from "./ChatWidget";
import OrbitRings from "./illustrations/OrbitRings";

export default function CtaBand() {
  return (
    <section className="section cta-section">
      <div className="container cta-box reveal">
        <OrbitRings />
        <span className="eyebrow">Have a complex problem?</span>
        <h2>
          Let&apos;s build the system
          <br />
          behind your next stage of growth.
        </h2>
        <button type="button" className="btn btn-primary" onClick={openChatWidget}>
          Start a Conversation <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
