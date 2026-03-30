import { motion, useScroll } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px", // Tebal garis progress
        background: "#000", // Warna progress (sesuaikan brand lo)
        transformOrigin: "0%", // Biar jalannya dari kiri ke kanan
        zIndex: 1000,
      }}
    />
  );
};