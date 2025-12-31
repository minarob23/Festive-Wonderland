import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Create 50 snowflakes
    setSnowflakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {snowflakes.map((i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-80"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: -10,
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 10 : 1000,
            x: `calc(${Math.random() * 100 - 50}vw)`, // Drift
          }}
          transition={{
            duration: Math.random() * 5 + 5, // 5-10s duration
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
          }}
        />
      ))}
    </div>
  );
}
