import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, BookOpen, Clock, Calendar, Star, Trophy, 
  Gamepad2, ArrowRight, MessageSquarePlus, CheckCircle2, Loader2 
} from "lucide-react";
import DemoBookingModal from "../../components/DemoBookingModal";

const CourseModal = ({ isOpen, onClose, course }) => {
 
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewStatus, setReviewStatus] = useState("idle");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
   
      setIsReviewOpen(false);
      setReviewStatus("idle");
      setReviewName("");
      setReviewText("");
      setRating(5);
    }
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  
  const handleSubmitReview = (e) => {
    e.preventDefault();
    setReviewStatus("loading");

   
    
    setTimeout(() => {
      setReviewStatus("success");
      setTimeout(() => setIsReviewOpen(false), 2000); 
    }, 1500);
  };

  if (!course) return null;

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
            >
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-zinc-800 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              {/* HERO IMAGE */}
              <div className="relative h-56 shrink-0">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase tracking-wider rounded border border-cyan-500/30 backdrop-blur-md">
                      {course.tag}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded border border-yellow-500/20 backdrop-blur-md">
                      <Trophy size={12} /> Certificate Included
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight shadow-black drop-shadow-lg">{course.title}</h2>
                </div>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-grow space-y-8">
                
                <div>
                   <p className="text-zinc-300 text-sm leading-relaxed">
                     {course.longDesc || course.shortDesc}
                   </p>
                </div>

                {/* KEY STATS */}
                <div className="grid grid-cols-2 gap-3">
                   <div className="bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 flex items-center gap-3">
                      <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">Duration</p>
                        <p className="text-sm font-bold text-white">2-3 Months</p>
                      </div>
                   </div>
                   <div className="bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 flex items-center gap-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">Schedule</p>
                        <p className="text-sm font-bold text-white">3 Days / Week</p>
                      </div>
                   </div>
                </div>

                {/* PROJECT THUMBNAILS */}
                {course.projects && (
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Gamepad2 size={18} className="text-pink-500" /> Projects they will build:
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {course.projects.map((project, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 text-center hover:border-zinc-700 transition-colors group">
                          <div className="w-full h-20 rounded-lg mb-2 overflow-hidden relative">
                             {project.img ? (
                               <img 
                                 src={project.img} 
                                 alt={project.title} 
                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                               />
                             ) : (
                               <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                 <Gamepad2 size={24} className="text-zinc-600" />
                               </div>
                             )}
                          </div>
                          <p className="text-[10px] font-bold text-zinc-300 leading-tight">{project.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SYLLABUS */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-cyan-400" /> Curriculum Roadmap:
                  </h3>
                  <div className="space-y-4 relative pl-2">
                     <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-zinc-800"></div>
                    {course.syllabus && course.syllabus.map((item, idx) => (
                      <div key={idx} className="relative flex gap-4 items-start group">
                        <div className="w-10 h-10 shrink-0 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center z-10 group-hover:border-cyan-500/50 group-hover:bg-cyan-900/20 transition-colors shadow-lg">
                           <span className="text-xs font-bold text-zinc-500 group-hover:text-cyan-400">{idx + 1}</span>
                        </div>
                        <div className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800/50 flex-grow group-hover:border-zinc-700 transition-all">
                          <p className="text-sm font-bold text-white">{item.topic}</p>
                          <p className="text-xs text-zinc-500 mt-1 leading-snug">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- NEW: REVIEWS & TESTIMONIALS SECTION --- */}
                <div className="border-t border-zinc-800 pt-8">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-white font-bold text-lg">Student Reviews</h3>
                     {!isReviewOpen && reviewStatus !== "success" && (
                       <button 
                         onClick={() => setIsReviewOpen(true)}
                         className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20"
                       >
                         <MessageSquarePlus size={14} /> Write Review
                       </button>
                     )}
                  </div>

                  {/* Write a Review Form (Collapsible) */}
                  <AnimatePresence>
                    {isReviewOpen && (
                      <motion.form 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        onSubmit={handleSubmitReview}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-6 overflow-hidden"
                      >
                        <p className="text-sm font-bold text-white mb-3">Rate your experience</p>
                        
                        {/* Interactive Star Rating */}
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="focus:outline-none transition-transform hover:scale-110"
                            >
                              <Star 
                                size={24} 
                                className={`transition-colors duration-200 ${
                                  star <= (hoverRating || rating) 
                                    ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
                                    : "text-zinc-700"
                                }`} 
                              />
                            </button>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <input 
                            required
                            type="text" 
                            placeholder="Your Name (e.g. Rahul M.)" 
                            value={reviewName}
                            onChange={(e) => setReviewName(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                          />
                          <textarea 
                            required
                            placeholder="Tell us what you liked about this course..." 
                            rows="3"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none custom-scrollbar"
                          ></textarea>
                        </div>

                        <div className="flex gap-3 mt-4">
                          <button 
                            type="button"
                            onClick={() => setIsReviewOpen(false)}
                            className="px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                          >
                            Cancel
                          </button>
                          <button 
                            type="submit"
                            disabled={reviewStatus === "loading"}
                            className="flex-grow bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold uppercase tracking-widest py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                          >
                            {reviewStatus === "loading" ? <Loader2 size={14} className="animate-spin" /> : "Submit Review"}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>

                  {/* Success Message */}
                  {reviewStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-3 mb-6"
                    >
                      <CheckCircle2 size={20} />
                      <p className="text-sm font-bold">Review submitted! Pending approval.</p>
                    </motion.div>
                  )}

                  {/* Display the featured Testimonial */}
                  {course.testimonial && (
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10"><Star size={64} /></div>
                       <div className="relative z-10">
                           <div className="flex gap-1 mb-2">
                             {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />)}
                           </div>
                           <p className="text-sm text-zinc-200 italic mb-3">"{course.testimonial.text}"</p>
                           <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-white">
                                  {course.testimonial.author[0]}
                              </div>
                              <p className="text-xs font-bold text-zinc-400">
                                  {course.testimonial.author} <span className="font-normal opacity-50">• {course.testimonial.role}</span>
                              </p>
                           </div>
                       </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FOOTER (Button changed to Brand Orange for UX consistency) */}
              <div className="p-4 border-t border-zinc-800 bg-zinc-950 shrink-0 z-20">
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-orange-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                   Book Free Trial Class <ArrowRight size={16} />
                </button>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    <DemoBookingModal 
      isOpen={isDemoModalOpen} 
      onClose={() => setIsDemoModalOpen(false)} 
      defaultSource="course-modal" 
      defaultCourse={course?.title} 
      title={`Book a Free Demo — ${course?.title}`}
    />
    </>
  );
};

export default CourseModal;