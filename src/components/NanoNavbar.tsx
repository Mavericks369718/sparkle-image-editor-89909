import { useState } from "react";
import { Moon, Sun, Settings, User, LogOut, CreditCard, HelpCircle, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const NanoNavbar = () => {
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
            NanoPrompt
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                    <AvatarFallback>NP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex items-center gap-3 pb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                      <AvatarFallback>NP</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">NanoPrompt User</p>
                      <p className="text-xs text-muted-foreground">user@nanoprompt.com</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator />
                
                <div className="px-2 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Credits</span>
                    <span className="text-sm text-muted-foreground">8.6 left</span>
                  </div>
                  <Progress value={43} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">Daily credits reset at midnight UTC</p>
                </div>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Get free credits
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Palette className="mr-2 h-4 w-4" />
                  Appearance
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                    <AvatarFallback>NP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex items-center gap-3 pb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                      <AvatarFallback>NP</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">NanoPrompt User</p>
                      <p className="text-xs text-muted-foreground">user@nanoprompt.com</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator />
                
                <div className="px-2 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Credits</span>
                    <span className="text-sm text-muted-foreground">8.6 left</span>
                  </div>
                  <Progress value={43} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">Daily credits reset at midnight UTC</p>
                </div>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Get free credits
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Palette className="mr-2 h-4 w-4" />
                  Appearance
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NanoNavbar;
