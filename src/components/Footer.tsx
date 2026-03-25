import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif tracking-wider mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">V</div>
              VITALITY
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Premium personalized care for your health and well-being. Elevating standards in medical excellence and holistic care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/team" className="hover:text-blue-500 transition-colors">Our Specialists</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">Philosophy</Link></li>
              <li><Link to="/before-after" className="hover:text-blue-500 transition-colors">Before & After</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Treatments</h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">General Consultation</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Cardiology</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Orthopedics</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Pediatrics</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Wellness Programs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Newsletter</h4>
            <p className="text-gray-400 font-light text-sm mb-4">
              Subscribe to receive exclusive health tips, clinic updates, and more.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 rounded-md transition-colors"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-3 text-sm uppercase tracking-widest font-bold rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Vitality Clinic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
