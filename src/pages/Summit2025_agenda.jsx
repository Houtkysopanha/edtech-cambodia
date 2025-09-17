import React, { useState } from 'react';
import { Users, Award, Video, Coffee } from 'lucide-react';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';
import speaker1 from '@/assets/images/speaker/speaker1.png'

const Summit2025_agenda = () => {
  const [activeTab, setActiveTab] = useState('day1');

  const agendaData = {
    1: {
      date: "Day 1",
      theme: "High-Level Summit & Strategic Presentations",
      sessions: [
        {
          time: "7:00 - 8:00",
          agenda: "Registration & EdTech Exhibition",
          remarks: "EdTech Cambodia Team"
        },
        {
          time: "8:00 - 8:30",
          agenda: "Arrival of H.E. Dr. Hang Chuon Naron, Deputy Prime Minister, Minister of MoEYS, and the High Esteemed Representative for Samdech Moha Borvor Thipadei HUN MANET, Prime Minister of the Kingdom of Cambodia",
          remarks: "EdTech Cambodia Team"
        },
        {
          time: "",
          agenda: "Track 1 | High-Level Summit (2,400 Invited Guests Only)",
          remarks: "",
          isTrackHeader: true
        },
        {
          time: "8:30 - 8:35",
          agenda: "Cambodian National Anthem",
          remarks: "EdTech Cambodia Team"
        },
        {
          time: "8:35 - 8:45",
          agenda: "Welcoming Remarks",
          remarks: "H.E. Kim Sothany, Permanent Secretary of State, MoEYS and Deputy Chair of Organizing Committee of the First Cambodia EdTech Summit"
        },
        {
          time: "8:45 - 8:55",
          agenda: "Welcoming Remarks",
          remarks: "Mr. Simon Perkins, ICT Division CEO, Cellcard"
        },
        {
          time: "8:55 - 9:05",
          agenda: "Welcoming Remarks",
          remarks: "Dr. Aekram Chantrajaya, Deputy Representative, UNICEF Cambodia"
        },
        {
          time: "9:05 - 9:15",
          agenda: "Welcoming Remarks",
          remarks: "Ms. Moeujong Chol, Country Director, KOICA"
        },
        {
          time: "9:15 - 9:45",
          agenda: "Opening Remarks",
          remarks: "H.E. Dr. Hang Chuon Naron, Deputy Prime Minister, MoEYS and the High Esteemed Representative for Samdech Moha Borvor Thipadei HUN MANET, Prime Minister of the Kingdom of Cambodia"
        },
        {
          time: "9:45",
          agenda: "Appreciation Letter for Strategic Partners",
          remarks: "EdTech Cambodia Team"
        },
        {
          time: "9:45",
          agenda: "Photo Session",
          remarks: "EdTech Cambodia Team"
        },
        {
          time: "9:55 - 10:05",
          agenda: "Official Launch of the Digital Education Strategy for Schools (DESS)",
          remarks: "H.E. Dr. Be Chanraksmeydech, Under Secretary of State, MoEYS"
        },
        {
          time: "10:05 - 10:15",
          agenda: "Project Launch: \"Strengthening Decisionsmakers' Capabilities for Appropriate EdTech Use in Cambodia\"",
          remarks: "Dr. Eng Netra, Executive Director, Cambodia Development Resource Institute, CDRI"
        },
        {
          time: "",
          agenda: "Press Conference",
          remarks: ""
        },
        {
          time: "",
          agenda: "• H.E. Dr. Hang Chuon Naron | MoEYS\n• Ms. Moeujong Chol, Country Director | KOICA\n• Dr. Aekram Chantrajaya, Deputy Representative, UNICEF Cambodia\n• Mr. Simon Perkins | Cellcard\n• Dr. Eng Netra | CDRI",
          remarks: "EdTech Cambodia Team"
        },
        {
          time: "10:25 - 10:40",
          agenda: "Strategic Presentation 1 | Digital Education Strategy for Schools (DESS)",
          remarks: "Dr. Chin Sam Aek, Deputy Director, Department of Policy, MoEYS"
        },
        {
          time: "10:40 - 10:55",
          agenda: "Strategic Presentation 2 | Streamline Your School's Operations and Boost Efficiency with a Centralized Dashboard",
          remarks: "Mr. Im Chansitha, Lead, Strategy and Partnership, Cellcard"
        },
        {
          time: "",
          agenda: "Panel Discussion 1 | Cambodia Digital School Initiatives Toward Achieving DESS",
          remarks: "Moderator: H.E. Dr. Chhialy Bitka - MoEYS's Advisor\nPanelists:"
        },
        {
          time: "10:55 - 11:30",
          agenda: "Triggering Presentation: \"Cambodia Digital School\"\nPresented by: H.E. Tep Piphyuth, Secretary General of General Secretariat, MoEYS",
          remarks: "1. H.E. Tep Piphyuth, Secretary General of General Secretariat, MoEYS\n2. Ms. Chie Jongman, Deputy Country Director, ActionA\n3. Ms. Mout Sorphal, Vice Principal of Fresh Summit High School, New Generation School (NGS)\n4. H.E. Dr. Chea Sodeth, Director of Battambang Teacher Education College\n5. Mr. Nguv Socheanneath, Education Officer, UNICEF Cambodia"
        },
        {
          time: "12:30 - 14:00",
          agenda: "Breakfast & EdTech Exhibition",
          remarks: ""
        },
        {
          time: "",
          agenda: "Track 2 | Skills for Cambodia's Digital Future",
          remarks: "",
          isTrackHeader: true
        },
        {
          time: "",
          agenda: "Panel Discussion 2 | Digital Transitions in Education and Skills Development",
          remarks: "Moderator: Dr. Song Sopheak, Deputy Executive Director, CDRI\nPanelists:"
        },
        {
          time: "14:00 - 15:30",
          agenda: "Triggering Presentation: \"Decoding the Demand and Supply: Critical Digital Skills for Cambodia's Evolving Economy\"\n\nPresented by: H.E. Hean Samboeun, Vice-President, CADT",
          remarks: "1. H.E. Hean Samboeun, Vice-President, of CADT\n2. Ms. Mae Sophia, Senior Officer in Education and Skills, ADB Cambodia\n3. Ms. Kit Sophana, Deputy Director of the Department of Job Market Information, MoLVT\n4. Mrs. Sokhoeung Lay, Managing Director of Orth Academy\n5. Mr. Tio Botka, Managing Director and Co-Founder, Doorkbeek Digital"
        },
        {
          time: "15:30 - 15:45",
          agenda: "2024 Most Innovative EdTech Teacher Competition",
          remarks: "The Top Three Candidates"
        },
        {
          time: "15:45 - 16:00",
          agenda: "2024 Most Innovative EdTech Teacher Award & Closing Remarks – Day 1",
          remarks: "H.E. Kim Sothany, Permanent Secretary of States, MoEYS"
        },
        {
          time: "16:00 - 17:00",
          agenda: "Break Time & EdTech Exhibition – End of Day 1",
          remarks: ""
        }
      ]
    },
    2: {
      date: "Day 2",
      theme: "Continue with additional sessions",
      sessions: [
        // Add Day 2 sessions if needed
      ]
    }
  };

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection 
          title="Summit Agenda"
          subtitle="2025"
          description="Explore our comprehensive program featuring keynotes, workshops, panels, and networking opportunities"
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="agenda" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          
          {/* Tab Selection */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Summit Program</h2>
              <p className="text-xl text-gray-600">Navigate through different sections of the summit</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'day1', label: 'DAY 1', color: 'bg-red-500' },
                { id: 'day2', label: 'DAY 2', color: 'bg-gray-400' },
                { id: 'speakers', label: 'SPEAKERS', color: 'bg-gray-400' },
                { id: 'panel', label: 'PANEL DISCUSSION', color: 'bg-gray-400' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-bold text-white text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-500'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Day Theme - only show for day tabs */}
            {(activeTab === 'day1' || activeTab === 'day2') && (
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeTab === 'day1' ? agendaData[1].theme : agendaData[2].theme}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
              </div>
            )}
          </section>

          {/* Content Sections */}
          <section>
            {/* Day 1 Content - Table Format */}
            {activeTab === 'day1' && (
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Agenda</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agendaData[1].sessions.map((session, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${session.isTrackHeader ? 'bg-blue-50' : ''}`}>
                          <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200 align-top whitespace-nowrap">
                            {session.time}
                          </td>
                          <td className={`px-6 py-4 text-sm border-b border-gray-200 align-top ${
                            session.isTrackHeader ? 'font-bold text-blue-900 bg-blue-100' : 'text-gray-900'
                          }`}>
                            {session.agenda ? session.agenda.split('\n').map((line, i) => (
                              <div key={i} className={i > 0 ? 'mt-1' : ''}>{line}</div>
                            )) : ''}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200 align-top">
                            {session.remarks ? session.remarks.split('\n').map((line, i) => (
                              <div key={i} className={i > 0 ? 'mt-1' : ''}>{line}</div>
                            )) : ''}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Day 2 Content - Table Format */}
            {activeTab === 'day2' && (
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Agenda</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agendaData[2].sessions && agendaData[2].sessions.length > 0 ? agendaData[2].sessions.map((session, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200 align-top whitespace-nowrap">
                            {session.time || ''}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200 align-top">
                            {session.agenda || ''}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200 align-top">
                            {session.remarks || ''}
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                            Day 2 agenda coming soon...
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Speakers Content */}
            {activeTab === 'speakers' && (
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Summit Speakers</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
                </div>
                
                {/* First Row of Speakers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {[
                    {
                      name: "H.E. Dr. Hang Chuon Naron",
                      title: "Deputy Prime Minister, Minister of MoEYS",
                      image: speaker1 // Placeholder for actual image
                    },
                    {
                      name: "H.E. Kim Sethany",
                      title: "Permanent Secretary of State, MoEYS",
                      image: speaker1  // Placeholder for actual image
                    },
                    {
                      name: "Mr. Simon Perkins",
                      title: "ICT Division CEO, Cellcard",
                      image: speaker1  // Placeholder for actual image
                    },
                    {
                      name: "Dr. Anirban Chatterjee",
                      title: "Deputy Representative, UNICEF Cambodia",
                      image: speaker1  // Placeholder for actual image
                    }
                  ].map((speaker, index) => (
                    <div key={index} className="text-center">
                      {/* Speaker Card with Dark Background */}
                      
                        
                        {/* Profile Picture with Gradient Border */}
                        <div className="relative z-10 mx-auto mb-6">
                          <div className=" mx-auto relative">
                            {/* Gradient Border */}
                              <div className="w-full h-full bg-white p-1">
                                <img 
                                  src={speaker.image} 
                                  alt={speaker.name}
                                  className="w-full h-full object-cover"
                                />
                            </div>
                          </div>
                        </div>
                      
                      {/* Speaker Info */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{speaker.name}</h4>
                        <p className="text-gray-600 text-sm">{speaker.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Second Row of Speakers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      name: "Ms. Moeujong Chol",
                      title: "Country Director, KOICA",
                      image: "/api/placeholder/200/200" // Placeholder for actual image
                    },
                    {
                      name: "Dr. Eng Netra",
                      title: "Executive Director, CDRI",
                      image: "/api/placeholder/200/200" // Placeholder for actual image
                    },
                    {
                      name: "H.E. Dr. Be Chanraksmeydech",
                      title: "Under Secretary of State, MoEYS",
                      image: "/api/placeholder/200/200" // Placeholder for actual image
                    },
                    {
                      name: "Dr. Chin Sam Aek",
                      title: "Deputy Director, Department of Policy, MoEYS",
                      image: "/api/placeholder/200/200" // Placeholder for actual image
                    }
                  ].map((speaker, index) => (
                    <div key={index} className="text-center">
                      {/* Speaker Card with Dark Background */}
                      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-2xl p-8 mb-4 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500 to-transparent opacity-30 rounded-full transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500 to-transparent opacity-30 rounded-full transform -translate-x-12 translate-y-12"></div>
                        
                        {/* Profile Picture with Gradient Border */}
                        <div className="relative z-10 mx-auto mb-6">
                          <div className="w-32 h-32 mx-auto relative">
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-1">
                              <div className="w-full h-full bg-white rounded-full p-1">
                                <img 
                                  src={speaker.image} 
                                  alt={speaker.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Speaker Info */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{speaker.name}</h4>
                        <p className="text-gray-600 text-sm">{speaker.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Panel Discussion Content */}
            {activeTab === 'panel' && (
              <div className="max-w-7xl mx-auto">
                {/* Featured Panel Discussion Card */}
                <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-3xl p-8 mb-8 relative overflow-hidden">
                  {/* Background Decorative Elements */}
                  <div className="absolute inset-0 opacity-10">
                    {/* Tech Icons Background */}
                    <div className="absolute top-10 left-10 text-white text-6xl">⚙️</div>
                    <div className="absolute top-20 right-20 text-white text-4xl">🔬</div>
                    <div className="absolute bottom-20 left-20 text-white text-5xl">💡</div>
                    <div className="absolute bottom-10 right-10 text-white text-4xl">🌐</div>
                    <div className="absolute top-1/2 left-1/4 text-white text-3xl">⚡</div>
                    <div className="absolute top-1/3 right-1/3 text-white text-4xl">🔧</div>
                  </div>

                  {/* Ministry Logo Section */}
                  <div className="absolute top-4 left-4 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏛️</span>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold">E</span>
                    </div>
                  </div>

                  {/* Summit Title */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-800 text-white px-4 py-2 rounded text-sm font-semibold">
                      EDUCATION<br/>INNOVATION<br/>TECHNOLOGY
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mt-16">
                    {/* Left Side - Text Content */}
                    <div className="text-white">
                      {/* Khmer Title */}
                      <div className="mb-6">
                        <h2 className="text-yellow-400 text-lg font-medium mb-2">សន្និបាតចេះដឹង នថ្នី</h2>
                        <p className="text-sm opacity-90 leading-relaxed">
                          គំនិតផ្តួចផ្តើមដ៏អស្ចារ្យសម្រាប់ធ្វើឲ្យការសិក្សាកាន់តែប្រសើរ
                          ការអនុវត្តនូវនិវត្តនកម្មសម្រាប់ការអភិវឌ្ឍន៍សាលារៀន
                        </p>
                      </div>

                      {/* Main Topic */}
                      <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-4">
                          "ការប្រើប្រាស់ការអប់រំ<br/>ឌីជីតលកម្ពុជា"
                        </h1>
                      </div>

                      {/* Speaker Information */}
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6">
                        <h3 className="text-white text-xl font-bold mb-2">
                          បណ្ឌិតសភា អគ្គលេខាធិការ នស ភីរម្យ
                        </h3>
                        <p className="text-white text-sm opacity-90">
                          អគ្គលេខាធិការ នៃអគ្គលេខាធិការដ្ឋាន កន្លងអប់រំ យុវជន និងកីឡា
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Speaker Image */}
                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Profile Picture with Gradient Border */}
                        <div className="w-80 h-80 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-2">
                            <div className="w-full h-full bg-white rounded-full p-2">
                              <img 
                                src="/api/placeholder/300/300" 
                                alt="បណ្ឌិតសភា អគ្គលេខាធិការ នស ភីរម្យ"
                                className="w-full h-full object-cover rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                    <p>សន្និសីទ EdTech Cambodia ទី១ រៀបចំដោយ កម្ពុជា EdTech Summit</p>
                  </div>
                </div>

                {/* Additional Panel Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  {/* Panel 1 Information */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-blue-500">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Panel Discussion 1</h4>
                    <h5 className="text-lg font-semibold text-blue-600 mb-3">Cambodia Digital School Initiatives Toward Achieving DESS</h5>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Moderator:</p>
                      <p className="text-sm text-gray-600">H.E. Dr. Chhialy Bitka, MoEYS's Advisor</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Digital transformation strategies</li>
                        <li>• DESS implementation roadmap</li>
                        <li>• Technology integration in schools</li>
                        <li>• Teacher capacity building</li>
                      </ul>
                    </div>
                  </div>

                  {/* Panel 2 Information */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-green-500">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Panel Discussion 2</h4>
                    <h5 className="text-lg font-semibold text-green-600 mb-3">Digital Transitions in Education and Skills Development</h5>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Moderator:</p>
                      <p className="text-sm text-gray-600">Dr. Song Sopheak, Deputy Executive Director, CDRI</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Skills for digital economy</li>
                        <li>• Workforce development strategies</li>
                        <li>• Public-private partnerships</li>
                        <li>• Innovation in education</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Legend */}
          <section className="mt-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Session Types</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">Keynote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">Panel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Workshop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-600">Networking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm text-gray-600">Showcase</span>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Summit2025_agenda;
