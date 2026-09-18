import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#technology", label: "Technology" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="/#top" className="brand footer-brand">
            SCALWE
          </a>
          <p>
            AI development, software engineering, cloud, data, and automation
            for ambitious businesses.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="footer-nav">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <h4>Contact</h4>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Scalwe. All rights reserved.</span>
      </div>
    </footer>
  );
}
