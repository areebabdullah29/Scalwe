import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link href="/#top" className="brand" aria-label="Scalwe home">
          <span className="brand-mark">S</span>
          <span>Scalwe</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#services">Services</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#tech">Technology</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <a
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
              "Booking a call with Scalwe"
            )}`}
            className="btn btn-primary nav-cta"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
