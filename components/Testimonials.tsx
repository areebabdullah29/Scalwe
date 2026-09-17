import { siteConfig } from "@/lib/site-config";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">What partners say</span>
          <h2>Trusted by teams who need to move fast without breaking things.</h2>
        </div>

        <div className="testimonials-grid">
          {siteConfig.testimonials.map((t, i) => (
            <blockquote
              key={t.name + i}
              className="testimonial-card reveal"
              data-reveal-delay={i}
            >
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <cite>{t.name}</cite>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
