import React from 'react';
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout'; // The "Reality Check" (Reels vs Code)
import HomeCourses from './HomeCourses'; // The Teaser Cards with Toggle
import Partners from './Partners'; // The 2-Director Layout
import Testimonials from './Testimonials'; // The Dark Mode FAQ & Reviews

export default function Home() {
  return (
    // The Master Wrapper: Enforces strict Dark Mode and Orange selection color globally
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
      <main className="flex flex-col">
        {/* Component 1: The Hero (Urgency, Orange Accents) */}
        <HomeHero />
        
        {/* Divider to ensure clean transitions */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        
        {/* Component 2: The Problem/Solution (Dark, subtle red/orange) */}
        <HomeAbout />
        
        {/* Component 3: The Course Teasers (Dark, Popups, Orange/Cyan) */}
        <HomeCourses />
        
        {/* Component 4: Meet the Founders (Dark, professional) */}
        <Partners />
        
        {/* Component 5: Social Proof & FAQs (Dark, Orange accents) */}
        <Testimonials />
      </main>
    </div>
  );
}