import { siteConfig } from "@/lib/site-config";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blobs" aria-hidden="true">
        <span className="blob blob-a"></span>
        <span className="blob blob-b"></span>
        <span className="blob blob-c"></span>
      </div>
      <ParticleField />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Engineering for the next era
          </span>
          <h1 className="shimmer-text">From AI ideas to scalable digital products.</h1>
          <p>
            Scalwe partners with founders, product teams, and enterprises to
            design, build, and optimize the software systems that power
            growth.
          </p>

          <div className="hero-actions">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                "Getting started with Scalwe"
              )}`}
              className="btn btn-primary"
            >
              Get Started
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>

          <ul className="hero-trust" aria-label="Key capabilities">
            <li>AI Development</li>
            <li>SaaS Products</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>

        <div
          className="hero-visual reveal"
          data-reveal-delay="1"
          aria-label="Scalwe platform overview"
        >
          <div className="glass-card card-main">
            <div className="glow-ring" aria-hidden="true"></div>
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot amber"></span>
              <span className="dot green"></span>
            </div>

            <div className="dashboard">
              <div className="scan-line" aria-hidden="true"></div>
              <div className="metric">
                <span className="label">Delivery Velocity</span>
                <strong>3.2x</strong>
              </div>
              <div className="bars" aria-hidden="true">
                <span style={{ "--bar-height": "35%" }}></span>
                <span style={{ "--bar-height": "52%" }}></span>
                <span style={{ "--bar-height": "68%" }}></span>
                <span style={{ "--bar-height": "88%" }}></span>
                <span style={{ "--bar-height": "100%" }}></span>
              </div>
              <div className="pill-row">
                <span>AI</span>
                <span>SaaS</span>
                <span>Cloud</span>
              </div>
            </div>
          </div>

          <div className="floating-badge badge-one">
            <strong>24/7</strong>
            <span>Ops & support</span>
          </div>
          <div className="floating-badge badge-two">
            <strong>99.9%</strong>
            <span>Platform uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
