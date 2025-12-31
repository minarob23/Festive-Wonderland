import { motion } from "framer-motion";
import treeImg from "@assets/image_1767201810490.png";

export function ChristmasTree() {
  return (
    <motion.div 
      className="relative w-72 h-96 md:w-96 md:h-[32rem]"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-testid="christmas-tree"
    >
      <motion.img
        src={treeImg}
        alt="Beautiful Christmas Tree"
        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          filter: [
            "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
            "drop-shadow(0 0 25px rgba(255,215,0,0.4))",
            "drop-shadow(0 0 10px rgba(255,255,255,0.2))"
          ]
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </motion.div>
  );
}
