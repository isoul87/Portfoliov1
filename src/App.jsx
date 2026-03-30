import { useState, useEffect } from 'react';
import Home from "./Components/Home/Home"
import { AnimatePresence } from 'motion/react';
// import { Loader } from './Components/Loader';
import { GreetingLoader } from './Components/GreetingLoader';
import { ScrollProgress } from './Components/Scroll';




function App() {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   // Simulasi loading aset (bisa diganti logic real loading image/font)
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000); // 2.5 detik

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <GreetingLoader key="loader" finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Konten Utama Tetap Render di Belakang atau Kondisional */}
      {!isLoading && 
        <>
          <ScrollProgress/>
          <Home />
        </> 
      }

    </>
    )
}

export default App
