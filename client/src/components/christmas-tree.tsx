import { motion } from "framer-motion";
import treeVideo from "@assets/187728-881326499_small_1767202185059.mp4";

export function ChristmasTree() {
  return (
    <motion.div 
      className="relative w-72 h-96 md:w-96 md:h-[32rem] overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-testid="christmas-tree"
    >
      <motion.video
        src={treeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
    </motion.div>
  );
}
