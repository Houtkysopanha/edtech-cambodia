import React from 'react';
import { Calendar, MapPin, Users, Target, Award, FileText } from 'lucide-react';
import ICT4E_navbar from '@/components/section/ITC4E_navbar';
import ICT4E_HeroSection from '@/components/section/ICT4E_HeroSection';
import ICT4E_3 from '@/assets/images/ICT4E_3.png';
import ICT4E_1 from '@/assets/images/ICT4E_1.png';
import ICT4E_Header from '@/components/section/ICT4E_header';
const ICT4E_home = () => {
  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <ICT4E_HeroSection />

      {/* Navigation Tabs */}
      <ICT4E_navbar activeTab="about-ict4e" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Our Objective Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">OUR OBJECTIVE</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Empowering education through engaging digital content and seamless stakeholder collaboration, ensuring learning thrives despite challenges.
            </p>
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
              Read more
            </button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={ICT4E_3} 
              alt="ICT4E Meeting" 
              className="w-full h-auto"
              style={{borderRadius: '10px'}}
            />
          </div>
        </section>

      </main>

      {/* Three Column Section - Full Width */}
      <section className="w-full mb-16" style={{backgroundColor: '#02114C'}}>
        <div className="w-full px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full">
            {/* Background */}
            <div className="text-white p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4" style={{color: 'yellow'}}>Background</h3>
              <p className="text-blue-100 mb-6 leading-relaxed flex-grow">
                MoEYS and ICT4E network promote e-learning to ensure education continues during COVID-19, discussed in a blended meeting on August 24, 2020.
              </p>
              <div className="mt-auto">
                <button className="border border-blue-300 text-blue-300 px-4 py-2 rounded hover:bg-blue-800">
                  Read more
                </button>
              </div>
            </div>

            {/* Goal */}
            <div className="text-white p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4" style={{color: 'yellow'}}>Goal</h3>
              <p className="text-blue-100 mb-6 leading-relaxed flex-grow">
                The ICT4E Network Meeting focuses on updating the status of ICT interventions in education during COVID-19 and maintaining network connectivity and information sharing in challenging times.
              </p>
              <div className="mt-auto">
                <button className="border border-blue-300 text-blue-300 px-4 py-2 rounded hover:bg-blue-800">
                  Read more
                </button>
              </div>
            </div>

            {/* Expected Outcome */}
            <div className="text-white p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4" style={{color: 'yellow'}}>Expected Outcome</h3>
              <p className="text-blue-100 mb-6 leading-relaxed flex-grow">
                The ICT4E Network Meeting aims to enhance stakeholder collaboration, share MoEYS's digital education updates, and promote contributions to ensure continuous learning during COVID-19.
              </p>
              <div className="mt-auto">
                <button className="border border-blue-300 text-blue-300 px-4 py-2 rounded hover:bg-blue-800">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">

        {/* Call for Participation */}
        <section className="mb-16">
          <div className="text-center">
            <img 
              src={ICT4E_1} 
              alt="Call for Participation - ICT4E Network Meeting" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Meeting Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            The Second Network Meeting on ICT for Education for 2020
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">
            <p>
              MoEYS in collaboration with Open Development Cambodia (ODC) and ICT for Development (ICT4D) 
              Network Cambodia is organizing the network meeting on Information and Communication Technology for 
              Education (ICT4E) of all stakeholders in Cambodia, in order to share ongoing projects, exchange practical 
              experiences, promote discussions to solve the immediate and effective intervention for digital solution 
              for further cooperation.
            </p>
            
            <p>
              For 2020, the second ICT4E networking meeting will be focusing on "Digital Solutions in Response to the 
              School Closure" with the purpose to update and share the best practices of how technologies can be 
              effectively intervene in education sector as a countermeasure of covid-19 and to possibly adapt to the 
              "new normal".
            </p>
            
            <p>
              We would like to cordially invite you to the ICT4E Network Meeting on Monday 24 August 2020 from 9:00 
              a.m to 11:30 a.m at MoEYS Administration Block(1st Floor), Khan Chamkar Mon, Phnom Penh.
            </p>
            
            <p className="font-semibold">
              The meeting concept note and agenda are attached. You can find a summary of the program below:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>The Establishment of Centre for Digital and Distance Education "ODC"</li>
              <li>The Status of eLearning in Education, Cambodia</li>
              <li>The List eLearning focus in Cambodia</li>
              <li>The Platform for Basic Education Equivalency Program (BEEP)</li>
              <li>The release of online survey on "ICT Response of the Curriculum education sector to Covid-19"</li>
              <li>Panel Discussion on "Digital Solutions in Response to the School Closure"</li>
            </ul>
            
            <p>
              The meeting will be conducted in blended mode in which only 30 seats are open for a physical meeting. 
              The rest of participants will be able to join virtually. The link of the virtual meeting will be sent to you once 
              you have completed the registration.
            </p>
          </div>
        </section>
      </main>
      
    </div>
    </>
  );
};

export default ICT4E_home;
