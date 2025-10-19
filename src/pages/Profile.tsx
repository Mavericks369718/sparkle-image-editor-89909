import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Session } from "@supabase/supabase-js";
import { Moon, Sun, Settings, LogOut, CreditCard, HelpCircle, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
        
        if (!session) {
          navigate("/login");
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
      
      if (!session) {
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Error signing out");
      } else {
        toast.success("Signed out successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">NanoPrompt</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Card */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 border border-border">
            <div className="flex items-center gap-6 mb-8">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="text-2xl">
                  {user?.email?.[0].toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {user?.user_metadata?.full_name || "NanoPrompt User"}
                </h2>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            {/* Credits Section */}
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-foreground">Credits</span>
                <span className="text-lg text-muted-foreground">8.6 left</span>
              </div>
              <Progress value={43} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground">
                Daily credits reset at midnight UTC
              </p>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-muted/50 transition-smooth"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-muted/50 transition-smooth"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Get free credits
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-muted/50 transition-smooth"
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                Help Center
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-muted/50 transition-smooth"
                onClick={toggleDarkMode}
              >
                <Palette className="mr-3 h-5 w-5" />
                Appearance
              </Button>
              
              <div className="pt-4 mt-4 border-t border-border">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left hover:bg-destructive/10 text-destructive transition-smooth"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
