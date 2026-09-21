import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation,useNavigate } from "react-router-dom";
import { 
  Gamepad2, Bot, BrainCircuit, ArrowRight, 
  Palette, PlayCircle, Terminal, Globe
} from "lucide-react";
import CourseModal from "../CourseModal"; 

const JuniorCard = ({ title, tool, shortDesc, image, gradient, tag, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative w-full bg-zinc-900/40 border border-zinc-800/60 rounded-3xl overflow-hidden hover:border-zinc-600/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
    >
      <div className="h-40 relative overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-cyan-400 uppercase tracking-widest shadow-lg flex items-center gap-1.5">
               <PlayCircle size={10} /> {tag}
            </span>
        </div>
      </div>
      <div className="p-6 relative -mt-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">{shortDesc}</p>
        <div className="mt-auto pt-4 border-t border-zinc-800/50 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group/btn">
                <span className="group-hover/btn:text-cyan-400 transition-colors">View Curriculum</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:text-cyan-400 transition-transform" />
            </span>
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl`}></div>
    </motion.div>
  );
};

const JuniorSyllabus = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [returnPath, setReturnPath] = useState(null); // <-- NEW: Holds the return ticket
  const location = useLocation();
const [savedScroll, setSavedScroll] = useState(0); // <-- YOU MISSED THIS LINE!
  const navigate = useNavigate(); // <-- NEW: Let's us navigate the user

  const tracks = [
    {
      title: "The Gamer",
      subtitle: "Build. Play. Mod.",
      desc: "Turn gaming addiction into logic skills. Covers Scratch, Minecraft, and Python Games.",
      icon: <Gamepad2 className="text-purple-400" size={24} />,
      gradient: "from-purple-500/10 to-blue-500/5",
      modules: [
        { 
          tag: "Game Logic",
          title: "Scratch Game Dev", 
          tool: "Scratch 3.0", 
          shortDesc: "The perfect start. Build 'Super Mario' and 'Hungry Shark' using block-based logic.",
          image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600",
          longDesc: "Scratch is the world's most popular coding platform for kids. We take them from dragging blocks to understanding complex game physics, variables, and logic.", 
          projects: [
            { title: "Super Mario Clone", img: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Hungry Shark", img: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Interactive Story", img: "https://images.pexels.com/photos/3756163/pexels-photo-3756163.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "He used to just play games, now he explains 'loops' and 'variables' to me while building his own.", author: "Sarah M.", role: "Parent of 8yr old" },
          syllabus: [
             { topic: "Module 1: Motion & Sound", detail: "Moving sprites, loops, and adding sound effects." },
             { topic: "Module 2: Interactivity", detail: "Sensing mouse clicks and keyboard presses." },
             { topic: "Module 3: Variables", detail: "Creating scoreboards and tracking lives." },
             { topic: "Module 4: Cloning", detail: "Creating infinite enemies and objects." },
          ]
        },
        { 
          tag: "Engineering",
          title: "Minecraft Engineering", 
          tool: "Redstone Logic", 
          shortDesc: "Don't just mine. Automate. Build smart doors, traps, and secret bases using Redstone circuits.",
          image: "https://wallpaperaccess.com/full/6712862.jpg", 
          longDesc: "We use Minecraft Creative Mode to teach logic gates and electrical engineering. Students build automated farms and security systems.",
          projects: [
            { title: "Auto Farm", img: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Security Door", img: "https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Logic Gates", img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "I didn't know Minecraft could teach circuitry. My son built a working logic gate inside the game!", author: "Rajiv K.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Redstone Basics", detail: "Power sources, levers, buttons, and dust." },
             { topic: "Module 2: Logic Gates", detail: "AND/OR gates and locking mechanisms." },
             { topic: "Module 3: Automation", detail: "Sensors, daylight detectors, and auto-farms." },
          ]
        },
        { 
          tag: "Coding Games",
          title: "Python Gaming", 
          tool: "PyGame", 
          shortDesc: "Transition to real code. Build 2D arcade games like 'Space Invaders' using Python.",
          image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop", 
          longDesc: "The bridge between blocks and text. Students learn Python syntax by rebuilding their favorite arcade classics like Pong and Snake.",
          projects: [
            { title: "Space Invaders", img: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Snake Game", img: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Pong Arcade", img: "https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Coding a real game from scratch gave my daughter so much confidence. PyGame is excellent.", author: "Anita D.", role: "Parent of 12yr old" },
          syllabus: [
             { topic: "Module 1: Pygame Setup", detail: "Creating the game window and game loop." },
             { topic: "Module 2: Drawing & Animating", detail: "Rendering shapes, colors, and moving sprites." },
             { topic: "Module 3: Event Handling", detail: "Keyboard inputs and mouse clicks." },
             { topic: "Module 4: Collision Logic", detail: "Detecting hits and handling Game Over states." },
          ]
        }
      ]
    },
    {
      title: "The Programmer",
      subtitle: "Real Coding Languages.",
      desc: "For students ready for professional syntax. Covers C++ and Python.",
      icon: <Terminal className="text-green-400" size={24} />,
      gradient: "from-green-500/10 to-emerald-500/5",
      modules: [
        {   
          tag: "Fundamentals",
          title: "Python Junior", 
          tool: "Python 3", 
          shortDesc: "The world's #1 language. Learn syntax, loops, and data structures.",
          image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=600&auto=format&fit=crop", 
          longDesc: "A rigorous introduction to text-based coding. Focuses on clean syntax, mathematical logic, and data handling.",
          projects: [
            { title: "Calculator", img: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Number Guess", img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Quiz Game", img: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ], 
          testimonial: { text: "The perfect next step after Scratch. Real code, real syntax, but taught simply.", author: "Dr. Singh", role: "Professor & Parent" },
          syllabus: [
             { topic: "Module 1: Variables & Data", detail: "Integers, Floats, Strings, and Boolean logic." },
             { topic: "Module 2: Control Flow", detail: "If/Else conditions and While/For loops." },
             { topic: "Module 3: Functions", detail: "Writing reusable code blocks." },
             { topic: "Module 4: Data Structures", detail: "Lists, Tuples, and Dictionaries." },
          ]
        },
        { 
          tag: "System Coding",
          title: "C++ Programming", 
          tool: "Logic & Memory", 
          shortDesc: "The 'Fast Lane' of coding. Learn how computers think, memory management, and fast math logic.",
          image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop", 
          longDesc: "For students who want to understand the machine. C++ teaches memory management, high-performance logic, and OOP.",
          projects: [
            { title: "Student DB", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Bank Logic", img: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Login System", img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "C++ is tough, but this course broke it down beautifully. My son understands pointers now!", author: "Vikram R.", role: "Software Engineer" },
          syllabus: [
             { topic: "Module 1: Syntax & Compilers", detail: "How code turns into binary. Input/Output basics." },
             { topic: "Module 2: Control Structures", detail: "Loops, Switch cases, and Break/Continue." },
             { topic: "Module 3: OOP Principles", detail: "Classes, Objects, Inheritance, and Polymorphism." },
             { topic: "Module 4: Memory", detail: "Introduction to Pointers and References." },
          ]
        },
        { 
          tag: "Software Dev",
          title: "Java Junior", 
          tool: "Object Oriented", 
          shortDesc: "The language of Android. Learn Classes, Objects, and Inheritance.",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", 
          longDesc: "The standard for enterprise and Android development. We focus heavily on Object-Oriented Programming (OOP) concepts.",
          projects: [
            { title: "Bank System", img: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Inventory", img: "https://images.pexels.com/photos/6169043/pexels-photo-6169043.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Text Editor", img: "https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Essential for ICSE/CBSE computer science. It helped my daughter ace her school exams.", author: "Meera P.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Environment", detail: "JVM, JDK, and setting up the workspace." },
             { topic: "Module 2: OOP Pillars", detail: "Encapsulation, Inheritance, and Polymorphism." },
             { topic: "Module 3: Exception Handling", detail: "Try-Catch blocks and managing errors." },
             { topic: "Module 4: Multi-Threading", detail: "Running multiple tasks simultaneously." },
          ]
        }
      ]
    },
    {
      title: "The Web Master",
      subtitle: "Design & Deploy.",
      desc: "Build the internet. From No-Code design to Full-Stack development.",
      icon: <Globe className="text-cyan-400" size={24} />,
      gradient: "from-cyan-500/10 to-blue-500/5",
      modules: [
        { 
          tag: "No-Code",
          title: "Rapid Web Design", 
          tool: "Wix Studio", 
          shortDesc: "Build stunning websites in minutes without writing code. Focus on layout and colors.",
          image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600", 
          longDesc: "Perfect for creative minds. Learn visual design principles, color theory, and layout without getting stuck in code syntax.",
          projects: [
            { title: "Portfolio", img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Travel Blog", img: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Store UI", img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "She launched her own bakery website in just 3 weeks. The design looks professional!", author: "Kavita S.", role: "Small Business Owner" },
          syllabus: [
             { topic: "Module 1: Visual Design", detail: "Templates, layouts, and visual hierarchy." },
             { topic: "Module 2: Site Elements", detail: "Adding forms, galleries, and videos." },
             { topic: "Module 3: Mobile Optimization", detail: "Ensuring the site looks good on phones." },
             { topic: "Module 4: Publishing", detail: "Domain setup and going live." },
          ]
        },
        { 
          tag: "Coding",
          title: "Web Developer", 
          tool: "HTML5 & CSS3", 
          shortDesc: "Write the actual code behind websites. Build responsive sites from scratch.",
          image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600", 
          longDesc: "The foundation of the web. Students learn to write raw HTML structure and style it beautifully with CSS and Bootstrap.",
          projects: [
            { title: "Portfolio", img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Login Page", img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Band Site", img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "He stopped using templates and started writing the code himself. That is real skill.", author: "Amit B.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: HTML5 Structure", detail: "Tags, Forms, Tables, and Semantic elements." },
             { topic: "Module 2: CSS3 Styling", detail: "Colors, Fonts, Box Model, and Flexbox." },
             { topic: "Module 3: Bootstrap Framework", detail: "Using the grid system for responsive layouts." },
             { topic: "Module 4: Forms & Visme", detail: "Creating interactive forms and surveys." },
          ]
        },
        { 
          tag: "Website Builder",
          title: "WordPress Pro", 
          tool: "CMS Tools", 
          shortDesc: "Power 40% of the web. Build e-commerce stores and blogs easily.",
          image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600", 
          longDesc: "Learn the industry standard for content management. Build blogs, portfolios, and online stores using powerful themes and plugins.",
          projects: [
            { title: "News Portal", img: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Online Store", img: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Business Site", img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "WordPress is a must-have skill. My son now manages the website for our school club.", author: "Rahul T.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Dashboard Mastery", detail: "Posts vs Pages, Categories, and Tags." },
             { topic: "Module 2: Themes", detail: "Installing and customizing professional themes." },
             { topic: "Module 3: Plugins", detail: "Adding security, SEO, and contact forms." },
             { topic: "Module 4: User Management", detail: "Managing roles and permissions." },
          ]
        }
      ]
    },
    {
      title: "The Engineer",
      subtitle: "Robotics & Hardware.",
      desc: "Bridge software with the real world. Build robots and smart circuits.",
      icon: <Bot className="text-orange-400" size={24} />,
      gradient: "from-orange-500/10 to-red-500/5",
      modules: [
        { 
          tag: "Mechanics",
          title: "Robotics Junior", 
          tool: "Sensors & Motors", 
          shortDesc: "Build 'Smart Dustbins' and 'Traffic Lights' using Sensors. Make things move.",
          image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Hands-on engineering. Learn how to interface code with physical hardware like motors and IR sensors to create autonomous machines.",
          projects: [
            { title: "Line Follower", img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Obstacle Bot", img: "https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Mobile Bot", img: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Seeing his code make a physical robot move was a magical moment for him.", author: "Sandeep G.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Components", detail: "Motors, Drivers, and Power Supply basics." },
             { topic: "Module 2: Sensors", detail: "Using IR and Light sensors for navigation." },
             { topic: "Module 3: Logic Control", detail: "Programming obstacle avoidance logic." },
             { topic: "Module 4: Wireless Control", detail: "Mobile-controlled robots and cameras." },
          ]
        },
        { 
          tag: "Smart Circuits",
          title: "Embedded Systems", 
          tool: "Micro-controllers", 
          shortDesc: "The 'Brain' of the machine. Learn how chips and wires talk to each other.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Deep dive into microcontrollers. Write code that runs on a chip to control displays, keypads, and sensors.",
          projects: [
            { title: "Thermometer", img: "https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Distance Meter", img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Smart Relay", img: "https://images.pexels.com/photos/39290/arduino-microcontroller-electronics-computer-39290.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "He built a digital distance meter for his science fair. Very practical learning.", author: "Dr. Bose", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Sensors", detail: "Interfacing Temperature, IR, and Ultrasonic sensors." },
             { topic: "Module 2: Output Devices", detail: "Controlling 7-Segment Displays and Buzzers." },
             { topic: "Module 3: Motors", detail: "Controlling DC and Servo motors." },
             { topic: "Module 4: Power Control", detail: "Using Relays to control high-voltage appliances." },
          ]
        },
        { 
          tag: "Automation",
          title: "IoT Junior", 
          tool: "Smart Home", 
          shortDesc: "Control your room from your phone. Learn how devices connect to WiFi.",
          image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600&auto=format&fit=crop", 
          longDesc: "The future of connected devices. Learn to send data from sensors to the cloud and control appliances remotely.",
          projects: [
            { title: "Weather Stn", img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Smart Light", img: "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Plant Monitor", img: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "I can now control my room fan with a phone app my daughter built. Amazing!", author: "Mrs. Verma", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Wireless Modules", detail: "Introduction to RF and WiFi communication." },
             { topic: "Module 2: Sensors & Data", detail: "Reading environment data (Temperature/Gas)." },
             { topic: "Module 3: Remote Control", detail: "Controlling Relays via mobile apps." },
             { topic: "Module 4: Automation", detail: "Creating triggers based on sensor data." },
          ]
        }
      ]
    },
    {
      title: "The Creator", 
      subtitle: "Creativity & Office.",
      desc: "Essential digital skills. Animation, Presentations, and Design.",
      icon: <Palette className="text-pink-400" size={24} />,
      gradient: "from-pink-500/10 to-rose-500/5",
      modules: [
        { 
          tag: "Animation",
          title: "2D Animator", 
          tool: "Pivot Animator", 
          shortDesc: "Create cartoons. Learn frame-by-frame animation, rigging, and storytelling.",
          image: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=600", 
          longDesc: "Bring stick figures to life. This course teaches the principles of animation: timing, spacing, and ease using Pivot Animator.",
          projects: [
            { title: "Stickman", img: "https://images.pexels.com/photos/7524996/pexels-photo-7524996.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Parkour", img: "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Short Movie", img: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "My son makes his own cartoons now. It really sparked his creativity.", author: "Neha J.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Frames & Pivots", detail: "Understanding keyframes and pivot manipulation." },
             { topic: "Module 2: Physics of Motion", detail: "Squash, stretch, and overlapping action." },
             { topic: "Module 3: Character Rigging", detail: "Creating custom characters with joints." },
             { topic: "Module 4: Storytelling", detail: "Directing a short animated movie." },
          ]
        },
        { 
          tag: "Graphic Design",
          title: "Digital Artist", 
          tool: "Canva Pro", 
          shortDesc: "Design professional logos, YouTube thumbnails, and posters using color theory.",
          image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Design is communication. Learn hierarchy, typography, and color theory to create stunning visuals for social media and print.",
          projects: [
            { title: "Thumbnail", img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Event Poster", img: "https://images.pexels.com/photos/272337/pexels-photo-272337.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Logo Kit", img: "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "She designs all the posters for her school events now. A very useful skill.", author: "Pooja L.", role: "Teacher" },
          syllabus: [
             { topic: "Module 1: Design Principles", detail: "Alignment, Contrast, and White Space." },
             { topic: "Module 2: Color Psychology", detail: "Choosing palettes that convey emotion." },
             { topic: "Module 3: Typography", detail: "Pairing fonts for professional impact." },
             { topic: "Module 4: Marketing Assets", detail: "Designing for Instagram, YouTube, and Print." },
          ]
        },
        { 
          tag: "Productivity",
          title: "MS Office Junior", 
          tool: "Word, Excel, PPT", 
          shortDesc: "Master the tools of success. Create professional slides, documents, and data sheets.",
          image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600", 
          longDesc: "Essential skills for school and future careers. Learn to format documents, analyze data, and present ideas effectively.",
          projects: [
            { title: "School Report", img: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Trip Budget", img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Presentation", img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "He helps me with my own Excel sheets now! Very practical course.", author: "Mr. Sharma", role: "Parent" },
          syllabus: [
             { topic: "Module 1: MS Word", detail: "Formatting, Styles, and Tables." },
             { topic: "Module 2: MS Excel", detail: "Formulas, Charts, Sorting, and Filtering." },
             { topic: "Module 3: PowerPoint", detail: "Transitions, Animations, and Design Principles." },
             { topic: "Module 4: Data Validation", detail: "Creating drop-down lists and restricting data." },
          ]
        }
      ]
    },
    {
      title: "The Future Techie",
      subtitle: "AI, Logic & Security.",
      desc: "Advanced concepts for analytical minds. AI models and Cyber Safety.",
      icon: <BrainCircuit className="text-indigo-400" size={24} />,
      gradient: "from-indigo-500/10 to-purple-500/5",
      modules: [
        { 
          tag: "Logic",
          title: "Logic Detective", 
          tool: "Algorithms", 
          shortDesc: "Solve complex puzzles like 'The Maze Runner' using pure computational logic.",
          image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Before coding comes logic. Students solve algorithmic puzzles, draw flowcharts, and learn to think like a computer.",
          projects: [
            { title: "Maze Solver", img: "https://images.pexels.com/photos/2088236/pexels-photo-2088236.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Flowchart", img: "https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Logic Puzzle", img: "https://images.pexels.com/photos/5999827/pexels-photo-5999827.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "It improved his math and problem-solving skills significantly.", author: "Ritu W.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Problem Decomposition", detail: "Breaking complex problems into smaller steps." },
             { topic: "Module 2: Algorithms", detail: "Step-by-step instructions for problem solving." },
             { topic: "Module 3: Flowcharts", detail: "Visualizing logic flow and decision trees." },
             { topic: "Module 4: Debugging", detail: "Finding and fixing errors in logic." },
          ]
        },
        { 
          tag: "AI / ML",
          title: "AI Junior", 
          tool: "Machine Learning", 
          shortDesc: "Train computers to see. Build 'Face Detection' and 'Mask Detection' systems.",
          image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Demystifying AI. Students train real machine learning models to classify images, recognize text, and understand data.",
          projects: [
            { title: "Classifier", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Data Model", img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Face ID", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "My daughter explained 'Neural Networks' to me at dinner. I was blown away.", author: "Arjun M.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Introduction to AI", detail: "What is AI, ML, and Applications." },
             { topic: "Module 2: Data Handling", detail: "Collecting, cleaning, and analyzing data." },
             { topic: "Module 3: Machine Learning", detail: "Supervised vs Unsupervised learning basics." },
             { topic: "Module 4: AI Ethics", detail: "Bias, responsibility, and the future of AI." },
          ]
        },
        { 
          tag: "Safety",
          title: "Cyber Safety", 
          tool: "Ethical Hacking", 
          shortDesc: "Learn how hackers steal data, how to create strong passwords, and stay safe online.",
          image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Self-defense for the digital age. Learn about phishing, passwords, digital footprints, and how to protect yourself online.",
          projects: [
            { title: "Pwd Checker", img: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Phishing Sim", img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Privacy Audit", img: "https://images.pexels.com/photos/413279/pexels-photo-413279.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Every kid needs this. He secured our home WiFi and email accounts.", author: "Suresh N.", role: "Parent" },
          syllabus: [
             { topic: "Module 1: Online Safety", detail: "Safe browsing, passwords, and digital footprints." },
             { topic: "Module 2: Threats", detail: "Viruses, Malware, and Phishing attacks." },
             { topic: "Module 3: Linux Basics", detail: "Introduction to terminal commands and file permissions." },
             { topic: "Module 4: Practical Defense", detail: "Creating strong passwords and identifying scams." },
          ]
        }
      ]
    }
  ];


 // ==========================================
  // MAGIC LOGIC TO CATCH THE HOMEPAGE LINK
  // ==========================================
  useEffect(() => {
    if (location.state && location.state.openModal) {
      let foundCourse = null;
      tracks.forEach(track => {
        const match = track.modules.find(mod => mod.title === location.state.openModal);
        if (match) foundCourse = match;
      });

      if (foundCourse) {
        setSelectedCourse(foundCourse);
        
        // Grab the Return Ticket AND the Scroll Position!
        if (location.state.returnPath) {
           setReturnPath(location.state.returnPath);
        }
        if (location.state.savedScroll !== undefined) {
           setSavedScroll(location.state.savedScroll); // <-- ADD THIS LINE!
        }
        
        window.history.replaceState({}, document.title); // Clears state
      }
    }
  }, [location]);

  const handleCloseModal = () => {
    setSelectedCourse(null); 
    
    if (returnPath) {
      // Now 'savedScroll' actually exists and won't crash!
      navigate(returnPath, { state: { restoreScroll: savedScroll } });
      setReturnPath(null); 
    }
  };
  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black pb-32">
      <section className="relative pt-32 pb-20 px-6 border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 px-3 py-1 rounded-full mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
             <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">TechMines Roadmap</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
             What does your child <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Love the most?</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            From Gaming to Rocket Science. Explore our 6 specialized tracks designed to match every personality.
          </p>
        </div>
      </section>

      <div className="space-y-24 py-16 px-6">
        {tracks.map((track, i) => (
          <section key={i} className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 border-b border-zinc-800/50 pb-6">
               <div className={`w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-xl`}>
                  {track.icon}
               </div>
               <div>
                  <h2 className="text-3xl font-bold text-white">{track.title}</h2>
                  <p className="text-zinc-500 text-sm mt-1">{track.subtitle} — {track.desc}</p>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {track.modules.map((mod, j) => (
                 <JuniorCard 
                   key={j}
                   tag={mod.tag}
                   title={mod.title}
                   tool={mod.tool}
                   shortDesc={mod.shortDesc}
                   image={mod.image}
                   gradient={track.gradient}
                   onClick={() => setSelectedCourse(mod)} 
                 />
               ))}
            </div>
          </section>
        ))}
      </div>

      <div className="fixed bottom-8 left-0 right-0 z-50 px-6 pointer-events-none">
        <div className="max-w-xl mx-auto pointer-events-auto">
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl flex items-center justify-between pl-6 pr-2">
                <div className="flex flex-col">
                    <p className="text-white font-bold text-sm">Can't decide a track?</p>
                    <p className="text-zinc-500 text-[10px]">Talk to a mentor for free.</p>
                </div>
                <button className="px-6 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Book Counseling <ArrowRight size={14} />
                </button>
            </div>
        </div>
      </div>

      <CourseModal 
        isOpen={!!selectedCourse} 
        onClose={handleCloseModal}
        course={selectedCourse} 
      />
    </div>
  );
};

export default JuniorSyllabus;