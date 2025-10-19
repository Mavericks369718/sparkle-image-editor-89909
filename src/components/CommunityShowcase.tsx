import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "NanoPrompt transformed my creative workflow. The AI prompts are perfectly crafted and save me hours of experimentation!",
    name: "Sarah Mitchell",
    designation: "AI Artist & Designer",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Best collection of AI prompts I've found. The trending section keeps me inspired and the results are always impressive.",
    name: "Marcus Chen",
    designation: "Creative Director",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Game changer for content creation! The prompt library is extensive and the community showcases incredible possibilities.",
    name: "Elena Rodriguez",
    designation: "Digital Content Creator",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
];

const CommunityShowcase = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Loved by Creators
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Join thousands of artists who use NanoPrompt daily
          </p>
        </div>

        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            fontSizes={{
              name: "20px",
              designation: "14px",
              quote: "16px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
