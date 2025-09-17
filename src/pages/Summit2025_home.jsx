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
import koica from '@/assets/images/strat-partner/koica.png';
import cellcard from '@/assets/images/strat-partner/cell.png';
import unicef from '@/assets/images/strat-partner/uni.png';
import cdri from '@/assets/images/strat-partner/cdri.png';
import unesco from '@/assets/images/strat-partner/unes.png';
import worldbank from '@/assets/images/strat-partner/theWord.png';
import ukaid from '@/assets/images/strat-partner/uk.png';
// sponsort Partners Images
import ace from '@/assets/images/sponsor/ace.png';
import dichi from '@/assets/images/sponsor/dichi.png';
import nicc from '@/assets/images/sponsor/NICC.png';
import canaida from '@/assets/images/sponsor/canadia.png';
import hp from '@/assets/images/sponsor/hp.png';
import koompi from '@/assets/images/sponsor/koompi.png';
import ebook from '@/assets/images/sponsor/ebook.png';
import aide from '@/assets/images/sponsor/aide.png';
import cbc from '@/assets/images/sponsor/ebc.png';
import wing from '@/assets/images/sponsor/Wing-150x150.png.png';
import proseth from '@/assets/images/sponsor/Proseth.png.png';
import uws from '@/assets/images/sponsor/UWS-150x150.png.png';
import iblooming from '@/assets/images/sponsor/imblooming.png';
import rule from '@/assets/images/sponsor/rule.png';
import rupp from '@/assets/images/sponsor/rupp.png';
import itc from '@/assets/images/sponsor/itc.png';

import banner from '@/assets/images/CDPF-1024x273.png.png'
// event partner Images
import sala from '@/assets/images/event-partner/sala.png';
import camex from '@/assets/images/event-partner/camex.png';
import itstep from '@/assets/images/event-partner/itstep.png';
import powerlive from '@/assets/images/event-partner/powerlive.png';










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
              <div className='my-5'>
                    <h2 className="text-2xl text-center font-bold text-blue-800 leading-relaxed">
                      ចូលរួមដោយសេរី ក្នុងព្រឹត្តិការណ៍នវានុវត្តន៍និងការអប់រំ
                    </h2>
                    <p  className='text-center text-xl font-medium text-blue-800 leading-relaxed'>Join us in Cambodia, where innovation meets education. Don’t miss the opportunity to be part of the transformation shaping Cambodia’s education system!</p>
                  </div>
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
                    <p className="text-lg text-gray-700 leading-relaxed">
                      ក្រសួងអប់រំ យុវជន និងកីឡាអញ្ជើញភាគីពាក់ព័ន្ធក្នុងវិស័យបច្ចេកវិទ្យា គ្រឹះស្ថានសិក្សា និងដៃគូអភិវឌ្ឍន៍ចូលរួមសហការ និងតាំងបង្ហាញផលិផល និងស្នាដៃបច្ចេកវិទ្យាក្នុងសន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទី១។
                    </p>
                  </div>

                  {/* English Text */}
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      The Ministry of Education, Youth, and Sport invites stakeholders from all sectors, including tech companies, educational institutions, and development partners, to collaborate and showcase EdTech solutions at The First Cambodia EdTech Summit. Contact Us!
                    </p>
                  </div>
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
          <section className='social-media text-center'>
             {/* Social Media Section */}
                  <MOTION.div 
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <p className="text-blue-600 text-xl font-semibold">
                      តាមដានព័ត៌មានថ្មីៗអំពីកម្មវិធី!
                    </p>
                    <p className="text-blue-600 text-xl font-semibold mb-8">
                     Stay updated by following us on our social media channels!
                    </p>
                    <div className="flex flex-wrap gap-14 justify-center items-center">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-5 rounded-md font-medium transition-colors">
                        TELEGRAM CHANNEL
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded-md font-medium transition-colors">
                        FACEBOOK PAGE
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded-md font-medium transition-colors">
                        TIKTOK
                      </button>
                    </div>
                  </MOTION.div>
          </section>
          {/* Feature Programs Section */}
          <section className=" py-16 text-center">
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
                    className="bg-white rounded-lg overflow-hidden flex flex-col "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image Section */}
                    <div className="flex justify-center items-center h-48 p-6">
                      <img 
                        src={prog.img} 
                        alt={prog.title} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Title Section */}
                    <div className=" text-black uppercase font-bold text-lg py-4 px-4">
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
          <section className="bg-white py-10 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <MOTION.h2 
                className="text-3xl font-medium mb-6 text-gray-800 uppercase"
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
                <div className="">
                  <img 
                    src={moeys} 
                    alt="Ministry of Education, Youth and Sport" 
                    className="w-52 h-52  mx-auto object-contain"
                  />
                </div>
              </MOTION.div>
            </div>
          </section>

          {/* Strategic Partners Section */}
          <section className="py-10 text-center">
            <div className="max-w-5xl mx-auto px-4">
              <MOTION.h2 
                className="text-3xl font-medium mb-6 text-gray-800 uppercase"
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
                    className=" p-6 flex items-center justify-center w-52 h-52"
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

          {/* sponsor Section */}
          <section className="py-10 text-center">
            <div className="max-w-5xl mx-auto px-4">
              <MOTION.h2 
                className="text-3xl font-medium mb-6 text-gray-800 uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                SPONSORS/KNOWLEDGE PARTNERS
              </MOTION.h2>
              
              <MOTION.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { name: 'ace', logo: ace  },
                  { name: 'Cellcard', logo: dichi },
                  { name: 'UNICEF', logo: nicc },
                  { name: 'CDRI', logo: canaida },
                  { name: 'UNESCO', logo: hp },
                  { name: 'The World Bank', logo: koompi},
                  { name: 'UK Aid', logo: aide },
                  { name: 'UK Aid', logo: cbc },
                  { name: 'UK Aid', logo: wing  },
                  { name: 'UK Aid', logo: proseth },
                  { name: 'UK Aid', logo: uws },
                  { name: 'UK Aid', logo: ebook },
                  { name: 'UK Aid', logo: iblooming },
                  { name: 'UK Aid', logo: rule },
                   { name: 'UK Aid', logo: rupp },
                    { name: 'UK Aid', logo: itc },
                ].map((partner, idx) => (
                  <MOTION.div
                    key={idx}
                    className=" p-6 flex items-center justify-center w-52 h-52"
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
              <img src={banner} alt="" />
            </div>
          </section>

           {/* sponsor Section */}
          <section className="py-10 text-center">
            <div className="max-w-5xl mx-auto px-4">
              <MOTION.h2 
                className="text-3xl font-medium mb-6 text-gray-800 uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                SPONSORS/KNOWLEDGE PARTNERS
              </MOTION.h2>
              
              <MOTION.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { name: 'ace', logo: sala  },
                  { name: 'Cellcard', logo: camex },
                  { name: 'UNICEF', logo: powerlive },
                  { name: 'CDRI', logo: itstep },
                ].map((partner, idx) => (
                  <MOTION.div
                    key={idx}
                    className=" p-6 flex items-center justify-center w-52 h-52"
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
