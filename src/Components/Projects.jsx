import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from './Reveal';

// Data Dummy (Nanti bisa lo pindahin ke file constants.js)
const projectData = [
  { id: 1, category: 'coding', title: 'E-Pondok App', tech: 'Laravel, Laravel Breeze', image: '/e-pondok.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 2, category: 'coding', title: 'Portfolio Web', tech: 'Html, Tailwind Css, Javascript', image: '/porto.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 3, category: 'coding', title: 'Class Website', tech: 'HTML, CSS, Javascript', image: '/web-kelas.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 4, category: 'coding', title: 'Calculator App', tech: 'React, Node.js', image: '/calculator.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 5, category: 'design', title: 'Carousel instagram', tech: 'Canva', image: '/carousel.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 6, category: 'design', title: 'Design Creative', tech: 'Canva', image: '/creative.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 7, category: 'design', title: 'Advertising', tech: 'Photoshop', image: '/advertising.png', link: 'https://api.whatsapp.com/send/?phone=6285807107865&text=Aku+ingin+membeli+apk+prem+&type=phone_number&app_absent=0' },
  { id: 8, category: 'video', title: 'Motion Graphics', tech: 'After Effects', image: '/motion.png', link: 'https://www.instagram.com/reel/DRyykWFiX7c/'},
  { id: 9, category: 'certificate', title: 'Belajar Dasar Pemrograman Web', tech: 'Html, CSS', image: '/webintro.png', link: ''},
  { id: 10, category: 'certificate', title: 'Belajar Dasar Pemrograman Javascript', tech: 'Javascript', image: '/dasarJs.png', link: ''},
  { id: 11, category: 'certificate', title: 'Belajar Membuat Front-End Web untuk Pemula', tech: 'Html, CSS, Javascript', image: '/frontend.png', link: ''},
  { id: 12, category: 'certificate', title: 'Prompt Engineering untuk Software Developer', tech: 'Artificial Inteligence', image: '/prompt.png', link: ''},
  { id: 13, category: 'certificate', title: 'Belajar Back-End Pemula dengan JavaScript', tech: 'Javascript, Node Js, Hapi Js', image: '/backend.png', link: ''},
  { id: 14, category: 'certificate', title: 'National AI Talent Development', tech: 'Workshop', image: '/alibaba.png', link: ''},
  { id: 15, category: 'certificate', title: 'Kompetisi Sains Se - Indonesia ( KSSI ) 2024', tech: 'Olimpiade', image: '/infor.png', link: '/infor.png'},
  { id: 16, category: 'certificate', title: 'Lomba Traspac IT Competition 2026', tech: 'Web / Mobile Apps', image: '/traspac.png', link: ''},
  { id: 17, category: 'certificate', title: 'Smawa Journalist Team II', tech: 'Organisasi', image: '/sjute2.png', link: ''},
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('coding');

  // Filter data berdasarkan tab yang aktif
  const filteredProjects = projectData.filter(item => item.category === activeTab);

  return (
    <section className="" id='projects'>
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-10">Featured Projects & Journey</h2>
      </Reveal>

      {/* TABS NAVIGATION */}
      <div className="flex justify-center gap-4 mb-16">
        {['coding', 'design', 'video', 'certificate'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize ${
              activeTab === tab 
                ? 'bg-black text-white shadow-lg' 
                : 'bg-white text-neutral-500 border border-neutral-200 hover:border-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout // Magic: Otomatis animasiin posisi saat grid berubah
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-2xl transition-all"
            >
              <div className="aspect-video bg-neutral-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{project.tech}</span>
                <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                <a className='cursor-pointer w-full' href={project.link} target='_blank'>
                <button className="mt-6 text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Case Study <span>→</span>
                </button>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};