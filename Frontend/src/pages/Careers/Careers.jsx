import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Send,
  UploadCloud,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Users,
  ArrowUpRight,
  ChevronDown,
  Rocket
} from "lucide-react";
import { submitForm } from "../../utils/submitForm";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const [applicationModalJob, setApplicationModalJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    resume: null,
    coverNote: "",
    website: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (applicationModalJob) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setIsSubmitted(false);
        setFormError("");
        setFieldErrors({});
        setFormData({
          fullName: "", email: "", phone: "",
          portfolio: "", experience: "", resume: null,
          coverNote: "", website: ""
        });
      }, 0);

      const handleKeyDown = (e) => {
        if (e.key === "Escape") setApplicationModalJob(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [applicationModalJob]);

  const departments = [
    { id: "all", label: "All Openings" },
    { id: "teaching", label: "Instruction & Mentorship" },
    { id: "engineering", label: "Engineering & Labs" },
    { id: "growth", label: "Growth & Institutional Sales" }
  ];

  const perks = [
    {
      title: "Real Impact",
      desc: "Transform traditional rote school computer education into genuine builders and innovators.",
      icon: <Rocket size={24} className="text-orange-500" />
    },
    {
      title: "Cutting-Edge Tech Stack",
      desc: "Work with modern robotics kits, microcontrollers, ROS, GenAI APIs, and full-stack environments.",
      icon: <Cpu size={24} className="text-blue-400" />
    },
    {
      title: "Hyper-Growth Environment",
      desc: "Collaborate directly with founders, launch new lab setups, and influence curriculum roadmaps.",
      icon: <Users size={24} className="text-emerald-400" />
    },
    {
      title: "Flexible & Mission-Driven",
      desc: "Competitive compensation, mentorship culture, and rapid internal promotion paths.",
      icon: <Sparkles size={24} className="text-purple-400" />
    }
  ];

  const jobOpenings = [
    {
      id: "stem-mentor",
      dept: "teaching",
      title: "STEM & Robotics Educator",
      type: "Full-Time / Part-Time",
      location: "Ludhiana (On-Campus)",
      experience: "0 - 3 Years",
      summary: "Mentor school students (ages 8–15) in robotics, Arduino circuits, block coding, and introductory Python.",
      responsibilities: [
        "Deliver interactive, hands-on lab sessions at partner schools and the TechMines hub.",
        "Guide students through physical hardware builds (line followers, obstacle avoiders, IoT sensors).",
        "Evaluate student progress and give structured feedback to parents.",
        "Assist in maintaining lab inventory, 3D printers, and electronic toolkits."
      ],
      requirements: [
        "Background in Computer Science, Electronics, Mechanical Engineering, or related technical degrees (BCA / B.Tech / MCA).",
        "Strong foundation in basic electronics, Scratch/Blockly, and C/C++ or Python.",
        "Excellent communication skills and genuine passion for teaching young learners."
      ]
    },
    {
      id: "fullstack-instructor",
      dept: "teaching",
      title: "Senior Full-Stack & AI Instructor",
      type: "Full-Time",
      location: "Ludhiana / Hybrid",
      experience: "1 - 4 Years",
      summary: "Lead advanced software development batches for seniors and college students covering MERN and AI workflows.",
      responsibilities: [
        "Conduct live project-based training on React, Node.js, Express, databases, and REST APIs.",
        "Introduce modern AI tooling, prompt engineering, and model deployment pipelines.",
        "Mentor students on architecture, Git workflows, and interview preparation.",
        "Continuously refresh lesson plans to keep pace with industry standards."
      ],
      requirements: [
        "Proven software engineering experience (MERN or Python stack).",
        "Hands-on portfolio or shipped production web apps.",
        "Ability to distill complex technical architecture into approachable concepts."
      ]
    },
    {
      id: "lab-engineer",
      dept: "engineering",
      title: "ATL & Robotics Lab Integration Engineer",
      type: "Full-Time",
      location: "Ludhiana & Field Visits",
      experience: "1 - 3 Years",
      summary: "Deploy and commission ATAL Tinkering Labs, AI Workstations, and STEM hardware inside partner schools.",
      responsibilities: [
        "Plan, install, and calibrate 3D printers, IoT arrays, and electronics benches at institutions.",
        "Conduct initial train-the-trainer workshops for school faculty.",
        "Troubleshoot hardware malfunctions, PCB issues, and sensor integrations on site.",
        "Ensure standard operating safety protocols across school labs."
      ],
      requirements: [
        "Practical experience with ATL Packages, Arduino, ESP32, Raspberry Pi, and 3D printing slicing software.",
        "Willingness to travel locally to educational partner campuses.",
        "Problem-solving mindset and hardware prototyping skills."
      ]
    },
    {
      id: "b2b-manager",
      dept: "growth",
      title: "Institutional Partnerships Manager (B2B)",
      type: "Full-Time",
      location: "Ludhiana",
      experience: "2 - 5 Years",
      summary: "Drive school partnerships, lab setups, and campus workshops across Punjab and northern education circuits.",
      responsibilities: [
        "Initiate contact with school principals, management boards, and trust directors.",
        "Present proposals for ATAL Tinkering Labs, NEP 2020 alignments, and custom faculty development.",
        "Manage the end-to-end sales cycle from initial walkthrough to agreement sign-off.",
        "Coordinate with the operations team to ensure smooth on-ground delivery."
      ],
      requirements: [
        "Prior experience in B2B ed-tech sales, institutional outreach, or publishing sales.",
        "High degree of professional empathy and persuasive presentation capabilities.",
        "Deep familiarity with CBSE, ICSE, and state academic calendars."
      ]
    }
  ];

  const filteredJobs =
    selectedDepartment === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.dept === selectedDepartment);

  const MAX_RESUME_SIZE_MB = 5;

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setFieldErrors((prev) => ({ ...prev, [name]: 'Only PDF, DOC, and DOCX files are accepted.' }));
        e.target.value = ''; // clear the input
        setFormData((prev) => ({ ...prev, [name]: null }));
        return;
      }
      
      if (file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
        setFieldErrors((prev) => ({ ...prev, [name]: `File must be smaller than ${MAX_RESUME_SIZE_MB}MB` }));
        e.target.value = ''; // clear the input
        setFormData((prev) => ({ ...prev, [name]: null }));
        return;
      }
      
      setFormData((prev) => ({ ...prev, [name]: file }));
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    } else if (files) {
      setFormData((prev) => ({ ...prev, [name]: null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors({});
    setFormError("");

    const fd = new FormData();
    fd.append("fullName", formData.fullName);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("portfolio", formData.portfolio);
    fd.append("experience", formData.experience);
    fd.append("coverNote", formData.coverNote);
    fd.append("website", formData.website);
    if (formData.resume) fd.append("resume", formData.resume);

    const { ok, error, fields } = await submitForm("/api/careers", fd);
    setSubmitting(false);

    if (ok) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setApplicationModalJob(null);
        setFormData({
          fullName: "", email: "", phone: "",
          portfolio: "", experience: "", resume: null,
          coverNote: "", website: ""
        });
      }, 2000);
    } else if (fields) {
      setFieldErrors(fields);
    } else {
      setFormError(error);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#ff5e00] selection:text-white pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#ff5e00]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 z-10 shadow-lg"
        >
          <Sparkles size={14} className="text-[#ff5e00]" />
          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
            Careers at TechMines
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight z-10 max-w-4xl leading-[1.1]"
        >
          Build the Engineers of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff5e00] to-amber-500">
            Tomorrow, Today.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 z-10 leading-relaxed"
        >
          Join a team of engineers, mentors, and educators on a mission to turn passive screen time
          into high-level problem solving, robotics, and software craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 z-10"
        >
          <a
            href="#openings"
            className="px-8 py-4 bg-[#ff5e00] hover:bg-[#ff6f1a] text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(255,94,0,0.3)] hover:scale-105 active:scale-95"
          >
            Explore Open Positions
          </a>
        </motion.div>
      </section>

      {/* 2. CULTURE & PERKS STRIP */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-y border-zinc-900">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#ff5e00] mb-2">
            Why Work With Us
          </p>
          <h2 className="text-3xl font-bold text-white">Built for Makers and Builders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] border border-zinc-800/80 p-8 rounded-3xl flex flex-col hover:border-zinc-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OPEN POSITIONS SECTION */}
      <section id="openings" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Open Positions</h2>
            <p className="text-zinc-500 text-base">
              Find your role and help us elevate technology education.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedDepartment === dept.id
                    ? "bg-[#ff5e00] text-white"
                    : "bg-[#0a0a0a] border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <motion.div
                  layout
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-[#0a0a0a] border border-zinc-800 hover:border-zinc-700 rounded-3xl overflow-hidden transition-colors"
                >
                  {/* Summary Bar */}
                  <div
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-[#ff5e00] uppercase tracking-wider">
                          {job.type}
                        </span>
                        <span className="text-zinc-500 text-xs flex items-center gap-1">
                          <MapPin size={12} /> {job.location}
                        </span>
                        <span className="text-zinc-500 text-xs flex items-center gap-1">
                          <Clock size={12} /> {job.experience}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{job.title}</h3>
                      <p className="text-zinc-400 text-sm max-w-3xl">{job.summary}</p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplicationModalJob(job);
                        }}
                        className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
                      >
                        Apply Now <ArrowUpRight size={14} />
                      </button>
                      <div
                        className={`w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-white" : ""
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Accordion Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-zinc-800/80 bg-zinc-950/50 p-6 md:p-8 space-y-6"
                      >
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff5e00] mb-3">
                            Key Responsibilities
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {job.responsibilities.map((res, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                <CheckCircle2 size={16} className="text-[#ff5e00] shrink-0 mt-0.5" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                            Candidate Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-zinc-800 flex justify-end">
                          <button
                            onClick={() => setApplicationModalJob(job)}
                            className="px-8 py-3.5 bg-[#ff5e00] hover:bg-[#ff6f1a] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-2"
                          >
                            Submit Application for this Role <ArrowUpRight size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. GENERAL TALENT NETWORK CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff5e00]/10 blur-[60px] rounded-full pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-2">Don't see your specific role?</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
            We are always scouting for high-initiative builders, guest mentors, and hardware tinkerers.
          </p>
          <a
            href="mailto:contact@techmines.io"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff5e00] hover:text-orange-300 transition-colors"
          >
            Drop your portfolio at contact@techmines.io <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* 5. APPLICATION MODAL */}
      <AnimatePresence>
        {applicationModalJob && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setApplicationModalJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-zinc-800 rounded-[2rem] max-w-xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[10px] font-bold text-[#ff5e00] uppercase tracking-widest">
                    Job Application
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {applicationModalJob.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    {applicationModalJob.location} • {applicationModalJob.type}
                  </p>
                </div>
                <button
                  onClick={() => setApplicationModalJob(null)}
                  className="text-zinc-500 hover:text-white transition-colors p-2"
                >
                  ✕
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 size={48} className="text-[#ff5e00] mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-white">Application Received!</h4>
                  <p className="text-zinc-400 text-sm mt-2">
                    Our team will review your credentials and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input type="text" name="website" value={formData.website} onChange={handleInputChange} tabIndex={-1} aria-hidden="true" autoComplete="off" className="!absolute !left-[-9999px] !opacity-0 !h-0 !w-0" />
                  
                  {formError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">{formError}</div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#ff5e00] transition-colors"
                    />
                    {fieldErrors.fullName && <p className="text-red-400 text-sm mt-1">{fieldErrors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        maxLength={254}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#ff5e00] transition-colors"
                      />
                      {fieldErrors.email && <p className="text-red-400 text-sm mt-1">{fieldErrors.email}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        minLength={10}
                        maxLength={10}
                        pattern="\d{10}"
                        title="Phone number must be exactly 10 digits"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#ff5e00] transition-colors"
                      />
                      {fieldErrors.phone && <p className="text-red-400 text-sm mt-1">{fieldErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                        Portfolio / GitHub / LinkedIn
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://"
                        className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#ff5e00] transition-colors"
                      />
                      {fieldErrors.portfolio && <p className="text-red-400 text-sm mt-1">{fieldErrors.portfolio}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                        Years of Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        maxLength={5000}
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g. 1.5 Years"
                        className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#ff5e00] transition-colors"
                      />
                      {fieldErrors.experience && <p className="text-red-400 text-sm mt-1">{fieldErrors.experience}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                      Upload Resume (PDF / Doc)
                    </label>
                    <div className="relative border border-dashed border-zinc-800 hover:border-zinc-600 rounded-xl p-4 text-center cursor-pointer bg-zinc-950">
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleInputChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <UploadCloud size={20} className="mx-auto text-zinc-500 mb-1" />
                      <p className="text-xs text-zinc-400">
                        {formData.resume ? formData.resume.name : "Click to attach your CV"}
                      </p>
                    </div>
                    {fieldErrors.resume && <p className="text-red-400 text-sm mt-1">{fieldErrors.resume}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider pl-1">
                      Brief Note
                    </label>
                    <textarea
                      name="coverNote"
                      rows="3"
                      maxLength={5000}
                      value={formData.coverNote}
                      onChange={handleInputChange}
                      placeholder="Share why you'd like to build with TechMines..."
                      className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-xl p-3 outline-none focus:border-[#ff5e00] transition-colors resize-none"
                    />
                    {fieldErrors.coverNote && <p className="text-red-400 text-sm mt-1">{fieldErrors.coverNote}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#ff5e00] hover:bg-[#ff6f1a] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,94,0,0.3)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting\u2026" : "Submit Candidacy"} {!submitting && <Send size={14} />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;