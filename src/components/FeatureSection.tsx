import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wand2, 
  Zap, 
  Shield, 
  Download, 
  Layers, 
  Sparkles,
  ImageIcon,
  Palette,
  Share2
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Editing",
    description: "Transform images with simple text prompts using Google Gemini 2.5 Flash technology."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get professional-quality edits in seconds, not hours of manual work."
  },
  {
    icon: Layers,
    title: "Background Removal",
    description: "Automatically remove or replace backgrounds with pixel-perfect precision."
  },
  {
    icon: Palette,
    title: "Style Transfer",
    description: "Apply artistic styles, change lighting, atmosphere, and visual aesthetics."
  },
  {
    icon: ImageIcon,
    title: "High Resolution",
    description: "Maintain image quality with support for high-resolution outputs."
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your creations directly to social media or download in multiple formats."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your images are processed securely and never stored permanently."
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Export in PNG, JPEG, WEBP, or MP4 for animated edits."
  },
  {
    icon: Sparkles,
    title: "Face Preservation",
    description: "Advanced face detection ensures natural-looking portrait edits."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Creative Freedom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your images with the power of artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-card transition-smooth border-border/50 hover:border-primary/20 group"
              >
                <CardHeader>
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit group-hover:shadow-glow transition-smooth">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;