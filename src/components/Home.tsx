import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, UserCheck, ArrowRight } from 'lucide-react';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="bg-[#F9F6F0]">
      <Hero />

      {/* Welcome Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C5A880] text-sm uppercase tracking-widest font-semibold block mb-4">
              Welcome Home
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-primary">
              A Sanctuary for Your Well-being
            </h2>
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-10">
              Step into Lumière, where every detail is designed with your comfort and peace of mind at heart. We believe that aesthetic care and wellness should be a deeply relaxing, empowering experience. From the moment you walk through our doors, you are family.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop" 
              alt="Welcoming Clinic Environment" 
              className="w-full h-auto aspect-[21/9] object-cover rounded-sm shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* The Lumière Experience */}
      <section className="py-24 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">The Lumière Experience</h2>
            <div className="w-24 h-px bg-[#C5A880] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart size={32} />,
                title: "Warm & Compassionate",
                desc: "Our team is dedicated to making you feel heard, understood, and completely at ease during every visit."
              },
              {
                icon: <UserCheck size={32} />,
                title: "Deeply Personalized",
                desc: "Your journey is entirely your own. We take the time to craft treatments that align perfectly with your unique goals."
              },
              {
                icon: <Sparkles size={32} />,
                title: "Luxurious Comfort",
                desc: "Enjoy a serene, spa-like environment that melts away stress and allows you to focus purely on your rejuvenation."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-10 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-[#F9F6F0] rounded-full flex items-center justify-center mb-6 text-[#C5A880]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-primary">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Our Services", href: "/services", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2670&auto=format&fit=crop" },
              { title: "Meet the Team", href: "/team", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop" },
              { title: "Real Results", href: "/before-after", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2670&auto=format&fit=crop" },
              { title: "Patient Stories", href: "/testimonials", img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2574&auto=format&fit=crop" }
            ].map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={link.href} className="group block relative overflow-hidden aspect-square">
                  <img 
                    src={link.img} 
                    alt={link.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-2xl font-serif mb-3">{link.title}</h3>
                    <div className="flex items-center text-sm uppercase tracking-widest font-medium text-[#C5A880] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="mr-2">Explore</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
