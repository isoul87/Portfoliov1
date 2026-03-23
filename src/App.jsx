import { useState, useEffect } from 'react';
import Home from "./Components/Home/Home"
import { AnimatePresence } from 'motion/react';
import { Loader } from './Components/Loader';




function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulasi loading aset (bisa diganti logic real loading image/font)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 detik

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Konten Utama Tetap Render di Belakang atau Kondisional */}
      {!isLoading && <Home />}

    </>
    )
}

export default App
