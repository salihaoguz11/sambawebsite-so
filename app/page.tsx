import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { CtaSection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { PortfolioSection } from "@/sections/portfolio-section";
import { ServicesSection } from "@/sections/services-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
