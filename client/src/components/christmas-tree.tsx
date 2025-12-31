import { motion } from "framer-motion";
import treeImage from "@assets/generated_images/exquisite_3d_crystal_christmas_tree.png";

export function ChristmasTree() {
  return (
    <motion.div 
      className="relative w-72 h-96 md:w-96 md:h-[30rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      data-testid="christmas-tree"
    >
      <motion.img
        src={treeImage}
        alt="Exquisite Crystal Christmas Tree"
        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        animate={{
          scale: [1, 1.02, 1],
          filter: [
            "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
            "drop-shadow(0 0 40px rgba(255,215,0,0.4))",
            "drop-shadow(0 0 20px rgba(255,255,255,0.2))"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Magical Sparkles around the tree */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
