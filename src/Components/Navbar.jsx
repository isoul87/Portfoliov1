import { Reveal } from './Reveal';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-32 sticky top-0 z-50 py-6 bg-[#f8f8f8]/80 backdrop-blur-md">
      <Reveal y={10}>
        <div className="flex items-center gap-4 text-[11px] md:text-xs font-medium uppercase tracking-wider">
          <span className="opacity-50 lowercase transition-opacity hover:opacity-100 cursor-pointer">
            kawsarvy.design@gmail.com
          </span>
          <button className="px-3 py-1 bg-white border border-neutral-200 rounded-full hover:border-black transition-all active:scale-95">
            Copy
          </button>
          <button className="px-3 py-1 bg-white border border-neutral-200 rounded-full hover:border-black transition-all active:scale-95">
            CV
          </button>
        </div>
      </Reveal>
      
      <Reveal y={20} delay={0.1}>
        <div className="hidden md:block text-[10px] font-mono tracking-[0.2em]">
          VERSION_2026 // PORTFOLIO
        </div>
      </Reveal>
    </nav>
  ) 
}