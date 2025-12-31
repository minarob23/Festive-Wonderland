import { motion } from "framer-motion";
import santaImage from "@assets/generated_images/cute_3d_santa_claus_character.png";

export function Santa() {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, type: "spring" }}
      data-testid="santa-container"
    >
      <motion.img
        src={santaImage}
        alt="Santa Claus"
        className="w-full h-full object-contain drop-shadow-2xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -top-4 -right-4 bg-white text-primary font-bold px-4 py-2 rounded-full shadow-lg font-display text-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        Ho Ho Ho!
      </motion.div>
    </motion.div>
  );
}
