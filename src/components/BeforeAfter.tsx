import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

export default function BeforeAfter({ isHome = false }: { isHome?: boolean }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div className="bg-white">
      {!isHome && (
        <PageHeader 
          title="Real Results" 
          subtitle="Transformations" 
          image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop" 
        />
      )}

      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C5A880] text-sm uppercase tracking-widest font-semibold">Transformations</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Before & After</h2>
            <div className="w-24 h-px bg-[#C5A880] mx-auto mb-6"></div>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Drag the slider to see the remarkable results of our signature facial rejuvenation treatment.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] overflow-hidden select-none"
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* After Image (Base) */}
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2670&auto=format&fit=crop"
              alt="After Treatment"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              draggable="false"
            />
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm px-4 py-2 text-sm uppercase tracking-widest z-10">
              After
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2670&auto=format&fit=crop&sat=-100" 
                alt="Before Treatment"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
                draggable="false"
              />
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 text-sm uppercase tracking-widest z-10">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
                <MoveHorizontal size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {!isHome && (
        <section className="py-24 bg-[#F9F6F0]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready for your own transformation?</h2>
            <p className="text-gray-600 font-light mb-10 text-lg">
              Discover what's possible with a personalized treatment plan.
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
