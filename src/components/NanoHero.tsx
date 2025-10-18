import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trendingImages = [
  { id: 1, style: "Ghibli", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
  { id: 2, style: "Cyberpunk", url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400" },
  { id: 3, style: "Photorealistic", url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400" },
  { id: 4, style: "Game UI", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400" },
  { id: 5, style: "Fantasy", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" },
];

const NanoHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % trendingImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + trendingImages.length) % trendingImages.length);

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

          {/* Image Carousel */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-glow aspect-square">
              {trendingImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.style}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                    <p className="text-lg font-semibold text-foreground">{image.style} Style</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-card hover:scale-110 transition-spring"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-card hover:scale-110 transition-spring"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {trendingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NanoHero;
