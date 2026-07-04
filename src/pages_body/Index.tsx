
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
