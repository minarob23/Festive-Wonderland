import { motion } from "framer-motion";

export function ChristmasTree() {
  return (
    <motion.div 
      className="relative w-72 h-96 md:w-80 md:h-[28rem]"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-testid="christmas-tree"
    >
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Trunk */}
        <rect x="44" y="105" width="12" height="15" fill="#422006" rx="2" />

        {/* Tree Layers - Crafted with Paths */}
        <motion.path
          d="M50,15 L85,105 L15,105 Z"
          fill="url(#treeGradient)"
          stroke="#064e3b"
          strokeWidth="1"
        />
        <motion.path
          d="M50,15 L80,90 L20,90 Z"
          fill="url(#treeGradient)"
          stroke="#064e3b"
          strokeWidth="1"
          className="opacity-90"
        />
        <motion.path
          d="M50,15 L70,70 L30,70 Z"
          fill="url(#treeGradient)"
          stroke="#064e3b"
          strokeWidth="1"
          className="opacity-80"
        />

        {/* Decorations */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={20 + Math.random() * 60}
            cy={30 + Math.random() * 70}
            r="2"
            fill={i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#fbbf24" : "#f8fafc"}
            filter="url(#glow)"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() }}
          />
        ))}

        {/* Star */}
        <motion.path
          d="M50,5 L53,13 L62,13 L55,18 L57,26 L50,21 L43,26 L45,18 L38,13 L47,13 Z"
          fill="#fbbf24"
          filter="url(#glow)"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}
