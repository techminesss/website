import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";
import AnshuAneja from "../../assets/Anshu_Aneja.jpg";
import RavneetSingh from "../../assets/Ravneet_Singh.jpeg";

const HIGHLIGHTS = [
  "Industry Experience",
  "100% Practical Focus",
  "Based in Ludhiana",
  "Dedicated Mentorship",
];

const MeetTheFounders = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900/50 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE: Staggered Dual-Profile Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Founder 1: Anshu Aneja */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mt-12 relative z-10"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900">
                <img 
                  src={AnshuAneja}
                  alt="Anshu Aneja - Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-4 rounded-2xl text-center min-h-[76px] flex flex-col justify-center">
                <p className="text-white font-bold text-lg leading-tight">Anshu Aneja</p>
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                  Co-Founder
                </p>
              </div>
            </motion.div>

            {/* Founder 2: Ravneet Singh */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4 relative z-10"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900">
                <img 
                  src={RavneetSingh}
                  alt="Ravneet Singh - Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-4 rounded-2xl text-center min-h-[76px] flex flex-col justify-center">
                <p className="text-white font-bold text-lg leading-tight">Ravneet Singh</p>
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                  Co-Founder
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Story & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Award size={14} /> Meet the Founders
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.15]">
              "We wish we had this <br /> 
              <span className="text-zinc-500">when we were 12."</span>
            </h2>
            
            <div className="space-y-5 text-zinc-400 text-lg leading-relaxed mb-10">
              <p><strong className="text-white font-semibold">Hi parents, we are Anshu and Ravneet.</strong></p>
              <p>
                In school, we were taught from traditional textbooks. We memorized concepts but rarely had the opportunity to build real-world skills.
              </p>
              <p>
                We partnered to launch TechMines to completely change that standard. We bring together diverse real-world expertise to ensure your child learns through practical, hands-on experience and professional guidance.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-zinc-300 font-medium bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 hover:border-zinc-700/60 transition-colors"
                >
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} /> 
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MeetTheFounders;