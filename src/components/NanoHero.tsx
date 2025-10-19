import { Button } from "@/components/ui/button";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Wand2, Image as ImageIcon } from "lucide-react";

const displayCardsData = [
  {
    icon: <Sparkles className="size-4 text-primary" />,
    title: "Ghibli Style",
    description: "Anime & artistic prompts",
    date: "Trending",
    titleClassName: "text-primary",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Wand2 className="size-4 text-primary" />,
    title: "Cyberpunk",
    description: "Futuristic AI art",
    date: "Popular",
    titleClassName: "text-primary",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ImageIcon className="size-4 text-primary" />,
    title: "Realistic",
    description: "Photo-quality edits",
    date: "New",
    titleClassName: "text-primary",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

const NanoHero = () => {

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Discover the
              <br />
              <span className="text-primary">Next-Generation</span>
              <br />
              Prompts
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Trending Nano Banana Prompts & Image Editing Ideas
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="rounded-full shadow-primary transition-spring hover:scale-105"
                onClick={() => document.getElementById('trends')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Trends
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full transition-spring hover:scale-105"
              >
                Try Prompt
              </Button>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div>
                <p className="text-2xl font-bold text-foreground">5,000+</p>
                <p>Trending Prompts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p>AI Creations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p>Updated</p>
              </div>
            </div>
          </div>

          {/* Display Cards */}
          <div className="relative flex items-center justify-center animate-fade-in scale-75" style={{ animationDelay: '0.3s' }}>
            <DisplayCards cards={displayCardsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanoHero;
