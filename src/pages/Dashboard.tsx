import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Loader2, LogOut } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
      setIsLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NanoPrompt
          </h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h2>
          <p className="text-muted-foreground mb-6">
            You're logged in as: <span className="font-semibold text-foreground">{user?.email}</span>
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-semibold mb-2">AI Image Generation</h3>
              <p className="text-sm text-muted-foreground">Create stunning images with AI</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-semibold mb-2">Image Editor</h3>
              <p className="text-sm text-muted-foreground">Edit and enhance your images</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-semibold mb-2">Gallery</h3>
              <p className="text-sm text-muted-foreground">Browse your creations</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
