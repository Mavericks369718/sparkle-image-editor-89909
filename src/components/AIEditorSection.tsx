import { Wand2, Image, Sparkles, Maximize, Layers, PenTool } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Text-to-Image",
    description: "Generate stunning visuals from text descriptions",
  },
  {
    icon: PenTool,
    title: "Image Edit",
    description: "Refine and modify existing images with AI",
  },
  {
    icon: Image,
    title: "Background Replace",
    description: "Swap backgrounds seamlessly with AI precision",
  },
  {
    icon: Sparkles,
    title: "Style Transfer",
    description: "Apply artistic styles to your images instantly",
  },
  {
    icon: Maximize,
    title: "AI Upscaling",
    description: "Enhance resolution without quality loss",
  },
  {
    icon: Layers,
    title: "Image Fusion",
    description: "Blend multiple images into cohesive compositions",
  },
];

const AIEditorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Editor Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools powered by Nano Banana to transform your creative vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Preview Demo */}
        <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-8 shadow-glow">
          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Live Demo Mode
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Try the Editor Interface
            </h3>
            <p className="text-muted-foreground mb-8">
              Experience the power of Nano Banana with an interactive preview of our AI editing tools
            </p>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center space-y-3">
                <Wand2 className="w-16 h-16 text-primary mx-auto" />
                <p className="text-foreground font-medium">Interactive Demo Coming Soon</p>
                <p className="text-sm text-muted-foreground">Sign up to get early access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEditorSection;
