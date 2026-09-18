import { siteConfig } from "@/lib/site-config";

export default function Portfolio() {
  return (
    <section id="work" className="section section-alt">
      <div className="container work-empty">
        <div className="section-heading reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>Detailed case studies are in preparation.</h2>
        </div>

        <p className="work-empty-copy reveal" data-reveal-delay="1">
          We hold engagement details close while they&apos;re active. Full case
          studies are being documented as current projects reach completion —
          in the meantime, here&apos;s what we build across{" "}
          {siteConfig.services.length} core disciplines, from AI systems to
          cloud infrastructure.
        </p>

        <a href="#services" className="btn btn-ghost reveal" data-reveal-delay="2">
          Explore Our Services <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
