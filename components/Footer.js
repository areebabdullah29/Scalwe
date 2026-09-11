import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>Scalwe</span>
          </a>
          <p>
            AI development, SaaS engineering, mobile products, cloud systems,
            and automation for modern businesses.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>AI Development</li>
            <li>SaaS Development</li>
            <li>Mobile Development</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: {siteConfig.email}</li>
            <li>Phone: {siteConfig.phone}</li>
            <li>Available worldwide</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Scalwe. All rights reserved.</span>
      </div>
    </footer>
  );
}
