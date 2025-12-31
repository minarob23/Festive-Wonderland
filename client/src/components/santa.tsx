import { motion } from "framer-motion";

export function Santa() {
  return (
    <motion.div 
      className="relative w-64 h-64 md:w-72 md:h-72"
      whileHover={{ scale: 1.1, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      data-testid="santa-container"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
        {/* Santa's Body */}
        <circle cx="50" cy="70" r="25" fill="#ef4444" />
        <rect x="35" y="70" width="30" height="5" fill="#1f2937" rx="1" /> {/* Belt */}
        
        {/* Santa's Head */}
        <circle cx="50" cy="45" r="18" fill="#fee2e2" />
        <path d="M35,45 Q50,65 65,45" fill="white" /> {/* Beard */}
        
        {/* Face Details */}
        <circle cx="43" cy="42" r="1.5" fill="#1f2937" />
        <circle cx="57" cy="42" r="1.5" fill="#1f2937" />
        <circle cx="50" cy="46" r="2.5" fill="#fca5a5" />
        
        {/* Santa's Hat */}
        <path d="M35,35 L50,15 L65,35 Z" fill="#ef4444" />
        <circle cx="50" cy="15" r="4" fill="white" />
        <rect x="32" y="32" width="36" height="6" fill="white" rx="3" />
        
        {/* Arms */}
        <motion.path 
          d="M25,70 Q15,60 10,70" 
          stroke="#ef4444" 
          strokeWidth="6" 
          strokeLinecap="round"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path 
          d="M75,70 Q85,60 90,70" 
          stroke="#ef4444" 
          strokeWidth="6" 
          strokeLinecap="round"
          animate={{ rotate: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
      
      <motion.div 
        className="absolute -top-6 -right-2 bg-white text-primary font-bold px-3 py-1 rounded-full text-sm shadow-xl border-2 border-primary"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        HO HO HO!
      </motion.div>
    </motion.div>
  );
}
