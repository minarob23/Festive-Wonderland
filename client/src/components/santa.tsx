import { motion } from "framer-motion";
import santaImg from "@assets/image_1767201768621.png";

export function Santa() {
  return (
    <motion.div 
      className="relative w-64 h-64 md:w-80 md:h-80"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-testid="santa-container"
    >
      <motion.img
        src={santaImg}
        alt="Waving Santa"
        className="w-full h-full object-contain drop-shadow-2xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{
          x: { duration: 0.8, type: "spring" },
          opacity: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute -top-4 -right-2 bg-white text-primary font-bold px-4 py-2 rounded-full shadow-xl border-2 border-primary font-display text-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        HO HO HO!
      </motion.div>
    </motion.div>
  );
}
