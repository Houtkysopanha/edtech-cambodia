import React from 'react';
import ICT4E_navbar from '@/components/section/ITC4E_navbar';
import ICT4E_HeroSection from '@/components/section/ICT4E_HeroSection';
import ICT4ELogo from '@/assets/images/ICT4E_logo.png';

const ICT4E_partner = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <ICT4E_HeroSection />

      {/* Navigation Tabs */}
      <ICT4E_navbar activeTab="registration-list" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            ដៃគូសហការ
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Partner
          </h1>
          
          {/* Partner Organizations */}
          <div className="space-y-8">
            
            {/* First Row - MoEYS and ODC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* MoEYS Partner Card */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center mb-4">
                  <img 
                    src="/src/assets/images/MOEYS.png" 
                    alt="Ministry of Education, Youth and Sport" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  ក្រសួងអប់រំ យុវជន និងកីឡា
                </h3>
                <p className="text-sm text-center text-gray-600 mt-2">
                  Ministry of Education, Youth and Sport
                </p>
              </div>

              {/* ODC Partner Card */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center mb-4">
                  <img 
                    src="/src/assets/images/openDevCam.png" 
                    alt="Open Development Cambodia" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  អង្គការអភិវឌ្ឍន៍បើកចំហកម្ពុជា
                </h3>
                <p className="text-sm text-center text-gray-600 mt-2">
                  Open Development Cambodia
                </p>
              </div>
            </div>

            {/* Yellow Divider */}
            <div className="w-full h-1 bg-yellow-500 my-8"></div>

            {/* Second Row - ICT4E Cambodia Network */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 flex flex-col items-center max-w-md w-full">
                <div className="w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center mb-4">
                  <img 
                    src={ICT4ELogo} 
                    alt="ICT4E Cambodia Network" 
                    className="max-w-5xl h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  បណ្តាញព័ត៌មានវិទ្យាសម្រាប់ការអភិវឌ្ឍន៍កម្ពុជា
                </h3>
                <p className="text-sm text-center text-gray-600 mt-2">
                  ICT4D Cambodia Network
                </p>
              </div>
            </div>

            {/* Description Section */}
            <div className="mt-12 bg-white rounded-lg p-8">
              <p className="text-lg leading-relaxed text-gray-700 text-justify">
                MoEYS in collaboration with Open Development Cambodia (ODC) and ICT for Development (ICT4D) Network Cambodia is organizing the network meeting on Information and Communication Technology for Education (ICT4E) of all stakeholders in Cambodia, in order to share on-going projects, exchange practical experiences, promote discussions to solve the needs of NGO partners as well as to enable opportunities for further cooperation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ICT4E_partner;
