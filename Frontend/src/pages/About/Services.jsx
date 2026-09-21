import React from 'react';

// You can replace these with your actual logo imports
// import logo1 from '../../assets/logos/logo1.png';
const PARTNERS = [
  { name: 'Pfizer', id: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Pfizer_%282021%29.svg' },
  { name: 'GSK', id: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/GSK_logo_2022.svg' },
  { name: 'Merck', id: 3, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Merck_%26_Co-Logo.svg/1280px-Merck_%26_Co-Logo.svg.png' },
  { name: 'GitHub', id: 4, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
  { name: 'Microsoft', id: 5, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Oracle', id: 6, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
];

export default function Partners() {
  return (
    <section className="relative w-full bg-black py-16 overflow-hidden">
      
      {/* --- Gradient Transition Effect --- */}
      {/* This creates the "slowly orange to black" fade coming from the header */}
      <div className="absolute top-0 left-0 w-full h-32  z-10 pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-[1600px] px-6 md:px-10">
        
        {/* Section Label */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Partnered with leading brands across industries
          </p>
        </div>

        {/* --- Infinite Scroll Container --- */}
        {/* We duplicate the list to create a seamless loop */}
        <div className="relative w-full mask-gradient">
          <div className="flex w-max animate-infinite-scroll items-center gap-16 md:gap-24">
            
            {/* First Set of Logos */}
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="group relative flex items-center justify-center">
                {/* Logo Image */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100 grayscale group-hover:grayscale-0 md:h-12"
                />
              </div>
            ))}

            {/* Second Set of Logos (Duplicate) */}
            {PARTNERS.map((partner) => (
              <div key={`${partner.id}-duplicate`} className="group relative flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100 grayscale group-hover:grayscale-0 md:h-12"
                />
              </div>
            ))}
            
             {/* Third Set (Optional: ensures no gap on very wide screens) */}
             {PARTNERS.map((partner) => (
              <div key={`${partner.id}-duplicate-2`} className="group relative flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100 grayscale group-hover:grayscale-0 md:h-12"
                />
              </div>
            ))}

          </div>
        </div>

        {/* --- Review Badge (From Reference) --- */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-sm transition-colors hover:border-[#ff5e00]/50 hover:bg-[#ff5e00]/10">
            <span className="text-sm font-bold text-white">4.9</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-3 w-3 text-[#ff5e00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-white/60">Read client feedback</span>
          </div>
        </div>

      </div>

      {/* Internal CSS for the animation (no need to touch tailwind.config) */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); } /* Adjust based on duplication logic */
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
        /* Gradient mask on the sides of the slider to fade logos in/out */
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}