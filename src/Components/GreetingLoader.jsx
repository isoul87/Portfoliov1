import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const words = [
  "Hello everyone",            
  "I'm Naufal",       
  "Ready to Build?",  
  "Your Vision",      
  "Our Mission",      
  "Let's start the journey"      
];

export const GreetingLoader = ({ finishLoading }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      // Kata terakhir muncul lebih lama agar membekas
      const finalTimer = setTimeout(() => finishLoading(), 2000);
      return () => clearTimeout(finalTimer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1500); // Kita beri waktu sedikit lebih lama agar efek ketiknya selesai terbaca

    return () => clearTimeout(timer);
  }, [index, finishLoading]);

  // --- LOGIK ANIMASI KETIK ---
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Kecepatan "ketikan" per huruf (0.05 detik)
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline-block" 
    },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1a1a1a] text-white"
    >
      <div className="flex items-center gap-3">
        {/* Container Utama Teks */}
        <motion.p
          key={index} // Setiap ganti kata, animasi ketik diulang
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl font-medium tracking-tight"
        >
          {words[index].split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          
          {/* Kursor Berkedip (Opsional biar makin mirip terminal) */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-white ml-1 ml-2 align-middle"
          />
        </motion.p>
      </div>

      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 8, ease: "linear" }} // Garis loading mengikuti durasi total
        className="absolute bottom-0 left-0 h-2 bg-white"
      />
    </motion.div>
  );
};