import React from 'react';
import { motion } from 'framer-motion';

// Konfigurasi Navigasi Kanan
const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Dribbble', url: '#' },
  { name: 'Instagram', url: '#' },
];

// Data Services (Diperluas dari brief: Fullstack, SEO, Marketing, UI/UX)
const servicesData = [
  {
    icon: '💡', // Ganti dengan ikon SVG yang sesuai (e.g., Lucide React icons)
    title: 'UI & UX Design',
    description: 'Crafting intuitive, efficient, and enjoyable interfaces with React, Tailwind v4, and clean Motion animations.',
  },
  {
    icon: '💻',
    title: 'Web & Mobile App Development',
    description: 'Transforming ideas into scalable, high-performance applications using React Vite and modern web technologies.',
  },
  {
    icon: '📈',
    title: 'Technical SEO & Marketing',
    description: 'Optimizing sites for search engines (SEO) and integrating marketing tools for measurable growth and conversions.',
  },
  {
    icon: '🛠️',
    title: 'Fullstack Solution Architecture',
    description: 'Building robust backend systems, databases, and APIs (Node.js, etc.) that power seamless frontends.',
  },
];

const PortfolioPage = () => {
  // --- Variabel Animasi Dasar (Spring) ---
  const initialPopIn = {
    opacity: 0,
    scale: 0.9,
  };
  const animatePopIn = {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  const initialFadeUp = {
    opacity: 0,
    y: 20,
  };
  const animateFadeUp = (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15, delay: customDelay },
  });

  // Staggering untuk layanan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans p-6 md:p-12 lg:p-16">
      {/* --- Section 1: Hero (Adaptasi image_0.png) --- */}
      <section className="mb-24 flex flex-col items-center">
        {/* Header Nav */}
        <div className="w-full flex justify-between items-center mb-16 px-4">
          <motion.div
            className="text-xs text-neutral-600 space-x-2"
            initial={initialFadeUp}
            animate={animateFadeUp(0)}
          >
            <span>kawsarvy.design@gmail.com</span>
            <span className="p-1 px-3 bg-white rounded-full border border-neutral-200">Copy</span>
            <span className="p-1 px-3 bg-white rounded-full border border-neutral-200">CV</span>
          </motion.div>
          
          <motion.div
            className="text-xs text-neutral-600 flex gap-1"
            initial={initialFadeUp}
            animate={animateFadeUp(0.1)}
          >
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a href={link.url} className="hover:underline">{link.name}</a>
                {index < socialLinks.length - 1 && <span> / </span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Profile Avatar with Pop-in */}
        <motion.div
          className="relative mb-8"
          initial={initialPopIn}
          animate={animatePopIn}
        >
          <img
            src="/path/to/kawsar-avatar.png" // Ganti dengan path foto profil lo (Kawsar Ahmed)
            alt="Kawsar Ahmed"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <span className="absolute -top-1 -right-6 bg-white p-1 px-3 rounded-full text-[11px] border border-neutral-200 flex items-center gap-1 shadow-sm">
            Kawsar Ahmed 👋
          </span>
        </motion.div>

        {/* Headline with Fade-up */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-medium max-w-2xl leading-tight mb-10 text-neutral-800"
          initial={initialFadeUp}
          animate={animateFadeUp(0.2)}
        >
          Building digital products, brands, and experience.
        </motion.h1>

        {/* CTA Button with Hover */}
        <motion.button
          className="bg-neutral-900 text-white p-3 px-8 rounded-full text-xs flex items-center gap-2 hover:bg-neutral-700 transition-colors"
          initial={initialPopIn}
          animate={animatePopIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Latest Shots
          <span className="text-[10px]">↗</span>
        </motion.button>
      </section>

      {/* --- Section 2: Services & Value (Adaptasi image_1.png) --- */}
      <section className="mb-24 flex flex-col items-center">
        {/* Brand Logos (Sederhana, di-fade) */}
        <motion.div
          className="w-full max-w-6xl flex justify-around items-center mb-16 p-4 bg-white rounded-3xl border border-neutral-200 shadow-inner"
          initial={initialPopIn}
          animate={animatePopIn}
        >
          {['National Bank', 'mattered', 'Coca-Cola', 'Adobe', 'Subway', 'codecademy'].map((brand) => (
            <span key={brand} className="text-sm text-neutral-400 font-mono">{brand}</span> // Ganti dengan SVG yang sesuai
          ))}
        </motion.div>

        {/* Sub-headline */}
        <motion.h2
          className="text-center text-3xl md:text-4xl font-normal max-w-3xl leading-tight mb-12 text-neutral-800"
          initial={initialFadeUp}
          animate={animateFadeUp(0.3)}
        >
          Collaborate with brands and agencies to create impactful results.
        </motion.h2>

        {/* Services Grid with Staggered Fade-in */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 py-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-4 text-center hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 80, damping: 15 },
                },
              }}
            >
              <div className="text-3xl mb-1">{service.icon}</div>
              <h3 className="text-lg font-medium text-neutral-800">{service.title}</h3>
              <p className="text-sm text-neutral-600 flex-grow">{service.description}</p>
              <motion.span
                className="text-xs text-blue-600 mt-2 font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                Learn More
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Section 3: Contact/CTA (Adaptasi image_2.png) --- */}
      <section className="flex flex-col items-center">
        {/* Handshake Icon with simple rotation */}
        <motion.div
          className="w-20 h-20 bg-neutral-200 rounded-full flex items-center justify-center mb-8 shadow-inner border border-neutral-200"
          initial={initialPopIn}
          animate={animatePopIn}
          whileInView={{
            rotate: [0, 10, -10, 0],
            transition: { repeat: Infinity, duration: 2, repeatDelay: 1 },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <img src="/path/to/handshake.png" alt="Let's Talk" className="w-12 h-12" /> {/* Ganti dengan SVG jabat tangan */}
        </motion.div>

        {/* Big CTA Headline */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-medium max-w-xl leading-tight mb-12 text-neutral-800"
          initial={initialFadeUp}
          whileInView={animateFadeUp(0.2)}
          viewport={{ once: true }}
        >
          Tell me about your next project
        </motion.h2>

        {/* Contact Buttons */}
        <div className="flex gap-4 mb-16">
          <motion.button
            className="bg-neutral-900 text-white p-3 px-8 rounded-full text-xs flex items-center gap-2 hover:bg-neutral-700 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>✉️</span> Email Me
          </motion.button>
          <motion.button
            className="bg-white text-neutral-800 p-3 px-8 rounded-full text-xs flex items-center gap-2 border border-neutral-200 shadow-md"
            whileHover={{ scale: 1.05, borderColor: '#a3a3a3' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>💬</span> WhatsApp
          </motion.button>
        </div>

        {/* Footer */}
        <footer className="w-full flex justify-between items-center text-xs text-neutral-500 p-6 pt-12 border-t border-neutral-200">
          <span>© 2024 All rights reserved.</span>
          <div className="flex gap-1">
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a href={link.url} className="hover:underline">{link.name}</a>
                {index < socialLinks.length - 1 && <span> / </span>}
              </React.Fragment>
            ))}
          </div>
        </footer>
      </section>
    </div>
  );
};

export default PortfolioPage;