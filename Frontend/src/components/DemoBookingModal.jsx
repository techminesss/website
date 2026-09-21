import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import DemoBookingForm from "./DemoBookingForm";

const DemoBookingModal = ({
  isOpen,
  onClose,
  defaultSource = "home",
  defaultCourse = "",
  title = "Book a Free Demo Class",
}) => {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-zinc-800 w-full max-w-xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-zinc-800 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-b from-orange-900/15 to-transparent border-b border-zinc-800/50 p-6 md:p-8 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-orange-600/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-medium tracking-wide uppercase mb-3 relative z-10">
                  <Sparkles size={12} />
                  <span>100% Free — No Card Required</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10">{title}</h2>
                <p className="text-zinc-400 text-sm mt-2 relative z-10">
                  Experience a live 1:1 mentored session. Zero obligation.
                </p>
              </div>

              {/* Scrollable Form */}
              <div className="overflow-y-auto flex-grow p-6 md:p-8 bg-[#050505]">
                <DemoBookingForm
                  defaultSource={defaultSource}
                  defaultCourse={defaultCourse}
                  compact
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DemoBookingModal;
