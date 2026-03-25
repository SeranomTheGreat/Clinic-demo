import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer" 
        />
      </div>
      <div className="relative z-20 text-center text-white px-6 mt-16 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="block text-sm uppercase tracking-[0.2em] mb-4 text-[#C5A880]"
        >
          {subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-4xl md:text-6xl font-serif leading-tight"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
