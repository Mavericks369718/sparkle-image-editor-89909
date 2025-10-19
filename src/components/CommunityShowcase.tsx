import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Sarah Mitchell",
      handle: "@sarahcreates",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "NanoPrompt completely transformed my AI art workflow. The prompt library is incredible and saves me hours every day!"
  },
  {
    author: {
      name: "Marcus Chen",
      handle: "@marcusai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Best AI prompt platform I've used. The trending section keeps me inspired and the quality is consistently amazing."
  },
  {
    author: {
      name: "Elena Rodriguez",
      handle: "@elenadesigns",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Game changer for content creation! The prompts are perfectly crafted and the results speak for themselves."
  },
  {
    author: {
      name: "David Park",
      handle: "@davidvisuals",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The community showcase is inspiring and the prompt explorer makes it so easy to find exactly what I need."
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyaart",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "NanoPrompt helped me discover new creative possibilities. The AI-generated results are consistently stunning!"
  }
];

const CommunityShowcase = () => {
  return (
    <TestimonialsSection
      title="Loved by Creators Worldwide"
      description="Join thousands of artists and designers who create amazing AI art with NanoPrompt"
      testimonials={testimonials}
    />
  );
};

export default CommunityShowcase;
