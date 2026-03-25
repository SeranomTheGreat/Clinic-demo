import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const testimonials = [
  {
    id: 1,
    text: "The level of care and attention to detail at Lumière is unmatched. Dr. Rossi completely transformed my skin, and the results look incredibly natural. I've never felt more confident.",
    author: "Isabella M.",
    treatment: "Facial Rejuvenation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "From the moment you walk in, you feel like royalty. The staff is warm and professional. My body contouring results exceeded all my expectations. Highly recommend Dr. Chen.",
    author: "Sophia L.",
    treatment: "Body Contouring",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "I started the wellness program with Dr. Jenkins six months ago, and my energy levels have skyrocketed. It's not just about looking good, it's about feeling vibrant from the inside out.",
    author: "James T.",
    treatment: "Wellness Program",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
  }
];

export default function Testimonials({ isHome = false }: { isHome?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="bg-white">
      {!isHome && (
        <PageHeader 
          title="Patient Stories" 
          subtitle="Testimonials" 
          image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop" 
        />
      )}

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[#C5A880]/10 mix-blend-multiply" />
            </div>

            {/* Text Side */}
            <div className="relative">
              <Quote size={64} className="text-[#C5A880] opacity-20 absolute -top-8 -left-8" />
              
              <span className="text-[#C5A880] text-sm uppercase tracking-widest font-semibold block mb-4">Featured Reviews</span>
              <h2 className="text-4xl font-serif mb-12">Real Results, Real Confidence</h2>

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex text-[#C5A880] mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-800 italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div>
                      <h4 className="font-serif text-xl">{testimonials[currentIndex].author}</h4>
                      <p className="text-sm text-[#C5A880] uppercase tracking-widest mt-1">
                        {testimonials[currentIndex].treatment}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex space-x-4 mt-12">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#C5A880] hover:text-white hover:border-[#C5A880] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#C5A880] hover:text-white hover:border-[#C5A880] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {!isHome && (
        <section className="py-24 bg-[#F9F6F0]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience the Lumière Difference</h2>
            <p className="text-gray-600 font-light mb-10 text-lg">
              Join our community of satisfied patients and start your journey to enhanced confidence today.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-white hover:bg-[#C5A880] transition-colors text-sm uppercase tracking-widest"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
