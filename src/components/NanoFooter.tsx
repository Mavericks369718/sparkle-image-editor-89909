const NanoFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              NanoPrompt <span className="text-primary">Trends</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Exploring the future of AI image generation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#submit"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Submit Prompt
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#api"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              API Access
            </a>
            <a
              href="#legal"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} NanoPrompt Trends. All rights reserved. Powered by Nano Banana AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NanoFooter;
