import React from 'react';
import ICT4E_navbar from '@/components/section/ITC4E_navbar';
import ICT4E_HeroSection from '@/components/section/ICT4E_HeroSection';
import openDevCamLogo from '@/assets/images/openDevCam.png';

const ICT4E_contact = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <ICT4E_HeroSection />

      {/* Navigation Tabs */}
      <ICT4E_navbar activeTab="contact" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            ទំនាក់ទំនង
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <h1 className="text-4xl font-bold text-center mb-12">
            Contact
          </h1>

          {/* Contact Cards */}
          <div className="space-y-8">
            {/* MoEYS Contact Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* MoEYS Logo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white rounded-lg  p-4 flex items-center justify-center ">
                    <img 
                      src="/src/assets/images/MOEYS.png" 
                      alt="MoEYS Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Mr. PHEL Phearoun, Deputy Director of Department of Information Technology, MoEYS
                  </h3>
                  <div className="space-y-2 text-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Tel:</span> 016 555 270
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span> 
                      <a 
                        href="mailto:phel.phearoun@moeys.gov.kh" 
                        className="text-blue-600 hover:text-blue-800 underline ml-1"
                      >
                        phel.phearoun@moeys.gov.kh
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>



            <div className="w-2/4 h-1 bg-yellow-500 my-8 mx-auto"></div>

            {/* ODC Contact Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* ODC Logo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white rounded-lg  p-4 flex items-center justify-center ">
                    <img 
                      src={openDevCamLogo} 
                      alt="Open Development Cambodia Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Ms. CHY Bormey, Partnership and Communication Manager, Open Development Cambodia (ODC)
                  </h3>
                  <div className="space-y-2 text-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">Tel:</span> 011 855 720
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span> 
                      <a 
                        href="mailto:bormey@opendevcam.net" 
                        className="text-blue-600 hover:text-blue-800 underline ml-1"
                      >
                        bormey@opendevcam.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ICT4E_contact;
