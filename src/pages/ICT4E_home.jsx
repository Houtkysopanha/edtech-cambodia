import React from 'react';
import { Calendar, MapPin, Users, Target, Award, FileText } from 'lucide-react';
import ICT4E_navbar from '@/components/section/ITC4E_navbar';
import ICT4EBackground from '@/assets/images/ICT4E.png';
import ICT4E_3 from '@/assets/images/ICT4E_3.png';
import ICT4E_1 from '@/assets/images/ICT4E_1.png';
const ICT4E_home = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${ICT4EBackground})`
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center" style={{marginTop: '100px', marginBottom: '100px'}}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ICT for Education Network Meeting <span className="text-yellow-400">(ICT4E)</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{fontSize: '1rem'}}>
            1st quarterly meeting of ICT for Education Network Committee ICT4E on Education Network Meeting of Low-skill Youth and 
            Labor mobility especially on Digital Solutions in Response of School Closure
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
              About Us
            </button>
          </div>
        </div>
      </section>

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

        {/* Three Column Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Background */}
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Background</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              MoEYS and ICT4E network promise a learning in despite school continues closure during COVID-19. It discovered its intended challenge...
            </p>
            <button className="border border-blue-300 text-blue-300 px-4 py-2 rounded hover:bg-blue-800">
              Read more
            </button>
          </div>

          {/* Goal */}
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Goal</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              The ICT4E Network Meeting focuses on updating the status of ICT interventions in education during COVID-19 and maintaining network connectivity and information sharing in challenging times.
            </p>
            <button className="border border-blue-300 text-blue-300 px-4 py-2 rounded hover:bg-blue-800">
              Read more
            </button>
          </div>

          {/* Expected Outcome */}
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expected Outcome</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              The ICT4E Network Meeting aims to promote practical collaboration, share MoEYS digital education updates, and promote collaborative to develop continuous learning during COVID-19.
            </p>
            <button className="border border-blue-300 text-blue-300 px-4 py-2 rounded hover:bg-blue-800">
              Read more
            </button>
          </div>
        </section>

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
  );
};

export default ICT4E_home;
