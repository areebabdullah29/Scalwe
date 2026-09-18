import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CapabilitiesMarquee from "@/components/CapabilitiesMarquee";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import About from "@/components/About";
import Industries from "@/components/Industries";
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
        <CapabilitiesMarquee />
        <Positioning />
        <Services />
        <Portfolio />
        <TechStack />
        <Process />
        <About />
        <Industries />
        <Faq />
        <CtaBand />
        <ContactForm />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
