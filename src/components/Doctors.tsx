import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const doctors = [
  {
    name: 'Dr. Elena Rossi',
    credentials: 'MD, FAAD',
    specialty: 'Board-Certified Dermatologist',
    bio: 'With over 15 years of experience in aesthetic dermatology, Dr. Rossi specializes in advanced facial rejuvenation and laser therapies.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'Dr. Marcus Chen',
    credentials: 'MD, FACS',
    specialty: 'Plastic & Reconstructive Surgeon',
    bio: 'Renowned for his natural-looking results, Dr. Chen brings precision and artistry to every body contouring and facial procedure.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop',
  },
  {
    name: 'Dr. Sarah Jenkins',
    credentials: 'ND, ABAARM',
    specialty: 'Anti-Aging & Wellness Expert',
    bio: 'Dr. Jenkins focuses on holistic vitality, offering personalized hormone optimization and regenerative medicine treatments.',
    image: 'https://images.unsplash.com/photo-1594824436998-ddedce228532?q=80&w=2670&auto=format&fit=crop',
  },
];

export default function Doctors({ isHome = false }: { isHome?: boolean }) {
  return (
    <div className="bg-white">
      {!isHome && (
        <PageHeader 
          title="Our Specialists" 
          subtitle="World-Class Experts" 
          image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop" 
        />
      )}

      <section className="py-24 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C5A880] text-sm uppercase tracking-widest font-semibold">Our Specialists</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Meet The Experts</h2>
            <div className="w-24 h-px bg-[#C5A880] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden bg-white shadow-sm"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8 text-center bg-white relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-serif mb-1">{doctor.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{doctor.credentials}</p>
                  <p className="text-[#C5A880] text-sm uppercase tracking-widest mb-4">{doctor.specialty}</p>
                  
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                      {doctor.bio}
                    </p>
                    <Link to="/contact" className="inline-block text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors">
                      View Profile
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {!isHome && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Trust Your Care to the Best</h2>
            <p className="text-gray-600 font-light mb-10 text-lg">
              Our team is dedicated to providing you with the highest level of care, ensuring your comfort and satisfaction at every step.
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
