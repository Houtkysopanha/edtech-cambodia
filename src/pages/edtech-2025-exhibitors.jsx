import React, { useState } from 'react';
import hostedByImg from '@/assets/images/MOEYS.png';
import koicaLogo from '@/assets/images/edtech-2025/Koica-logo.png';
import cellcardLogo from '@/assets/images/edtech-2025/cellcard-logo.png';
import unicefLogo from '@/assets/images/edtech-2025/unicef-logo.png';
import cdriLogo from '@/assets/images/edtech-2025/CDRI-logo.png';
import unescoLogo from '@/assets/images/edtech-2025/unesco-logo.png';
import wbLogo from '@/assets/images/edtech-2025/WB-logo.png';
import britishEmbassyLogo from '@/assets/images/edtech-2025/British-Embassy-logo.png';
import cdpfLogo from '@/assets/images/edtech-2025/CDPF-logo.png';
const EdTech2025Exhibitors = () => {
  const [activeTab, setActiveTab] = useState('sponsors');
  
  const strategicPartners = [
      { src: koicaLogo, alt: "KOICA" },
      { src: cellcardLogo, alt: "Cellcard" },
      { src: unicefLogo, alt: "UNICEF" },
      { src: cdriLogo, alt: "CDRI" },
      { src: unescoLogo, alt: "UNESCO" },
      { src: wbLogo, alt: "The World Bank" },
      { src: britishEmbassyLogo, alt: "UK International Development" }
    ];
  return (
    <>
      {/* Simple Hero Section */}
      <section className="relative min-h-[50vh] bg-transparent text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-pink-400 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-14 h-14 border-2 border-green-400 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-10 h-10 border-2 border-purple-400 rounded-lg"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontWeight: '800' }}>
              អ្នកឧបត្ថម្ភ និងពិព័រណ៍
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
              Sponsors & Exhibitors
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Support the First Cambodia EdTech Summit 2025!
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-sm md:text-base">
                The <strong>Cambodia EdTech Summit</strong> is the country's <strong>platform</strong> for driving innovation in education through technology. The summit's theme is <strong>"Pathways to Cambodia's Digital Education"</strong>, will be held on <strong>February 17-18, 2025</strong>, at the <strong>Institute of Technology of Cambodia (ITC)</strong>.
              </p>

              <p className="text-sm md:text-base">
                This event is led by the <strong>Ministry of Education, Youth, and Sport</strong>, bringing together <strong>policymakers, educators, IT experts, EdTech innovators, and industry leaders</strong> to address challenges and seize opportunities in integrating technology into Cambodia's education system. Through engaging discussions, exhibitions, and networking, the Summit aims to promote <strong>equitable, sustainable, and safe digital education</strong> for the future of Cambodia.
              </p>

              <p className="text-sm md:text-base font-semibold">
                We are grateful to our sponsors for making this event possible!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  HOSTED BY
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
                <img src={hostedByImg} alt="Hosted By" className="mx-auto w-32 h-auto md:w-48" />
              </div>
            </section>
            {/* Strategic Partners Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                {/* Section Title */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    STRATEGIC PARTNERS
                  </h2>
                </div>
      
                {/* Partners Grid - 2 rows x 4 columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
                  {strategicPartners.map((partner, index) => (
                    <img 
                      key={index}
                      src={partner.src} 
                      alt={partner.alt} 
                      className="max-w-full h-32 md:h-40 object-contain rounded-2xl"
                      style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Tabbed Sponsors Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-1 mb-12">
                  <button
                    onClick={() => setActiveTab('sponsors')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'sponsors'
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    SPONSORS
                  </button>
                  <button
                    onClick={() => setActiveTab('exhibitors')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'exhibitors'
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    EXHIBITORS
                  </button>
                  <button
                    onClick={() => setActiveTab('floorplan')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'floorplan'
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    FLOOR PLAN
                  </button>
                  <button
                    onClick={() => setActiveTab('partners')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'partners'
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    PARTNERS
                  </button>
                </div>

                {/* Tab Content */}
                <div className="transition-all duration-300">
                  {activeTab === 'sponsors' && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">KNOWLEDGE PARTNERS:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 items-center justify-items-center">
                        <img src="/src/assets/images/edtech-2025/ACE-logo.png" alt="ACE" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/DICHI-logo.png" alt="DICHI" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/NICC-logo.png" alt="NICC" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/EdTech-Cambodia-logo.png" alt="EdTech Cambodia Logo" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">GOLD SPONSORS:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 items-center justify-items-center">
                        <img src="/src/assets/images/edtech-2025/EBC-logo.png" alt="EBC" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/Wing-logo.png" alt="Wing Bank" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/HP-1-logo.png" alt="HP" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/CANADIA-logo.png" alt="Canadia Bank" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/AIDE-ET-ACTION-logo.png" alt="Aide et Action" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/Koompi-logo.png" alt="Koompi" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/EBOOK-logo.png" alt="Ebook" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">SILVER SPONSORS:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center mb-8">
                        <img src="/src/assets/images/edtech-2025/Proseth-logo.png" alt="Proseth Institute" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/UWS-logo.png" alt="UWS" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/iBlooming-logo.png" alt="iBlooming" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/13-logo.png" alt="EdTech Cambodia" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/14-logo.png" alt="MTA" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                        <img src="/src/assets/images/edtech-2025/I.T.C-logo.png" alt="ITC" className="max-w-full h-32 md:h-40 object-contain rounded-2xl" style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }} />
                      </div>
        
                      {/* CDPF logo spanning full grid width */}
                     <div className="flex justify-center mb-8">
                                 <img 
                                   src={cdpfLogo} 
                                   alt="CDPF III - Cambodia Development Finance Program" 
                                   className="max-w-full h-50 md:h-68 object-contain"
                                 />
                               </div>
                    </div>
                  )}

                  {activeTab === 'exhibitors' && (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">EXHIBITORS</h3>
                      <p className="text-gray-600">Exhibitor information will be available soon.</p>
                    </div>
                  )}

                  {activeTab === 'floorplan' && (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">FLOOR PLAN</h3>
                      <p className="text-gray-600">Floor plan details will be available soon.</p>
                    </div>
                  )}

                  {activeTab === 'partners' && (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">PARTNERS</h3>
                      <p className="text-gray-600">Partner information will be available soon.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
    </>
  );
};

export default EdTech2025Exhibitors;