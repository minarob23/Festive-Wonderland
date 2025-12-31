import { Snowfall } from "@/components/snowfall";
import { ChristmasTree } from "@/components/christmas-tree";
import { Santa } from "@/components/santa";
import heroBg from "@assets/generated_images/magical_snowy_winter_landscape_background.png";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Sparkles, Volume2, VolumeX, PartyPopper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewYear, setShowNewYear] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      // Christmas music URL (creative commons/public domain style)
      audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
    
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Music Paused" : "Music Playing",
      description: isPlaying ? "The halls are quiet." : "Festive vibes activated!",
    });
  };

  const openGift = () => {
    setShowNewYear(true);
    toast({
      title: "Surprise!",
      description: "Fast forward to the future! 🚀",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground font-sans">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/60 to-background/90" />

      <Snowfall />

      <main className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          {!showNewYear ? (
            <motion.div 
              key="christmas-view"
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Text Section */}
              <div className="text-center mb-12 overflow-hidden">
                <motion.h1 
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-accent drop-shadow-xl"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 
                  }}
                >
                  Merry Christmas
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mt-4 font-display text-muted-foreground italic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Wishing you joy, love, and peace this holiday season
                </motion.p>
              </div>

              {/* Centerpiece Content */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full max-w-5xl">
                <ChristmasTree />
                <Santa />
              </div>

              {/* Buttons */}
              <motion.div 
                className="mt-16 flex flex-wrap justify-center gap-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <button 
                  onClick={openGift}
                  className="group relative px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-[0_8px_0_0_#991b1b] active:shadow-none active:translate-y-2 transition-all overflow-hidden"
                  data-testid="button-gift"
                >
                  <span className="relative z-10 flex items-center gap-2 text-xl">
                    <Sparkles className="w-6 h-6 animate-pulse" /> Open Magic Gift
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={toggleMusic}
                  className="group relative px-8 py-4 bg-accent text-accent-foreground font-bold rounded-2xl shadow-[0_8px_0_0_#b45309] active:shadow-none active:translate-y-2 transition-all"
                  data-testid="button-music"
                >
                  <span className="relative z-10 flex items-center gap-2 text-xl">
                    {isPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-bounce" />}
                    {isPlaying ? "Silence Please" : "Start the Party"}
                  </span>
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="new-year-view"
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-accent to-yellow-600 drop-shadow-2xl">
                  HAPPY NEW YEAR
                </h1>
                <h2 className="text-9xl md:text-[15rem] font-black text-white tracking-tighter leading-none mt-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  2026
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-2xl mt-8 text-accent font-display"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                A New Chapter Begins...
              </motion.p>

              <Button 
                variant="ghost" 
                className="mt-12 text-muted-foreground hover:text-white"
                onClick={() => setShowNewYear(false)}
              >
                Back to Christmas
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
