import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from './Reveal';

export default function Hero() {
  return (
  <section className="flex flex-col items-center text-center mb-40">
    <Reveal delay={0.2}>
      <div className="relative mb-10 group cursor-pointer">
        <img 
          src="/person.jpeg" 
          className="w-28 h-28 object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl" 
          alt="Kawsar Ahmed Profile"
        />
        <div className="absolute -right-12 top-0 bg-white px-4 py-1 rounded-full shadow-sm border border-neutral-100 text-xs font-bold">
          Nuxz | Naufal👋
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.3}>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl mb-12">
        Building digital products, brands, and <span className="text-neutral-400 italic">experience.</span>
      </h1>
    </Reveal>

    <Reveal delay={0.4}>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-sm font-medium flex items-center gap-3 shadow-2xl shadow-black/20"
      >
        Latest Shots <span className="text-lg">↗</span>
      </motion.button>
    </Reveal>
  </section>
  )
}