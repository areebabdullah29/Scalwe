import PlatformIllustration from "./illustrations/PlatformIllustration";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container split-grid">
        <div className="reveal">
          <span className="eyebrow">Why Scalwe</span>
          <h2>We turn complexity into momentum.</h2>
          <p>
            Scalwe helps businesses move from fragmented systems to
            integrated growth engines. Whether you need an AI capability, a
            product launch, or a stronger technical foundation, we design
            practical solutions that scale with your goals.
          </p>
          <ul className="check-list">
            <li>Product strategy aligned with business outcomes</li>
            <li>Full-stack execution across web, mobile, cloud, and AI</li>
            <li>Lean delivery with transparency and measurable ROI</li>
          </ul>
        </div>

        <div className="feature-panel reveal" data-reveal-delay="1">
          <div className="illustration-card illustration-card-lg">
            <PlatformIllustration />
          </div>
          <div className="feature-strip">
            <div className="feature-chip">
              <strong>Strategy</strong>
              <span>Roadmaps and decisions that reduce risk.</span>
            </div>
            <div className="feature-chip">
              <strong>Build</strong>
              <span>Engineering, integrations, and implementation.</span>
            </div>
            <div className="feature-chip">
              <strong>Scale</strong>
              <span>Cloud systems, monitoring, and improvement.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
