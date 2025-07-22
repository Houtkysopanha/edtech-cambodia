import React from 'react';
import { motion as Motion } from 'framer-motion';
import img1 from '@/assets/images/edtech.png';
import img2 from '@/assets/images/ICT4E.png';
import img3 from '@/assets/images/Digital100k.png';

export default function KeyPrograms() {
  const programs = [
    {
      image: img1,
      title: 'EdTech Summit',
      description: 'Annual conference bringing together education professionals.',
    },
    {
      image: img3,
      title: 'Digital Mission for 100K Teachers',
      description: 'Initiative to train 100,000 educators in digital skills. Cambodia',
    },
    {
      image: img2,
      title: 'ICT for Education: Networking Meeting',
      description: 'Connecting educators and tech experts to advance digital education.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white px-4">
      <Motion.div
        className="text-center mb-12"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold uppercase text-gray-900">Key Program</h2>
        <p className="text-gray-600 mt-2">
          Explore our core initiatives aimed at enhancing digital education in Cambodia.
        </p>
      </Motion.div>

      <Motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {programs.map((program, index) => (
          <Motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm bg-edtech-gradient flex flex-col h-full"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Motion.div 
              className="bg-white m-[5px] rounded"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-60 object-cover rounded"
              />
              <Motion.div 
                className="p-4 text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-semibold text-base text-gray-900 mb-1">{program.title}</h3>
                <p className="text-sm text-gray-600 leading-snug">{program.description}</p>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}