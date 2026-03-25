import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif tracking-wider mb-6">LUMIÈRE</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Premium personalized care for your health and beauty. Elevating standards in aesthetic medicine and holistic wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C5A880] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#C5A880] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#C5A880] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#C5A880] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><Link to="/services" className="hover:text-[#C5A880] transition-colors">Our Services</Link></li>
              <li><Link to="/team" className="hover:text-[#C5A880] transition-colors">Our Specialists</Link></li>
              <li><Link to="/about" className="hover:text-[#C5A880] transition-colors">Philosophy</Link></li>
              <li><Link to="/before-after" className="hover:text-[#C5A880] transition-colors">Before & After</Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A880] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Treatments</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><Link to="/services" className="hover:text-[#C5A880] transition-colors">Aesthetic Dermatology</Link></li>
              <li><Link to="/services" className="hover:text-[#C5A880] transition-colors">Facial Rejuvenation</Link></li>
              <li><Link to="/services" className="hover:text-[#C5A880] transition-colors">Body Contouring</Link></li>
              <li><Link to="/services" className="hover:text-[#C5A880] transition-colors">Laser Therapies</Link></li>
              <li><Link to="/services" className="hover:text-[#C5A880] transition-colors">Wellness Programs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Newsletter</h4>
            <p className="text-gray-400 font-light text-sm mb-4">
              Subscribe to receive exclusive offers, expert tips, and clinic updates.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[#C5A880] text-white px-4 py-3 text-sm uppercase tracking-widest hover:bg-[#b0936b] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Lumière Clinic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
