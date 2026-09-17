import { siteConfig } from "@/lib/site-config";
import { serviceIcons } from "./ServiceIcons";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">What we do</span>
          <h2>Digital engineering solutions built for real business outcomes.</h2>
        </div>

        <div className="services-marquee">
          <div className="services-grid">
            {[...siteConfig.services, ...siteConfig.services, ...siteConfig.services].map(
              (service, i) => (
                <article key={`${service.slug}-${i}`} className="service-card">
                  <div className="icon">{serviceIcons[service.slug]}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
