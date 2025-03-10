import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HeroSection from "@/components/Description";

import Features from "@/components/Features";
import PricingPage from "@/components/Pricing";
import VerifierUser from "@/components/User";
import FaqAccordion from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <HeroSection />
      <Features />
      <PricingPage />
      <VerifierUser />
      <FaqAccordion />
      <Footer />
    </>
  );
}
