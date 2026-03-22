
import { Reveal } from './Reveal';

export default function Cta()  {
  return (
  <section className="text-center pb-20">
    <Reveal>
      <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto flex items-center justify-center mb-8 text-3xl shadow-inner">
        🤝
      </div>
      <h2 className="text-4xl md:text-6xl font-medium mb-12">
        Tell me about your<br/>next project
      </h2>
      <div className="flex justify-center gap-4 mb-40">
        <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
          Email Me
        </button>
        <button className="bg-white border border-neutral-200 px-8 py-4 rounded-full font-medium hover:bg-neutral-50 transition-all">
          WhatsApp
        </button>
      </div>
    </Reveal>
    
    <div className="pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between text-[10px] opacity-40 uppercase tracking-widest gap-4">
      <p>© 2026 Kawsar Ahmed. Fullstack Dev & SEO Specialist.</p>
      <div className="flex gap-6 justify-center">
        <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Dribbble</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
      </div>
    </div>
  </section>
  )
}