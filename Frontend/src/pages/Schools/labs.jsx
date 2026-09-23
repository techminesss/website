import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Bot, Wifi, BrainCircuit, Beaker, CheckCircle2, 
  ArrowRight, Settings, Users, BookOpen, Building2, Download,
  ChevronRight, Building, User, Mail, Phone, ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { submitForm } from "../../utils/submitForm";

const ForSchools = () => {
  const [activeLab, setActiveLab] = useState("atal");
  
  // Form State and Handlers
  const [formData, setFormData] = useState({
    institution: "", name: "", email: "", phone: "", labType: "", message: "", website: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors({});
    setFormError("");
    setFormSuccess("");

    const { ok, error, fields } = await submitForm("/api/labs", formData);
    setSubmitting(false);

    if (ok) {
      setFormSuccess("Lab proposal submitted successfully. Our team will contact you shortly.");
      setFormData({ institution: "", name: "", email: "", phone: "", labType: "", message: "", website: "" });
    } else if (fields) {
      setFieldErrors(fields);
    } else {
      setFormError(error);
    }
  };

  // DATA: LAB TYPES
  const labs = {
      atal: {
        id: "atal",
        title: "ATAL Tinkering Lab (ATL)",
        tag: "Government Standard",
        desc: "The flagship innovation workspace prescribed by NITI Aayog. We provide the complete Packages 1-4, enabling students to prototype with 3D printers and electronics.",
        hardware: ["3D Printers (Creality/Ender)", "Electronic Development Tools", "P1 & P2 Standard Packages", "Mechanical Construction Kits"],
        image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon: <Cpu size={20} />
      },
      ai: {
        id: "ai",
        title: "AI & Data Science Lab",
        tag: "High-Performance Computing",
        desc: "A dedicated computation center for Machine Learning. Equipped with GPU-accelerated workstations to train AI models for computer vision and data analysis.",
        hardware: ["Nvidia Jetson Nano Kits", "AI Vision Cameras", "Neural Compute Sticks", "High-Spec Workstations"],
        image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon: <BrainCircuit size={20} />
      },
      robotics: {
        id: "robotics",
        title: "Advanced Robotics Lab",
        tag: "Mechatronics Core",
        desc: "Where code meets metal. A complete arena for building functional robots, from basic line-followers to complex humanoid servos and rovers.",
        hardware: ["Metal Robotics Kits", "Humanoid Servo Motors", "Competition Arenas", "LiPo Battery Stations"],
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon: <Bot size={20} />
      },
      iot: {
        id: "iot",
        title: "IoT & Smart City Lab",
        tag: "Connected Tech",
        desc: "Teach students how to build the cities of tomorrow. Connect sensors, cloud dashboards, and automation relays to create smart ecosystems.",
        hardware: ["Home Automation Relays", "Agriculture Sensors", "Cloud Data Modules", "Smart City Model Boards"],
        image: "https://images.pexels.com/photos/11053046/pexels-photo-11053046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon: <Wifi size={20} />
      },
      stem: {
        id: "stem",
        title: "STEM Innovation Lab",
        tag: "Foundational Science",
        desc: "Bridge the gap between textbooks and reality. VR headsets for biology, physics experiment kits, and mathematical visualization tools.",
        hardware: ["VR/AR Headsets (Oculus)", "Physics & Optics Kits", "Renewable Energy Models", "Math Manipulatives"],
        image: "https://images.pexels.com/photos/8553866/pexels-photo-8553866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        icon: <Beaker size={20} />
      }
    };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* 1. HERO: B2B AUTHORITY */}
      <section className="relative pt-32 pb-20 px-6 border-b border-zinc-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-800/50 px-4 py-1.5 rounded-full mb-8">
             <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
             <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">NEP 2020 Aligned</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Transform your School into an <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovation Hub.</span>
          </h1>
          
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            We don't just sell equipment. We build comprehensive ecosystems—providing Infrastructure, Curriculum, and Teacher Training to make your school future-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('b2b-form').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
              Schedule Site Visit
            </button>
            <button onClick={() => document.getElementById('b2b-form').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
              <Download size={18} /> Download Lab Brochure
            </button>
          </div>
        </div>
      </section>

      {/* 2. LAB INFRASTRUCTURE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Lab Infrastructure</h2>
            <p className="text-zinc-400">Select a lab type to view the configuration.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
           {/* LEFT: MENU */}
           <div className="lg:col-span-4 flex flex-col gap-3 h-full overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4 px-2">Select Configuration</p>
              {Object.entries(labs).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveLab(key)}
                  className={`group flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden ${
                    activeLab === key 
                      ? "bg-zinc-900 border-blue-500/50 shadow-lg shadow-blue-900/20" 
                      : "bg-transparent border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700"
                  }`}
                >
                   <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-2.5 rounded-lg transition-colors ${activeLab === key ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"}`}>
                         {data.icon}
                      </div>
                      <div>
                         <h3 className={`font-bold text-sm ${activeLab === key ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>{data.title}</h3>
                         <p className="text-[10px] text-zinc-500 mt-0.5 uppercase tracking-wider">{data.tag}</p>
                      </div>
                   </div>
                   {activeLab === key && <ChevronRight className="text-blue-500" size={20} />}
                </button>
              ))}
           </div>

           {/* RIGHT: DISPLAY */}
           <div className="lg:col-span-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-2 relative overflow-hidden flex flex-col">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeLab}
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.3 }}
                   className="h-full flex flex-col bg-black rounded-2xl overflow-hidden border border-zinc-800"
                 >
                    <div className="h-64 relative shrink-0">
                       <img src={labs[activeLab].image} alt={labs[activeLab].title} className="w-full h-full object-cover opacity-80" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                       <div className="absolute bottom-6 left-6">
                          <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-md">
                            {labs[activeLab].tag}
                          </span>
                       </div>
                    </div>
                    <div className="p-8 flex flex-col h-full">
                       <h3 className="text-3xl font-bold text-white mb-4">{labs[activeLab].title}</h3>
                       <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">{labs[activeLab].desc}</p>
                       <div className="mt-auto">
                          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">Hardware Inclusions</p>
                          <div className="grid grid-cols-2 gap-4">
                             {labs[activeLab].hardware.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                   <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={16} />
                                   <span className="text-sm text-zinc-300">{item}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>
      </section>

      {/* 3. THE TURNKEY PROMISE */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
         <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">End-to-End Execution</h2>
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/50 transition-colors">
               <Settings className="text-blue-500 mb-6" size={40} />
               <h3 className="text-2xl font-bold text-white mb-3">1. Setup & Supply</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">We handle procurement, installation, and branding of the lab. You get a ready-to-use room.</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500/50 transition-colors">
               <BookOpen className="text-purple-500 mb-6" size={40} />
               <h3 className="text-2xl font-bold text-white mb-3">2. Curriculum Integration</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">We align our modules with CBSE/ICSE/IB boards so it fits your academic calendar.</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors">
               <Users className="text-emerald-500 mb-6" size={40} />
               <h3 className="text-2xl font-bold text-white mb-3">3. Teacher Training</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">We don't leave you alone. We train your physics/computer teachers to run the lab effectively.</p>
            </div>
         </div>
      </section>

      {/* 4. PREMIUM B2B BOOKING FORM (Replaced the standard blue CTA) */}
      <section id="b2b-form" className="py-24 px-6 relative border-t border-zinc-900 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            {/* Left Side: The Pitch */}
            <div className="w-full lg:w-5/12 bg-gradient-to-br from-blue-900/20 to-transparent p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-center relative">
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-8">
                     <Building2 size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                     Ready to upgrade your campus?
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-10">
                     Fill out the form to request a comprehensive lab infrastructure proposal tailored to your school's specific space and curriculum requirements.
                  </p>
                  
                  <div className="space-y-5">
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><CheckCircle2 size={14} /></div>
                        <span className="text-sm font-medium text-zinc-300">Dedicated Account Manager</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><CheckCircle2 size={14} /></div>
                        <span className="text-sm font-medium text-zinc-300">End-to-End Installation</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><CheckCircle2 size={14} /></div>
                        <span className="text-sm font-medium text-zinc-300">Includes Teacher Training</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Side: The Form */}
            <div className="w-full lg:w-7/12 p-10 md:p-14 bg-[#050505]">
               <h3 className="text-2xl font-bold text-white mb-8">Institutional Inquiry</h3>
               
               <form onSubmit={handleSubmit} className="space-y-6">
                   {/* Honeypot */}
                   <input type="text" name="website" value={formData.website} onChange={handleInputChange} tabIndex={-1} aria-hidden="true" autoComplete="off" className="!absolute !left-[-9999px] !opacity-0 !h-0 !w-0" />
                   
                   {formSuccess && (
                     <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm text-center">{formSuccess}</div>
                   )}
                   {formError && (
                     <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">{formError}</div>
                   )}

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Institution Name</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Building size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                            <input type="text" name="institution" required minLength={2} maxLength={100} value={formData.institution} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="School / College" />
                         </div>
                         {fieldErrors.institution && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.institution}</p>}
                      </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Contact Person</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <User size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                            <input type="text" name="name" required minLength={2} maxLength={100} value={formData.name} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="Your Name" />
                         </div>
                         {fieldErrors.name && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.name}</p>}
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Official Email</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Mail size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                            <input type="email" name="email" required maxLength={254} value={formData.email} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="name@school.edu" />
                         </div>
                         {fieldErrors.email && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.email}</p>}
                      </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Phone Number</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Phone size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                            <input type="tel" name="phone" required minLength={10} maxLength={10} pattern="\d{10}" title="Phone number must be exactly 10 digits" value={formData.phone} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="9876543210" />
                         </div>
                         {fieldErrors.phone && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.phone}</p>}
                      </div>
                   </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Select Lab Configuration</label>
                     <div className="relative group">
                        <select name="labType" required value={formData.labType} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none appearance-none">
                           <option value="" disabled>Choose a Lab Type...</option>
                           <option value="ATAL Tinkering Lab">ATAL Tinkering Lab (ATL)</option>
                           <option value="AI & Data Science">AI & Data Science Lab</option>
                           <option value="Advanced Robotics">Advanced Robotics Lab</option>
                           <option value="IoT & Smart City">IoT & Smart City Lab</option>
                           <option value="STEM Innovation">STEM Innovation Lab</option>
                            <option value="Custom Requirement">Custom / Mixed Requirement</option>
                         </select>
                      </div>
                      {fieldErrors.labType && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.labType}</p>}
                   </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Additional Requirements</label>
                      <textarea name="message" rows="3" maxLength={5000} value={formData.message} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all resize-none outline-none" placeholder="Tell us about your available space, student count, or specific budget..."></textarea>
                      {fieldErrors.message && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.message}</p>}
                   </div>

                   <button type="submit" disabled={submitting} className="w-full py-4 mt-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] group disabled:opacity-50 disabled:cursor-not-allowed">
                      {submitting ? "Submitting…" : "Submit Proposal Request"} {!submitting && <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                   </button>
               </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ForSchools; 