import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount/route change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navBgClass = isScrolled 
    ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-[#1A1A1A]' 
    : 'bg-transparent py-6 text-white';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Philosophy', href: '/about' },
    { name: 'Results', href: '/before-after' },
    { name: 'Reviews', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-semibold tracking-wider">
          LUMIÈRE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm uppercase tracking-widest hover:text-[#C5A880] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2 border transition-colors text-sm uppercase tracking-widest ${
              isScrolled 
                ? 'border-primary hover:bg-primary hover:text-white' 
                : 'border-white hover:bg-white hover:text-primary'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden text-[#1A1A1A]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest hover:text-[#C5A880] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 bg-primary text-white text-center text-sm uppercase tracking-widest"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
