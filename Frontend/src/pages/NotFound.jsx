import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ff5e00] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-zinc-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#ff5e00] hover:text-white transition-all duration-300 rounded-full"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
