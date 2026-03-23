import { HeartHandshake } from 'lucide-react'
import { Reveal } from './Reveal';

export default function Cta()  {
  return (
  <section className="text-center">
    <Reveal>
      <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto flex items-center justify-center mb-8 shadow-inner">
        <HeartHandshake size={48} />
      </div>
      <h2 className="text-4xl md:text-6xl font-medium mb-12">
        Tell me about your<br/>next project
      </h2>
      <div className="flex justify-center gap-4 mb-40">
        <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
          Email Me
        </button>
        <a href="https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0" target='_blank'>
        <button className="bg-white border border-neutral-200 px-8 py-4 rounded-full font-medium hover:bg-neutral-50 transition-all">
          WhatsApp
        </button>
        </a>
      </div>
    </Reveal>
    
    <div className="pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between text-xs uppercase tracking-widest gap-4">
      <p>© 2026 Muhamad Naufal K. Fullstack Dev & SEO Specialist.</p>
      <div className="flex gap-6 justify-center">
        <a href="https://www.youtube.com/@nuxzID" target='_blank' className="hover:opacity-100 transition-opacity">LinkedIn</a>
        <a href="https://www.tiktok.com/@nuxztech_id" className="hover:opacity-100 transition-opacity">Tiktok</a>
        <a href="https://www.instagram.com/nuxztech/" className="hover:opacity-100 transition-opacity">Instagram</a>
      </div>
    </div>
  </section>
  )
}