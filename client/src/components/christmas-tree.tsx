import { motion } from "framer-motion";

export function ChristmasTree() {
  return (
    <div className="relative w-64 h-80 md:w-80 md:h-96" data-testid="christmas-tree">
      <motion.svg
        viewBox="0 0 100 120"
        className="w-full h-full drop-shadow-2xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {/* Trunk */}
        <rect x="42" y="100" width="16" height="20" fill="#4a2c2a" rx="2" />

        {/* Tree Layers */}
        <motion.path
          d="M20,100 L50,60 L80,100 Z"
          fill="hsl(var(--secondary))"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <motion.path
          d="M25,75 L50,40 L75,75 Z"
          fill="hsl(var(--secondary))"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <motion.path
          d="M30,50 L50,20 L70,50 Z"
          fill="hsl(var(--secondary))"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Star */}
        <motion.path
          d="M50,10 L53,18 L62,18 L55,24 L57,32 L50,27 L43,32 L45,24 L38,18 L47,18 Z"
          fill="hsl(var(--accent))"
          animate={{
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lights */}
        <TreeLight cx="35" cy="90" color="red" delay={0} />
        <TreeLight cx="65" cy="90" color="gold" delay={0.5} />
        <TreeLight cx="50" cy="80" color="blue" delay={1} />
        <TreeLight cx="40" cy="65" color="gold" delay={0.2} />
        <TreeLight cx="60" cy="65" color="red" delay={0.7} />
        <TreeLight cx="50" cy="55" color="blue" delay={1.2} />
        <TreeLight cx="45" cy="40" color="red" delay={0.4} />
        <TreeLight cx="55" cy="40" color="gold" delay={0.9} />
      </motion.svg>
    </div>
  );
}

function TreeLight({ cx, cy, color, delay }: { cx: string; cy: string; color: string; delay: number }) {
  const colors = {
    red: "hsl(var(--primary))",
    gold: "hsl(var(--accent))",
    blue: "#3b82f6",
  };

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="3"
      fill={colors[color as keyof typeof colors]}
      animate={{
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}
