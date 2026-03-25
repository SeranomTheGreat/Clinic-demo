import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from './PageHeader';

export default function Contact() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch" 
        image="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C5A880] text-sm uppercase tracking-widest font-semibold">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Book Your Consultation</h2>
            <div className="w-24 h-px bg-[#C5A880] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <MapPin className="text-[#C5A880] mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2">Location</h4>
                    <p className="text-gray-600 font-light">123 Prestige Avenue, Suite 400<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[#C5A880] mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2">Phone</h4>
                    <p className="text-gray-600 font-light">+1 (310) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#C5A880] mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2">Email</h4>
                    <p className="text-gray-600 font-light">concierge@lumiereclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#C5A880] mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2">Hours</h4>
                    <p className="text-gray-600 font-light">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white px-6 py-3 shadow-lg flex items-center space-x-2">
                      <MapPin size={18} className="text-[#C5A880]" />
                      <span className="text-sm font-medium uppercase tracking-widest">View on Maps</span>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F9F6F0] p-8 md:p-12"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A880] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A880] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A880] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A880] transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service of Interest</label>
                  <select id="service" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A880] transition-colors appearance-none rounded-none">
                    <option value="">Select a service...</option>
                    <option value="aesthetic">Aesthetic Dermatology</option>
                    <option value="facial">Facial Rejuvenation</option>
                    <option value="body">Body Contouring</option>
                    <option value="wellness">Wellness & Vitality</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white py-4 text-sm uppercase tracking-widest hover:bg-[#C5A880] transition-colors mt-8">
                  Request Appointment
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-[#F9F6F0]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-px bg-[#C5A880] mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How do I prepare for my first consultation?", a: "Please arrive 15 minutes early to fill out any necessary paperwork. We recommend coming with a clean face (no makeup) if you are seeking facial treatments." },
              { q: "Do you offer financing options?", a: "Yes, we partner with several premium healthcare financing providers to offer flexible payment plans. Our concierge team can provide details during your visit." },
              { q: "What is your cancellation policy?", a: "We require a 48-hour notice for any cancellations or rescheduling. Late cancellations may be subject to a fee." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 shadow-sm">
                <h4 className="font-serif text-xl mb-3">{faq.q}</h4>
                <p className="text-gray-600 font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
