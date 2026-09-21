import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// --- STANDARD IMPORTS (Load Immediately) ---
// We keep Navbar, Footer, and Home standard so the site structure loads instantly.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ScrollToTop from './Scroll';

import './App.css';

// --- LAZY IMPORTS (Load on Demand) ---
// These will only download when the user actually navigates to them.
const About = lazy(() => import('./pages/About/About'));
const Showcase = lazy(() => import('./pages/Showcase/Showcase'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const Careers = lazy(() => import('./pages/Careers/Careers'));
const JuniorHome = lazy(() => import('./pages/courses/Junior/Junior'));
const SeniorHome = lazy(() => import('./pages/courses/Senior/Senior'));
const SchoolLabs = lazy(() => import('./pages/Schools/labs'));
const FDP = lazy(() => import('./pages/Schools/fdp'));
const Workshops = lazy(() => import('./pages/Schools/workshop'));
const DemoBookingPage = lazy(() => import('./pages/DemoBooking/DemoBookingPage'));
// A simple loading component (You can make this fancier later)
const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-black text-white">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        
        <main className="grow">
          {/* Suspense catches the lazy load delay and shows the fallback */}
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Home loads instantly (no fallback needed) */}
              <Route path="/" element={<Home />} />
              <Route path="/careers" element={<Careers />} />
              {/* These trigger the download when clicked */}
              <Route path="/pages" element={<About />} />
              <Route path="/Showcase" element={<Showcase />} />
              <Route path="/blog" element={<About />} />
              <Route path="/about" element={<About />} />
             
           
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/courses/junior" element={<JuniorHome />} />
              <Route path="/courses/senior" element={<SeniorHome />} />
              <Route path="/schools/fdp" element={<FDP />} />
              <Route path="/schools/workshops" element={<Workshops />} />
              <Route path="/schools/labs" element={<SchoolLabs />} />
              <Route path="/demo-booking" element={<DemoBookingPage />} />
              
              <Route path="*" element={<Home />} /> {/* Fallback to Home for unknown routes */}
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;