import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const services = [
  {
    title: 'Aesthetic Dermatology',
    description: 'Advanced skin treatments including laser therapy, chemical peels, and micro-needling for a flawless complexion.',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Facial Rejuvenation',
    description: 'Non-surgical facelifts, dermal fillers, and anti-wrinkle injections to restore youthful volume and contour.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Body Contouring',
    description: 'State-of-the-art non-invasive fat reduction and skin tightening procedures for your ideal silhouette.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Wellness & Vitality',
    description: 'IV therapy, hormone optimization, and personalized nutrition plans to enhance your inner health and energy.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop',
  },
];

export default function Services({ isHome = false }: { isHome?: boolean }) {
  return (
    <div className="bg-white">
      {!isHome && (
        <PageHeader 
          title="Our Services" 
          subtitle="Tailored Treatments" 
          image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
        />
      )}
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C5A880] text-sm uppercase tracking-widest font-semibold">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Signature Treatments</h2>
            <div className="w-24 h-px bg-[#C5A880] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to="/contact" className="group block">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-[#C5A880] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm uppercase tracking-widest font-medium text-[#C5A880]">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {!isHome && (
        <section className="py-24 bg-[#F9F6F0]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Not sure which treatment is right for you?</h2>
            <p className="text-gray-600 font-light mb-10 text-lg">
              Schedule a comprehensive consultation with our experts to develop a personalized care plan tailored to your unique goals.
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
