
import { motion } from 'motion/react'; // Update: Sekarang import dari 'motion/react'

export const Reveal = ({ children, delay = 0, y = 20, x = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-beziers biar animasinya smooth (Apple-like)
      }}
    >
      {children}
    </motion.div>
  );
};