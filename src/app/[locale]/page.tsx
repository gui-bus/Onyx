'use client';

import Header from "@/components/common/header";
import HeroSection from "@/components/sections/heroSection";
import StatsSection from "@/components/sections/statsSection";
import AboutSection from "@/components/sections/aboutSection";
import PhilosophySection from "@/components/sections/philosophySection";
import TeamSection from "@/components/sections/teamSection";
import HeritageSection from "@/components/sections/heritageSection";
import PracticeAreasSection from "@/components/sections/practiceAreasSection";
import InsightsSection from "@/components/sections/insightsSection";
import TestimonialsSection from "@/components/sections/testimonialsSection";
import FAQSection from "@/components/sections/faqSection";
import ContactSection from "@/components/sections/contactSection";
import Footer from "@/components/common/footer";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function LandingPage() {
  useScrollSpy(['about', 'practice', 'philosophy', 'team', 'heritage', 'insights', 'testimonials', 'contact']);

  return (
    <main id="main-content" className="noise-bg">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PhilosophySection />
      <HeritageSection />
      <PracticeAreasSection />
      <TeamSection />
      <InsightsSection />
      <TestimonialsSection />
      <FAQSection />
      <div className="bg-onyx-deep">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
