import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, ImageIcon } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Google Gemini 2.5 Flash</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Transform Your Images with</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Magic
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload any image, describe your vision, and watch our AI create stunning edits instantly. 
            From background removal to artistic transformations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Start Editing Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="glass" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
              <ImageIcon className="h-4 w-4 text-primary" />
              <span>High Resolution</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>20 Free Edits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-primary rounded-full opacity-15 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-primary rounded-full opacity-10 animate-pulse delay-500" />
    </section>
  );
};

export default HeroSection;