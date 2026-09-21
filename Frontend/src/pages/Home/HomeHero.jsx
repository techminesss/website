import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, BrainCircuit, Lightbulb, Rocket, ArrowRight, UserCheck, Sparkles, GraduationCap } from "lucide-react";
import DemoBookingModal from "../../components/DemoBookingModal";

const HomeHero = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
    <div className="relative w-full min-h-screen bg-black overflow-hidden selection:bg-orange-500/30">
      {/* --- 1. AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- 2. LEFT COLUMN: TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-medium tracking-wide uppercase shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)]">
            <Sparkles size={12} />
            <span>Admissions Open: Batch 2026</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Turn Screen Time <br />
            into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Skill Time.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            Don't just let them play games. Let them <span className="text-zinc-200 font-medium">build them.</span> 
            <br/>
            Live 1:1 mentorship in Logic, Coding & AI—designed for Indian school curriculum.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Free Trial Class
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* View Syllabus Anchor Link */}
            <a href="#courses" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              <FileText size={18} className="text-zinc-400" />
              Explore Courses
            </a>
          </div>

          {/* EVERGREEN SOCIAL PROOF */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="Student" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              <img src="https://i.pravatar.cc/100?img=5" alt="Student" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Student" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white z-10">+5k</div>
            </div>
            <p className="text-sm text-zinc-400">
              Trusted by <span className="text-white font-medium">5,000+ parents & students</span> across top schools.
            </p>
          </div>
        </motion.div>


        {/* --- 3. RIGHT COLUMN: THE "PARENT PROMISE" VISUAL --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative"
        >
          <div className="relative z-10 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
            
            {/* BADGE: "Live Mentorship" is key for trust */}
            <div className="absolute -top-6 -right-6 z-20 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-xl font-bold text-sm flex items-center gap-2 rotate-6 border border-orange-400/50">
              <UserCheck size={16} />
              Live 1:1 Mentorship
            </div>

            {/* Window Controls */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>

            <div className="absolute top-3 left-16 text-[10px] text-zinc-500 font-mono">
               student_growth_tracker.py
            </div>

            <div className="bg-black/50 rounded-2xl p-6 pt-12 min-h-[380px] border border-white/5 grid grid-cols-5 gap-4">
              
              {/* Sidebar: Line Numbers */}
              <div className="col-span-1 border-r border-white/5 space-y-4 pr-2 text-right font-mono text-xs text-zinc-700 pt-2">
                 <div>01</div>
                 <div>02</div>
                 <div>03</div>
                 <div>04</div>
                 <div>05</div>
              </div>

              {/* Canvas: THE "BENEFITS" LADDER */}
              <div className="col-span-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Block 1: ACADEMICS (Safety) */}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-6 left-0 bg-blue-900/20 border border-blue-500/30 text-blue-200 px-4 py-3 rounded-lg font-mono text-sm flex items-center gap-3 w-[95%]"
                >
                  <BrainCircuit size={18} className="text-blue-400" /> 
                  <div>
                    <span className="text-xs text-blue-400/70 block uppercase tracking-wider">Foundation</span>
                    <span className="text-white font-medium">Logic & Math Skills</span>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <div className="absolute top-[3.8rem] left-8 w-0.5 h-8 bg-zinc-800"></div>

                {/* Block 2: BEHAVIOR (Focus) */}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-24 left-4 bg-purple-900/20 border border-purple-500/30 text-purple-200 px-4 py-3 rounded-lg font-mono text-sm flex items-center gap-3 w-[90%]"
                >
                  <Lightbulb size={18} className="text-purple-400" />
                  <div>
                    <span className="text-xs text-purple-400/70 block uppercase tracking-wider">Development</span>
                    <span className="text-white font-medium">Focus & Creativity</span>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <div className="absolute top-[8.2rem] left-12 w-0.5 h-8 bg-zinc-800"></div>

                {/* Block 3: CAREER (Future) */}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                  className="absolute top-44 left-8 bg-orange-900/20 border border-orange-500/30 text-orange-200 px-4 py-3 rounded-lg font-mono text-sm flex items-center gap-3 w-[85%]"
                >
                  <Rocket size={18} className="text-orange-400" />
                  <div>
                    <span className="text-xs text-orange-400/70 block uppercase tracking-wider">Outcome</span>
                    <span className="text-white font-medium">Future-Ready Tech</span>
                  </div>
                </motion.div>

                {/* Trust Badge inside the IDE */}
                <div className="absolute bottom-4 right-4 bg-green-900/20 border border-green-500/30 text-green-400 px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-2">
                  <GraduationCap size={14} />
                  <span>School Aligned</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-600 opacity-20 blur-2xl -z-10 rounded-[3rem]"></div>
        </motion.div>

      </div>
    </div>

    <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} defaultSource="home-hero" />
    </>
  );
};

export default HomeHero;