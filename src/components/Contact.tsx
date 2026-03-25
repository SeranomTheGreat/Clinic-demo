import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
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
            <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold">Book Your Visit</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-gray-900">Schedule a Consultation</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto"></div>
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
                  <MapPin className="text-blue-600 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-gray-900">Location</h4>
                    <p className="text-gray-600 font-light">123 Health Avenue, Suite 400<br/>Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-gray-900">Phone</h4>
                    <p className="text-gray-600 font-light">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-gray-900">Email</h4>
                    <p className="text-gray-600 font-light">care@trustedclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-blue-600 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-gray-900">Hours</h4>
                    <p className="text-gray-600 font-light">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 overflow-hidden relative rounded-xl shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white px-6 py-3 shadow-lg flex items-center space-x-2 rounded-full text-blue-600">
                      <MapPin size={18} />
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
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              
              <div className="mb-8 flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <ShieldCheck className="text-blue-600 flex-shrink-0" size={24} />
                <p className="text-sm text-blue-900 font-medium">
                  Quick confirmation within 24 hours. Your information is secure and confidential.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all" placeholder="Rahul" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all" placeholder="Sharma" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Email Address</label>
                    <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all" placeholder="rahul@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Reason for Visit</label>
                  <select id="service" className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none">
                    <option value="">Select a reason...</option>
                    <option value="consultation">General Consultation</option>
                    <option value="cardiology">Cardiology Checkup</option>
                    <option value="preventive">Preventive Health Screening</option>
                    <option value="followup">Follow-up Visit</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Additional Details (Optional)</label>
                  <textarea id="message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none" placeholder="Please describe any symptoms or specific concerns..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-md text-sm uppercase tracking-widest font-bold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mt-8">
                  Confirm Appointment Request
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Frequently Asked Questions</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How do I prepare for my first consultation?", a: "Please arrive 15 minutes early to complete your registration. Bring any previous medical records, test reports, and a list of current medications." },
              { q: "Do you accept health insurance?", a: "Yes, we are empaneled with all major health insurance providers and offer cashless hospitalization facilities. Please bring your insurance card during your visit." },
              { q: "What is your cancellation policy?", a: "We request a 24-hour notice if you need to cancel or reschedule your appointment, so we can offer the slot to another patient in need." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 shadow-sm rounded-xl border border-blue-100">
                <h4 className="font-serif text-xl mb-3 text-gray-900">{faq.q}</h4>
                <p className="text-gray-600 font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
