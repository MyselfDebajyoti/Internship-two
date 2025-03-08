import Image from "next/image";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HeroSection from "@/components/Description";

import Features from "@/components/Features";
import PricingPage from "@/components/Pricing";
import VerifierUser from "@/components/User";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <HeroSection />
      <Features />
      <PricingPage />
      <VerifierUser />
    </>
  );
}
