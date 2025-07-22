// Example for FeaturePrograms using Framer Motion
import { motion as MOTION } from 'framer-motion';
import img1 from '@/assets/images/edtech_logo.png';
import img2 from '@/assets/images/keynote.png';
import img3 from '@/assets/images/panel-discuss.png';
import img4 from '@/assets/images/showcase.png';

export default function FeaturePrograms() {
  const programs = [
    {
      title: 'KEYNOTE',
      desc: 'Key insights and updates from national and international experts on the current and future vision of EdTech.',
      img: img2,
    },
    {
      title: 'PANEL DISCUSSION',
      desc: 'Navigating the EdTech ecosystem for equitable, sustainable and safe education, innovation, and skills development in Cambodia.',
      img: img3,
    },
    {
      title: 'EDTECH SHOWCASE',
      desc: 'Exhibition of EdTech initiatives from both public and private sectors and opportunity for collaborations.',
      img: img4,
    },
    {
      title: 'COMPETITION',
      desc: 'Most innovative EdTech Teacher and Public Digital, Media and Information Literacy Challenge.',
      img: img1,
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="bg-gray-100 py-16 text-center" style={{ backgroundColor: '#f2f4f8' }}>
      <MOTION.h2 
        className="text-4xl font-bold mb-16 uppercase" 
        style={{ color: '#3f51b5' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        FEATURE PROGRAMS
      </MOTION.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {programs.map((prog, idx) => (
          <MOTION.div
            key={idx}
            className="rounded-lg shadow-lg overflow-hidden flex flex-col bg-white"
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            custom={idx}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex justify-center items-center h-48 bg-white p-4">
              <img src={prog.img} alt={prog.title} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-4 bg-edtech-gradient text-white uppercase font-bold text-lg flex items-center justify-center h-16">
              {prog.title}
            </div>
            <div className="p-3 flex-grow flex items-center justify-center">
              <p className="text-sm text-gray-700 leading-relaxed text-center">{prog.desc}</p>
            </div>
          </MOTION.div>
        ))}
      </div>
    </section>
  );
}
