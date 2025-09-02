import React from 'react';
import ICT4E_navbar from '@/components/section/ITC4E_navbar';
import ICT4E_HeroSection from '@/components/section/ICT4E_HeroSection';
import meeting_pic from '@/assets/images/ICT4E_2.png'; // Adjust the path as necessary
const ICT4E_about = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Hero Section */}
      <ICT4E_HeroSection />

      {/* Navigation Tabs */}
      <ICT4E_navbar activeTab="about-meeting" />

      {/* Main Content */}
      <main className="mx-auto px-8 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            អំពីកម្មវិធី
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <h1 className="text-4xl font-bold text-center mb-4">
           About the event
          </h1>
          <img src={meeting_pic} alt="ICT4E Event" className="w-4/5 max-w-5xl mx-auto mb-8 rounded-lg shadow-lg block" />
          <h1 className="text-2xl font-bold text-blue-900 mb-6" style={{ textAlign: 'center', marginTop: '90px', marginBottom: '10px' }}>Information and Communication Technology for Education (ICT4E) Network Meeting
            <br />
            "Digital Solutions in Response to the Schools Closure"</h1>
        </section>
      </main>

      {/* Background Section - Expanded */}
      <main className="container mx-auto px-16 py-12 max-w-7xl">
        <div className="text-gray-700 leading-relaxed space-y-8">
          <section className="p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">BACKGROUND</h2>
            <p className="mb-4 text-lg">
              In light of the COVID-19 pandemic, the Ministry of Education, Youth and Sport (MoEYS) has taken immediate measures to combat the education crisis by developing a digital learning strategy and implementing digital content learning through various educational platforms across the country. During these unprecedented times, the education delivery has evolved.
            </p>
            <p className="mb-4 text-lg">
              Moreover, education with the greatest effort of all stakeholders in order to ensure that learning will more than the school closure of all levels have been involved to advance the education landscape in the future.
            </p>
            <p className="text-lg">
              This quarterly meeting on ICT for Education Network Committee (ICT4E) will gather the ICT in Education stakeholders as well as to promote sharing knowledge on all its meetings or enabling environments it both with this new normal in the digital era.
            </p>
            <p className="mt-4 text-lg">
              The meeting will provide a platform for Open Development Cambodia (ODC) and the ICT for Development (ICT4D) Network, Information and Communication Technology for Education (ICT4E) network meeting where members/NGOs, public sector and private sector working on ICT in education can build networking around all education systems from both the public and private institutions.
            </p>
            <p className="mt-4 text-lg">
              It will also allow for the sharing of experiences, best practices and lessons learned during these times of difficult educational challenges during each 1 hour Open Development Observatory from them.
            </p>
            <p className="mt-4 text-lg">
              Due to the social gathering restriction, the quarterly meeting will be conducted through a virtual and onsite hybrid meeting, it's a blended learning. The list of participants will be able to join virtually and all of the virtual meeting will be saved to our archive.
            </p>
          </section>
        </div>
      </main>

      {/* Goal Section - Full Width */}
      <section className="w-full py-12" style={{backgroundColor: '#181D4D'}}>
        <div className="container mx-auto px-16 max-w-7xl">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Goal</h2>
          <p className="text-lg" style={{color: '#E0E0E0'}}>
            The ICT4E Network Meeting aims to update the current status of ICT interventions in education during the COVID-19 crisis to keep the network connected and advance the growth while addressing the barriers.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-16 py-12 max-w-7xl">
        <div className="text-gray-700 leading-relaxed space-y-8">
          {/* Our Key Objective Section */}
          <section className="bg-white px-8 py-8 rounded-lg">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">OUR KEY OBJECTIVE</h2>
            <p className="mb-4 text-lg">The main objectives of this quarterly meeting include the following:</p>
            <ul className="list-disc list-inside space-y-3 ml-6 text-lg">
              <li>To update and share the current status of ICT integration in education through various forms and challenges faced while transforming educational delivery through digital platforms.</li>
              <li>To enhance the development and advancement in the development of technology and initiatives.</li>
              <li>Discussion and consolidation should sharing about issues and lessons learned through the digital content development and delivery for students and their key drivers from schools.</li>
              <li>To help future networking opportunities between the various stakeholders. Regular meeting to help in overarching collaboration and collaboration between involved systems, government, development partners, civil society and private partners. Especially in the area where government is limited, it could be help the networks activity.</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Expected Outcome Section - Full Width */}
      <section className="w-full py-12" style={{backgroundColor: '#181D4D'}}>
        <div className="container mx-auto px-16 max-w-7xl">
          <h2 className="text-4xl font-bold mb-6 text-center" style={{color: '#E0E0E0'}}>Expected Outcome</h2>
          <div className="space-y-4 text-lg">
            <p style={{color: '#E0E0E0'}}>Detailed information on digital education including opportunities be more completed, outcomes and the public and know about the challenges due to COVID-19. The list of helpful experiences sharing digital content delivery will be shared and completed on this current era.</p>
            <p style={{color: '#E0E0E0'}}>Please note this in the coming efforts: Positive and to serve all the programs, to represent all stakeholders, closed communities are not just professional learning and teams these continue to in the common to assist.</p>
            <p style={{color: '#E0E0E0'}}>Sharing professional and strong stakeholders' continued partnership and close cooperation and enable the organizations to keep moving and learning together for the better advancement, collaboration and innovation and support the better digital education solutions.</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-16 py-12 max-w-7xl">
        <div className="text-gray-700 leading-relaxed space-y-8">
          {/* Participant Section */}
          <section className="bg-white px-8 py-8 rounded-lg" style={{marginBottom: '150px'}}>
            <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">PARTICIPANT</h2>
            <p className="text-lg">
              The government, local and international civil society organizations (CSOs) and public and private sector working on ICT in education can joined and are highly encouraged to participate in the meeting.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ICT4E_about;
