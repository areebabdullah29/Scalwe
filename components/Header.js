import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a href="#top" className="brand" aria-label="Scalwe home">
          <span className="brand-mark">S</span>
          <span>Scalwe</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#tech">Technology</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
            "Booking a call with Scalwe"
          )}`}
          className="btn btn-primary nav-cta"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
