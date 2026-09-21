import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, MonitorPlay, Users, 
  MapPin, CalendarDays, ArrowUpRight, ChevronRight,
  Star, Quote, Award, Code2
} from "lucide-react";
import { Link } from "react-router-dom";

const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Highlights" },
    { id: "labs", label: "School Labs" },
    { id: "events", label: "Workshops" },
    { id: "projects", label: "Student Projects" }
  ];

  // DATA: Authentic, realistic metrics for a fast-growing 1-year-old startup
  const metrics = [
    { value: "500+", label: "Active Students" },
    { value: "5+", label: "Partner Schools" },
    { value: "15+", label: "Bootcamps Hosted" },
    { value: "100%", label: "Hands-on Learning" }
  ];

  // DATA: Clean, straightforward gallery items (No hidden hover text)
  const galleryItems = [
    {
      id: 1, type: "labs",
      title: "ATAL Tinkering Lab Integration",
      location: "Cambridge Intl. School",
      desc: "Our latest deployment featuring 3D printers, IoT kits, and a complete robotics arena for hands-on engineering.",
      image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Building2 size={18} />,
      tags: ["Infrastructure", "Robotics"]
    },
    {
      id: 2, type: "projects",
      title: "Python Homework Assistant",
      location: "Sneha P. (Class 9)",
      desc: "A custom terminal-based chatbot built entirely in Python to help solve step-by-step algebra equations.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <MonitorPlay size={18} />,
      tags: ["Python", "Logic"]
    },
    {
      id: 3, type: "events",
      title: "Cyber Safety Masterclass",
      location: "BCM Arya Auditorium",
      desc: "An engaging 2-hour session teaching over 300 students the basics of digital footprints and online safety.",
      image: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Users size={18} />,
      tags: ["Cyber Security", "Seminar"]
    },
    {
      id: 4, type: "projects",
      title: "Smart Plant Monitor",
      location: "Rahul K. (Class 6)",
      desc: "An Arduino-based IoT project that measures soil moisture and blinks an LED when the plant needs watering.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Code2 size={18} />,
      tags: ["Arduino", "Hardware"]
    },
    {
      id: 5, type: "labs",
      title: "AI & Coding Hub Setup",
      location: "Sacred Heart Convent",
      desc: "Upgraded their existing computer lab with modern software stacks to teach Python and block-coding effectively.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Building2 size={18} />,
      tags: ["AI Lab", "Curriculum"]
    },
    {
      id: 6, type: "events",
      title: "Weekend Robotics Bootcamp",
      location: "TechMines Campus",
      desc: "A hands-on weekend event where 25 students built and programmed their first obstacle-avoiding rovers.",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800&auto=format&fit=crop",
      icon: <Users size={18} />,
      tags: ["Bootcamp", "Hardware"]
    }
  ];

  // DATA: Social Proof (Authentic early-adopter quotes)
  const testimonials = [
    {
      quote: "TechMines brought a completely fresh approach to our school. In just a few months, they updated our outdated computer syllabus to actual modern coding.",
      name: "Dr. R. K. Sharma",
      role: "School Principal",
      type: "School Partner"
    },
    {
      quote: "I was tired of standard tuitions. Seeing my 12-year-old actually type real Python code and build a game after just a few weeks at TechMines was amazing.",
      name: "Priya Mehta",
      role: "Parent of Class 7 Student",
      type: "B2C Parent"
    },
    {
      quote: "The robotics bootcamp was the best weekend activity my son has done. The mentors are young, energetic, and actually work in the tech industry.",
      name: "Sandeep Singh",
      role: "Parent of Class 5 Student",
      type: "B2C Parent"
    }
  ];

  // DATA: Blogs
  const blogPosts = [
    {
      title: "Why block-coding is the perfect starting point for kids",
      date: "Recent Post",
      desc: "How visual logic building creates a seamless transition to text-based languages like Python.",
      image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Bridging the gap between school textbooks and real tech",
      date: "Recent Post",
      desc: "Our approach to ensuring students learn skills that are actually used in the modern software industry.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "What is an ATAL Tinkering Lab?",
      date: "Recent Post",
      desc: "A quick guide for school administrators looking to implement the government's flagship innovation workspace.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filteredItems = activeFilter === "all" ? galleryItems : galleryItems.filter(item => item.type === activeFilter);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. HERO SECTION & METRICS BAR */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-4 py-1.5 rounded-full mb-8 z-10"
        >
           <Award size={14} className="text-blue-400" />
           <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">TechMines Impact</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight z-10"
        >
          Proof of <span className="text-blue-500">Work.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto z-10 leading-relaxed mb-16"
        >
          A look at our recent school partnerships, campus workshops, and the incredible projects built by our students.
        </motion.p>

        {/* Floating Metrics Bar - Authentic Numbers */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="w-full max-w-5xl mx-auto bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800/0 md:divide-zinc-800 relative z-10 shadow-2xl"
        >
           {metrics.map((metric, i) => (
             <div key={i} className="flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{metric.label}</p>
             </div>
           ))}
        </motion.div>
      </section>

      {/* 2. CLEAN GRID GALLERY (No hidden hover states, consistent fonts) */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
           {filterOptions.map(option => (
              <button 
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeFilter === option.id ? "bg-blue-600 text-white" : "bg-[#0a0a0a] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"}`}
              >
                {option.label}
              </button>
           ))}
        </div>

        {/* Standard 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden group flex flex-col hover:border-zinc-600 transition-colors"
              >
                 {/* Image Container */}
                 <div className="h-56 relative overflow-hidden bg-zinc-900 shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                       <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                          <MapPin size={12} className="text-blue-500"/> {item.location}
                       </span>
                    </div>
                 </div>
                 
                 {/* Content Container */}
                 <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                       {item.desc}
                    </p>
                    
                    {/* Tags at bottom */}
                    <div className="mt-auto pt-4 border-t border-zinc-800/50 flex gap-2">
                       {item.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                             {tag}
                          </span>
                       ))}
                    </div>
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. WALL OF LOVE (Testimonials) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 mt-10">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What people are saying</h2>
            <p className="text-zinc-400 text-lg">Feedback from our early adopters, parents, and school partners.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
               <div key={index} className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-3xl flex flex-col">
                  <div className="flex items-center gap-1 mb-6">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-blue-500 fill-blue-500" />)}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 grow">"{test.quote}"</p>
                  <div className="mt-auto border-t border-zinc-800/50 pt-5">
                     <p className="font-bold text-white text-sm">{test.name}</p>
                     <p className="text-xs text-zinc-500 mt-0.5">{test.role}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 4. INSIGHTS & BLOGS */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">TechMines Updates</h2>
               <p className="text-zinc-500 text-lg">Latest news, articles, and insights from our team.</p>
            </div>
            <button className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors flex items-center gap-2">
               View All <ArrowUpRight size={16} />
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
               <div key={index} className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors group flex flex-col">
                  <div className="h-48 relative overflow-hidden bg-zinc-900">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                  </div>
                  <div className="p-6 flex flex-col grow">
                     <div className="flex items-center gap-2 text-zinc-500 mb-3">
                        <CalendarDays size={14} className="text-blue-500" />
                        <span className="text-xs font-bold uppercase tracking-widest">{post.date}</span>
                     </div>
                     <h3 className="text-lg font-bold text-white mb-3 leading-snug">{post.title}</h3>
                     <p className="text-zinc-400 text-sm leading-relaxed mb-6">{post.desc}</p>
                     <Link to="#" className="mt-auto text-sm text-blue-400 font-bold flex items-center gap-1.5 hover:gap-2.5 transition-all">
                        Read Article <ChevronRight size={16} />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default Showcase;