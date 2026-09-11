import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import LogosStrip from "@/components/LogosStrip";
import StatsBand from "@/components/StatsBand";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <TechStack />
        <About />
        <LogosStrip />
        <StatsBand />
        <Testimonials />
        <Faq />
        <CtaBand />
        <ContactForm />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
