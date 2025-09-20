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
import floorplan from '@/assets/images/edtech-2025/EdTech-ITC-Floor-Plan-Updated-150225-2-1536x864.png';
// Exhibitor logo imports
import myTebLogo from '@/assets/images/edtech-2025/MyTeb-logo.png';
import mgaLogo from '@/assets/images/edtech-2025/MGA-logo.png';
import salaLogo from '@/assets/images/edtech-2025/SALA-logo.png';
import casLogo from '@/assets/images/edtech-2025/CAS-logo.png';
import oraLogo from '@/assets/images/edtech-2025/ORA-logo.png';
import powerLiveLogo from '@/assets/images/edtech-2025/POWER-LIVE-logo.png';
import snoopEduLogo from '@/assets/images/edtech-2025/Snoopedu-logo.png';
import logo4 from '@/assets/images/edtech-2025/4.0-logo.png';
import logo8 from '@/assets/images/edtech-2025/8-logo.png';
import logo13 from '@/assets/images/edtech-2025/13-logo.png';
import iBloomingLogo from '@/assets/images/edtech-2025/iBlooming-logo.png';
import aceLogo from '@/assets/images/edtech-2025/ACE-logo.png';
import ptcLogo from '@/assets/images/edtech-2025/P.T.C-logo.png';
import auppLogo from '@/assets/images/edtech-2025/AUPP-logo.png';
import logo17 from '@/assets/images/edtech-2025/17-logo.png';
import hpLogo from '@/assets/images/edtech-2025/HP-1-logo.png';
import weMoneyLogo from '@/assets/images/edtech-2025/We-Money-Mobile-logo.png';
import pmtkLogo from '@/assets/images/edtech-2025/PMTK-logo.png';
import stepLogo from '@/assets/images/edtech-2025/STEP-logo.png';
import ebookLogo from '@/assets/images/edtech-2025/EBOOK-logo.png';
import logo11 from '@/assets/images/edtech-2025/11-logo.png';
import reanLogo from '@/assets/images/edtech-2025/Rean-logo.png';
import logo15 from '@/assets/images/edtech-2025/15-logo.png';
import dichiLogo from '@/assets/images/edtech-2025/DICHI-logo.png';
import uteLogo from '@/assets/images/edtech-2025/UTE-logo.png';
import prosethLogo from '@/assets/images/edtech-2025/Proseth-logo.png';
import logo14 from '@/assets/images/edtech-2025/14-logo.png';
import itcLogo from '@/assets/images/edtech-2025/I.T.C-logo.png';
import koompiLogo from '@/assets/images/edtech-2025/Koompi-logo.png';
import camexLogo from '@/assets/images/edtech-2025/CAMEX-logo.png';
import dapLogo from '@/assets/images/edtech-2025/DAP-logo.png';
import ebcLogo from '@/assets/images/edtech-2025/EBC-logo.png';
import wingLogo from '@/assets/images/edtech-2025/Wing-logo.png';
import mistiLogo from '@/assets/images/edtech-2025/MISTI-logo.png';
import chlartLogo from '@/assets/images/edtech-2025/Chlart-logo.png';
import enumaLogo from '@/assets/images/edtech-2025/Enuma-logo.png';
import r24Logo from '@/assets/images/edtech-2025/R24-logo.png';
import uhstLogo from '@/assets/images/edtech-2025/UHST-logo.png';
import r17Logo from '@/assets/images/edtech-2025/R17-logo.png';
import reanAanLogo from '@/assets/images/edtech-2025/Rean-Aan-logo.png';
import r16Logo from '@/assets/images/edtech-2025/R16-logo.png';
import k2Logo from '@/assets/images/edtech-2025/K2-logo.png';
import moeysLogo from '@/assets/images/MOEYS.png';
import r25Logo from '@/assets/images/edtech-2025/R25-1-logo.png';
import k1Logo from '@/assets/images/edtech-2025/K1-logo.png';
import k4Logo from '@/assets/images/edtech-2025/K4-logo.png';

// Media Partners imports
import kampucheaThmeyLogo from '@/assets/images/edtech-2025/Kampuchea-Thmey-logo.png';
import troryorngLogo from '@/assets/images/edtech-2025/Logo-Troryorng.jpg';
import cctimesLogo from '@/assets/images/edtech-2025/CCTIMES-logo.png';
import four from '@/assets/images/edtech-2025/4.0-logo.png';
import omperl from '@/assets/images/edtech-2025/DAP-logo.png';
import b2b from '@/assets/images/edtech-2025/Asset-10@3x-8-logo.png';
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

  const exhibitors = [
    { src: moeysLogo, alt: "MOEYS" },
    { src: myTebLogo, alt: "MyTEB" },
    { src: mgaLogo, alt: "MGA" },
    { src: salaLogo, alt: "Sala" },
    { src: casLogo, alt: "CAS" },
    { src: oraLogo, alt: "Open Arena" },
    { src: powerLiveLogo, alt: "Power Live" },
    { src: snoopEduLogo, alt: "Snoopedu" },
    { src: logo4, alt: "4.0 Organization" },
    { src: logo8, alt: "Organization 8" },
    { src: logo13, alt: "Tile MS REAM AAN" },
    { src: iBloomingLogo, alt: "iBlooming" },
    { src: aceLogo, alt: "ACE" },
    { src: ptcLogo, alt: "PTC" },
    { src: auppLogo, alt: "AUPP" },
    { src: logo17, alt: "Institute 17" },
    { src: hpLogo, alt: "HP" },
    { src: weMoneyLogo, alt: "We Money Mobile" },
    { src: pmtkLogo, alt: "PMTK Technology" },
    { src: stepLogo, alt: "STEP" },
    { src: ebookLogo, alt: "eBook" },
    { src: r17Logo, alt: "R17" },
    { src: logo11, alt: "Organization 11" },
    { src: reanLogo, alt: "Rean" },
    { src: reanAanLogo, alt: "Rean Aan" },
    { src: logo15, alt: "Organization 15" },
    { src: r16Logo, alt: "R16" },
    { src: dichiLogo, alt: "DICHI" },
    { src: cellcardLogo, alt: "Cellcard" },
    { src: uteLogo, alt: "UTE University" },
    { src: prosethLogo, alt: "Proseth Institute" },
    { src: logo14, alt: "Federal University" },
    { src: itcLogo, alt: "ITC" },
    { src: koompiLogo, alt: "KOOMPI" },
    { src: camexLogo, alt: "CAMEX" },
    { src: dapLogo, alt: "Daun Penh Cloud" },
    { src: ebcLogo, alt: "EBC" },
    { src: wingLogo, alt: "Wing Bank" },
    { src: mistiLogo, alt: "MISTI" },
    { src: chlartLogo, alt: "Chlart" },
    { src: k2Logo, alt: "K2" },
    { src: k1Logo, alt: "K1" },
    { src: k4Logo, alt: "K4" },
    { src: enumaLogo, alt: "Enuma" },
    { src: r24Logo, alt: "R24" },
    { src: r25Logo, alt: "R25" },
    { src: uhstLogo, alt: "UHST" }
  ];

  // Event Partners
  const eventPartners = [
    { src: salaLogo, alt: "Sala" },
    { src: camexLogo, alt: "CAMEX" },
    { src: stepLogo, alt: "STEP IT Academy" },
    { src: powerLiveLogo, alt: "Power Live" }
  ];

  // Media Partners
  const mediaPartners = [
    { src: kampucheaThmeyLogo, alt: "Kampuchea Thmey" },
    { src: troryorngLogo, alt: "Troryorng" },
    { src: cctimesLogo, alt: "CC Times" },
    { src: four, alt: "4.0 Magazine" },
    { src: omperl, alt: "Om Per L" },
    { src: b2b, alt: "B2B Cambodia" } 
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
                        : 'bg-gray-100 text-red-600 hover:bg-red-300 hover:text-gray-500'
                    }`}
                  >
                    SPONSORS
                  </button>
                  <button
                    onClick={() => setActiveTab('exhibitors')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'exhibitors'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-red-600 hover:bg-red-300 hover:text-gray-500'
                    }`}
                  >
                    EXHIBITORS
                  </button>
                  <button
                    onClick={() => setActiveTab('floorplan')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'floorplan'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-red-600 hover:bg-red-300 hover:text-gray-500'
                    }`}
                  >
                    FLOOR PLAN
                  </button>
                  <button
                    onClick={() => setActiveTab('partners')}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      activeTab === 'partners'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-red-600 hover:bg-red-300 hover:text-gray-500'
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
                                   style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
                                 />
                               </div>
                    </div>
                  )}

                  {activeTab === 'exhibitors' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">EXHIBITORS</h3>
                      
                      {/* Exhibitors Grid - 5 columns layout */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
                        {exhibitors.map((exhibitor, index) => (
                          <img 
                            key={index}
                            src={exhibitor.src} 
                            alt={exhibitor.alt} 
                            className="max-w-full h-24 sm:h-28 md:h-32 lg:h-36 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                            style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'floorplan' && (
                  <div>
                        <div className="flex justify-center mb-8" style={{ marginTop: '2rem' }}>
                                 <img 
                                   src={floorplan} 
                                   alt="Floor Plan" 
                                   className="max-w-full h-50 md:h-68 object-contain"
                                   style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
                                 />
                         </div>
                    </div>
                  )}

                  {activeTab === 'partners' && (
                    <div>
                      {/* Event Partners Section */}
                      <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">EVENT PARTNERS:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
                          {eventPartners.map((partner, index) => (
                            <img 
                              key={index}
                              src={partner.src} 
                              alt={partner.alt} 
                              className="max-w-full h-32 md:h-40 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                              style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Media Partners Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">MEDIA PARTNERS:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
                          {mediaPartners.map((partner, index) => (
                            <img 
                              key={index}
                              src={partner.src} 
                              alt={partner.alt} 
                              className="max-w-full h-24 sm:h-28 md:h-32 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                              style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
    </>
  );
};

export default EdTech2025Exhibitors;