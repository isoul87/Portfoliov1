import {Globe,ChartColumnIncreasing, Component, FastForward } from 'lucide-react'
import { Reveal } from './Reveal';

const services = [
  { title: 'UI & UX Design', desc: 'User-centric interfaces using Figma & Prototyping.', icon: <Component /> },
  { title: 'Fullstack Web Dev', desc: 'React Vite, Node.js, & Scalable Architecture.', icon: <Globe />},
  { title: 'SEO & Marketing', desc: 'Technical SEO to dominate search rankings.', icon: <ChartColumnIncreasing /> },
  { title: 'Creative Motion', desc: 'Framer Motion for high-end feel interactions.', icon: <FastForward /> },
];

export default function Services(){
  return (
  <section className="mb-40">
    <Reveal>
      <h2 className="text-3xl md:text-5xl text-center mb-20 max-w-3xl mx-auto leading-tight font-medium">
        Collaborate with brands and agencies to create impactful results.
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.1}>
          <div className="group bg-white border border-neutral-200 p-10 rounded-[32px] h-full hover:border-black transition-colors duration-500">
            <div className="text-4xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
  )
}