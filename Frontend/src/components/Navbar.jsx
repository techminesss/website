// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Home, Layers, Mail, Briefcase,
  Twitter, Facebook, Instagram,
  Gamepad2, Code, Cpu, School, Bot, Users // New Icons
} from 'lucide-react';
import logo from '../assets/Logo.webp';
import DemoBookingModal from './DemoBookingModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- THE HYBRID DATA STRUCTURE ---
  // Uses your "Premium" structure but with "Smart" content
  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    
    // 1. COURSES (Replaces generic "Services")
    { 
      name: 'Courses', 
      path: '/courses', 
      icon: <Layers size={18} />, 
      children: [
       
        { name: 'Junior Courses (8-12)', path: '/courses/junior', icon: <Code size={16}/> },
        { name: 'Senior Courses (13+)', path: '/courses/senior', icon: <Cpu size={16}/> }
      ]
    },

    // 2. FOR SCHOOLS (The B2B Section)
    { 
      name: 'For Schools', 
      path: '/schools', 
      icon: <School size={18} />, 
      children: [
        { name: 'Labs Setup', path: '/schools/labs', icon: <Bot size={16}/> },
        { name: 'Workshops', path: '/schools/workshops', icon: <Users size={16}/> },
        { name: 'FDP', path: '/schools/fdp', icon: <Users size={16}/> }
      ]
    },

    { name: 'Showcase', path: '/showcase', icon: <Briefcase size={18} /> },
    { name: 'Career', path: '/careers', icon: <Briefcase size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full font-sans transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-10">
          
          {/* --- LOGO (Kept your original sharp look) --- */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group relative z-50">
             <img 
                src={logo} 
                alt="Techmines" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105" 
             />
             <span className="text-xl md:text-2xl font-medium text-white tracking-[0.15em] uppercase group-hover:text-white transition-colors duration-300">
                Techmines
             </span>
          </Link>

          {/* --- DESKTOP NAV (Restored your "Premium" Uppercase Style) --- */}
          <div className="hidden lg:flex items-center gap-12 ml-auto">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.name} className="group relative cursor-pointer py-2">
                  {link.children ? (
                    <div className="relative">
                      {/* Parent Link Style */}
                      <div className="flex items-center gap-2 cursor-pointer select-none text-[12px] xl:text-[13px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
                        <span className="relative">
                          {link.name}
                          {/* THE ORANGE UNDERLINE ANIMATION */}
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff5e00] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        {/* Tiny Arrow */}
                        <svg className="w-3 h-3 text-gray-400 group-hover:text-[#ff5e00] transition-colors" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
                      </div>

                      {/* Premium Dropdown (Sharp Edges, Dark bg) */}
                      <div className="absolute left-0 mt-4 w-60 bg-[#0F0F0F] border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                        {/* Top Accent Line */}
                        <div className="h-[2px] w-full bg-[#ff5e00]"></div>
                        {link.children.map((child)=> (
                          <Link 
                            key={child.name} 
                            to={child.path} 
                            className="flex items-center gap-3 px-6 py-4 text-[12px] font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0 group/item"
                          >
                             <span className="text-[#ff5e00] opacity-0 group-hover/item:opacity-100 transition-opacity transform -translate-x-2 group-hover/item:translate-x-0 duration-300">
                                {child.icon}
                             </span>
                             {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Standard Link
                    <Link 
                      to={link.path} 
                      className="text-[12px] xl:text-[13px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff5e00] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Vertical Divider */}
            <div className="h-8 w-[1px] bg-white/10"></div>

            {/* CTA BUTTON - Kept sleek to match the uppercase vibe */}
            <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="hidden xl:block bg-white text-black px-7 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#ff5e00] hover:text-white transition-all duration-300 cursor-pointer"
            >
                Book Free Class
            </button>


          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div 
            className="lg:hidden text-white cursor-pointer hover:text-[#ff5e00] transition-colors z-50" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR (Your original smooth drawer) --- */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-[85%] max-w-sm bg-[#0a0a0a] transform transition-transform duration-500 ease-in-out lg:hidden border-l border-white/10 ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-32 pb-10 overflow-y-auto">
            {navLinks.map((link, index) => (
                <div key={link.name} style={{ transitionDelay: `${index * 50}ms` }}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between gap-5 text-[15px] text-gray-400 font-bold uppercase tracking-widest py-5 border-b border-white/5 hover:text-white hover:pl-4 transition-all duration-300"
                      >
                        <span className="flex items-center gap-3"><span className="text-[#ff5e00] opacity-80">{link.icon}</span>{link.name}</span>
                        <svg className={`w-4 h-4 transform transition-transform ${openMobileSubmenu === link.name ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${openMobileSubmenu === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-6 bg-white/5">
                          {link.children.map((child) => (
                            <Link 
                              key={child.name}
                              to={child.path}
                              className="block text-sm text-gray-300 py-4 border-b border-white/5 hover:text-[#ff5e00] transition-colors uppercase tracking-wider"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-4 text-[15px] text-gray-400 font-bold uppercase tracking-widest py-5 border-b border-white/5 hover:text-white hover:pl-4 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className="text-[#ff5e00] opacity-80">{link.icon}</span>
                        {link.name}
                    </Link>
                  )}
                </div>
            ))}

            <div className="mt-8">
                <button 
                    onClick={() => { setIsMobileMenuOpen(false); setIsDemoModalOpen(true); }}
                    className="flex items-center justify-center w-full bg-[#ff5e00] text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                >
                    Book Free Class
                </button>
            </div>
            

        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} defaultSource="navbar" />
    </>
  );
};

export default Navbar;