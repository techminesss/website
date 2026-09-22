import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  BrainCircuit, ShieldCheck, Code2, Database, 
  Server, TrendingUp, ArrowRight, PlayCircle 
} from "lucide-react";
import CourseModal from "../CourseModal"; 
import DemoBookingModal from "../../../components/DemoBookingModal";

const SeniorCard = ({ title, tool, shortDesc, image, gradient, tag, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative w-full bg-zinc-900/40 border border-zinc-800/60 rounded-3xl overflow-hidden hover:border-zinc-600/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
    >
      <div className="h-40 relative overflow-hidden shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-cyan-400 uppercase tracking-widest shadow-lg flex items-center gap-1.5">
               <PlayCircle size={10} /> {tag}
            </span>
        </div>
      </div>

      <div className="p-6 relative -mt-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
            {shortDesc}
        </p>
        <div className="mt-auto pt-4 border-t border-zinc-800/50 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group/btn">
                <span className="group-hover/btn:text-cyan-400 transition-colors">View Syllabus</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:text-cyan-400 transition-transform" />
            </span>
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl`}></div>
    </motion.div>
  );
};

const SeniorSyllabus = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [returnPath, setReturnPath] = useState(null);
  const [savedScroll, setSavedScroll] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const tracks = [
    {
      title: "AI & Machine Learning",
      subtitle: "The Future of Tech.",
      desc: "Master computer vision, generative LLM pipelines, and autonomous agentic workflows.",
      icon: <BrainCircuit className="text-emerald-400" size={24} />,
      gradient: "from-emerald-500/10 to-teal-500/5",
      modules: [
        {
          tag: "Visual AI",
          title: "Computer Vision",
          tool: "OpenCV & YOLOv8",
          shortDesc: "Train machines to see, detect, and track in real-time. Covers OpenCV, deep learning CNNs, and YOLOv8.",
          image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
          longDesc: "A complete 3-month hands-on computer vision program. Move from core image manipulation with NumPy and OpenCV to deep convolutional networks, real-time object tracking with YOLOv8, and web deployment.",
          projects: [
            { title: "Real-Time Video Filter", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Custom YOLOv8 Detector", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "CCTV & Plate Reader", img: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: {
            text: "Building the custom YOLOv8 model and deploying it to a web app helped me land an AI internship immediately.",
            author: "Rohan D.",
            role: "B.Tech Student"
          },
          syllabus: [
            { topic: "Module 1: CV Fundamentals & Setup", detail: "CV pipeline, image vs video, OpenCV environment setup, and industry use cases." },
            { topic: "Module 2: Python & NumPy for Images", detail: "Arrays, matrix manipulation, indexing, slicing, and image reshaping scripts." },
            { topic: "Module 3: Image Processing Core", detail: "Color spaces (RGB, BGR, Grayscale), blur, edge detection, thresholding, morphology." },
            { topic: "Module 4: Visualization & Augmentation", detail: "Matplotlib comparisons, dataset organization, labeling, and data augmentation." },
            { topic: "Module 5: Real-Time Video Processing", detail: "Webcam feeds, FPS optimization, overlaying text/shapes, and live video filters." },
            { topic: "Module 6: Features & Object Detection", detail: "Contours, shape detection, corner keypoints, bounding boxes, template matching." },
            { topic: "Module 7: Deep Learning & CNNs", detail: "Neural network layers, pooling, activations, transfer learning, and image classifiers." },
            { topic: "Module 8: Real-Time Detection with YOLO", detail: "YOLOv8 architecture, multi-object detection, custom training, mAP and IoU evaluation." },
            { topic: "Module 9: Advanced CV Applications", detail: "Face/hand detection, emotion recognition, license plate reading, and CCTV logic." },
            { topic: "Module 10: Model Deployment", detail: "Exporting models, deployment with Streamlit/Gradio, and edge device optimization." },
            { topic: "Module 11: Production Capstone", detail: "End-to-end CV application development, debugging, testing, and final presentation." }
          ]
        },
        {
          tag: "Generative AI",
          title: "Generative AI & LLMs",
          tool: "LangChain, RAG & APIs",
          shortDesc: "Build custom chatbots, RAG knowledge bases, and content engines using state-of-the-art LLMs.",
          image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
          longDesc: "Master the modern LLM stack. Learn transformer foundations, prompt engineering architectures, OpenAI/Groq API integrations, vector databases, and document Q&A systems powered by LangChain and RAG.",
          projects: [
            { title: "Document Q&A (RAG)", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Smart Chatbot Engine", img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "n8n AI Content Pipeline", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: {
            text: "Learning to build Retrieval-Augmented Generation (RAG) systems completely transformed how I build software with LLMs.",
            author: "Sneha K.",
            role: "AI Developer"
          },
          syllabus: [
            { topic: "Module 1: Intro to GenAI & AI Ethics", detail: "ML vs DL vs GenAI, text/image/audio modalities, popular tools, and responsible AI." },
            { topic: "Module 2: Python & JSON Essentials", detail: "Data types, loops, functions, lists, dictionaries, and JSON data handling." },
            { topic: "Module 3: REST APIs & Python Calls", detail: "HTTP methods (GET, POST), headers, API auth, and programmatic parsing." },
            { topic: "Module 4: LLMs & Transformer Basics", detail: "Tokens, context windows, attention mechanisms, temperature, top-p, and text generation." },
            { topic: "Module 5: Advanced Prompt Engineering", detail: "Zero-shot, few-shot, Chain-of-Thought (CoT), role prompting, and optimization." },
            { topic: "Module 6: Production AI Apps & Hugging Face", detail: "OpenAI/Groq APIs, custom chatbots, Hugging Face pipelines, and n8n automations." },
            { topic: "Module 7: LangChain & RAG Systems", detail: "Chains, memory, embeddings, vector databases, and private document Q&A engines." },
            { topic: "Module 8: Capstone Project & Deployment", detail: "End-to-end GenAI application development, UI integration, debugging, and deployment." }
          ]
        },
        {
          tag: "Autonomous Systems",
          title: "Agentic AI & Automation",
          tool: "LangGraph, n8n & Agents",
          shortDesc: "Program autonomous AI systems that reason, call external APIs, use tools, and execute workflows.",
          image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600",
          longDesc: "Bridge the gap between business automation and autonomous AI. Combine n8n workflow engines with LangChain and LangGraph to architect self-correcting, decision-making multi-agent systems.",
          projects: [
            { title: "Multi-Agent Researcher", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "n8n Enterprise Automation", img: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Tool-Calling Decision Agent", img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: {
            text: "LangGraph and n8n together are unbelievable. I built an autonomous agent that handles incoming support tickets and executes live database operations.",
            author: "Vikram P.",
            role: "Automation Architect"
          },
          syllabus: [
            { topic: "Module 1: AI vs Autonomous Automation", detail: "Where standard automation ends and autonomous Agentic AI begins." },
            { topic: "Module 2: Python Data Processing", detail: "Functions, data structures, file handling, and structured data manipulation." },
            { topic: "Module 3: REST API Integration", detail: "GET, POST, PUT, DELETE operations, authentication headers, and API consumption." },
            { topic: "Module 4: n8n Workflow Automation Core", detail: "Triggers, HTTP Request, Set, Merge, IF nodes, expressions, and debugging." },
            { topic: "Module 5: End-to-End Automation Systems", detail: "Webhooks, forms, Google Sheets, email triggers, scheduling, and error handling." },
            { topic: "Module 6: LLMs & Tool Calling", detail: "Integrating OpenAI/Groq APIs, prompt structuring, and automated summarization." },
            { topic: "Module 7: Agentic Architecture & LangGraph", detail: "Agent memory, function calling, multi-step reasoning, LangChain, and LangGraph multi-agents." },
            { topic: "Module 8: Autonomous System Capstone", detail: "Designing, building, testing, and deploying enterprise-grade autonomous agents." }
          ]
        }
      ]
    },
    {
      title: "Cyber Security",
      subtitle: "Defend the Network.",
      desc: "Learn ethical hacking, secure cloud infrastructure, and threat assessment.",
      icon: <ShieldCheck className="text-red-400" size={24} />,
      gradient: "from-red-500/10 to-orange-500/5",
      modules: [
        { 
          tag: "Ethical Hacking",
          title: "VAPT & Penetration Testing", 
          tool: "Kali Linux", 
          shortDesc: "Find vulnerabilities before the bad guys do. Master the tools of ethical hacking.",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Vulnerability Assessment and Penetration Testing (VAPT). Learn how to attack networks, web apps, and systems legally to patch their weaknesses.",
          projects: [
            { title: "Web Exploit", img: "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Network Scan", img: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Security Report", img: "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ], 
          testimonial: { text: "The hands-on labs with Metasploit were intense. I feel fully prepared for the CEH exam now.", author: "Aditya S.", role: "IT Professional" },
          syllabus: [
             { topic: "Module 1: Reconnaissance", detail: "Nmap, footprinting, and gathering system info." },
             { topic: "Module 2: System Hacking", detail: "Gaining access, privilege escalation, and covering tracks." },
             { topic: "Module 3: Web App Testing", detail: "SQL Injection, XSS, and Burp Suite basics." },
          ]
        },
        { 
          tag: "Defensive Security",
          title: "SOC Analyst", 
          tool: "SIEM & Network Defense", 
          shortDesc: "Become the shield. Monitor networks, detect live threats, and respond to incidents.",
          image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=600&auto=format&fit=crop", 
          longDesc: "A Security Operations Center (SOC) analyst is the first line of defense. Learn to analyze logs, hunt for threats, and respond to live cyber attacks.",
          projects: [
            { title: "Traffic Analysis", img: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "SIEM Dashboard", img: "https://images.pexels.com/photos/1063444/pexels-photo-1063444.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Incident Plan", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Companies are desperate for SOC analysts. The practical network monitoring skills taught here are exactly what interviewers ask for.", author: "Karan T.", role: "Cyber Security Analyst" },
          syllabus: [
             { topic: "Module 1: Network Fundamentals", detail: "TCP/IP, Firewalls, and Router security." },
             { topic: "Module 2: Log Analysis", detail: "Understanding Windows and Linux event logs." },
             { topic: "Module 3: Incident Response", detail: "Containing and eradicating active threats." },
          ]
        },
        { 
          tag: "Cloud Architecture",
          title: "Cloud Security", 
          tool: "AWS & Azure Defense", 
          shortDesc: "Protect data in the cloud. Learn identity management, encryption, and secure deployments.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", 
          longDesc: "As companies move to the cloud, securing that data is critical. Learn how to architect secure AWS/Azure environments and prevent data leaks.",
          projects: [
            { title: "IAM Setup", img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "S3 Encryption", img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Cloud Audit", img: "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Understanding AWS security protocols helped me transition from a standard IT role into a specialized Cloud Security position.", author: "Neha P.", role: "Cloud Architect" },
          syllabus: [
             { topic: "Module 1: Cloud Models", detail: "Understanding IaaS, PaaS, SaaS vulnerabilities." },
             { topic: "Module 2: Identity Access", detail: "IAM policies, roles, and least privilege." },
             { topic: "Module 3: Data Protection", detail: "Encryption at rest and in transit." },
          ]
        }
      ]
    },
    {
      title: "Secure Development",
      subtitle: "Full-Stack & Mobile.",
      desc: "Build highly scalable, secure applications for Web, Android, and iOS.",
      icon: <Code2 className="text-blue-400" size={24} />,
      gradient: "from-blue-500/10 to-indigo-500/5",
      modules: [
        { 
          tag: "Web Engineering",
          title: "Full Stack Web App", 
          tool: "MERN Stack / Java", 
          shortDesc: "Master both frontend UI and backend databases to build complete software solutions.",
          image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Learn the complete software development lifecycle. From designing responsive React frontends to building secure Node.js APIs and managing databases.",
          projects: [
            { title: "E-Commerce App", img: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Social Network", img: "https://images.pexels.com/photos/2650818/pexels-photo-2650818.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "SaaS Dashboard", img: "https://images.pexels.com/photos/1063444/pexels-photo-1063444.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "I went from knowing zero code to building a fully functional web app. The curriculum is perfectly structured.", author: "Priya M.", role: "Frontend Developer" },
          syllabus: [
             { topic: "Module 1: Frontend Frameworks", detail: "React.js, Component state, and Tailwind CSS." },
             { topic: "Module 2: Backend APIs", detail: "Node.js, Express routing, and RESTful principles." },
             { topic: "Module 3: Database Design", detail: "MongoDB schemas, CRUD operations, and NoSQL." },
          ]
        },
        { 
          tag: "App Development",
          title: "Mobile App Dev", 
          tool: "Flutter / Native", 
          shortDesc: "Design and deploy native applications directly to the App Store and Google Play.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop", 
          longDesc: "The world is mobile-first. Learn to build high-performance, cross-platform apps using modern frameworks like Flutter, or native tools for iOS and Android.",
          projects: [
            { title: "Food Delivery", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Fitness Tracker", img: "https://images.pexels.com/photos/375751/pexels-photo-375751.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Chat App", img: "https://images.pexels.com/photos/5053846/pexels-photo-5053846.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Publishing my first app on the Google Play Store was the proudest moment of my career.", author: "Arif N.", role: "App Developer" },
          syllabus: [
             { topic: "Module 1: UI/UX & Layouts", detail: "Building responsive mobile screens and navigation." },
             { topic: "Module 2: State Management", detail: "Handling data flow across the application." },
             { topic: "Module 3: Deployment", detail: "Signing apps and publishing to App Stores." },
          ]
        },
        { 
          tag: "Backend & Logic",
          title: "Backend API Engineering", 
          tool: "Node.js & Microservices", 
          shortDesc: "Build the invisible engines that power the world's biggest apps. Focus on speed and security.",
          image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Great apps need great servers. Learn to architect scalable backend systems, write secure REST and GraphQL APIs, and implement microservices.",
          projects: [
            { title: "Auth System", img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Payment API", img: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Chat Server", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Moving from frontend to backend engineering doubled my salary. The architecture concepts here are gold.", author: "Simran T.", role: "Backend Engineer" },
          syllabus: [
             { topic: "Module 1: API Design", detail: "RESTful constraints, endpoints, and JSON." },
             { topic: "Module 2: Authentication", detail: "OAuth, JWTs, and secure cookie storage." },
             { topic: "Module 3: Performance", detail: "Caching with Redis and database indexing." },
          ]
        }
      ]
    },
    {
      title: "Big Data Analytics",
      subtitle: "Process the Information.",
      desc: "Analyze massive datasets, visualize trends, and make data-driven decisions.",
      icon: <Database className="text-purple-400" size={24} />,
      gradient: "from-purple-500/10 to-pink-500/5",
      modules: [
        { 
          tag: "Data Science",
          title: "Data Science Pro", 
          tool: "Python & Pandas", 
          shortDesc: "Extract insights from raw data. Learn statistical modeling and data wrangling.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Data is the new oil. Learn to clean, transform, and analyze massive datasets using Python, preparing you for high-paying roles in the data industry.",
          projects: [
            { title: "Sales Analysis", img: "https://images.pexels.com/photos/1063444/pexels-photo-1063444.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Weather Model", img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Stock Forecast", img: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "The focus on real-world datasets rather than textbook theory made all the difference in my job interviews.", author: "Neha S.", role: "Data Scientist" },
          syllabus: [
             { topic: "Module 1: Python for Data", detail: "Mastering Pandas and Numpy libraries." },
             { topic: "Module 2: Data Cleaning", detail: "Handling missing values and transforming data." },
             { topic: "Module 3: Statistics", detail: "Probability, distributions, and hypothesis testing." },
          ]
        },
        { 
          tag: "Analytics",
          title: "Data Analytics", 
          tool: "SQL & PowerBI", 
          shortDesc: "Turn numbers into stories. Master database querying and business intelligence dashboards.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Bridge the gap between business and tech. Learn complex SQL queries to extract data and build interactive dashboards in PowerBI to drive business decisions.",
          projects: [
            { title: "BI Dashboard", img: "https://images.pexels.com/photos/1063444/pexels-photo-1063444.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "SQL Database", img: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Excel Macros", img: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Learning SQL and PowerBI got me promoted. I now handle all reporting for our marketing team.", author: "Siddharth K.", role: "Business Analyst" },
          syllabus: [
             { topic: "Module 1: Advanced SQL", detail: "Joins, subqueries, and database architecture." },
             { topic: "Module 2: Advanced Excel", detail: "VLOOKUP, Pivot Tables, and Macros." },
             { topic: "Module 3: PowerBI / Tableau", detail: "Connecting data sources and building reports." },
          ]
        },
        { 
          tag: "Visualization",
          title: "Data Visualization", 
          tool: "Tableau & D3.js", 
          shortDesc: "Create stunning, interactive data visualizations that highlight business trends instantly.",
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Raw data is boring. Learn to use industry-standard tools like Tableau and custom code (D3.js) to turn millions of rows of data into beautiful, interactive graphs and heatmaps.",
          projects: [
            { title: "Global Heatmap", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Live Tracker", img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Sales Graph", img: "https://images.pexels.com/photos/2650818/pexels-photo-2650818.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "I can now present complex data to the CEO in a way that actually makes sense. Visualization is key.", author: "Rahul J.", role: "Marketing Analyst" },
          syllabus: [
             { topic: "Module 1: Data Storytelling", detail: "Choosing the right chart for the right data." },
             { topic: "Module 2: Tableau Mastery", detail: "Building interactive workbooks and stories." },
             { topic: "Module 3: Web Integration", detail: "Embedding live charts into websites." },
          ]
        }
      ]
    },
    {
      title: "IT Infrastructure",
      subtitle: "Scale the Cloud.",
      desc: "Manage servers, automate deployments, and architect cloud systems.",
      icon: <Server className="text-cyan-400" size={24} />,
      gradient: "from-cyan-500/10 to-blue-500/5",
      modules: [
        { 
          tag: "Cloud Admin",
          title: "Cloud Computing", 
          tool: "AWS / Azure", 
          shortDesc: "Move infrastructure to the web. Learn server management, scaling, and cloud architecture.",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Understand the backbone of the modern internet. Learn how to provision servers, manage cloud storage, and design scalable infrastructure on platforms like AWS.",
          projects: [
            { title: "EC2 Deployment", img: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Load Balancer", img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "S3 Storage", img: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Cloud computing is a required skill now. This course breaks down AWS so simply.", author: "Manish R.", role: "Systems Admin" },
          syllabus: [
             { topic: "Module 1: Cloud Concepts", detail: "IaaS, PaaS, SaaS, and virtualization." },
             { topic: "Module 2: Compute & Storage", detail: "Setting up virtual machines and databases." },
             { topic: "Module 3: Networking", detail: "VPCs, Subnets, and IP routing." },
          ]
        },
        { 
          tag: "Automation",
          title: "Cloud & DevOps", 
          tool: "Docker, K8s, Jenkins", 
          shortDesc: "Automate everything. Bridge the gap between coding and server deployment.",
          image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop", 
          longDesc: "DevOps engineers are the highest paid in the industry. Learn to containerize apps with Docker, manage them with Kubernetes, and automate deployments via CI/CD.",
          projects: [
            { title: "CI/CD Pipeline", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Docker App", img: "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "K8s Cluster", img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Learning Docker and Kubernetes completely changed how I deploy applications. Absolutely vital course.", author: "Gaurav H.", role: "DevOps Engineer" },
          syllabus: [
             { topic: "Module 1: Version Control", detail: "Advanced Git and GitHub workflows." },
             { topic: "Module 2: Containerization", detail: "Building and running Docker containers." },
             { topic: "Module 3: Orchestration", detail: "Introduction to Kubernetes clusters." },
          ]
        },
        { 
          tag: "Network Admin",
          title: "Network Engineering", 
          tool: "CCNA Concepts", 
          shortDesc: "Understand how the internet physically works. Configure routers, switches, and firewalls.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Before the cloud, there are cables. Learn the core Cisco networking concepts (CCNA) to understand IP addressing, subnetting, and secure routing.",
          projects: [
            { title: "Subnet Map", img: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Router Config", img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Firewall Rule", img: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "This gave me the foundation I needed to finally pass my CCNA certification exam.", author: "Amit P.", role: "Network Technician" },
          syllabus: [
             { topic: "Module 1: OSI Model", detail: "Understanding the 7 layers of networking." },
             { topic: "Module 2: IP Addressing", detail: "IPv4, IPv6, and Subnetting logic." },
             { topic: "Module 3: Routing", detail: "Configuring switches and routers securely." },
          ]
        }
      ]
    },
    {
      title: "Digital Marketing",
      subtitle: "Growth & Visibility.",
      desc: "Drive traffic, dominate search engines, and leverage AI for marketing.",
      icon: <TrendingUp className="text-yellow-400" size={24} />,
      gradient: "from-yellow-500/10 to-amber-500/5",
      modules: [
        { 
          tag: "Traffic Growth",
          title: "Search Engine Optimization", 
          tool: "Google Analytics & SEO", 
          shortDesc: "Learn the technical skills to rank websites on page one of Google.",
          image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop", 
          longDesc: "Understand search algorithms. Master on-page SEO, technical audits, and link-building strategies to drive massive organic traffic to businesses.",
          projects: [
            { title: "Site Audit", img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Keyword Plan", img: "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Analytics Report", img: "https://images.pexels.com/photos/1063444/pexels-photo-1063444.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "I applied these SEO techniques to my family's business website and traffic tripled in two months.", author: "Isha V.", role: "Freelancer" },
          syllabus: [
             { topic: "Module 1: Keyword Research", detail: "Finding high-value search terms and intent." },
             { topic: "Module 2: On-Page SEO", detail: "Optimizing content, tags, and structure." },
             { topic: "Module 3: Technical SEO", detail: "Site speed, mobile-friendliness, and indexing." },
          ]
        },
        { 
          tag: "Brand Building",
          title: "Social Media & Ads", 
          tool: "Meta Ads & Content", 
          shortDesc: "Run profitable ad campaigns and build an engaging brand presence on social media.",
          image: "https://tse3.mm.bing.net/th/id/OIP.kRBFcJ3JuxEWCooxULqklwHaEK?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3", 
          longDesc: "The modern marketer's toolkit. Learn to run targeted paid advertisements on Meta/Google, and build an organic audience through viral content strategies.",
          projects: [
            { title: "Ad Campaign", img: "https://images.pexels.com/photos/2650818/pexels-photo-2650818.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Content Plan", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "ROI Report", img: "https://images.pexels.com/photos/1063444/pexels-photo-1063444.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Learning how to properly target Facebook Ads saved my startup thousands of dollars in wasted ad spend.", author: "Tariq A.", role: "Founder" },
          syllabus: [
             { topic: "Module 1: Social Media Strategy", detail: "Platform dynamics, branding, and organic reach." },
             { topic: "Module 2: Paid Advertising", detail: "Setting up and optimizing Meta/Google Ads." },
             { topic: "Module 3: Analytics", detail: "Reading ad performance and calculating ROI." },
          ]
        },
        { 
          tag: "Automation",
          title: "AI For Marketing", 
          tool: "ChatGPT & Midjourney", 
          shortDesc: "Leverage Generative AI to create months of marketing content in minutes.",
          image: "https://cdn.cmsfly.com/635bcad9b8a74e0091632998/ai-marketing-Wu7Z1k.jpg", 
          longDesc: "Work smarter, not harder. Learn how to prompt AI to write high-converting ad copy, generate stunning blog graphics, and automate your email marketing campaigns.",
          projects: [
            { title: "AI Copywriting", img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "AI Graphics", img: "https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg?auto=compress&cs=tinysrgb&w=200" },
            { title: "Email Sequence", img: "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=200" }
          ],
          testimonial: { text: "Using AI tools taught in this course cut my content creation time by 80%. It's a game-changer.", author: "Priya K.", role: "Digital Marketer" },
          syllabus: [
             { topic: "Module 1: AI Copywriting", detail: "Using LLMs for blogs, ads, and social media captions." },
             { topic: "Module 2: Visual AI", detail: "Generating custom graphics and logos with AI." },
             { topic: "Module 3: Automation", detail: "Connecting AI to email tools (Mailchimp/Zapier)." },
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
        setTimeout(() => {
          setSelectedCourse(foundCourse);
          if (location.state.returnPath) {
             setReturnPath(location.state.returnPath);
          }
          if (location.state.savedScroll !== undefined) {
             setSavedScroll(location.state.savedScroll); 
          }
        }, 0);
        
        window.history.replaceState({}, document.title); // Clears state
      }
    }
  }, [location]);

  const handleCloseModal = () => {
    setSelectedCourse(null); 
    if (returnPath) {
      navigate(returnPath, { state: { restoreScroll: savedScroll } });
      setReturnPath(null); 
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-black pb-32">
      <section className="relative pt-32 pb-20 px-6 border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 px-3 py-1 rounded-full mb-6 shadow-xl">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
             <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">NSDC & NSOF Aligned Curriculum</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
             Launch Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Tech Career.</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Master the skills top companies are hiring for. Explore our professional tracks designed for college students, professionals, and future innovators.
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
                 <SeniorCard 
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
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full shadow-2xl flex items-center justify-between pl-4 sm:pl-6 pr-1.5 sm:pr-2">
                <div className="flex flex-col">
                    <p className="text-white font-bold text-[11px] sm:text-sm leading-tight">Need Career Guidance?</p>
                    <p className="text-zinc-500 text-[9px] sm:text-[10px] hidden sm:block">Talk to our industry experts.</p>
                </div>
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-4 py-2 sm:px-6 sm:py-2.5 bg-white text-black font-bold text-[10px] sm:text-xs rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1.5 sm:gap-2 shadow-lg pointer-events-auto shrink-0"
                >
                    Book Counseling <ArrowRight size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
            </div>
        </div>
      </div>

      <CourseModal 
        isOpen={!!selectedCourse} 
        onClose={handleCloseModal} 
        course={selectedCourse} 
      />
      
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultSource="senior-floating-bar"
        title="Book Career Counseling"
      />
    </div>
  );
};

export default SeniorSyllabus;