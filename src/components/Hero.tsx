import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden pt-24 pb-12 bg-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop"
          alt="Modern Clinic Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-white max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/30 px-4 py-2 rounded-full mb-6"
          >
            <ShieldCheck size={18} className="text-blue-300" />
            <span className="text-sm font-medium text-blue-50 tracking-wide">Trusted Multispecialty Clinic in Mumbai</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
          >
            Expert Medical Care You Can Trust
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light mb-10 text-blue-50 max-w-xl leading-relaxed"
          >
            Experience world-class healthcare with our dedicated team of specialists. We provide personalized, compassionate treatment for you and your family.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/25 rounded-md text-sm uppercase tracking-widest font-semibold w-full sm:w-auto"
            >
              <Calendar size={18} />
              Book Appointment
            </Link>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 transition-all shadow-lg rounded-md text-sm uppercase tracking-widest font-semibold w-full sm:w-auto"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center border border-blue-400/20">
                <Users size={24} className="text-blue-300" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5000+</p>
                <p className="text-xs text-blue-200 uppercase tracking-wider">Patients Treated</p>
              </div>
            </div>
            <div className="w-px h-12 bg-blue-400/30"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center border border-blue-400/20">
                <ShieldCheck size={24} className="text-blue-300" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-blue-200 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
