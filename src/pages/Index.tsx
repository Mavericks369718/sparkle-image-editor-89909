import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageEditor from "@/components/ImageEditor";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImageEditor />
      <FeatureSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
