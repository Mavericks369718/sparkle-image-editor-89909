import { useState } from "react";
import { Search, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const promptCategories = [
  { name: "All Prompts", count: 5000 },
  { name: "Image Fusion", count: 842 },
  { name: "Ghibli Style", count: 1205 },
  { name: "Realistic Portraits", count: 678 },
  { name: "Game UI", count: 423 },
  { name: "Cyberpunk Art", count: 891 },
  { name: "Character Consistency", count: 561 },
];

const prompts = [
  {
    id: 1,
    title: "Ethereal Ghibli Forest",
    category: "Ghibli Style",
    prompt: "A serene forest path in Studio Ghibli style, with dappled sunlight filtering through ancient trees, soft moss covering the ground, and tiny magical spirits floating in the air. Vibrant greens, warm lighting, painterly texture.",
    uses: 2453,
  },
  {
    id: 2,
    title: "Cyberpunk Neon Portrait",
    category: "Cyberpunk Art",
    prompt: "Close-up portrait of a cyberpunk character with neon face paint, holographic overlay effects, rain-soaked hair, and vibrant pink and blue lighting. Sharp focus on eyes, blurred neon cityscape background.",
    uses: 1872,
  },
  {
    id: 3,
    title: "Photorealistic Nature Fusion",
    category: "Image Fusion",
    prompt: "Seamless blend of desert dunes and ocean waves, where sand transitions into water in a dreamlike manner. Golden hour lighting, hyper-realistic textures, cinematic composition.",
    uses: 3104,
  },
  {
    id: 4,
    title: "Fantasy Game UI Panel",
    category: "Game UI",
    prompt: "Medieval fantasy RPG inventory interface with ornate golden borders, worn leather texture, glowing magical runes, and translucent crystal elements. Dark wood background, soft inner glow.",
    uses: 1345,
  },
  {
    id: 5,
    title: "Character Multi-Pose Consistency",
    category: "Character Consistency",
    prompt: "Same character in 4 different poses: standing, sitting, walking, reaching. Maintain identical facial features, clothing details, and color palette. Clean white background, consistent lighting.",
    uses: 2891,
  },
  {
    id: 6,
    title: "Realistic Portrait Lighting",
    category: "Realistic Portraits",
    prompt: "Professional headshot with Rembrandt lighting, soft shadows on one side of face, warm skin tones, shallow depth of field, neutral gray background. Sharp focus on eyes, natural expression.",
    uses: 1623,
  },
];

const PromptExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Prompts");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { toast } = useToast();

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesCategory = selectedCategory === "All Prompts" || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyPrompt = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: "Prompt copied!",
      description: "Ready to use in your AI editor",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="prompts" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Prompt Explorer
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover, search, and copy trending AI prompts
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-full text-lg shadow-card"
            />
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {promptCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-spring hover:scale-105 ${
                selectedCategory === category.name
                  ? 'bg-primary text-primary-foreground shadow-primary'
                  : 'bg-card text-card-foreground border border-border hover:border-primary'
              }`}
            >
              {category.name} <span className="text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredPrompts.map((prompt, index) => (
            <div
              key={prompt.id}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {prompt.title}
                  </h3>
                  <p className="text-sm text-primary">{prompt.category}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {prompt.uses.toLocaleString()} uses
                </span>
              </div>

              <p className="text-foreground/80 text-sm mb-4 line-clamp-3">
                {prompt.prompt}
              </p>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full flex-1"
                  onClick={() => copyPrompt(prompt.id, prompt.prompt)}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Prompt
                    </>
                  )}
                </Button>
                <Button size="sm" className="rounded-full">
                  Try Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptExplorer;
