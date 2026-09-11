import { siteConfig } from "@/lib/site-config";

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <strong>
              {stat.value}
              {stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
