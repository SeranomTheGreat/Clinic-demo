import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop"
          alt="Clinic Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-[#C5A880]"
        >
          Welcome to Lumière
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif leading-tight mb-6"
        >
          Premium Personalized Care for Your Health & Beauty
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-gray-200"
        >
          Experience world-class aesthetic and wellness treatments tailored exclusively to your unique needs by our renowned specialists.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#C5A880] text-white hover:bg-[#b0936b] transition-colors text-sm uppercase tracking-widest w-full sm:w-auto"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-primary transition-colors text-sm uppercase tracking-widest w-full sm:w-auto"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
