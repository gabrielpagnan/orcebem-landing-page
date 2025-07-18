import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import MockupsSection from "@/components/MockupsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <MockupsSection />
      <TestimonialsSection />
      <PricingSection />
      <LeadCaptureSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
