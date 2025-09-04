import React, { useState } from 'react';
import { Award, Building, Globe, Users, Star, ArrowRight, CheckCircle, Target } from 'lucide-react';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';

const Summit2025_partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnershipTiers = [
    {
      name: "Platinum Sponsor",
      price: "$50,000",
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-700",
      benefits: [
        "Premier branding on all summit materials",
        "Keynote speaking opportunity (30 minutes)",
        "Executive networking dinner access",
        "10 complimentary registrations",
        "Exhibition booth (premium location)",
        "Logo on summit website and app",
        "Social media promotion",
        "Post-event participant contact list",
        "Custom workshop session",
        "VIP lounge access"
      ]
    },
    {
      name: "Gold Sponsor",
      price: "$25,000",
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-700",
      benefits: [
        "Major branding visibility",
        "Panel discussion opportunity",
        "6 complimentary registrations",
        "Exhibition booth (priority location)",
        "Logo on key summit materials",
        "Social media mentions",
        "Networking session access",
        "Product demonstration slot"
      ]
    },
    {
      name: "Silver Sponsor",
      price: "$15,000",
      color: "from-gray-300 to-gray-500",
      textColor: "text-gray-600",
      benefits: [
        "Brand recognition at summit",
        "4 complimentary registrations",
        "Exhibition booth",
        "Logo on summit website",
        "Welcome reception access",
        "Networking opportunities",
        "Product showcase opportunity"
      ]
    },
    {
      name: "Bronze Sponsor",
      price: "$10,000",
      color: "from-orange-400 to-orange-600",
      textColor: "text-orange-700",
      benefits: [
        "Brand presence at summit",
        "2 complimentary registrations",
        "Small exhibition space",
        "Logo on select materials",
        "Access to networking sessions"
      ]
    }
  ];

  const partners = [
    {
      id: 1,
      name: "Ministry of Education, Youth and Sport",
      type: "government",
      tier: "organizer",
      logo: "/src/assets/images/MOEYS.png",
      description: "Leading Cambodia's educational transformation and digital innovation initiatives.",
      website: "#",
      country: "Cambodia"
    },
    {
      id: 2,
      name: "Open Development Cambodia",
      type: "implementing",
      tier: "organizer",
      logo: "/src/assets/images/openDevCam.png",
      description: "Promoting transparency and citizen engagement through open data and technology.",
      website: "#",
      country: "Cambodia"
    },
    {
      id: 3,
      name: "UNESCO",
      type: "international",
      tier: "platinum",
      logo: "https://via.placeholder.com/200x100/0066cc/white?text=UNESCO",
      description: "United Nations Educational, Scientific and Cultural Organization supporting global education.",
      website: "#",
      country: "Global"
    },
    {
      id: 4,
      name: "World Bank",
      type: "development",
      tier: "platinum",
      logo: "https://via.placeholder.com/200x100/0066cc/white?text=World+Bank",
      description: "Supporting educational development and technology integration in developing countries.",
      website: "#",
      country: "Global"
    },
    {
      id: 5,
      name: "Microsoft Education",
      type: "technology",
      tier: "gold",
      logo: "https://via.placeholder.com/200x100/0078d4/white?text=Microsoft",
      description: "Empowering every student and educator to achieve more with technology.",
      website: "#",
      country: "Global"
    },
    {
      id: 6,
      name: "Google for Education",
      type: "technology",
      tier: "gold",
      logo: "https://via.placeholder.com/200x100/4285f4/white?text=Google",
      description: "Creating innovative tools and resources to support learning and teaching.",
      website: "#",
      country: "Global"
    },
    {
      id: 7,
      name: "Cambridge Assessment",
      type: "assessment",
      tier: "silver",
      logo: "https://via.placeholder.com/200x100/003c5c/white?text=Cambridge",
      description: "Leading educational assessment and certification organization.",
      website: "#",
      country: "United Kingdom"
    },
    {
      id: 8,
      name: "ASEAN Foundation",
      type: "regional",
      tier: "silver",
      logo: "https://via.placeholder.com/200x100/003d82/white?text=ASEAN",
      description: "Promoting regional cooperation and development in Southeast Asia.",
      website: "#",
      country: "ASEAN"
    },
    {
      id: 9,
      name: "EdTech Hub",
      type: "research",
      tier: "bronze",
      logo: "https://via.placeholder.com/200x100/6b46c1/white?text=EdTech+Hub",
      description: "Research and innovation in educational technology for global development.",
      website: "#",
      country: "Global"
    },
    {
      id: 10,
      name: "Norton Rose Fulbright",
      type: "supporting",
      tier: "bronze",
      logo: "https://via.placeholder.com/200x100/2d3748/white?text=Norton+Rose",
      description: "Global law firm supporting educational and technology initiatives.",
      website: "#",
      country: "Global"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Partners', count: partners.length },
    { id: 'organizer', name: 'Organizers', count: partners.filter(p => p.tier === 'organizer').length },
    { id: 'platinum', name: 'Platinum', count: partners.filter(p => p.tier === 'platinum').length },
    { id: 'gold', name: 'Gold', count: partners.filter(p => p.tier === 'gold').length },
    { id: 'silver', name: 'Silver', count: partners.filter(p => p.tier === 'silver').length },
    { id: 'bronze', name: 'Bronze', count: partners.filter(p => p.tier === 'bronze').length }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.tier === selectedCategory);

  const getTierBadgeColor = (tier) => {
    switch (tier) {
      case 'organizer': return 'bg-purple-100 text-purple-800';
      case 'platinum': return 'bg-gray-100 text-gray-800';
      case 'gold': return 'bg-yellow-100 text-yellow-800';
      case 'silver': return 'bg-gray-50 text-gray-700';
      case 'bronze': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'government': return 'bg-blue-100 text-blue-800';
      case 'technology': return 'bg-green-100 text-green-800';
      case 'international': return 'bg-indigo-100 text-indigo-800';
      case 'development': return 'bg-purple-100 text-purple-800';
      case 'assessment': return 'bg-pink-100 text-pink-800';
      case 'regional': return 'bg-teal-100 text-teal-800';
      case 'research': return 'bg-orange-100 text-orange-800';
      case 'implementing': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection 
          title="Our Partners"
          subtitle="2025"
          description="Building the future of education together with world-class organizations and industry leaders"
          showButtons={false}
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="partners" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          
          {/* Partnership Overview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Partnership Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The EdTech Summit 2025 brings together a diverse ecosystem of organizations 
                committed to transforming education through technology and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  International organizations and regional partners bringing global perspectives to local challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shared Vision</h3>
                <p className="text-gray-600">
                  United commitment to advancing educational technology and improving learning outcomes for all.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Impact</h3>
                <p className="text-gray-600">
                  Working together to create sustainable solutions and meaningful partnerships for the future.
                </p>
              </div>
            </div>
          </section>

          {/* Partner Categories */}
          <section className="mb-16">
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

          {/* Partners Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Partner Logo */}
                  <div className="bg-gray-50 p-8 flex items-center justify-center h-32">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/200x100/6b7280/white?text=${encodeURIComponent(partner.name)}`;
                      }}
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTierBadgeColor(partner.tier)}`}>
                          {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeBadgeColor(partner.type)}`}>
                          {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                        </span>
                      </div>
                      <Globe className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{partner.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{partner.country}</span>
                      <a
                        href={partner.website}
                        className="text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1"
                      >
                        <span className="text-sm">Visit</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Opportunities */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Partnership Opportunities</h2>
              <p className="text-xl text-gray-600">Join us as a partner and help shape the future of education in Cambodia</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${tier.color} text-white p-6 text-center`}>
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold">{tier.price}</div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${tier.color} text-white hover:shadow-lg transform hover:scale-105`}>
                      Become a Partner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Partnership */}
          <section>
            <div className="bg-gradient-to-r from-blue-900 to-emerald-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <Star className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl font-bold mb-4">Custom Partnership Opportunities</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Looking for a tailored partnership package? We can create custom sponsorship opportunities 
                that align with your organization's goals and objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Download Partnership Brochure
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Partnership Team
                </button>
              </div>
              
              <div className="mt-8 text-blue-200">
                <p>Contact: partnerships@summit2025.org | +855 92 345 678</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Summit2025_partners;
