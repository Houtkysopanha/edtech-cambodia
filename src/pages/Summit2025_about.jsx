import React from 'react';
import { motion as MOTION } from 'framer-motion';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';
// Import images
import edtechLogo from '@/assets/images/edtech_logo.png';
import showcaseImage from '@/assets/images/showcase.png';
import keynoteImage from '@/assets/images/keynote.png';
import panelImage from '@/assets/images/panel-discuss.png';

const Summit2025_about = () => {
  const featurePrograms = [
    {
      title: 'Keynote',
      description: 'Key insights and updates from national and international experts on the current and future vision of EdTech.',
      image: keynoteImage
    },
    {
      title: 'Panel Discussion', 
      description: 'Navigating the EdTech ecosystem for equitable, sustainable and safe education, innovation, and skills development in Cambodia.',
      image: panelImage
    },
    {
      title: 'EdTech Showcase',
      description: 'Exhibition of EdTech initiatives from both public and private sectors and opportunity for collaborations.',
      image: showcaseImage
    },
    {
      title: 'Competition',
      description: 'Most innovative EdTech Teacher and Public Digital, Media and Information Literacy Challenge.',
      image: edtechLogo
    }
  ];

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section - Dark Blue Background */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <MOTION.h1 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              អំពីយើង
            </MOTION.h1>
            <MOTION.h2 
              className="text-3xl font-light mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </MOTION.h2>
            {/* Decorative Tech Icons */}
            <div className="flex justify-center items-center space-x-8 mt-12 opacity-70">
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-xl">🌐</span>
              </div>
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-xl">🔬</span>
              </div>
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <Summit2025_navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          
          {/* Summit Introduction Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Logo and Title */}
              <MOTION.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex justify-center lg:justify-start mb-6">
                  <img src={edtechLogo} alt="EdTech Cambodia Summit" className="h-32" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  សន្និសីទ និងកំណត់គោលការណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទីមួយ
                </h3>
                <h4 className="text-xl text-blue-700 mb-6">
                  The First Cambodia EdTech Summit
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Why is The First Cambodia EdTech Summit initiated?</strong>
                </p>
              </MOTION.div>

              {/* Right Column - Content */}
              <MOTION.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Cambodia EdTech Summit is a premier platform that annually convenes government representatives, educators, IT professionals, entrepreneurs, investors, policymakers, and stakeholders to foster knowledge sharing, innovation, and collaboration toward challenges and open opportunities in integrating technology into Cambodia's education system.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our commitment with a theme <strong>"Pathways to Cambodia's Digital Education"</strong> will connect all the stakeholders by organizing various activities for the period of <strong>17-18, Feb. 2025</strong>. The future of education in Cambodia lies not only in traditional EdTech innovation but also those technology, but equally important.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    In Cambodia the primary objectives of equitable, sustainable and safe education discussions, exhibitions, and networking opportunities; the summit serves as a platform for sharing lessons learned and promising practices, and collaboration among public institutions, government agencies, international organizations, civil society, and development partners to shape the future of education in Cambodia.
                  </p>
                </div>
              </MOTION.div>
            </div>
          </section>

          {/* Detailed Content Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - English Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Summit Objectives</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    As the world becomes increasingly digital, the education sector must adapt to meet the needs of the 21st century. <strong>The Cambodia EdTech Summit</strong> serves as a platform to address digital challenges and opportunities facing Cambodia's education system.
                  </p>
                  
                  <p>
                    The summit will bring together diverse experts from government, administration, schools, and universities. The event will gather policymakers, educators, school directors, IT managers, <strong>EdTech innovators, and private companies</strong>, making it the most comprehensive forum to discuss and capitalize on the role of digital technology.
                  </p>
                </div>

                {/* Document Images */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center shadow-sm">
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center mb-3">
                      <span className="text-4xl">📄</span>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold">
                      CONCEPT NOTE
                    </button>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center shadow-sm">
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center mb-3">
                      <span className="text-4xl">📋</span>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold">
                      អំណុលអ្វី
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Khmer Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">គោលដៅសន្និសីទ</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    កំណត់និង ស្វែងយល់ពីបញ្ហាប្រឈម និងឱកាសអនុវត្តន៍បច្ចេកវិទ្យាអប់រំនៅក្នុងប្រព័ន្ធអប់រំកម្ពុជា។ រកវិធីសាស្រ្តគ្រប់គ្រងនិងអភិវឌ្ឍនូវគំនិតរួម ទៅកាន់ការអនុវត្តន៍ប្រកបដោយភាពមនុស្សធម៌។
                  </p>
                  
                  <p>
                    តាមរយៈសកម្មភាពនានា ដូចជា <strong>ការបង្ហាញបច្ចេកវិទ្យាអប់រំ</strong> ការពិភាក្សា និងការតភ្ជាប់បណ្តាញ សន្និសីទនេះនឹងបម្រើជាវេទិកាមួយសម្រាប់ការចែករំលែកបទពិសោធន៍ និងការអនុវត្តប្រកបដោយគុណភាព។
                  </p>

                  <p>
                    <strong>EdTech Summit ប្រចាំឆ្នាំនេះ</strong> នឹងត្រូវបានរៀបចំឡើងដោយក្រសួងអប់រំ យុវជន និងកីឡា ក្នុងនាមជាស្ថាប័នជាតិអភិវឌ្ឍបច្ចេកវិទ្យាអប់រំ ដើម្បីបង្កើតការតភ្ជាប់ និងសហប្រតិបត្តិការរវាងភាគីពាក់ព័ន្ធ។
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div>
                  <img src={edtechLogo} alt="EdTech Cambodia" className="h-24 mx-auto mb-4" />
                  <h4 className="text-xl font-bold">សន្និសីទ និងកំណត់គោលការណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទីមួយ</h4>
                  <p className="text-blue-200">The First Cambodia EdTech Summit</p>
                  <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg font-bold mt-4">
                    Pathway to Cambodia's Digital Education
                  </button>
                </div>
                
                <div className="text-center">
                  <h5 className="text-2xl font-bold mb-2">កាលបរិច្ឆេទ</h5>
                  <p className="text-3xl font-bold text-yellow-400">១៧-១៨</p>
                  <p className="text-xl">កុម្ភៈ ២០២៥</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">Scan QR Code for more info</p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Programs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Feature Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featurePrograms.map((program, index) => (
                <MOTION.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="bg-gray-100 p-6 rounded-lg mb-4 h-32 flex items-center justify-center">
                    <img src={program.image} alt={program.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </MOTION.div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Summit2025_about;
