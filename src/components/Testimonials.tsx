import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const testimonials = [
  {
    id: 1,
    text: "The level of care and attention to detail here is unmatched. Dr. Sharma completely transformed my health, and the results have been incredible. I've never felt more confident in a doctor.",
    author: "Priya Desai",
    treatment: "Cardiac Consultation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2676&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "From the moment you walk in, you feel at ease. The staff is warm and professional. My post-surgery recovery exceeded all my expectations. Highly recommend this clinic.",
    author: "Rahul Mehta",
    treatment: "Post-Surgery Care",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "I started the preventive wellness program six months ago, and my energy levels have skyrocketed. It's not just about treating illness, it's about feeling vibrant from the inside out.",
    author: "Sneha Kulkarni",
    treatment: "Preventive Health Check",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="bg-white">
      <PageHeader 
        title="Patient Stories" 
        subtitle="Testimonials" 
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop" 
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl shadow-lg">
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
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            {/* Text Side */}
            <div className="relative">
              <Quote size={64} className="text-blue-100 absolute -top-8 -left-8" />
              
              <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold block mb-4">Featured Reviews</span>
              <h2 className="text-4xl font-serif mb-12 text-gray-900">Real Patients, Real Trust</h2>

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-800 italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div>
                      <h4 className="font-serif text-xl text-gray-900">{testimonials[currentIndex].author}</h4>
                      <p className="text-sm text-blue-600 uppercase tracking-widest mt-1">
                        {testimonials[currentIndex].treatment}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex space-x-4 mt-12">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Experience the Difference</h2>
          <p className="text-gray-600 font-light mb-10 text-lg">
            Join our community of satisfied patients and start your journey to better health today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md text-sm uppercase tracking-widest font-semibold shadow-md"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
