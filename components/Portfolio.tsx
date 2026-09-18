import { siteConfig } from "@/lib/site-config";

export default function Portfolio() {
  return (
    <section id="work" className="section section-alt">
      <div className="container work-empty">
        <div className="section-heading reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>Case studies, coming soon.</h2>
        </div>

        <p className="work-empty-copy reveal" data-reveal-delay="1">
          We&apos;re preparing detailed case studies from our current engagements.
          In the meantime, here&apos;s what we build across{" "}
          {siteConfig.services.length} core disciplines — from AI systems to
          cloud infrastructure.
        </p>

        <a href="#services" className="btn btn-ghost link-underline reveal" data-reveal-delay="2">
          Explore Our Services <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
