import React from "react";
import { motion } from "framer-motion";
import { Laptop, AlertCircle, TrendingUp, Play, Heart, Share2, BatteryWarning, Wifi, Zap } from "lucide-react";

const RealityCheck = () => {
  return (
    <section className="relative w-full py-24 bg-zinc-950 overflow-hidden" aria-label="Problem vs Solution comparison">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-zinc-900/50 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Which path is your child <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">currently on?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every hour on a screen can be an addiction... or an investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* --- LEFT CARD: THE TRAP (Reels/Shorts Simulator) --- */}
          <motion.article 
            whileHover={{ scale: 1.02 }}
            className="group relative bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 overflow-hidden flex flex-col"
          >
            {/* Red Mood Background - Kept Subtle */}
            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-500"></div>

            {/* Header Text */}
            <header className="relative z-10 flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-400">
                <BatteryWarning size={24} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-200">Mindless Scrolling</h3>
                {/* FIXED: Increased text brightness for accessibility (red-300 instead of red-400/80) */}
                <p className="text-rose-300 text-sm font-medium flex items-center gap-1">
                  <AlertCircle size={12} /> Draining Mental Energy
                </p>
              </div>
            </header>

            {/* VISUAL: The "Reels" Simulator */}
            <div className="relative z-10 h-64 bg-black rounded-2xl border border-zinc-800 overflow-hidden mx-auto w-48 shadow-2xl">
               <div className="absolute top-0 inset-x-0 h-6 bg-black/80 backdrop-blur-sm z-30 flex items-center justify-between px-3 text-[8px] text-zinc-400 font-medium">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <Wifi size={8} />
                    <BatteryWarning size={8} className="text-red-500" />
                  </div>
               </div>

               <motion.div 
                 animate={{ y: ["0%", "-50%"] }}
                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                 className="w-full"
               >
                  {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
                    <div key={index} className="w-full h-32 border-b border-zinc-900 relative bg-zinc-900/50 group-feed">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <Play size={12} fill="white" className="text-white ml-0.5" />
                        </div>
                        <div className="absolute right-2 bottom-4 flex flex-col gap-3 items-center">
                             <div className="flex flex-col items-center gap-1">
                                <Heart size={12} className="text-zinc-400" />
                                <span className="text-[6px] text-zinc-500">1.2k</span>
                             </div>
                             <div className="flex flex-col items-center gap-1">
                                <Share2 size={12} className="text-zinc-400" />
                                <span className="text-[6px] text-zinc-500">Share</span>
                             </div>
                        </div>
                        <div className="absolute left-2 bottom-4 space-y-1">
                            <div className="w-20 h-1.5 rounded-full bg-zinc-700/50"></div>
                            <div className="w-12 h-1.5 rounded-full bg-zinc-700/50"></div>
                        </div>
                    </div>
                  ))}
               </motion.div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-20"></div>
            </div>

            <div className="relative z-10 mt-6 space-y-3 pl-2">
              <div className="flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                <span>Passive Consumption</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 group-hover:text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                <span>Short Attention Span</span>
              </div>
            </div>
          </motion.article>

          {/* --- RIGHT CARD: THE SOLUTION (Logic Tower) --- */}
          <motion.article 
            whileHover={{ scale: 1.02 }}
            className="group relative bg-zinc-900/80 border border-orange-500/40 rounded-3xl p-8 overflow-hidden flex flex-col shadow-2xl shadow-orange-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-600/10 opacity-100 transition-opacity duration-500"></div>

            <header className="relative z-10 flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                <Laptop size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Future Tech Leader</h3>
                <p className="text-orange-300 text-sm font-medium flex items-center gap-1">
                  <TrendingUp size={12} /> High Career Growth
                </p>
              </div>
            </header>

            <div className="relative z-10 h-64 bg-zinc-950/50 rounded-2xl border border-orange-500/20 overflow-hidden mx-auto w-64 flex items-center justify-center">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               <div className="relative flex flex-col-reverse items-center gap-2">
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-40 h-10 bg-blue-600/20 border border-blue-500 rounded-lg flex items-center justify-center text-xs font-bold text-blue-200 uppercase tracking-wider shadow-[0_0_15px_-5px_rgba(37,99,235,0.5)]"
                  >
                    Logic & Math
                  </motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} transition={{ delay: 0.6 }} className="w-0.5 bg-zinc-700" ></motion.div>
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="w-40 h-10 bg-purple-600/20 border border-purple-500 rounded-lg flex items-center justify-center text-xs font-bold text-purple-200 uppercase tracking-wider shadow-[0_0_15px_-5px_rgba(147,51,234,0.5)]"
                  >
                    <Play size={10} className="mr-2 fill-current" /> Coding
                  </motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} transition={{ delay: 1.2 }} className="w-0.5 bg-zinc-700" ></motion.div>
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                    className="w-44 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-xs font-bold text-white uppercase tracking-wider shadow-[0_0_30px_-5px_rgba(249,115,22,0.6)] z-10"
                  >
                    <Zap size={14} className="mr-1 fill-white" /> Problem Solver
                  </motion.div>
               </div>
            </div>

            <div className="relative z-10 mt-6 space-y-3 pl-2">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                <span>Builds Real-World Projects</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                <span>Improves <span className="text-white font-semibold">Focus & Grades</span></span>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
};

export default RealityCheck;