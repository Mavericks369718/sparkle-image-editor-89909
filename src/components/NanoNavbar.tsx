import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const NanoNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            NanoPrompt <span className="text-primary">Trends</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#trends" className="text-foreground/70 hover:text-foreground transition-smooth">
              Trends
            </a>
            <a href="#prompts" className="text-foreground/70 hover:text-foreground transition-smooth">
              Prompts
            </a>
            <a href="#community" className="text-foreground/70 hover:text-foreground transition-smooth">
              Community
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-smooth">
              About
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="default" className="rounded-full">
              Sign in with Google
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a
              href="#trends"
              className="block text-foreground/70 hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Trends
            </a>
            <a
              href="#prompts"
              className="block text-foreground/70 hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Prompts
            </a>
            <a
              href="#community"
              className="block text-foreground/70 hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="#about"
              className="block text-foreground/70 hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button variant="default" className="w-full rounded-full">
              Sign in with Google
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NanoNavbar;
