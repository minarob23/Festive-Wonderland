import { motion } from "framer-motion";
import treeImg from "@assets/image_1767201950865.png";

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
        className="w-full h-full object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
        }}
      />
    </motion.div>
  );
}
