import { motion } from 'motion/react';
import PageHeader from './PageHeader';
import { Shield, Sparkles, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Philosophy" 
        subtitle="The Clinic Story" 
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" 
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold block mb-4">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-gray-900">
                Elevating Health Through Science & Compassion
              </h2>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  At our clinic, we believe that true well-being is a reflection of optimal health and inner vitality. Founded in 2010, our clinic has established itself as a premier destination for those seeking the highest standard of medical care.
                </p>
                <p>
                  Our approach is deeply personalized. We don't believe in one-size-fits-all solutions. Instead, our team of renowned specialists takes the time to understand your unique health goals, history, and lifestyle to craft bespoke treatment plans.
                </p>
                <p>
                  Combining cutting-edge medical technology with a refined, patient-first vision, we deliver results that are effective, lasting, and transformative—enhancing your quality of life.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                <div>
                  <h4 className="text-3xl font-serif text-blue-600 mb-2">15+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-blue-600 mb-2">10k+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Happy Patients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-blue-600 mb-2">25+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Global Awards</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop"
                  alt="Clinic Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white p-4 hidden md:block shadow-xl rounded-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop"
                  alt="Treatment Detail"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Our Core Values</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-blue-100">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-900">Safety & Excellence</h3>
              <p className="text-gray-600 font-light">We adhere to the highest medical standards, utilizing approved technologies and evidence-based protocols.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-blue-100">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-900">Holistic Approach</h3>
              <p className="text-gray-600 font-light">Our goal is to treat the whole person, addressing underlying causes rather than just symptoms.</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-blue-100">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-900">Compassionate Care</h3>
              <p className="text-gray-600 font-light">We build lasting relationships with our patients based on trust, empathy, and absolute discretion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
