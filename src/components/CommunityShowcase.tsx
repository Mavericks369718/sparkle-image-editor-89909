import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const showcaseItems = [
  {
    id: 1,
    author: "Sarah Chen",
    title: "Cyberpunk Dreams",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
    likes: 2845,
  },
  {
    id: 2,
    author: "Miguel Torres",
    title: "Forest Guardian",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
    likes: 3102,
  },
  {
    id: 3,
    author: "Yuki Tanaka",
    title: "Neon Samurai",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600",
    likes: 4521,
  },
  {
    id: 4,
    author: "Emma Rodriguez",
    title: "Ethereal Portrait",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    likes: 2234,
  },
  {
    id: 5,
    author: "Alex Kim",
    title: "Cosmic Fusion",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    likes: 3876,
  },
];

const CommunityShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const visibleItems = [
    showcaseItems[(currentIndex - 1 + showcaseItems.length) % showcaseItems.length],
    showcaseItems[currentIndex],
    showcaseItems[(currentIndex + 1) % showcaseItems.length],
  ];

  return (
    <section id="community" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Showcase
          </h2>
          <p className="text-lg text-muted-foreground">
            Amazing creations from our talented community
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-500 cursor-pointer ${
                  index === 1
                    ? 'scale-100 opacity-100 z-10'
                    : 'scale-75 opacity-40'
                }`}
                onClick={() => {
                  if (index === 1) {
                    openLightbox(currentIndex);
                  } else if (index === 0) {
                    prevSlide();
                  } else {
                    nextSlide();
                  }
                }}
              >
                <div className="rounded-2xl overflow-hidden shadow-glow bg-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover"
                    style={{ width: index === 1 ? '400px' : '300px' }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="w-5 h-5" />
                      <span>{item.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-4 rounded-full shadow-card hover:scale-110 transition-spring"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-4 rounded-full shadow-card hover:scale-110 transition-spring"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0">
            <div className="relative">
              <img
                src={showcaseItems[lightboxIndex].image}
                alt={showcaseItems[lightboxIndex].title}
                className="w-full rounded-lg"
              />
              <button
                onClick={prevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 p-3 rounded-full hover:scale-110 transition-spring"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 p-3 rounded-full hover:scale-110 transition-spring"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {showcaseItems[lightboxIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  by {showcaseItems[lightboxIndex].author}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CommunityShowcase;
