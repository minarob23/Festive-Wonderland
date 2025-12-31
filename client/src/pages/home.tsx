import { Snowfall } from "@/components/snowfall";
import { ChristmasTree } from "@/components/christmas-tree";
import { Santa } from "@/components/santa";
import heroBg from "@assets/generated_images/magical_snowy_winter_landscape_background.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Gift, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Music Paused" : "Playing Christmas Tunes",
      description: isPlaying ? "Silence is golden." : "Imagine Jingle Bells playing!",
      duration: 2000,
    });
  };

  const openGift = () => {
    toast({
      title: "Merry Christmas!",
      description: "You found a virtual hug! 🎄",
      className: "bg-primary text-primary-foreground border-none",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/60 to-background/90" />

      <Snowfall />

      <main className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-accent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            animate={{ 
              textShadow: ["0 0 10px rgba(255,0,0,0.5)", "0 0 20px rgba(255,215,0,0.5)", "0 0 10px rgba(255,0,0,0.5)"] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Merry Christmas
          </motion.h1>
          <p className="text-xl md:text-2xl mt-4 font-display text-muted-foreground">
            Wishing you joy, love, and peace this holiday season.
          </p>
        </motion.div>

        {/* Centerpiece Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full max-w-5xl">
          <div className="order-2 md:order-1">
            <ChristmasTree />
          </div>
          
          <div className="order-1 md:order-2">
            <Santa />
          </div>
        </div>

        {/* Interactive Footer */}
        <motion.div 
          className="mt-16 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Button 
            size="lg" 
            className="rounded-full bg-primary hover:bg-primary/90 text-xl px-8 py-6 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            onClick={openGift}
            data-testid="button-gift"
          >
            <Gift className="mr-2 w-6 h-6" /> Open Gift
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-accent text-accent hover:bg-accent/10 text-xl px-8 py-6 backdrop-blur-sm"
            onClick={toggleMusic}
            data-testid="button-music"
          >
            <Music className={`mr-2 w-6 h-6 ${isPlaying ? "animate-spin" : ""}`} /> 
            {isPlaying ? "Pause Music" : "Play Music"}
          </Button>
        </motion.div>

      </main>
    </div>
  );
}
