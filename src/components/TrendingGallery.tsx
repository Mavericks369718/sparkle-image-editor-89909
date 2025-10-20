import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Portrait", "Landscape", "Fantasy", "Futuristic", "Fusion"];

const galleryImages = [
  { id: 1, category: "Portrait", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500", prompt: "Ethereal portrait with soft lighting" },
  { id: 2, category: "Landscape", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", prompt: "Dreamlike mountain landscape" },
  { id: 3, category: "Fantasy", url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500", prompt: "Mystical forest with glowing elements" },
  { id: 4, category: "Futuristic", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500", prompt: "Cyberpunk cityscape at night" },
  { id: 5, category: "Fusion", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500", prompt: "Nature meets technology fusion" },
  { id: 6, category: "Portrait", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500", prompt: "Minimalist portrait with dramatic shadows" },
  { id: 7, category: "Landscape", url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500", prompt: "Serene coastal sunset" },
  { id: 8, category: "Fantasy", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500", prompt: "Starlit magical realm" },
];

const TrendingGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <section id="trends" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-muted/50 border border-border backdrop-blur-lg py-1 px-1 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the latest AI-generated masterpieces
          </p>
        </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.prompt}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm text-foreground font-medium">{image.prompt}</p>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Upload Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload to Generate Your Version</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Inspiration Prompt:</p>
                <p className="italic">{selectedImage?.prompt}</p>
              </div>

              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-foreground font-medium">
                    {uploadedFile ? uploadedFile.name : "Click to upload your image"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    PNG, JPG up to 10MB
                  </p>
                </label>
              </div>

              <Button className="w-full rounded-full" size="lg">
                Generate with Nano Banana
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TrendingGallery;
