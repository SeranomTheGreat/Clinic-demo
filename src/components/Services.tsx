import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const services = [
  {
    title: 'General Consultation',
    description: 'Comprehensive health checkups and expert medical advice for all your general health concerns.',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Cardiology',
    description: 'Advanced heart care including ECG, echocardiography, and preventive cardiology screening.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Orthopedics',
    description: 'Specialized care for bone, joint, and muscle conditions, including sports injuries and arthritis.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Pediatrics',
    description: 'Compassionate and expert medical care for infants, children, and adolescents.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive Care" 
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-gray-900">Specialized Treatments</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto"></div>
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
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-xl shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-blue-600 transition-colors text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm uppercase tracking-widest font-medium text-blue-600">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Not sure which treatment is right for you?</h2>
          <p className="text-gray-600 font-light mb-10 text-lg">
            Schedule a comprehensive consultation with our experts to develop a personalized care plan tailored to your unique health goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm uppercase tracking-widest font-bold shadow-md hover:shadow-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
