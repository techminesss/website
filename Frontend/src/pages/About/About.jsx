import React, { useState } from 'react'
import DemoBookingModal from '../../components/DemoBookingModal';

// Placeholder images - replace with your actual imports
const headerimg1 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1200&fit=crop"
const headerimg2 = "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop"

// We use the imported image/video for the bottom-right slot
import headerimg3 from '../../assets/header-2-2-2.webp'
import headermp3 from '../../assets/header-3.mp4'
import Services from './Services.jsx';
export default function Header() {
  // State to track if video is ready to play
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
    <header className="relative min-h-screen w-full bg-black px-6 pt-32 pb-12 md:px-10 lg:px-14 lg:pt-36 overflow-hidden flex flex-col justify-center">
      
      {/* Background with subtle tech pattern */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 94, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 94, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Grid Container */}
      {/* CHANGED: gap-12 → gap-4 and lg:gap-6 → lg:gap-2 for tighter spacing */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-2 items-stretch">
        
        {/* --- COL 1: Text Content --- */}
        <div className="flex flex-col justify-between lg:col-span-4">
          
          {/* Top Section: Main Heading */}
          <div className="flex flex-col items-start pt-4">
            <h1 className="flex flex-col font-sans font-bold uppercase tracking-tighter">
              <span className="leading-[0.8] text-[15vw] sm:text-[8rem] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8.5rem] text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-400 to-[#ff5e00]">
                MINING
              </span>
              <span className="leading-[0.85] text-[9vw] sm:text-[4.5rem] lg:text-[3.2rem] xl:text-[4rem] 2xl:text-[5rem] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-orange-300 opacity-85">
                TECHNOLOGY
              </span>
            </h1>

            <p className="mt-8 text-lg font-medium text-white/70 tracking-wide max-w-xs border-l-2 border-[#ff5e00] pl-5">
              One byte at a time
            </p>

            <button onClick={() => setIsDemoModalOpen(true)} className="mt-10 rounded-full bg-[#ff5e00] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#ff6f1a] hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,94,0,0.25)]">
              Get Started
            </button>
          </div>

          {/* Bottom Content: Footer Text */}
          <div className="mt-10 flex flex-col gap-6 lg:mt-auto pb-2">
             <h2 className="font-sans text-3xl font-medium leading-tight text-white/85">
               Turning visions into
               <br />
               <span className="text-[#ff5e00]">powerful stories</span>
             </h2>


          </div>
        </div>

        {/* --- COL 2: Center Image (Portrait) --- */}
        {/* CHANGED: h-[60vh] → h-[54vh] and lg:h-[80vh] → lg:h-[72vh] (10% reduction) */}
        <div className="relative h-[54vh] w-full overflow-hidden lg:col-span-4 lg:h-[72vh] ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10 pointer-events-none" />
          <img
            src={headerimg1}
            alt="Teen building robot with glowing components"
            fetchPriority="high"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* --- COL 3: Right Stack (Two Landscapes) --- */}
        {/* CHANGED: h-[60vh] → h-[54vh], lg:h-[80vh] → lg:h-[72vh], gap-6 → gap-2 */}
        <div className="flex h-[54vh] flex-col gap-2 lg:col-span-4 lg:h-[72vh]">
          
          {/* Top Image */}
          <div className="relative flex-1 overflow-hidden group w-full ">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10 duration-500" />
            <img
              src={headerimg2}
              alt="AI neural network visualization"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Bottom Image / Video Hybrid Container */}
          <div className="relative flex-1 overflow-hidden group w-full  bg-gray-900">
            
            {/* 1. The Video (Loads in background) */}
            <video
              src={headermp3}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlayThrough={() => setIsVideoLoaded(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* 2. The Placeholder Image (Fades out when video is ready) */}
            <img
              src={headerimg3}
              alt="Arduino circuit board with LEDs"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            />

            {/* 3. Overlay (Same as other images for consistency) */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-20 duration-500" />
            
          </div>

        </div>

      </div>
    </header>
    <Services />
    <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} defaultSource="about-hero" />
    </>
  )
}