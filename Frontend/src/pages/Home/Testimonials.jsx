import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Star, Quote, MessageCircle, HelpCircle, CheckCircle2 } from "lucide-react";

const FAQAndTestimonials = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faqs = [
    {
      question: "My child has zero coding knowledge. Is this suitable?",
      answer: "Absolutely. We start Level 1 with 'Block Coding' (like digital lego). No typing required. If they can play a mobile game, they can learn to build one."
    },
    {
      question: "Do we need a powerful laptop?",
      answer: "No. A basic laptop or PC (Windows/Mac) with internet is enough. For Level 1, even a tablet works, but a laptop is recommended for the best experience."
    },
    {
      question: "What if my child misses a class?",
      answer: "We are flexible. Just inform us 24 hours in advance, and we will reschedule the session. No classes are ever 'lost'."
    },
    {
      question: "Is this better than school computer classes?",
      answer: "Schools teach 'History of Computers'. We teach 'Future of Computers'. We skip the theory definitions and jump straight into building real apps and games."
    }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Mother of Ishaan (Age 12)",
      school: "Sacred Heart School",
      text: "I was worried Ishaan was playing too many video games. Ansh sir didn't tell him to stop; he taught him how to MAKE them. Now he spends his screen time coding logic.",
      stars: 5
    },
    {
      name: "Dr. Amit Verma",
      role: "Father of Riya (Age 14)",
      school: "DPS Ludhiana",
      text: "The best part is the mentorship. It's not a recorded video. The 1:1 attention Riya gets is amazing. She actually looks forward to her coding class.",
      stars: 5
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-950 border-t border-white/5 overflow-hidden" aria-labelledby="faq-heading">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
        
        {/* --- LEFT COLUMN: TESTIMONIALS --- */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
               <MessageCircle size={14} aria-hidden="true" /> Real Feedback
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Don't just take our <br />
              <span className="text-zinc-500">word for it.</span>
            </h2>
            <p className="text-zinc-400">
              Trusted by 150+ parents from Ludhiana's top schools.
            </p>
          </div>

          <div className="space-y-6">
            {reviews.map((review, i) => (
              <motion.figure 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <div className="absolute top-6 right-6 text-zinc-700">
                  <Quote size={40} className="fill-current opacity-20" aria-hidden="true" />
                </div>

                <div className="flex gap-1 mb-4" aria-label={`Rated ${review.stars} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-orange-500 text-orange-500" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6 relative z-10">
                  "{review.text}"
                </blockquote>

                <figcaption className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                      {review.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm">{review.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                         <span>{review.role}</span>
                         <span className="w-1 h-1 rounded-full bg-zinc-600" aria-hidden="true"></span>
                         <span className="text-orange-400 flex items-center gap-1">
                            <CheckCircle2 size={10} aria-hidden="true" /> {review.school}
                         </span>
                      </div>
                   </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: FAQ --- */}
        <div className="lg:col-span-7">
           <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
                 <HelpCircle size={14} aria-hidden="true" /> Common Doubts
              </div>
              <h2 id="faq-heading" className="text-3xl font-bold text-white">Everything you need to know.</h2>
           </div>

           <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 ${
                    activeFAQ === index 
                      ? "bg-zinc-900 border-orange-500/30" 
                      : "bg-transparent border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    aria-expanded={activeFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-2xl"
                  >
                    <span className={`font-medium text-lg ${activeFAQ === index ? "text-white" : "text-zinc-400"}`}>
                      {faq.question}
                    </span>
                    <span className={`p-2 rounded-full transition-colors ${activeFAQ === index ? "bg-orange-500 text-white" : "bg-white/5 text-zinc-500"}`} aria-hidden="true">
                      {activeFAQ === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeFAQ === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
           
           <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                 <h4 className="text-white font-bold mb-1">Still have questions?</h4>
                 <p className="text-zinc-400 text-sm">Chat directly with the mentor on WhatsApp.</p>
              </div>
              <a 
                 href="https://wa.me/917087691111?text=Hi%20TechMines%2C%20I%20want%20to%20know%20more."
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="Chat with mentor on WhatsApp"
                 className="px-6 py-3 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                 Chat Now
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAndTestimonials;