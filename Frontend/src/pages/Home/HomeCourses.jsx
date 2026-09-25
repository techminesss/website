import React, { useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Layers, ArrowRight, Bot, Wifi, BrainCircuit, Code2, ShieldAlert } from "lucide-react";
import { Link,useLocation,useNavigate } from "react-router-dom"; 

const HomeCurriculum = () => {
  const [isSenior, setIsSenior] = useState(false);
  const navigate = useNavigate();
  
  // TRACK 1: JUNIOR COURSES (Matches Junior Page Data & Modal Titles)
  const juniorCourses = [
    {
      role: "Logic Detective",
      modalTitle: "Logic Detective", 
      subtitle: "FOUNDATION",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=webp&q=80&w=800&auto=format&fit=crop", 
      icon: <BrainCircuit size={20} className="text-blue-400" />,
      textColor: "text-blue-400",
      dotColor: "bg-blue-500",
      desc: "Logic before typing. We use fun visual puzzles and algorithms to teach them how to think like a real programmer.",
      topics: ["Algorithmic Thinking", "Problem Solving", "Pattern Recognition"], 
      link: "/courses/junior",
      age: "Ages 7-14"
    },
    {
      role: "Minecraft Engineer",
      modalTitle: "Minecraft Engineering", 
      subtitle: "GAME-BASED LEARNING",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?fm=webp&q=80&w=800&auto=format&fit=crop",
      icon: <Gamepad2 size={20} className="text-green-400" />,
      textColor: "text-green-400",
      dotColor: "bg-green-500",
      desc: "Coding inside their favorite game. They learn electrical engineering logic by building smart doors and automated machines.",
      topics: ["Logic Gates", "Redstone Circuits", "Automation Logic"], 
      link: "/courses/junior",
      age: "Ages 7-14"
    },
    {
      role: "Robotics Junior",
      modalTitle: "Robotics Junior", 
      subtitle: "HANDS-ON HARDWARE",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800&auto=format&fit=crop",
      icon: <Bot size={20} className="text-orange-400" />,
      textColor: "text-orange-400",
      dotColor: "bg-orange-500",
      desc: "Hands-on engineering. They will build real, physical robots that can move, sense obstacles, and follow their commands.",
      topics: ["Sensors & Wiring", "Building Circuits", "Arduino Logic"], 
      link: "/courses/junior",
      age: "Ages 7-14"
    }
  ];

  // TRACK 2: SENIOR COURSES (Matches Senior Page Data & Modal Titles)
  const seniorCourses = [
    {
      role: "Full Stack Web App",
      modalTitle: "Full Stack Web App", 
      subtitle: "SECURE DEVELOPMENT",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Code2 size={20} className="text-cyan-400" />,
      textColor: "text-cyan-400",
      dotColor: "bg-cyan-500",
      desc: "Master the MERN stack. Build and deploy production-ready, interactive web applications just like a Silicon Valley engineer.",
      topics: ["React.js", "Node.js & Express", "MongoDB Database"], 
      link: "/courses/senior",
      age: "Ages 15+"
    },
    {
      role: "Foundational AI & ML",
      modalTitle: "Generative AI & LLMs",
      subtitle: "AI & MACHINE LEARNING",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <BrainCircuit size={20} className="text-purple-400" />,
      textColor: "text-purple-400",
      dotColor: "bg-purple-500",
      desc: "Train your own machine learning models. Understand the mathematics and Python code powering modern Artificial Intelligence.",
      topics: ["Python Data Science", "Neural Networks", "Model Training"], 
      link: "/courses/senior",
      age: "Ages 15+"
    },
    {
      role: "VAPT Cyber Security",
      modalTitle: "VAPT & Penetration Testing", 
      subtitle: "ETHICAL HACKING",
      image: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <ShieldAlert size={20} className="text-red-400" />,
      textColor: "text-red-400",
      dotColor: "bg-red-500",
      desc: "Learn to defend networks by hacking them. Master penetration testing, network sniffing, and corporate data security.",
      topics: ["Penetration Testing", "Cryptography", "Vulnerability Scans"], 
      link: "/courses/senior",
      age: "Ages 15+"
    }
  ];

  const currentCourses = isSenior ? seniorCourses : juniorCourses;

  return (
    <section id="courses" className="w-full pt-24 pb-12 bg-zinc-950 font-sans" aria-label="Course Curriculum">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <header className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Learning Roadmap.</span>
          </h2>
          
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
            From their first logic puzzle to their first production-ready web app. We scale with your skills.
          </p>

          {/* TOGGLE SWITCH */}
          <div className="relative inline-flex bg-zinc-900 p-1 rounded-full border border-zinc-800">
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute top-1 bottom-1 w-[160px] bg-zinc-800 rounded-full shadow-md ${isSenior ? 'left-[165px]' : 'left-1'}`}
            />
            
            <button 
              onClick={() => setIsSenior(false)}
              className={`relative z-10 w-[160px] py-3 rounded-full font-bold text-sm transition-colors duration-200 ${!isSenior ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              Junior (Ages 7-14)
            </button>
            
            <button 
              onClick={() => setIsSenior(true)}
              className={`relative z-10 w-[160px] py-3 rounded-full font-bold text-sm transition-colors duration-200 ${isSenior ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              Senior (Ages 15+)
            </button>
          </div>
        </header>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {currentCourses.map((course, index) => (
              <motion.article 
                key={course.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden flex flex-col hover:border-zinc-600 transition-all shadow-xl"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  <img 
                    src={course.image} 
                    alt={course.role}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg">
                     <span className="text-[10px] font-bold text-white uppercase tracking-widest">{course.age}</span>
                  </div>
                </div>

                {/* ICON (Floating) */}
                <div className="absolute top-48 right-6 w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 group-hover:border-white/20 transition-colors shadow-2xl">
                   {course.icon}
                </div>

                {/* TEXT CONTENT */}
                <div className="p-6 pt-4 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{course.role}</h3>
                    <p className={`${course.textColor} text-[10px] font-bold uppercase tracking-widest`}>
                      {course.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {course.desc}
                  </p>

                  {/* CURRICULUM HIGHLIGHTS */}
                  <div className="mt-auto bg-zinc-950 rounded-2xl p-5 border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                      WHAT THEY LEARN:
                    </p>
                    <ul className="space-y-2">
                      {course.topics.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${course.dotColor}`}></div>
                          <span className="text-zinc-300 text-xs font-medium tracking-wide">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* THE MAGIC LINK TO OPEN MODAL */}
                {/* THIS IS THE FIX: It grabs window.scrollY ON CLICK, not on load */}
                  <button 
                    onClick={() => {
                      navigate(course.link, {
                        state: {
                          openModal: course.modalTitle,
                          returnPath: "/",
                          savedScroll: window.scrollY // Grabs the exact pixel right now!
                        }
                      });
                    }}
                    className="w-full mt-6 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors group/btn"
                  >
                    VIEW FULL SYLLABUS
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* DYNAMIC EXPLORE BUTTON */}
        <div className="flex justify-center">
            <Link 
              to={isSenior ? "/courses/senior" : "/courses/junior"} 
              className="px-10 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full transition-all flex items-center gap-2 border border-zinc-800 hover:scale-105 active:scale-95 shadow-lg"
            >
               {isSenior ? "Explore All Senior Courses" : "Explore All Junior Courses"}
                <ArrowRight size={18} />
            </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeCurriculum;