import React from 'react';
import ICT4E_navbar from '@/components/section/ITC4E_navbar';
import ICT4E_HeroSection from '@/components/section/ICT4E_HeroSection';

const ICT4E_agenda = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <ICT4E_HeroSection />

      {/* Navigation Tabs */}
      <ICT4E_navbar activeTab="public-agenda" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            របៀបវារៈ
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <h1 className="text-4xl font-bold text-center mb-8">
            Tentative Agenda
          </h1>
          
          {/* Agenda Header */}
          <div className="bg-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-900">
              ICT for Education (ICT4E) Network Meeting
            </h2>
            <h3 className="text-xl font-semibold text-center mb-4 text-blue-700">
              "Digital Solutions in Response to the Schools Closure"
            </h3>
            <div className="text-center text-lg">
              <p className="mb-2"><strong>Monday August 24, 2020</strong> at MoEYS Administration Block</p>
              <p><strong>Address:</strong> St. 380, Sangkat Boeng Keng Kang I, Khan Chamkar Morn, Phnom Penh.</p>
            </div>
          </div>

          {/* Agenda Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-blue-900">Time</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-blue-900">Activity</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-blue-900">Facilitator</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">8:30am - 9:00</td>
                  <td className="border border-gray-300 px-4 py-3">Registration</td>
                  <td className="border border-gray-300 px-4 py-3">DIT & ODC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:00am - 9:05</td>
                  <td className="border border-gray-300 px-4 py-3">Introduction the meeting</td>
                  <td className="border border-gray-300 px-4 py-3">ODC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:05am - 9:15</td>
                  <td className="border border-gray-300 px-4 py-3">Welcome Remarks</td>
                  <td className="border border-gray-300 px-4 py-3">MoEYS & ODC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:15am - 9:25</td>
                  <td className="border border-gray-300 px-4 py-3">PRESN: The Establishment of Center for Digital and Distance Education "CDDE"</td>
                  <td className="border border-gray-300 px-4 py-3">MoEYS</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:25am - 9:35</td>
                  <td className="border border-gray-300 px-4 py-3">PRESN: Status of eLearning in Education, Cambodia</td>
                  <td className="border border-gray-300 px-4 py-3">MoEYS</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:35am - 9:45</td>
                  <td className="border border-gray-300 px-4 py-3">PRESN: Basic Equivalency Program (BEEP)</td>
                  <td className="border border-gray-300 px-4 py-3">UNESCO Cambodia</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:45am - 9:55</td>
                  <td className="border border-gray-300 px-4 py-3">PRESN: the 1st eLearning forum in Cambodia</td>
                  <td className="border border-gray-300 px-4 py-3">ITSTEP Cambodia</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">9:55am - 10:05</td>
                  <td className="border border-gray-300 px-4 py-3">PRESN: ICHEI International Centre for Higher Education Innovation</td>
                  <td className="border border-gray-300 px-4 py-3">UNESCO-ICHEI</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">10:05am - 10:15</td>
                  <td className="border border-gray-300 px-4 py-3">The release of online survey on "ICT response of the Cambodian education sector to Covid-19"</td>
                  <td className="border border-gray-300 px-4 py-3">ODC</td>
                </tr>
                <tr className="bg-green-100 hover:bg-green-200">
                  <td className="border border-gray-300 px-4 py-3 font-bold">10 minutes</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Coffee Break, Networking</td>
                  <td className="border border-gray-300 px-4 py-3"></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">10:25 am - 11:25</td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="mb-2 font-semibold">Panel discussion on "Digital solutions in response to the school closure"</div>
                    <ul className="ml-4 space-y-1 text-sm">
                      <li>- Interventions in response the COVID-19</li>
                      <li>- Promoting eLearning and Distance Education</li>
                      <li>- Enabling the continuation of education for drop-out student</li>
                      <li>- Q & A</li>
                    </ul>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <div className="space-y-1">
                      <div>MoEYS</div>
                      <div>UNESCO Cambodia</div>
                      <div>ITSTEP</div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">11:30am</td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Closing</td>
                  <td className="border border-gray-300 px-4 py-3">DIT & ODC</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-sm text-gray-600 italic">
            * The agenda is subject to change
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">For further information, please contact:</h3>
            <div className="space-y-2">
              <p><strong>Mr. PHEL Phearoun</strong>, Deputy Director of Department of Information Technology, MoEYS</p>
              <p><strong>Tel:</strong> 016 555 270</p>
              <p><strong>Email:</strong> <a href="mailto:phel.phearoun@moeys.gov.kh" className="text-blue-600 underline">phel.phearoun@moeys.gov.kh</a></p>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default ICT4E_agenda;
