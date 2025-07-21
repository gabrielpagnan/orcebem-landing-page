import FarmacinalisHeader from "@/components/FarmacinalisHeader";
import FarmacinalisHero from "@/components/FarmacinalisHero";
import FarmacinalisAbout from "@/components/FarmacinalisAbout";
import FarmacinalisFormulas from "@/components/FarmacinalisFormulas";
import FarmacinalisContact from "@/components/FarmacinalisContact";
import FarmacinalisFooter from "@/components/FarmacinalisFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmacinalisHeader />
      <FarmacinalisHero />
      <FarmacinalisAbout />
      <FarmacinalisFormulas />
      <FarmacinalisContact />
      <FarmacinalisFooter />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
