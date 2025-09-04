import { motion as MOTION } from 'framer-motion';
import moeys from '@/assets/images/MOEYS.png';

export default function HostedBySection() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <MOTION.h2 
          className="text-3xl font-bold mb-12 text-gray-800 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HOSTED BY
        </MOTION.h2>
        
        <MOTION.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img 
              src={moeys} 
              alt="Ministry of Education, Youth and Sport" 
              className="h-32 w-auto mx-auto object-contain"
            />
          </div>
        </MOTION.div>
      </div>
    </section>
  );
}
