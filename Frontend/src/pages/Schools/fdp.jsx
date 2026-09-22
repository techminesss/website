import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Presentation, Lightbulb, Briefcase, 
  CheckCircle2, Download, ShieldCheck,
  Building, User, Mail, Phone, ArrowRight, ArrowUpRight,
  Settings, BookOpen, Users, Award, FileText
} from "lucide-react";
import { submitForm } from "../../utils/submitForm";

const FdpPage = () => {
  const [formData, setFormData] = useState({
    institution: "", name: "", email: "", phone: "", facultySize: "", website: ""
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

    const { ok, error, fields } = await submitForm("/api/fdp", formData);
    setSubmitting(false);

    if (ok) {
      setFormSuccess("FDP request submitted successfully. Our team will contact you shortly.");
      setFormData({ institution: "", name: "", email: "", phone: "", facultySize: "", website: "" });
    } else if (fields) {
      setFieldErrors(fields);
    } else {
      setFormError(error);
    }
  };

  const fdpFeatures = [
    {
      title: "Teacher Training Programs",
      desc: "Specialized training for teachers to enhance classroom engagement, digital teaching methods, and forward-looking curriculum development.",
      icon: <Presentation size={24} />
    },
    {
      title: "Advanced Teaching Pedagogies",
      desc: "Learn modern techniques for engaging and effective teaching to bridge the gap between traditional academia and the fast-paced digital age.",
      icon: <Lightbulb size={24} />
    },
    {
      title: "Industry-Oriented Learning",
      desc: "Get insights into real-world applications of technology in education and prepare your faculty to mentor the next generation of tech leaders.",
      icon: <Briefcase size={24} />
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-800/40 px-4 py-1.5 rounded-full mb-8 z-10 shadow-lg"
        >
           <ShieldCheck size={14} className="text-blue-400" />
           <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">NEP 2020 Aligned Faculty Training</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-4xl z-10 leading-[1.1]"
        >
          Empower Educators.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            Transform Institutions.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 z-10 leading-relaxed"
        >
          Our Faculty Development Programs (FDPs) are structured to enhance educators’ professional growth, bridging the gap between traditional teaching and modern technological advancements.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 z-10"
        >
          <button onClick={() => document.getElementById('b2b-form').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Request a Proposal
          </button>
          <button onClick={() => document.getElementById('b2b-form').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
            <Download size={18} className="text-zinc-400" /> View Syllabus
          </button>
        </motion.div>
      </section>

      {/* 2. INSTITUTIONAL OUTCOMES (NEW SECTION - Adds heavy data & value) */}
      <div className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800/0 md:divide-zinc-800">
               <div className="flex flex-col items-center text-center px-4">
                  <div className="w-10 h-10 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-3"><Award size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">NAAC & NBA Support</h4>
                  <p className="text-xs text-zinc-500">Validates institutional accreditation metrics.</p>
               </div>
               <div className="flex flex-col items-center text-center px-4">
                  <div className="w-10 h-10 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-3"><FileText size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">Government Certified</h4>
                  <p className="text-xs text-zinc-500">NSDC and AICTE aligned curriculum standards.</p>
               </div>
               <div className="flex flex-col items-center text-center px-4">
                  <div className="w-10 h-10 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-3"><Settings size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">100% Hands-On</h4>
                  <p className="text-xs text-zinc-500">Practical labs instead of theoretical lectures.</p>
               </div>
               <div className="flex flex-col items-center text-center px-4">
                  <div className="w-10 h-10 bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mb-3"><Users size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">Ongoing Mentorship</h4>
                  <p className="text-xs text-zinc-500">Post-training technical support for educators.</p>
               </div>
            </div>
        </div>
      </div>

      {/* 3. THE 3 PILLARS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FDP Core Pillars</h2>
          <p className="text-zinc-400 text-lg">
            We focus on holistic development, ensuring your faculty is equipped with the latest pedagogical and technological tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fdpFeatures.map((feature, index) => (
            <div key={index} className="bg-[#0a0a0a] border border-zinc-800 p-8 md:p-10 rounded-[2rem] hover:border-blue-500/40 transition-colors group flex flex-col">
               <div className="w-14 h-14 bg-blue-900/20 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.desc}
               </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISUAL TRUST BUILDER */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
         <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
               src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" 
               alt="Faculty Workshop" 
               className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-xl">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg mb-4">
                  <CheckCircle2 size={14} /> Certified Program
               </div>
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Designed for the Modern Educator.</h3>
               <p className="text-zinc-300 text-sm md:text-base">
                  Our workshops are highly interactive, hands-on, and tailored strictly to the academic calendar and requirements of your institution.
               </p>
            </div>
         </div>
      </section>

     
      {/* 6. PREMIUM B2B PROPOSAL FORM */}
      <section id="b2b-form" className="py-24 px-6 relative border-t border-zinc-900 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            {/* Left Side: The Pitch */}
            <div className="w-full lg:w-5/12 bg-gradient-to-br from-blue-900/20 to-transparent p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-center relative">
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-8">
                     <Building size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                     Upgrade your academic infrastructure.
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed mb-10">
                     Fill out the form to request a custom Faculty Development Program proposal tailored to your institution's specific needs, faculty size, and technology goals.
                  </p>
                  
                  <div className="space-y-5">
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><CheckCircle2 size={14} /></div>
                        <span className="text-sm font-medium text-zinc-300">Customized Curriculum</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><CheckCircle2 size={14} /></div>
                        <span className="text-sm font-medium text-zinc-300">On-Campus / Online Delivery</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Side: The Form */}
            <div className="w-full lg:w-7/12 p-10 md:p-14 bg-[#0a0a0a]">
               <h3 className="text-2xl font-bold text-white mb-8">Request an FDP Proposal</h3>
               
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
                           <input type="text" name="institution" required value={formData.institution} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="University / School" />
                        </div>
                        {fieldErrors.institution && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.institution}</p>}
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Contact Person</label>
                        <div className="relative group">
                           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <User size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                           </div>
                           <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="Name & Designation" />
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
                           <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block pl-11 p-4 transition-all outline-none" placeholder="name@college.edu" />
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

                  <div className="space-y-2">
                     <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider pl-1">Faculty Size</label>
                     <div className="relative group">
                        <select name="facultySize" required value={formData.facultySize} onChange={handleInputChange} className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none appearance-none">
                           <option value="" disabled>Select expected faculty size...</option>
                           <option value="10-25">10 - 25 Educators</option>
                           <option value="25-50">25 - 50 Educators</option>
                           <option value="50-100">50 - 100 Educators</option>
                           <option value="100+">100+ Educators</option>
                        </select>
                     </div>
                     {fieldErrors.facultySize && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.facultySize}</p>}
                  </div>

                  <button type="submit" disabled={submitting} className="w-full py-4 mt-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] group disabled:opacity-50 disabled:cursor-not-allowed">
                     {submitting ? "Submitting\u2026" : "Submit Institutional Inquiry"} {!submitting && <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                  </button>
               </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default FdpPage;