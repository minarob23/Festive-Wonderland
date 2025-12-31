import { Snowfall } from "@/components/snowfall";
import { ChristmasTree } from "@/components/christmas-tree";
import { Santa } from "@/components/santa";
import heroBg from "@assets/generated_images/magical_snowy_winter_landscape_background.png";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Gift, Volume2, VolumeX, ArrowLeft, Stars } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewYear, setShowNewYear] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mouse trail / animation values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const toggleMusic = () => {
    if (!audioRef.current) {
      // Classic We Wish You A Merry Christmas / Jingle Bells style
      audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
    
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Music Paused" : "Merry Christmas!",
      description: isPlaying ? "Quiet time." : "Now playing festive tunes!",
    });
  };

  const openGift = () => {
    setShowNewYear(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground font-sans">
      {/* Interactive Mouse Aura */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-50 mix-blend-screen opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255,215,0,0.15), transparent 80%)`
        }}
      />

      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-105"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translate(${springX.get() * -0.01}px, ${springY.get() * -0.01}px)`
        }}
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
              <div className="text-center mb-12">
                <motion.h1 
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-accent drop-shadow-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  style={{
                    x: springX.get() * 0.005,
                    y: springY.get() * 0.005,
                  }}
                >
                  Merry Christmas
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mt-4 font-display text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Wishing you joy, love, and peace this holiday season
                </motion.p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full max-w-5xl">
                <ChristmasTree />
                <Santa />
              </div>

              <motion.div 
                className="mt-16 flex flex-wrap justify-center gap-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <button 
                  onClick={openGift}
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary to-red-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:-translate-y-1 transition-all active:scale-95"
                  data-testid="button-gift"
                >
                  <span className="relative z-10 flex items-center gap-3 text-xl">
                    <Stars className="w-7 h-7 text-yellow-300 animate-pulse" /> Reveal 2026
                  </span>
                </button>
                
                <button 
                  onClick={toggleMusic}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 backdrop-blur-md transition-all active:scale-95"
                  data-testid="button-music"
                >
                  {isPlaying ? <VolumeX className="w-6 h-6 text-red-400" /> : <Volume2 className="w-6 h-6 text-green-400 animate-bounce" />}
                  <span className="text-xl font-medium">
                    {isPlaying ? "Mute Carols" : "Play Holiday Hits"}
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
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-accent to-yellow-600 drop-shadow-2xl">
                  HAPPY NEW YEAR
                </h1>
                <h2 className="text-9xl md:text-[15rem] font-black text-white tracking-tighter mt-4 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                  2026
                </h2>
              </motion.div>
              
              <button 
                onClick={() => setShowNewYear(false)}
                className="mt-16 group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/30 hover:-translate-x-2 transition-all"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xl">Return to Christmas</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
