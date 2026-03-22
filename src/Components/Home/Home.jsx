import Navbar from "../Navbar"
import Hero from "../Hero"
import Services from "../Services"
import Cta from "../CTA"
import {SocialProof}  from "../SocialProof"
    
export default function Home(){
  return (
    <>
      <main className="min-h-screen bg-[#f8f8f8] text-[#1a1a1a] selection:bg-black selection:text-white px-6 md:px-20 max-w-[1600px] mx-auto">
      
      <Navbar />

      <Hero />

      <SocialProof />

      <Services />
      
      <Cta />

    </main>
    </>
  )
}