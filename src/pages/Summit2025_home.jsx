import React from 'react';
import { Calendar, MapPin, Users, Target, Award, FileText, Lightbulb, Network, Globe } from 'lucide-react';
import { motion as MOTION } from 'framer-motion';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';
import showcaseImage from '@/assets/images/showcase.png';
import keynoteImage from '@/assets/images/keynote.png';
import panelImage from '@/assets/images/panel-discuss.png';
import edtechImage from '@/assets/images/edtech.png';
import moeys from '@/assets/images/MOEYS.png';
// Strategic Partners Images
import koica from '@/assets/images/B2B.png';
import cellcard from '@/assets/images/Digital100k.png';
import unicef from '@/assets/images/openDevCam.png';
import cdri from '@/assets/images/whoweare.png';
import unesco from '@/assets/images/ICT4E_logo.png';
import worldbank from '@/assets/images/themes.png';
import ukaid from '@/assets/images/photo-slider.png';

const Summit2025_home = () => {
  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="home" />

        {/* Main Content */}
        <main className="bg-white">
          {/* Bilingual Introduction Section */}
          <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <MOTION.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Khmer Text */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-800 leading-relaxed">
                      ឱកាសប្រាណីត ក្នុងការចូលរួមកសាងប្រព័ន្ធអប់រំ
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Join us in Cambodia, where innovation meets education. Don't miss the opportunity to be part of the transformation shaping Cambodia's education system!
                    </p>
                  </div>

                  {/* English Text */}
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      ក្រសួងអប់រំ យុវជន និងកីឡា អញ្ជើញឱ្យអ្នកពាក់ព័ន្ធគ្រប់រូប 
                      និងអ្នកជំនាញគ្រប់វិស័យ រួមទាំងវិស័យបច្ចេកវិទ្យា ស្ថាប័នអប់រំ 
                      និងដៃគូអភិវឌ្ឍន៍ ចូលរួម និងបង្ហាញ នូវដំណោះស្រាយ EdTech នៅ 
                      ក្នុងកិច្ចប្រជុំ The First Cambodia EdTech Summit។ Contact Us!
                    </p>
                  </div>

                  {/* Social Media Section */}
                  <MOTION.div 
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <p className="text-blue-600 font-semibold mb-4">
                      Stay updated by following us on our social media channels!
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                        TELEGRAM CHANNEL
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                        FACEBOOK PAGE
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                        TIKTOK
                      </button>
                    </div>
                  </MOTION.div>
                </MOTION.div>

                {/* Right Column - Image */}
                <MOTION.div
                  className="flex justify-center lg:justify-end"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative max-w-md">
                    <img 
                      src={edtechImage} 
                      alt="EdTech Cambodia Summit" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </MOTION.div>
              </div>
            </div>
          </section>

          {/* Feature Programs Section */}
          <section className="bg-gray-50 py-16 text-center">
            <div className="max-w-7xl mx-auto px-4">
              <MOTION.h2 
                className="text-4xl font-bold mb-16 uppercase text-gray-800" 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                FEATURE PROGRAMS
              </MOTION.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: 'KEYNOTE',
                    desc: 'Key insights and updates from national and international experts on the current and future vision of EdTech.',
                    img: keynoteImage,
                  },
                  {
                    title: 'PANEL DISCUSSION',
                    desc: 'Navigating the EdTech ecosystem for equitable, sustainable and safe education, innovation, and skills development in Cambodia.',
                    img: panelImage,
                  },
                  {
                    title: 'EDTECH SHOWCASE',
                    desc: 'Exhibition of EdTech initiatives from both public and private sectors and opportunity for collaborations.',
                    img: showcaseImage,
                  },
                  {
                    title: 'COMPETITION',
                    desc: 'Most innovative EdTech Teacher and Public Digital, Media and Information Literacy Challenge.',
                    img: showcaseImage,
                  },
                ].map((prog, idx) => (
                  <MOTION.div
                    key={idx}
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image Section */}
                    <div className="flex justify-center items-center h-48 bg-gray-100 p-6">
                      <img 
                        src={prog.img} 
                        alt={prog.title} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Title Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white uppercase font-bold text-lg py-4 px-4">
                      {prog.title}
                    </div>
                    
                    {/* Description Section */}
                    <div className="p-6 flex-grow flex items-center">
                      <p className="text-sm text-gray-700 leading-relaxed text-center">
                        {prog.desc}
                      </p>
                    </div>
                  </MOTION.div>
                ))}
              </div>
            </div>
          </section>

          {/* Hosted By Section */}
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

          {/* Strategic Partners Section */}
          <section className="py-16 bg-gray-50 text-center">
            <div className="max-w-6xl mx-auto px-4">
              <MOTION.h2 
                className="text-3xl font-bold mb-12 text-gray-800 uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                STRATEGIC PARTNERS
              </MOTION.h2>
              
              <MOTION.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { name: 'KOICA', logo: koica },
                  { name: 'Cellcard', logo: cellcard },
                  { name: 'UNICEF', logo: unicef },
                  { name: 'CDRI', logo: cdri },
                  { name: 'UNESCO', logo: unesco },
                  { name: 'The World Bank', logo: worldbank },
                  { name: 'UK Aid', logo: ukaid },
                ].map((partner, idx) => (
                  <MOTION.div
                    key={idx}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </MOTION.div>
                ))}
              </MOTION.div>
            </div>
          </section>
        </main>
        
      </div>
    </>
  );
};

export default Summit2025_home;
