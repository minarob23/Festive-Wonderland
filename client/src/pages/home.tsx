import { Snowfall } from "@/components/snowfall";
import { ChristmasTree } from "@/components/christmas-tree";
import { Santa } from "@/components/santa";
import heroBg from "@assets/generated_images/magical_snowy_winter_landscape_background.png";
import customMusic from "@assets/ES_Snowball_Festival_-_Trevor_Kowalski_1767201642894.mp3";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, ArrowLeft, Stars } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNewYear, setShowNewYear] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

    // Auto-play music on first interaction
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
        window.removeEventListener("click", startAudio);
      }
    };
    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", startAudio);
    };
  }, [mouseX, mouseY, isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground font-sans">
      <audio ref={audioRef} src={customMusic} loop />

      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 mix-blend-screen opacity-20"
        style={{
          background: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(255,255,255,0.4), transparent 80%)`
        }}
      />

      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translate(${springX.get() * -0.02}px, ${springY.get() * -0.02}px)`
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/60 to-background/90" />

      <Snowfall />

      <main className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!showNewYear ? (
            <motion.div
              key="christmas"
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="text-center mb-16 relative z-20">
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-accent drop-shadow-2xl cursor-default pb-12"
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)", rotate: [0, 1, -1, 0] }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  Merry Christmas
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mt-4 font-display text-muted-foreground italic"
                  whileHover={{ color: "hsl(var(--accent))", scale: 1.05, y: -5 }}
                >
                  Wishing you joy, love, and peace this holiday season
                </motion.p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-5xl">
                <ChristmasTree />
                <Santa />
              </div>

              <motion.div className="mt-16 flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => setShowNewYear(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary to-red-600 text-white font-bold rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
                >
                  <span className="flex items-center gap-3 text-xl">
                    <Stars className="w-7 h-7 group-hover:rotate-45 transition-transform duration-500" /> Reveal 2026
                  </span>
                </button>

                <button
                  onClick={toggleMusic}
                  className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
                >
                  {isPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-pulse" />}
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="newyear"
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-accent to-yellow-600">
                HAPPY NEW YEAR
              </h1>
              <h2 className="text-9xl md:text-[15rem] font-black text-white mt-4 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                2026
              </h2>
              <button
                onClick={() => setShowNewYear(false)}
                className="mt-16 flex items-center gap-3 px-8 py-4 bg-green-700 hover:bg-green-600 text-white rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(21,128,61,0.5)]"
              >
                <ArrowLeft className="w-6 h-6" /> Back to Christmas
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
