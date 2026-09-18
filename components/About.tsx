import PlatformIllustration from "./illustrations/PlatformIllustration";

const principles = [
  {
    title: "Business-first engineering",
    description: "Every technical decision is judged against the outcome it needs to produce.",
  },
  {
    title: "Senior technical expertise",
    description: "You work directly with the engineers building your system, not a rotating bench.",
  },
  {
    title: "AI-native thinking",
    description: "We design for where software is heading, not just where it is today.",
  },
  {
    title: "Built to scale",
    description: "Architecture decisions account for the next stage of growth, not just the launch.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container split-grid">
        <div className="reveal">
          <span className="eyebrow">Why Scalwe</span>
          <h2>
            Small enough to move fast.
            <br />
            Technical enough to build what others can&apos;t.
          </h2>
          <p>
            Scalwe is a digital engineering company. We help ambitious businesses
            design, build, and scale the AI systems, software, and infrastructure
            behind their next stage of growth.
          </p>

          <ul className="principles-list">
            {principles.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="feature-panel reveal" data-reveal-delay="1">
          <div className="illustration-card illustration-card-lg">
            <PlatformIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
