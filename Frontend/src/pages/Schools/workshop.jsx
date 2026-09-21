import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, ShieldCheck, Code2, Bot, 
  Calendar, MapPin, CheckCircle2, ArrowRight, 
  Building, User, Mail, Phone, Presentation, ArrowUpRight,
  ChevronRight, Users, Zap
} from "lucide-react";
import { submitForm } from "../../utils/submitForm";

const Workshops = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    institution: "", name: "", email: "", phone: "", workshopTopic: "", expectedStudents: "", website: ""
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

    const { ok, error, fields } = await submitForm("/api/workshop", formData);
    setSubmitting(false);

    if (ok) {
      setFormSuccess("Workshop request submitted successfully. Our team will contact you shortly.");
      setFormData({ institution: "", name: "", email: "", phone: "", workshopTopic: "", expectedStudents: "", website: "" });
    } else if (fields) {
      setFieldErrors(fields);
    } else {
      setFormError(error);
    }
  };

  // Workshop Data with Stable Image Links & Professional Copy
  const workshopTopics = [
    {
      id: "ai",
      shortTitle: "Generative AI",
      title: "Generative AI & The Future",
      duration: "3 Hours / Half-Day",
      target: "Classes 8th to 12th",
      desc: "Demystify Artificial Intelligence for your students. We explain how tools like ChatGPT actually work, focusing heavily on ethical usage, critical thinking, and how AI will shape their future careers.",
      icon: <BrainCircuit size={20} />,
      // STABLE IMAGE
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800", 
      highlights: ["Live AI Demonstrations", "Ethical AI Usage", "Prompt Engineering Basics", "Future Career Paths"]
    },
    {
      id: "cyber",
      shortTitle: "Cyber Security",
      title: "Cyber Security & Digital Awareness",
      duration: "2 Hours",
      target: "Classes 6th to 12th",
      desc: "An eye-opening seminar on digital footprints, social media safety, and online privacy. We teach students practical, real-world self-defense to keep them safe in the digital age.",
      icon: <ShieldCheck size={20} />,
      // STABLE IMAGE
      image: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=800", 
      highlights: ["Safe Social Media Use", "Identifying Online Scams", "Password Security", "Digital Footprints"]
    },
    {
      id: "robotics",
      shortTitle: "Robotics & Hardware",
      title: "Robotics & Hands-On Engineering",
      duration: "1 Day (Full School Day)",
      target: "Classes 5th to 10th",
      desc: "A high-energy workshop where students step away from screens. They will work in teams to build their very first working electronic circuit and program a physical, sensor-based robot.",
      icon: <Bot size={20} />,
      // STABLE IMAGE
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800", 
      highlights: ["Hardware Kits Provided", "Arduino Programming", "Live Sensor Testing", "Team Building Exercises"]
    },
    {
      id: "appdev",
      shortTitle: "App Development",
      title: "Introduction to App Development",
      duration: "4 Hours",
      target: "Classes 6th to 10th",
      desc: "We help students transition from consuming technology to creating it. They will learn the logic behind their favorite mobile apps and write their very first lines of code.",
      icon: <Code2 size={20} />,
      // STABLE IMAGE
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800", 
      highlights: ["UI/UX Design Basics", "Logic & Problem Solving", "Block-to-Text Coding", "Live App Demonstration"]
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-800/30 px-4 py-1.5 rounded-full mb-8 z-10"
        >
           <Presentation size={14} className="text-blue-400" />
           <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">On-Campus Seminars & Bootcamps</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-5xl z-10 leading-[1.1]"
        >
          Bring Future Tech to <br />
          <span className="text-blue-500">Your Auditorium.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 z-10 leading-relaxed"
        >
          Equip your students with the essential tech skills of tomorrow. High-impact workshops on AI, Robotics, and Cyber Security—delivered directly on your campus by industry experts.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 z-10"
        >
          <button onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
            Schedule a Campus Workshop <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP */}
      <div className="border-y border-white/5 bg-white/[0.01] backdrop-blur-sm mb-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
               <div className="flex flex-col items-center text-center md:px-6 pt-6 md:pt-0">
                  <div className="w-12 h-12 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-4"><Users size={24} /></div>
                  <h4 className="text-white font-bold mb-2">Massive Student Reach</h4>
                  <p className="text-sm text-zinc-400">Engage up to 500+ students simultaneously in a highly structured, motivational session.</p>
               </div>
               <div className="flex flex-col items-center text-center md:px-6 pt-6 md:pt-0">
                  <div className="w-12 h-12 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-4"><ShieldCheck size={24} /></div>
                  <h4 className="text-white font-bold mb-2">Boost School Profile</h4>
                  <p className="text-sm text-zinc-400">Position your institution as a forward-thinking, tech-first academy to parents and the board.</p>
               </div>
               <div className="flex flex-col items-center text-center md:px-6 pt-6 md:pt-0">
                  <div className="w-12 h-12 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-4"><CheckCircle2 size={24} /></div>
                  <h4 className="text-white font-bold mb-2">Zero-Friction Setup</h4>
                  <p className="text-sm text-zinc-400">We provide the industry experts, presentation materials, and hardware. You simply provide the venue.</p>
               </div>
            </div>
        </div>
      </div>

      {/* 3. WORKSHOP CATALOG (The Vertical Tabs) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Workshop Catalog</h2>
          <p className="text-zinc-400 mt-3">Select a topic to review the seminar curriculum.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left Side: Select Topic */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2 pl-2">AVAILABLE TOPICS</p>
            
            {workshopTopics.map((workshop, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={workshop.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border ${
                    isActive 
                      ? "bg-blue-600/10 border-blue-500/50 shadow-lg shadow-blue-900/20" 
                      : "bg-transparent border-zinc-800/50 hover:bg-zinc-900/50 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-blue-600 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                      {workshop.icon}
                    </div>
                    <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-zinc-400"}`}>
                      {workshop.shortTitle}
                    </span>
                  </div>
                  {isActive && <ChevronRight size={16} className="text-blue-500" />}
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Content Detail Card */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="border border-zinc-800 rounded-3xl overflow-hidden bg-[#0a0a0a] flex flex-col h-full shadow-2xl"
              >
                {/* FIXED: Removed the black & white filter (mix-blend) so images are colorful! */}
                <div className="h-64 w-full relative bg-zinc-900 overflow-hidden">
                  <img 
                    src={workshopTopics[activeTab].image} 
                    alt={workshopTopics[activeTab].title} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
                  
                  {/* Badges Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 w-full flex gap-3">
                     <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/50 flex items-center gap-1.5">
                       <Calendar size={12}/> {workshopTopics[activeTab].duration}
                     </span>
                     <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-zinc-300 text-[10px] font-bold uppercase tracking-wider rounded border border-white/10 flex items-center gap-1.5">
                       <Users size={12}/> {workshopTopics[activeTab].target}
                     </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">{workshopTopics[activeTab].title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm mb-10">
                    {workshopTopics[activeTab].desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-zinc-800/50">
                     <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">WORKSHOP INCLUDES</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {workshopTopics[activeTab].highlights.map((item, i) => (
                         <div key={i} className="flex items-center gap-3">
                           <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                           <span className="text-sm text-zinc-300 font-medium">{item}</span>
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

      {/* 4. VALUE PROPOSITION (3-Cards Layout) */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Host a TechMines Event?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-3xl">
            <div className="text-blue-500 mb-6"><Zap size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Ignite Curiosity</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our sessions aren't lectures. They are high-energy demonstrations designed to show students what is possible with code.
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-3xl">
            <div className="text-purple-500 mb-6"><Building size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Modernize the Campus</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Showcase your school's commitment to NEP 2020 by integrating 21st-century digital skills into your academic calendar.
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-3xl">
            <div className="text-emerald-500 mb-6"><CheckCircle2 size={32} /></div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Mentors</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
               Workshops are delivered by real software engineers and tech founders, providing students with genuine career guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PREMIUM B2B BOOKING FORM */}
      <section id="booking-form" className="py-24 px-6 relative border-t border-zinc-900 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            {/* Left Side: The Pitch */}
            <div className="w-full lg:w-5/12 bg-gradient-to-br from-blue-900/20 to-transparent p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-center relative">
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-8">
                     <Calendar size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                     Host an event your students won't forget.
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-10">
                     Fill out the form to request a date. Our events coordinator will contact you to finalize the logistics, timings, and technical requirements.
                  </p>
                  
                  <div className="bg-black/50 p-6 rounded-2xl border border-white/5 space-y-4">
                     <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">What we need from you:</h4>
                     <div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
                        <MapPin size={16} className="text-blue-500" /> Auditorium or Smart Classroom
                     </div>
                     <div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
                        <Presentation size={16} className="text-blue-500" /> Projector & Sound System
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Side: The Form */}
            <div className="w-full lg:w-7/12 p-10 md:p-14 bg-[#050505]">
               <h3 className="text-2xl font-bold text-white mb-8">Request a Date</h3>
               
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
                            <input type="text" name="institution" required value={formData.institution} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="School / College" />
                         </div>
                         {fieldErrors.institution && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.institution}</p>}
                      </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Coordinator Name</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <User size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="Your Name" />
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
                            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="name@school.edu" />
                         </div>
                         {fieldErrors.email && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.email}</p>}
                      </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Phone Number</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <Phone size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="+91" />
                         </div>
                         {fieldErrors.phone && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.phone}</p>}
                      </div>
                   </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Select Topic</label>
                        <div className="relative group">
                           <select name="workshopTopic" required value={formData.workshopTopic} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none appearance-none">
                              <option value="" disabled>Choose a Workshop...</option>
                              <option value="Generative AI">Generative AI & The Future</option>
                              <option value="Cyber Security">Cyber Security & Digital Awareness</option>
                              <option value="Robotics Bootcamp">Robotics & Hands-On Engineering</option>
                               <option value="App Development">Introduction to App Development</option>
                            </select>
                         </div>
                         {fieldErrors.workshopTopic && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.workshopTopic}</p>}
                      </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Expected Audience</label>
                        <div className="relative group">
                           <select name="expectedStudents" required value={formData.expectedStudents} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none appearance-none">
                              <option value="" disabled>Select approximate size...</option>
                              <option value="50-100">50 - 100 Students</option>
                              <option value="100-250">100 - 250 Students</option>
                              <option value="250-500">250 - 500 Students</option>
                               <option value="500+">500+ Students</option>
                            </select>
                         </div>
                         {fieldErrors.expectedStudents && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.expectedStudents}</p>}
                      </div>
                   </div>

                   <button type="submit" disabled={submitting} className="w-full py-4 mt-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] group disabled:opacity-50 disabled:cursor-not-allowed">
                      {submitting ? "Submitting\u2026" : "Submit Event Request"} {!submitting && <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                   </button>
               </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Workshops;