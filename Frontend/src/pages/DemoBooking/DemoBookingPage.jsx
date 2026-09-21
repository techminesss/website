import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Users, Clock, Monitor } from "lucide-react";
import DemoBookingForm from "../../components/DemoBookingForm";

const DemoBookingPage = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-orange-600 selection:text-white pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Free Demo Class</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight z-10"
        >
          Book Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            Free Demo Class
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto z-10 leading-relaxed"
        >
          Experience a live, 1:1 mentored coding session — absolutely free. See why thousands of parents trust TechMines for their child's tech education.
        </motion.p>
      </section>

      {/* 2. VALUE PROPS */}
      <section className="py-12 px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative bg-[#0a0a0a] border border-zinc-800 p-8 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-orange-400 mb-6 transition-all duration-300">
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live 1:1 Session</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Not a recorded video. A real, interactive session with a dedicated mentor.
            </p>
          </div>

          <div className="group relative bg-[#0a0a0a] border border-zinc-800 p-8 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-orange-400 mb-6 transition-all duration-300">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero Obligation</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No credit card, no commitment. Try it first — decide later.
            </p>
          </div>

          <div className="group relative bg-[#0a0a0a] border border-zinc-800 p-8 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500 transition-all duration-500" />
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-orange-400 mb-6 transition-all duration-300">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">5,000+ Happy Students</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Join thousands of students already building games, apps & AI projects.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BOOKING FORM */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-[#0a0a0a] border border-zinc-800 rounded-[2rem] shadow-2xl relative overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-b from-orange-900/10 to-transparent border-b border-zinc-800/50 p-8 md:p-10 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-orange-600/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-medium tracking-wide uppercase mb-3 relative z-10">
              <Sparkles size={12} />
              <span>100% Free — No Card Required</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">Book Your Free Demo Class</h2>
            <p className="text-zinc-400 text-sm relative z-10">Fill in your details and our team will schedule a personalized session.</p>
          </div>

          {/* Form Body */}
          <div className="bg-[#050505] relative z-10">
            <DemoBookingForm defaultSource="contact" />
          </div>
        </div>
      </section>

      {/* 4. TRUST LINE */}
      <section className="pb-12 px-6 flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 shadow-sm">
          <CheckCircle2 size={16} className="text-orange-400" />
          <span className="text-xs font-medium">
            We typically respond within <strong className="text-white">2 hours</strong> during business hours (Mon–Sat, 9AM – 6PM).
          </span>
        </div>
      </section>
    </div>
  );
};

export default DemoBookingPage;
