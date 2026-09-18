import type { CSSProperties } from "react";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section className="hero">
      <ParticleField />
      <div className="hero-vignette" aria-hidden="true"></div>

      <div className="container hero-content">
        <span className="eyebrow hero-reveal" style={{ "--reveal-delay": 0 } as CSSProperties}>
          Digital Engineering Company
        </span>

        <h1 className="hero-headline">
          <span className="hero-line hero-reveal" style={{ "--reveal-delay": 1 } as CSSProperties}>
            Engineering
          </span>
          <span className="hero-line hero-reveal" style={{ "--reveal-delay": 2 } as CSSProperties}>
            what&apos;s <em>next</em>.
          </span>
        </h1>

        <p className="hero-sub hero-reveal" style={{ "--reveal-delay": 3 } as CSSProperties}>
          AI, software, and digital systems built for businesses ready to scale.
        </p>

        <div className="hero-actions hero-reveal" style={{ "--reveal-delay": 4 } as CSSProperties}>
          <a href="#contact" className="btn btn-primary">
            Start a Project <span aria-hidden="true">→</span>
          </a>
          <a href="#work" className="btn btn-ghost">
            Explore Our Work <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="hero-scroll-cue hero-reveal" style={{ "--reveal-delay": 5 } as CSSProperties} aria-hidden="true">
        <span className="hero-scroll-line"></span>
        <span>Scroll</span>
      </div>
    </section>
  );
}
