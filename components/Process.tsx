import Image from "next/image";
import ProcessConnector from "./illustrations/ProcessConnector";

const steps = [
  {
    number: "01",
    title: "Discover",
    variant: "discover",
    description:
      "We align on business goals, technical constraints, users, and priorities.",
  },
  {
    number: "02",
    title: "Design",
    variant: "design",
    description:
      "We define architecture, experiences, and a roadmap that balances speed and durability.",
  },
  {
    number: "03",
    title: "Build",
    variant: "build",
    description:
      "We develop, integrate, and validate solutions using proven engineering practices.",
  },
  {
    number: "04",
    title: "Scale",
    variant: "scale",
    description:
      "We optimize infrastructure, performance, automation, and long-term operations.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">How we work</span>
          <h2>A structured process for faster, smarter delivery.</h2>
        </div>

        <div className="process-grid-wrap">
          <ProcessConnector />
          <div className="process-grid">
            {steps.map((step, i) => (
              <div key={step.number} className="process-step reveal" data-reveal-delay={i}>
                <div className="process-media">
                  <Image
                    src={`/process/${step.variant}.jpg`}
                    alt=""
                    fill
                    sizes="(max-width: 980px) 50vw, 25vw"
                    className="process-media-img"
                  />
                </div>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
