import React from 'react';
import { Reveal } from './Reveal';

const brands = ['National Bank', 'Adobe', 'CocaCola', 'Subway', 'Codecademy'];

export const SocialProof = () => (
  <Reveal delay={0.5}>
    <section className="bg-white/50 backdrop-blur-sm border border-neutral-200 rounded-[40px] p-8 mb-40 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-30 grayscale hover:opacity-100 transition-all duration-700">
      {brands.map((brand) => (
        <span 
          key={brand} 
          className="text-lg font-bold tracking-tighter italic font-serif uppercase cursor-default"
        >
          {brand}
        </span>
      ))}
    </section>
  </Reveal>
);