import React from 'react';

const EdTech2025Partner = () => {
  return (
    <>
      {/* Simple Hero Banner */}
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
              ចូលរួមជាដៃគូរជាមួយយើង
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
              Partner With Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          
          {/* Introduction Text */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
              <strong>Become a sponsor and help us shape education's future.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Cambodia's top EdTech event, promote your business, network 
              with industry experts, and get special attention!
            </p>
          </div>

          {/* Sponsorship Package & Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Sponsorship Package & Benefits
            </h2>
            
            {/* Responsive Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900">BENEFITS</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Strategic</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Gold</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Silver</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Big Booth</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Regular Booth</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Start-Up</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Booth space 4m x 3m</td>
                    <td className="p-4 text-center">4</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Booth space 3m x 3m</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">1</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Logo on Backdrop/Banner/Social Media/Livestream</td>
                    <td className="p-4 text-center">Large</td>
                    <td className="p-4 text-center">Medium</td>
                    <td className="p-4 text-center">Medium</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Speakers | Sharing Session</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Keynote | Panel Discussion</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Video/TVC</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Press Release</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Certificate & Appreciation</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">MoEYS Website</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">J-flag/Parasol</td>
                    <td className="p-4 text-center">15</td>
                    <td className="p-4 text-center">5</td>
                    <td className="p-4 text-center">5</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">Standee</td>
                    <td className="p-4 text-center">5</td>
                    <td className="p-4 text-center">5</td>
                    <td className="p-4 text-center">2</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium">Logo on T-Shirt (150)</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">Yes</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Contact for Sponsorship or Partnership:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Phone */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold">+855 16 555 270</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold">phel.phearoun@moeys.gov.kh</p>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-center">
                  #80, Preah Norodom Blvd.<br />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default EdTech2025Partner;
