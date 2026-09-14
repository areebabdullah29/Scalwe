import { siteConfig } from "@/lib/site-config";

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {siteConfig.stats.map((stat, i) => (
          <div key={stat.label} className="stat-item reveal" data-reveal-delay={i}>
            <strong
              className="count-up"
              data-count-to={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
