const items = ["AI", "SaaS", "Mobile", "Cloud", "Data", "Automation"];

export default function LogosStrip() {
  return (
    <section className="logos-strip">
      <span className="sr-only">Capabilities: {items.join(", ")}</span>
      <div className="logos-marquee" aria-hidden="true">
        <div className="logos-track">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
