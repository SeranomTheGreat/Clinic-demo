import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, HeartPulse, CheckCircle2 } from 'lucide-react';
import PageHeader from './PageHeader';

const mainDoctor = {
  name: 'Dr. Rajesh Sharma',
  credentials: 'MD, DM (Cardiology), FACC',
  specialty: 'Chief Cardiologist & Medical Director',
  experience: '20+ Years Experience',
  bio: 'Dr. Rajesh Sharma is a highly respected cardiologist with over two decades of experience in advanced cardiac care. He has successfully treated thousands of patients and is known for his compassionate, patient-first approach. His expertise spans preventive cardiology, heart failure management, and complex interventional procedures.',
  image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop', // Professional male doctor
  highlights: [
    'Former Head of Cardiology at City Hospital',
    'Awarded "Best Doctor" by Medical Association 2022',
    'Over 10,000 successful procedures',
    'Specialized in non-invasive treatments'
  ]
};

export default function Doctors() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Lead Specialist" 
        subtitle="Expertise You Can Trust" 
        image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop" 
      />

      <section className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold">Meet Our Expert</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-gray-900">Dedicated to Your Health</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[500px] lg:h-auto">
                <img
                  src={mainDoctor.image}
                  alt={mainDoctor.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8 pt-24">
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
                    <Award size={14} />
                    {mainDoctor.experience}
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-1">{mainDoctor.name}</h3>
                  <p className="text-blue-200">{mainDoctor.credentials}</p>
                </div>
              </div>
              
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h4 className="text-xl font-medium text-blue-600 mb-6">{mainDoctor.specialty}</h4>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {mainDoctor.bio}
                </p>
                
                <div className="space-y-4 mb-10">
                  {mainDoctor.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10 border-y border-gray-100 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">10k+</p>
                      <p className="text-xs text-gray-500 uppercase">Patients</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">50+</p>
                      <p className="text-xs text-gray-500 uppercase">Publications</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md text-sm uppercase tracking-widest font-semibold shadow-md hover:shadow-lg"
                >
                  Consult Dr. Sharma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Trust Your Care to the Best</h2>
          <p className="text-gray-600 font-light mb-10 text-lg">
            Our team is dedicated to providing you with the highest level of care, ensuring your comfort and satisfaction at every step.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md text-sm uppercase tracking-widest font-semibold shadow-md"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
