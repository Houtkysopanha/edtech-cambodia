import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Video, Coffee, Award } from 'lucide-react';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';

const Summit2025_agenda = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const agendaData = {
    1: {
      date: "March 15, 2025",
      theme: "Foundation Day - Setting the Stage",
      sessions: [
        {
          time: "8:00 - 9:00 AM",
          title: "Registration & Welcome Coffee",
          type: "networking",
          location: "Main Lobby",
          description: "Registration, networking, and welcome refreshments"
        },
        {
          time: "9:00 - 9:30 AM",
          title: "Opening Ceremony",
          type: "ceremony",
          location: "Main Hall",
          speaker: "H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport",
          description: "Official opening and welcome address"
        },
        {
          time: "9:30 - 10:30 AM",
          title: "Keynote: The Future of Education in the Digital Age",
          type: "keynote",
          location: "Main Hall",
          speaker: "Dr. Andreas Schleicher, Director of Education, OECD",
          description: "Vision for transforming education through technology"
        },
        {
          time: "10:30 - 11:00 AM",
          title: "Coffee Break & Networking",
          type: "break",
          location: "Exhibition Area",
          description: "Refreshments and technology showcase"
        },
        {
          time: "11:00 - 12:00 PM",
          title: "Panel: EdTech Policy and Governance",
          type: "panel",
          location: "Main Hall",
          speaker: "Regional Education Ministers & Policy Experts",
          description: "Policy frameworks for successful EdTech integration"
        },
        {
          time: "12:00 - 1:30 PM",
          title: "Lunch & Exhibition Tour",
          type: "networking",
          location: "Exhibition Hall",
          description: "Networking lunch with technology demonstrations"
        },
        {
          time: "1:30 - 2:30 PM",
          title: "Workshop Track A: AI in Education",
          type: "workshop",
          location: "Workshop Room 1",
          speaker: "Prof. Rose Luckin, University College London",
          description: "Hands-on exploration of AI-powered learning tools"
        },
        {
          time: "1:30 - 2:30 PM",
          title: "Workshop Track B: Mobile Learning Solutions",
          type: "workshop",
          location: "Workshop Room 2",
          speaker: "EdTech Cambodia Team",
          description: "Building effective mobile learning experiences"
        },
        {
          time: "2:45 - 3:45 PM",
          title: "Innovation Showcase: Startup Pitch Session",
          type: "showcase",
          location: "Innovation Lab",
          speaker: "Selected EdTech Startups",
          description: "Emerging technologies and innovative solutions"
        },
        {
          time: "4:00 - 5:00 PM",
          title: "Regional Collaboration Forum",
          type: "forum",
          location: "Main Hall",
          speaker: "ASEAN Education Technology Network",
          description: "Building partnerships across Southeast Asia"
        },
        {
          time: "6:00 - 8:00 PM",
          title: "Welcome Reception & Cultural Performance",
          type: "networking",
          location: "Grand Ballroom",
          description: "Networking reception with traditional Cambodian performance"
        }
      ]
    },
    2: {
      date: "March 16, 2025",
      theme: "Innovation Day - Exploring Solutions",
      sessions: [
        {
          time: "8:30 - 9:00 AM",
          title: "Morning Coffee & Networking",
          type: "networking",
          location: "Main Lobby",
          description: "Start the day with networking and coffee"
        },
        {
          time: "9:00 - 10:00 AM",
          title: "Keynote: Personalized Learning at Scale",
          type: "keynote",
          location: "Main Hall",
          speaker: "Dr. Neil Heffernan, Worcester Polytechnic Institute",
          description: "How technology enables personalized education for every learner"
        },
        {
          time: "10:00 - 10:30 AM",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          description: "Refreshments and solution demonstrations"
        },
        {
          time: "10:30 - 11:30 AM",
          title: "Deep Dive: Virtual & Augmented Reality in Learning",
          type: "workshop",
          location: "VR/AR Lab",
          speaker: "Meta Education Team",
          description: "Immersive learning experiences with VR/AR technology"
        },
        {
          time: "11:45 AM - 12:45 PM",
          title: "Panel: Teacher Professional Development in Digital Age",
          type: "panel",
          location: "Main Hall",
          speaker: "International Teacher Training Experts",
          description: "Preparing educators for technology-enhanced teaching"
        },
        {
          time: "12:45 - 2:00 PM",
          title: "Innovation Lunch & Solution Marketplace",
          type: "networking",
          location: "Solution Marketplace",
          description: "Interactive lunch with hands-on technology experiences"
        },
        {
          time: "2:00 - 3:00 PM",
          title: "Track A: Data Analytics for Educational Insights",
          type: "workshop",
          location: "Analytics Lab",
          speaker: "Cambridge Assessment Team",
          description: "Using data to improve learning outcomes"
        },
        {
          time: "2:00 - 3:00 PM",
          title: "Track B: Inclusive Design in EdTech",
          type: "workshop",
          location: "Design Studio",
          speaker: "Microsoft Accessibility Team",
          description: "Creating technology that works for all learners"
        },
        {
          time: "3:15 - 4:15 PM",
          title: "Young Innovators Showcase",
          type: "showcase",
          location: "Innovation Stage",
          speaker: "Student Innovators from Cambodian Universities",
          description: "Next generation solutions by young entrepreneurs"
        },
        {
          time: "4:30 - 5:30 PM",
          title: "Roundtable: Sustainable EdTech Implementation",
          type: "roundtable",
          location: "Conference Room",
          speaker: "Ministry Officials & Implementation Partners",
          description: "Strategies for long-term success in EdTech adoption"
        },
        {
          time: "7:00 - 9:00 PM",
          title: "Innovation Awards Gala Dinner",
          type: "ceremony",
          location: "Grand Ballroom",
          description: "Celebrating excellence in educational technology innovation"
        }
      ]
    },
    3: {
      date: "March 17, 2025",
      theme: "Implementation Day - Making it Happen",
      sessions: [
        {
          time: "8:30 - 9:00 AM",
          title: "Final Day Welcome & Coffee",
          type: "networking",
          location: "Main Lobby",
          description: "Energizing start to implementation planning"
        },
        {
          time: "9:00 - 10:00 AM",
          title: "Keynote: From Pilot to Scale - Implementation Success Stories",
          type: "keynote",
          location: "Main Hall",
          speaker: "Dr. Dani Ben-Zvi, University of Haifa",
          description: "Lessons learned from successful EdTech implementations worldwide"
        },
        {
          time: "10:00 - 10:30 AM",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          description: "Final networking with exhibitors"
        },
        {
          time: "10:30 - 11:30 AM",
          title: "Implementation Workshop: Creating Your EdTech Roadmap",
          type: "workshop",
          location: "Strategy Room",
          speaker: "Implementation Strategy Consultants",
          description: "Practical planning for EdTech integration"
        },
        {
          time: "11:45 AM - 12:45 PM",
          title: "Panel: Funding and Sustainability Models",
          type: "panel",
          location: "Main Hall",
          speaker: "Development Banks & Investment Partners",
          description: "Financial strategies for sustainable EdTech programs"
        },
        {
          time: "12:45 - 1:45 PM",
          title: "Working Lunch: Partnership Formation",
          type: "networking",
          location: "Partnership Hub",
          description: "Facilitated partnership matching and collaboration planning"
        },
        {
          time: "1:45 - 2:45 PM",
          title: "Action Planning Session",
          type: "workshop",
          location: "Main Hall",
          speaker: "Summit Facilitators",
          description: "Collaborative development of next steps and commitments"
        },
        {
          time: "3:00 - 3:45 PM",
          title: "Summit Outcomes & Recommendations Report",
          type: "presentation",
          location: "Main Hall",
          speaker: "Summit Rapporteurs",
          description: "Synthesis of key insights and recommendations"
        },
        {
          time: "3:45 - 4:30 PM",
          title: "Closing Ceremony & Call to Action",
          type: "ceremony",
          location: "Main Hall",
          speaker: "Summit Leadership Committee",
          description: "Commitment to action and future collaboration"
        },
        {
          time: "4:30 - 5:00 PM",
          title: "Farewell Reception",
          type: "networking",
          location: "Main Lobby",
          description: "Final networking and safe travels"
        }
      ]
    }
  };

  const getSessionIcon = (type) => {
    switch (type) {
      case 'keynote': return <Award className="w-5 h-5 text-yellow-500" />;
      case 'panel': return <Users className="w-5 h-5 text-blue-500" />;
      case 'workshop': return <Video className="w-5 h-5 text-green-500" />;
      case 'networking': return <Coffee className="w-5 h-5 text-orange-500" />;
      case 'break': return <Coffee className="w-5 h-5 text-gray-500" />;
      case 'ceremony': return <Award className="w-5 h-5 text-purple-500" />;
      case 'showcase': return <Award className="w-5 h-5 text-indigo-500" />;
      case 'forum': return <Users className="w-5 h-5 text-teal-500" />;
      case 'roundtable': return <Users className="w-5 h-5 text-pink-500" />;
      case 'presentation': return <Video className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getSessionBorderColor = (type) => {
    switch (type) {
      case 'keynote': return 'border-l-yellow-500';
      case 'panel': return 'border-l-blue-500';
      case 'workshop': return 'border-l-green-500';
      case 'networking': return 'border-l-orange-500';
      case 'break': return 'border-l-gray-500';
      case 'ceremony': return 'border-l-purple-500';
      case 'showcase': return 'border-l-indigo-500';
      case 'forum': return 'border-l-teal-500';
      case 'roundtable': return 'border-l-pink-500';
      case 'presentation': return 'border-l-red-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection 
          title="Summit Agenda"
          subtitle="2025"
          description="Explore our comprehensive three-day program featuring keynotes, workshops, panels, and networking opportunities"
          showButtons={false}
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="agenda" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          
          {/* Day Selection */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Three Days of Innovation</h2>
              <p className="text-xl text-gray-600">Select a day to view the detailed agenda</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              {[1, 2, 3].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  <div className="text-lg font-bold">Day {day}</div>
                  <div className="text-sm opacity-80">{agendaData[day].date}</div>
                </button>
              ))}
            </div>

            {/* Day Theme */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {agendaData[selectedDay].theme}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
            </div>
          </section>

          {/* Sessions */}
          <section>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {agendaData[selectedDay].sessions.map((session, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-md border-l-4 ${getSessionBorderColor(session.type)} p-6 hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                      
                      {/* Time and Icon */}
                      <div className="flex items-center space-x-3 mb-4 md:mb-0 md:w-48 flex-shrink-0">
                        {getSessionIcon(session.type)}
                        <div>
                          <div className="font-bold text-gray-900">{session.time}</div>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {session.location}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{session.title}</h4>
                        {session.speaker && (
                          <p className="text-emerald-600 font-medium mb-2">{session.speaker}</p>
                        )}
                        <p className="text-gray-600">{session.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
