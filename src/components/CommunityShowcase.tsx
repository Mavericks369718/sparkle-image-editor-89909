import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "This platform revolutionized how I create AI-generated images. The prompts are incredibly creative and the results are stunning every single time!",
    name: "Sarah Mitchell",
    designation: "Digital Artist",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "I've never seen such a diverse collection of AI prompts. The community is amazing and the quality of outputs is consistently impressive!",
    name: "Marcus Chen",
    designation: "Creative Director",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "NanoPrompt has become my go-to resource for AI image generation. The trending prompts inspire me daily and help me push creative boundaries.",
    name: "Elena Rodriguez",
    designation: "Content Creator",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop",
  },
];

const CommunityShowcase = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Loved by Creators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of artists and creators who trust NanoPrompt for their AI image generation needs
          </p>
        </div>

        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "18px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
