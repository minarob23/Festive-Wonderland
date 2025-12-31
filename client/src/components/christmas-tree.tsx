import { motion } from "framer-motion";

export function ChristmasTree() {
  return (
    <div className="relative w-64 h-80 md:w-80 md:h-96" data-testid="christmas-tree">
      <motion.svg
        viewBox="0 0 100 120"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Modern Geometric Tree */}
        <defs>
          <linearGradient id="treeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#064e3b", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Main Body */}
        <motion.path
          d="M50,10 L90,100 L10,100 Z"
          fill="url(#treeGrad)"
          animate={{
            d: [
              "M50,10 L90,100 L10,100 Z",
              "M50,12 L88,98 L12,98 Z",
              "M50,10 L90,100 L10,100 Z"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Spiral Ribbon */}
        <motion.path
          d="M30,80 Q50,70 70,80"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M35,60 Q50,50 65,60"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.path
          d="M40,40 Q50,30 60,40"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />

        {/* Modern Topper */}
        <motion.circle
          cx="50"
          cy="10"
          r="6"
          fill="hsl(var(--accent))"
          animate={{
            scale: [1, 1.3, 1],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Random Ornaments */}
        {[
          { x: 40, y: 90 }, { x: 60, y: 90 },
          { x: 50, y: 75 }, { x: 30, y: 95 },
          { x: 70, y: 95 }, { x: 55, y: 45 }
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="2.5"
            fill={i % 2 === 0 ? "hsl(var(--primary))" : "#ffffff"}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
