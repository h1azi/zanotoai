import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AutomationsSection from "@/components/AutomationsSection";
import FoundingSection from "@/components/FoundingSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import MeetingSection from "@/components/MeetingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AutomationsSection />
        <FoundingSection />
        <AboutSection />
        <PricingSection />
        <MeetingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
