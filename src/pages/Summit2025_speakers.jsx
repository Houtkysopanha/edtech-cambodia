import React, { useState } from 'react';
import { Globe, Award, Users, Building, Linkedin, Twitter } from 'lucide-react';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';

const Summit2025_speakers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const speakers = [
    {
      id: 1,
      name: "Dr. Andreas Schleicher",
      title: "Director of Education and Skills",
      organization: "OECD",
      category: "keynote",
      country: "France",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Leading global education expert and architect of PISA. Andreas has over 20 years of experience in international education policy and assessment.",
      expertise: ["Education Policy", "International Assessment", "Skills Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "The Future of Education in the Digital Age"
    },
    {
      id: 2,
      name: "Prof. Rose Luckin",
      title: "Professor of Learner Centred Design",
      organization: "University College London",
      category: "keynote",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "World-renowned expert in AI and education, focusing on human-centered AI design for learning and teaching.",
      expertise: ["AI in Education", "Learning Analytics", "Human-Computer Interaction"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "AI-Powered Personalized Learning"
    },
    {
      id: 3,
      name: "Dr. Neil Heffernan",
      title: "Professor of Computer Science",
      organization: "Worcester Polytechnic Institute",
      category: "keynote",
      country: "United States",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Pioneer in intelligent tutoring systems and creator of ASSISTments, used by millions of students worldwide.",
      expertise: ["Intelligent Tutoring Systems", "Educational Data Mining", "Personalized Learning"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "Personalized Learning at Scale"
    },
    {
      id: 4,
      name: "Dr. Dani Ben-Zvi",
      title: "Professor of Mathematics Education",
      organization: "University of Haifa",
      category: "keynote",
      country: "Israel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in statistics education and technology integration, with extensive experience in educational transformation.",
      expertise: ["Statistics Education", "Technology Integration", "Teacher Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "From Pilot to Scale - Implementation Success Stories"
    },
    {
      id: 5,
      name: "H.E. Dr. Hang Chuon Naron",
      title: "Minister of Education, Youth and Sport",
      organization: "Royal Government of Cambodia",
      category: "government",
      country: "Cambodia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Leading Cambodia's educational transformation and digital innovation initiatives across all education levels.",
      expertise: ["Education Policy", "Digital Transformation", "System Leadership"],
      social: {
        linkedin: "#"
      },
      session: "Opening Ceremony"
    },
    {
      id: 6,
      name: "Dr. Sarah Chen",
      title: "Director of Education Technology",
      organization: "Meta",
      category: "industry",
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Leading VR/AR education initiatives at Meta, developing immersive learning experiences for global education.",
      expertise: ["Virtual Reality", "Augmented Reality", "Immersive Learning"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "Virtual & Augmented Reality in Learning"
    },
    {
      id: 7,
      name: "Dr. Raj Patel",
      title: "Senior Education Specialist",
      organization: "World Bank",
      category: "development",
      country: "India",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      bio: "Leading educational technology investments and policy development across developing countries.",
      expertise: ["Education Finance", "Policy Development", "Impact Assessment"],
      social: {
        linkedin: "#"
      },
      session: "Funding and Sustainability Models"
    },
    {
      id: 8,
      name: "Ms. Lisa Thompson",
      title: "Head of Accessibility",
      organization: "Microsoft Education",
      category: "industry",
      country: "United States",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      bio: "Champion of inclusive design in educational technology, ensuring accessibility for all learners.",
      expertise: ["Inclusive Design", "Accessibility", "Assistive Technology"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "Inclusive Design in EdTech"
    },
    {
      id: 9,
      name: "Dr. Maria Santos",
      title: "Director of Assessment Innovation",
      organization: "Cambridge Assessment",
      category: "assessment",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in digital assessment and learning analytics, transforming how we measure and understand learning.",
      expertise: ["Digital Assessment", "Learning Analytics", "Measurement Innovation"],
      social: {
        linkedin: "#"
      },
      session: "Data Analytics for Educational Insights"
    },
    {
      id: 10,
      name: "Prof. Kenji Tanaka",
      title: "Director of EdTech Research",
      organization: "University of Tokyo",
      category: "academic",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      bio: "Leading researcher in educational technology effectiveness and implementation in Asian contexts.",
      expertise: ["EdTech Research", "Implementation Science", "Cultural Adaptation"],
      social: {
        linkedin: "#"
      },
      session: "Regional Collaboration Forum"
    },
    {
      id: 11,
      name: "Ms. Sophie Larsson",
      title: "CEO",
      organization: "Nordic EdTech Collective",
      category: "industry",
      country: "Sweden",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
      bio: "Entrepreneur and advocate for sustainable EdTech solutions with experience across Nordic countries.",
      expertise: ["EdTech Entrepreneurship", "Sustainable Innovation", "Market Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      },
      session: "Innovation Showcase"
    },
    {
      id: 12,
      name: "Dr. Chanrith Nhem",
      title: "Director",
      organization: "EdTech Cambodia",
      category: "local",
      country: "Cambodia",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Local EdTech leader driving innovation in Cambodian education through technology and capacity building.",
      expertise: ["Mobile Learning", "Local Innovation", "Capacity Building"],
      social: {
        linkedin: "#"
      },
      session: "Mobile Learning Solutions"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Speakers', count: speakers.length },
    { id: 'keynote', name: 'Keynote Speakers', count: speakers.filter(s => s.category === 'keynote').length },
    { id: 'government', name: 'Government Leaders', count: speakers.filter(s => s.category === 'government').length },
    { id: 'industry', name: 'Industry Experts', count: speakers.filter(s => s.category === 'industry').length },
    { id: 'academic', name: 'Academic Leaders', count: speakers.filter(s => s.category === 'academic').length },
    { id: 'local', name: 'Local Innovators', count: speakers.filter(s => s.category === 'local').length }
  ];

  const filteredSpeakers = selectedCategory === 'all' 
    ? speakers 
    : speakers.filter(speaker => speaker.category === selectedCategory);

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'keynote': return 'bg-yellow-100 text-yellow-800';
      case 'government': return 'bg-blue-100 text-blue-800';
      case 'industry': return 'bg-green-100 text-green-800';
      case 'academic': return 'bg-purple-100 text-purple-800';
      case 'assessment': return 'bg-indigo-100 text-indigo-800';
      case 'development': return 'bg-orange-100 text-orange-800';
      case 'local': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection 
          title="Summit Speakers"
          subtitle="2025"
          description="Meet the world-class experts, innovators, and thought leaders who will share their insights and vision for the future of education"
          showButtons={false}
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="speakers" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          
          {/* Speaker Categories */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Distinguished Speakers</h2>
              <p className="text-xl text-gray-600">Global expertise meets local innovation</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Speakers Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpeakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Speaker Image */}
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(speaker.category)}`}>
                        {speaker.category.charAt(0).toUpperCase() + speaker.category.slice(1)}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center text-white text-sm">
                        <Globe className="w-4 h-4 mr-1" />
                        {speaker.country}
                      </div>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                    <p className="text-emerald-600 font-medium mb-1">{speaker.title}</p>
                    <p className="text-gray-600 text-sm mb-4 flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {speaker.organization}
                    </p>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{speaker.bio}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {speaker.expertise.slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {speaker.expertise.length > 2 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                          +{speaker.expertise.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Session */}
                    {speaker.session && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">
                          <strong>Session:</strong> {speaker.session}
                        </p>
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {speaker.social.twitter && (
                        <a
                          href={speaker.social.twitter}
                          className="text-blue-400 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call for Speakers */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-blue-900 to-emerald-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Want to Speak at the Summit?</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                We're still accepting proposals for lightning talks and workshop sessions. 
                Share your expertise with the EdTech community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Submit Proposal
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Speaker Guidelines
                </button>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Summit2025_speakers;
