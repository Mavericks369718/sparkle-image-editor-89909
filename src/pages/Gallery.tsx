import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NanoNavbar from "@/components/NanoNavbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const categories = ["All", "Trending", "Male", "Female"];

const galleryImages = [
  { id: 1, category: "Male", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500", prompt: "Professional male portrait with natural lighting" },
  { id: 2, category: "Female", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500", prompt: "Ethereal portrait with soft lighting" },
  { id: 3, category: "Trending", url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500", prompt: "Mystical forest with glowing elements" },
  { id: 4, category: "Trending", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500", prompt: "Cyberpunk cityscape at night" },
  { id: 5, category: "Male", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500", prompt: "Modern male portrait with urban backdrop" },
  { id: 6, category: "Female", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500", prompt: "Minimalist portrait with dramatic shadows" },
  { id: 7, category: "Trending", url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500", prompt: "Serene coastal sunset with vibrant colors" },
  { id: 8, category: "Female", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", prompt: "Elegant female portrait" },
  { id: 9, category: "Male", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", prompt: "Contemporary male headshot" },
  { id: 10, category: "Trending", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500", prompt: "Mountain landscape at golden hour" },
  { id: 11, category: "Female", url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500", prompt: "Fashion portrait with bold colors" },
  { id: 12, category: "Male", url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500", prompt: "Studio portrait with professional setup" },
  { id: 13, category: "Trending", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", prompt: "Majestic mountain peaks at dawn" },
  { id: 14, category: "Female", url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500", prompt: "Creative portrait with unique styling" },
  { id: 15, category: "Trending", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500", prompt: "Starlit magical realm with cosmic elements" },
  { id: 16, category: "Male", url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500", prompt: "Artistic male portrait with dramatic lighting" },
];

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams({ category });
  };

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NanoNavbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header with Toggle Buttons */}
          <div className="pb-6 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Explore Gallery
            </h1>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-muted/50 border border-border backdrop-blur-lg py-1 px-1 rounded-full">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {category}
                    {selectedCategory === category && (
                      <motion.div
                        layoutId="galleryActiveTab"
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
          </div>

          {/* Pinterest-style Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid mb-4"
              >
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-primary transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.prompt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm text-foreground font-medium">{image.prompt}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Generate Your Version</DialogTitle>
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
  );
};

export default Gallery;
