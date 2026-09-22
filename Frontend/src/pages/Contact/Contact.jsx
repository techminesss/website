import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  MessageSquare, Building2, UserCircle, ArrowUpRight 
} from "lucide-react";
import { submitForm } from "../../utils/submitForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", inquiryType: "", message: "", institution: "", website: ""
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

    const { ok, error, fields } = await submitForm("/api/contact", formData);
    setSubmitting(false);

    if (ok) {
      setFormSuccess("Inquiry submitted successfully. Our team will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "", institution: "", website: "" });
    } else if (fields) {
      setFieldErrors(fields);
    } else {
      setFormError(error);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. HERO SECTION - Enterprise Grade */}
      <section className="relative pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 z-10"
        >
           <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
           <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Support & Inquiries</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight z-10"
        >
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TechMines.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto z-10 leading-relaxed"
        >
          Direct your inquiries to the appropriate department. Our admissions and institutional teams are available to assist you.
        </motion.p>
      </section>

      {/* 2. DIRECT CONTACT INFO CARDS - Interactive & Polished */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Visit Us */}
          <div className="group relative bg-[#0a0a0a] border border-zinc-800 p-8 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-500"></div>
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-blue-400 mb-6 transition-all duration-300">
               <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              SCF -24, 5th Floor, Model<br />
              Town Ext.Block-D, Near<br />
              Hotel Silver Stone Ludhiana
            </p>
          </div>

          {/* Card 2: Call Us */}
          <div className="group relative bg-[#0a0a0a] border border-zinc-800 p-8 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-500"></div>
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-blue-400 mb-6 transition-all duration-300">
               <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Lines</h3>
            <div className="text-zinc-400 text-sm space-y-1.5 flex flex-col items-center">
               <a href="tel:+917087691111" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-zinc-600 text-xs uppercase tracking-wider">Phone:</span> +91 70876-91111</a>
               <a href="https://wa.me/917087691111?text=Hi%20TechMines%2C%20I%20want%20to%20know%20more." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:bg-emerald-500 hover:text-black transition-all">
                  WhatsApp Us
               </a>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="group relative bg-[#0a0a0a] border border-zinc-800 p-8 rounded-[2rem] flex flex-col items-center text-center overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-500"></div>
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-blue-400 mb-6 transition-all duration-300">
               <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <div className="text-zinc-400 text-sm space-y-1.5 flex flex-col items-center">
               <a href="mailto:contact@techmines.io" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-zinc-600 text-xs uppercase tracking-wider">Email:</span> contact@techmines.io</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SMART ROUTING INQUIRY FORM - Elevated UI */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-[#0a0a0a] border border-zinc-800 rounded-[2rem] shadow-2xl relative overflow-hidden">
           
           {/* Form Header */}
           <div className="bg-gradient-to-b from-blue-900/10 to-transparent border-b border-zinc-800/50 p-8 md:p-10 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">Official Inquiry Form</h2>
              <p className="text-zinc-400 text-sm relative z-10">Select your inquiry type to be routed to the correct department.</p>
           </div>

           {/* Form Body */}
           <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6 relative z-10 bg-[#050505]">
               
               {/* Honeypot — hidden from real users, bots auto-fill it */}
               <input type="text" name="website" value={formData.website} onChange={handleInputChange} tabIndex={-1} aria-hidden="true" autoComplete="off" className="!absolute !left-[-9999px] !opacity-0 !h-0 !w-0" />
               
               {formSuccess && (
                 <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm text-center">{formSuccess}</div>
               )}
               {formError && (
                 <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">{formError}</div>
               )}

               <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Nature of Inquiry</label>
                 <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                       <MessageSquare size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <select name="inquiryType" required value={formData.inquiryType} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-11 p-4 transition-all outline-none appearance-none">
                       <option value="" disabled>Select department...</option>
                       <option value="student_admission">Student Admissions & Enrollment</option>
                       <option value="school_partnership">Institutional Partnerships (Labs/FDP)</option>
                       <option value="careers">Career Opportunities</option>
                       <option value="press_media">Press & Media Relations</option>
                        <option value="other">General Inquiry</option>
                     </select>
                  </div>
                  {fieldErrors.inquiryType && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.inquiryType}</p>}
               </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative group">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <UserCircle size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                       </div>
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-11 p-4 transition-all outline-none" placeholder="Applicant / Representative Name" />
                     </div>
                     {fieldErrors.name && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.name}</p>}
                  </div>
                 
                 {/* Smooth Animated Conditional Render for Schools */}
                 <AnimatePresence>
                    {formData.inquiryType === "school_partnership" && (
                       <motion.div 
                          initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                          animate={{ opacity: 1, height: "auto", marginTop: 0 }} 
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="space-y-2 overflow-hidden"
                       >
                          <label className="text-[10px] font-bold text-blue-400 uppercase tracking-widest pl-1">Institution Name</label>
                          <div className="relative group">
                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Building2 size={16} className="text-blue-500" />
                             </div>
                              <input type="text" name="institution" required value={formData.institution} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-blue-500/30 text-white text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-11 p-4 transition-all outline-none" placeholder="Name of your organization" />
                           </div>
                           {fieldErrors.institution && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.institution}</p>}
                        </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Email Address</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <Mail size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                         <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-11 p-4 transition-all outline-none" placeholder="email@domain.com" />
                     </div>
                     {fieldErrors.email && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.email}</p>}
                  </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Phone Number</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <Phone size={16} className="text-zinc-600 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                         <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-11 p-4 transition-all outline-none" placeholder="+91" />
                     </div>
                     {fieldErrors.phone && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.phone}</p>}
                  </div>
               </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Message Details</label>
                  <textarea name="message" rows="4" required value={formData.message} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-4 transition-all resize-none outline-none" placeholder="Please provide specific details regarding your inquiry..."></textarea>
                  {fieldErrors.message && <p className="text-red-400 text-sm mt-1 pl-1">{fieldErrors.message}</p>}
               </div>

               <button type="submit" disabled={submitting} className="w-full py-4 mt-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] group disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? "Submitting\u2026" : "Submit Inquiry"} {!submitting && <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                </button>
           </form>
        </div>
      </section>

      {/* 4. OFFICE HOURS - Neatly packaged */}
      <section className="pb-12 px-6 flex justify-center">
         <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 shadow-sm">
            <Clock size={16} className="text-blue-400" />
            <span className="text-xs font-medium">Standard response time is <strong className="text-white">24 business hours</strong> (Mon-Sat, 9AM - 6PM).</span>
         </div>
      </section>

    </div>
  );
};

export default Contact;