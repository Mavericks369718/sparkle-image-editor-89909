import NanoNavbar from "@/components/NanoNavbar";
import NanoHero from "@/components/NanoHero";
import TrendingGallery from "@/components/TrendingGallery";
import PromptExplorer from "@/components/PromptExplorer";
import AIEditorSection from "@/components/AIEditorSection";
import CommunityShowcase from "@/components/CommunityShowcase";
import NanoFooter from "@/components/NanoFooter";

const NanoIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <NanoNavbar />
      <NanoHero />
      <TrendingGallery />
      <PromptExplorer />
      <AIEditorSection />
      <CommunityShowcase />
      <NanoFooter />
    </div>
  );
};

export default NanoIndex;
