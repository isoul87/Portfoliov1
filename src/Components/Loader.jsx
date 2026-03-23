
import { motion } from 'motion/react';

export const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f8f8]"
      exit={{ y: "-100%" }} // Efek slide up pas selesai
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo atau Inisial Lo */}
        <motion.p 
          initial={{ opacity: 0,}}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-xl text-center font-bold tracking-widest uppercase font-mono"
        >
          Muhamad Naufal k.
          <p className='text-sm'>Student & Fullstack Web developer</p>
        </motion.p>
        
        {/* Progress Bar Sederhana */}
        <div className="w-48 h-[2px] bg-neutral-200 overflow-hidden relative">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-full bg-black"
          />
        </div>
      </div>
    </motion.div>
  );
};