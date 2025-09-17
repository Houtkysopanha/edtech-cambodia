
import { motion as MOTION } from 'framer-motion';
import { Award, Building, Globe, Users, Star, ArrowRight, CheckCircle, Target, Mail, Phone, MapPin } from 'lucide-react';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';

import moeys from '@/assets/images/MOEYS.png'

const Summit2025_partners = () => {

  
  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection 
          title="Our Partners"
          subtitle="2025"
          description="Building the future of education together with world-class organizations and industry leaders"
          showButtons={false}
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="partners" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">  
          {/* describe Section */}
          <section>
            <div className="max-w-6xl mx-auto px-4">
              <p className='mb-4 font-bold'>Support the First Cambodia EdTech Summit 2025!</p>
              <p className='mb-4'>
                The Cambodia EdTech Summit is the country’s platform 
                for driving
                innovation in education through technology. The summit’s theme
                is “Pathways to Cambodia’s Digital Education”, will be held on
                February 17-18, 2025, at the Institute of Technology of Cambodia
                (ITC).
              </p>
              <p className='mb-4'>
                industry leaders policymakers, educators, IT experts, EdTech
                innovators, and discussions, exhibitions, and networking, the
                Summit aims to promote equitable, sustainable, and safe digital
                education for the future of Cambodia.
              </p>
              <p className='mb-4 font-bold'>
                We are grateful to our sponsors for making this event possible!
              </p>
            </div>
          </section>

          
           {/* Sponsors & Exhibitors Section */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              
              {/* Hosted By Section */}
              <div className="text-center mb-12">
                <MOTION.h2 
                  className="text-3xl font-bold mb-8 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  HOSTED BY
                </MOTION.h2>
                <div className="flex justify-center">
                  <div className="p-8 rounded-lg w-64 h-40 flex items-center justify-center">

                      <div className="text-center">
                        <img src={moeys} alt="" />
                      </div>
                  </div>
                </div>
              </div>

              {/* Strategic Partners Section */}
              <div className="mb-12">
                <MOTION.h3 
                  className="text-2xl font-bold text-center mb-8 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  STRATEGIC PARTNERS
                </MOTION.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* First Row */}
                  {[
                    { name: "KOICA", color: "bg-blue-50" },
                    { name: "Cellcard", color: "bg-orange-50" },
                    { name: "UNICEF", color: "bg-blue-50" },
                    { name: "UNESCO", color: "bg-blue-50" }
                  ].map((partner, idx) => (
                    <MOTION.div
                      key={idx}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${partner.color} flex items-center justify-center rounded`}>
                        <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
                
                {/* Second Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-w-3xl mx-auto">
                  {[
                    { name: "CDRI", color: "bg-green-50" },
                    { name: "UK Aid", color: "bg-blue-50" },
                    { name: "World Bank", color: "bg-blue-50" }
                  ].map((partner, idx) => (
                    <MOTION.div
                      key={idx + 4}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (idx + 4) * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${partner.color} flex items-center justify-center rounded`}>
                        <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex justify-center mb-8">
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button className="bg-red-600 text-white px-6 py-2 font-semibold text-sm">
                    SPONSORS
                  </button>
                  <button className="bg-white text-gray-600 px-6 py-2 font-semibold text-sm hover:bg-gray-50 border-l border-gray-300">
                    EXHIBITORS
                  </button>
                  <button className="bg-white text-gray-600 px-6 py-2 font-semibold text-sm hover:bg-gray-50 border-l border-gray-300">
                    FLOOR PLAN
                  </button>
                  <button className="bg-white text-gray-600 px-6 py-2 font-semibold text-sm hover:bg-gray-50 border-l border-gray-300">
                    PARTNERS
                  </button>
                </div>
              </div>

              {/* Knowledge Partners Section */}
              <div className="mb-10">
                <MOTION.h3 
                  className="text-lg font-bold text-center mb-6 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  KNOWLEDGE PARTNERS:
                </MOTION.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "ACE", color: "bg-blue-50" },
                    { name: "DICHI", color: "bg-red-50" },
                    { name: "NICC", color: "bg-blue-50" },
                    { name: "EdTech Cambodia", color: "bg-purple-50" }
                  ].map((partner, idx) => (
                    <MOTION.div
                      key={idx}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${partner.color} flex items-center justify-center rounded`}>
                        <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
              </div>

              {/* Gold Sponsors Section */}
              <div className="mb-10">
                <MOTION.h3 
                  className="text-lg font-bold text-center mb-6 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  GOLD SPONSORS:
                </MOTION.h3>
                
                {/* First Row - 4 sponsors */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { name: "EBC", color: "bg-yellow-50" },
                    { name: "Wing Bank", color: "bg-green-50" },
                    { name: "HP", color: "bg-blue-50" },
                    { name: "Institute", color: "bg-yellow-50" }
                  ].map((sponsor, idx) => (
                    <MOTION.div
                      key={idx}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${sponsor.color} flex items-center justify-center rounded`}>
                        <span className="text-sm font-semibold text-gray-700">{sponsor.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
                
                {/* Second Row - 3 sponsors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {[
                    { name: "Kids of Action", color: "bg-orange-50" },
                    { name: "KOOMPI", color: "bg-blue-50" },
                    { name: "eBook", color: "bg-green-50" }
                  ].map((sponsor, idx) => (
                    <MOTION.div
                      key={idx + 4}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (idx + 4) * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${sponsor.color} flex items-center justify-center rounded`}>
                        <span className="text-sm font-semibold text-gray-700">{sponsor.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
              </div>

              {/* Silver Sponsors Section */}
              <div className="mb-12">
                <MOTION.h3 
                  className="text-lg font-bold text-center mb-6 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  SILVER SPONSORS:
                </MOTION.h3>
                
                {/* First Row - 4 sponsors */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { name: "Phusath Institute", color: "bg-gray-50" },
                    { name: "UWS", color: "bg-red-50" },
                    { name: "iBlooming", color: "bg-gray-50" },
                    { name: "Ministry", color: "bg-red-50" }
                  ].map((sponsor, idx) => (
                    <MOTION.div
                      key={idx}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${sponsor.color} flex items-center justify-center rounded`}>
                        <span className="text-xs font-semibold text-gray-700 text-center">{sponsor.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
                
                {/* Second Row - 2 sponsors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    { name: "Partner 5", color: "bg-blue-50" },
                    { name: "LEC", color: "bg-blue-50" }
                  ].map((sponsor, idx) => (
                    <MOTION.div
                      key={idx + 4}
                      className="bg-white border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (idx + 4) * 0.1, duration: 0.6 }}
                    >
                      <div className={`w-full h-full ${sponsor.color} flex items-center justify-center rounded`}>
                        <span className="text-sm font-semibold text-gray-700">{sponsor.name}</span>
                      </div>
                    </MOTION.div>
                  ))}
                </div>
              </div>

              {/* Footer Banner */}
              <div className="mt-12">
                <div className="bg-blue-900 p-6 text-center">
                  <div className="flex justify-center items-center flex-wrap gap-4 mb-4">
                    {[
                      { name: "European Union", logo: "EU", flag: "🇪🇺" },
                      { name: "Sverige", logo: "Sweden", flag: "🇸🇪" },
                      { name: "GPE", logo: "GPE", color: "bg-blue-700" },
                      { name: "USAID", logo: "USAID", color: "bg-blue-700" },
                      { name: "UNICEF", logo: "UNICEF", color: "bg-blue-700" }
                    ].map((org, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-white">
                        <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center border border-blue-600">
                          <span className="text-xs font-semibold">{org.flag || org.logo}</span>
                        </div>
                        <span className="text-sm">{org.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="khmer-text text-white text-lg font-semibold">
                    ក្រុមហ៊ុនអភិវឌ្ឍន៍ឌីជីថលសម្រាប់ប្រទេសកម្ពុជា (CDDF III)
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Summit2025_partners;
