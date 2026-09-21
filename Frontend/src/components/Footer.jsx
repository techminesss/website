import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="TechMines" className="w-8 h-8" />
              <span className="text-xl font-bold text-white uppercase tracking-wide">TechMines</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We teach Logic, Code, and AI to the next generation of leaders. 
              <br />
              Stop consuming. Start creating.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Linkedin size={18} />} />
              <SocialLink icon={<Mail size={18} />} />
            </div>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Curriculum</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <FooterLink>Game Development</FooterLink>
              <FooterLink>Web Development</FooterLink>
              <FooterLink>Python & AI</FooterLink>
              <FooterLink>Robotics (Offline)</FooterLink>
            </ul>
          </div>

          {/* Column 3: Company */}
         <div>
  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
  <ul className="space-y-4 text-sm text-zinc-500">
    <li><Link to="/about" className="hover:text-white transition-colors">About Mentor</Link></li>
    <li><Link to="/Showcase" className="hover:text-white transition-colors">Student Showcase</Link></li>
    <li><Link to="/schools/labs" className="hover:text-white transition-colors">For Schools (B2B)</Link></li>
    <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li> {/* <-- Add link */}
  </ul>
</div>

          {/* Column 4: Contact (The Trust Builder) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>SCF -24, 5th Floor, Model<br/>Town Ext.Block-D, Near<br/>Hotel Silver Stone Ludhiana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <span>+91 70876-91111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <span>contact@techmines.io</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2026 TechMines Institute. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> in Ludhiana
          </p>
        </div>

      </div>
    </footer>
  );
};

const SocialLink = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all">
    {icon}
  </a>
);

const FooterLink = ({ children }) => (
  <li>
    <a href="#" className="hover:text-white transition-colors">{children}</a>
  </li>
);

export default Footer;