import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import onlyLogo from '@/assets/images/OnlyLogo.png';

const EdTech2025HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-transparent text-white overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-12 h-12 border-2 border-pink-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 border-2 border-green-400 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-10 h-10 border-2 border-purple-400 rounded-lg"></div>
        <div className="absolute top-40 left-1/3 w-8 h-8 border-2 border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 border-2 border-orange-400 rounded-lg rotate-12"></div>
        
        {/* Tech Icons Pattern */}
        <div className="absolute top-16 left-1/4 text-yellow-400 text-2xl">⚡</div>
        <div className="absolute top-32 right-1/4 text-pink-400 text-2xl">🔬</div>
        <div className="absolute bottom-24 left-1/2 text-green-400 text-2xl">💡</div>
        <div className="absolute top-1/2 left-16 text-purple-400 text-2xl">🌐</div>
        <div className="absolute top-1/3 right-16 text-cyan-400 text-2xl">📊</div>
        <div className="absolute bottom-1/3 right-1/2 text-orange-400 text-2xl">🎯</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Logo/Icon */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center">
              <img 
                src={onlyLogo} 
                alt="EdTech Cambodia Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                សន្និសីទ ទីមួយពីបច្ចេកវិទ្យាក្នុងការអប់រំកម្ពុជា ឆ្នាំ២០២៥
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-4">
                The First Cambodia EdTech Summit
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-8 text-center">
            <h3 className="text-xl md:text-2xl text-blue-200 mb-2">
              មាគ្គាកម្មុះទៅការអប់រំឌីជីថលកម្ពុជា
            </h3>
            <h4 className="text-xl md:text-2xl text-blue-200">
              Pathways to Cambodia's Digital Education
            </h4>
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">February 17-18th, 2025</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="text-lg">Institute of Technology of Cambodia</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="relative bg-blue-600 hover:bg-red-600 text-white px-12 py-5 rounded-lg text-xl font-semibold transition-all duration-300 shadow-lg group overflow-hidden w-[280px] h-[64px] flex items-center justify-center">
              <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                GET E-CERTIFICATE
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ទទួលវិញ្ញាបនបត្រអេឡិចត្រូនិក
              </span>
            </button>
            <button className="relative bg-blue-500 hover:bg-red-600 text-white px-12 py-5 rounded-lg text-xl font-semibold transition-all duration-300 shadow-lg group overflow-hidden w-[280px] h-[64px] flex items-center justify-center">
              <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                PARTNER NOW
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ចូលរួមជាដៃគូឥឡូវនេះ
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Additional Tech Pattern at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <div className="flex justify-around items-end h-24">
          <div className="w-2 bg-yellow-400 h-8 rounded-t"></div>
          <div className="w-2 bg-pink-400 h-12 rounded-t"></div>
          <div className="w-2 bg-green-400 h-6 rounded-t"></div>
          <div className="w-2 bg-purple-400 h-16 rounded-t"></div>
          <div className="w-2 bg-cyan-400 h-10 rounded-t"></div>
          <div className="w-2 bg-orange-400 h-14 rounded-t"></div>
          <div className="w-2 bg-red-400 h-8 rounded-t"></div>
          <div className="w-2 bg-blue-400 h-18 rounded-t"></div>
        </div>
      </div>
    </section>
  );
};

export default EdTech2025HeroSection;
