import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from './Reveal';

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Bagian teks yang selalu muncul (intro)
  const introText = "A 12th-grade student at SMA Wahidiyah Kepanjen with a deep passion for digital architecture. I specialize in Fullstack Development, focusing on creating robust and scalable web applications. My journey is driven by a commitment to continuous learning and a mission to transform complex ideas into functional, high-performance digital solutions.";
  
  // Bagian teks yang disembunyikan
  const hiddenText = " I am mastering SEO strategies and crafting seamless UI/UX experiences. My goal? Bridging the gap between creative design and high-performance code to create digital products that actually work.";

  return (
    <section className="flex items-center justify-center bg-[#f8f8f8]">
      <div className="max-w-3xl text-center">
        
        <Reveal y={-10}>
          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-10 font-bold">
            About Me
          </h2>
        </Reveal>
        
        <Reveal y={20} delay={0.2}>
          <div className="text-2xl md:text-4xl font-medium leading-[1.4] text-neutral-800 transition-all duration-500">
            <span>{introText}</span>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="inline"
                >
                  {hiddenText}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Tombol Toggle */}
            <div className="mt-8">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-all active:scale-95"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Sub-info atau Lokasi (Opsional untuk SEO Lokal) */}
        <Reveal y={10} delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-2 text-neutral-400 text-sm font-mono">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for freelance from Kepanjen, Indonesia
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;