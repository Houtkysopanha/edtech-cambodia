import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaExternalLinkAlt, FaFileAlt, FaUsers, FaCalendarAlt, FaBookOpen, FaGraduationCap, FaTimes, FaHome, FaInfoCircle, FaNewspaper, FaPhone, FaUserGraduate, FaHandshake } from 'react-icons/fa';
import logo from '@/assets/images/edtech_logo.png';

// Updated Quick Links data with project-specific content and navigation
const quickLinksData = [
  {
    title: 'ទំព័រដើម',
    titleEn: 'Main Navigation',
    icon: <FaHome className="w-5 h-5" />,
    color: 'from-blue-600 to-blue-700',
    links: [
      { name: 'Home Page', nameKh: 'ទំព័រដើម', url: '/', description: 'Return to main homepage' },
      { name: 'About Us', nameKh: 'អំពីយើង', url: '/about', description: 'Learn about EdTech Cambodia' },
      { name: 'News & Updates', nameKh: 'ព័ត៌មាន', url: '/news', description: 'Latest news and announcements' },
      { name: 'Contact Us', nameKh: 'ទំនាក់ទំនង', url: '/contact', description: 'Get in touch with us' },
      { name: 'Register', nameKh: 'ចុះឈ្មោះ', url: '/register', description: 'Register for events and programs' },
    ]
  },
  {
    title: 'កម្មវិធីរបស់យើង',
    titleEn: 'Our Programs',
    icon: <FaGraduationCap className="w-5 h-5" />,
    color: 'from-yellow-500 to-yellow-600',
    links: [
      { name: 'EdTech Summit 2025', nameKh: 'កិច្ចប្រជុំ EdTech ២០២៥', url: '/edtech-summit/2025', description: 'Annual technology in education conference' },
      { name: 'EdTech Summit 2026', nameKh: 'កិច្ចប្រជុំ EdTech ២០២៦', url: '/edtech-summit/2026', description: 'Next generation educational technology showcase' },
      { name: 'ICT4E Program', nameKh: 'កម្មវិធី ICT4E', url: '/ict4e', description: 'ICT for Education initiative' },
      { name: 'Digital Mission 100k Teachers', nameKh: 'បេសកកម្មឌីជីថល ១០០ពាន់គ្រូ', url: '/initiatives/digital-mission', description: 'Digital training for 100,000 teachers' },
      { name: 'Networking Meetings', nameKh: 'កិច្ចប្រជុំបណ្តាញ', url: '/our-work/networking-meeting', description: 'Regular networking sessions' },
    ]
  },
  {
    title: 'ICT4E ជំនាញ',
    titleEn: 'ICT4E Sections',
    icon: <FaCalendarAlt className="w-5 h-5" />,
    color: 'from-indigo-600 to-purple-600',
    links: [
      { name: 'ICT4E Home', nameKh: 'ទំព័រដើម ICT4E', url: '/ict4e', description: 'ICT4E main page' },
      { name: 'About Meeting', nameKh: 'អំពីកម្មវិធី', url: '/ict4e/about-meeting', description: 'Learn about ICT4E meetings' },
      { name: 'Meeting Agenda', nameKh: 'របៀបវារៈ', url: '/ict4e/agenda', description: 'Meeting schedule and agenda' },
      { name: 'ICT4E Contact', nameKh: 'ទំនាក់ទំនង ICT4E', url: '/ict4e/contact', description: 'Contact ICT4E team' },
      { name: 'Registration List', nameKh: 'ដៃគូសហការ', url: '/ict4e/registration-list', description: 'View partners and participants' },
    ]
  },
  {
    title: 'ធនធាន និងឯកសារ',
    titleEn: 'Resources & Documents',
    icon: <FaFileAlt className="w-5 h-5" />,
    color: 'from-green-600 to-green-700',
    links: [
      { name: 'Case Studies', nameKh: 'ករណីសិក្សា', url: '/resources/case-studies', description: 'EdTech implementation case studies' },
      { name: 'Publications', nameKh: 'ការបោះពុម្ព', url: '/resources/publications', description: 'Research papers and articles' },
      { name: 'Policy Framework', nameKh: 'ក្របខណ្ឌគោលនយោបាយ', url: '/documents/policy-framework', description: 'EdTech policy guidelines' },
      { name: 'Training Materials', nameKh: 'សម្ភារៈបណ្តុះបណ្តាល', url: '/training/materials', description: 'Educational resources and materials' },
      { name: 'Reports', nameKh: 'របាយការណ៍', url: '/resources/reports', description: 'Annual reports and studies' },
    ]
  },
  {
    title: 'ដៃគូ និងសមាជិក',
    titleEn: 'Partners & Members',
    icon: <FaHandshake className="w-5 h-5" />,
    color: 'from-red-600 to-red-700',
    links: [
      { name: 'Ministry of Education (MoEYS)', nameKh: 'ក្រសួងអប់រំ យុវជន និងកីឡា', url: '/partners/moeys', description: 'Government education ministry', external: true },
      { name: 'Open Institute', nameKh: 'វិទ្យាស្ថានបើកចំហ', url: '/partners/open-institute', description: 'Technology innovation institute' },
      { name: 'SPIDER Program Sweden', nameKh: 'កម្មវិធី SPIDER ស៊ុយអែត', url: '/partners/spider', description: 'Swedish development cooperation', external: true },
      { name: 'EdTech Members', nameKh: 'សមាជិក EdTech', url: '/member', description: 'View all EdTech members' },
      { name: 'Partnership Opportunities', nameKh: 'ឱកាសភាគីដៃគូ', url: '/partnerships', description: 'Explore partnership opportunities' },
    ]
  }
];

function QuickLinksPopup({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-[100] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Full Screen Popup Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div className="bg-white shadow-2xl w-full h-full max-w-7xl max-h-[95vh] overflow-hidden rounded-2xl animate-in fade-in zoom-in duration-300">
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <img 
                  src={logo} 
                  alt="EdTech Cambodia" 
                  className="h-16 w-auto bg-white p-2 rounded-xl shadow-lg"
                />
                <div>
                  <p className="text-blue-100 text-lg md:text-xl mt-2">Quick Links - EdTech Cambodia</p>
                  <p className="text-blue-200 text-sm mt-1">Navigate easily to all sections</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-blue-600 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
              >
                <FaTimes className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row h-[calc(100%-200px)]">
            {/* Left Sidebar - Categories */}
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 p-6 overflow-y-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-3"></div>
                Categories
              </h3>
              <div className="space-y-3">
                {quickLinksData.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 flex items-center space-x-4 group ${
                      selectedCategory === index 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105 border border-blue-500' 
                        : 'text-gray-700 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(index)}
                  >
                    <div className={`p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === index 
                        ? 'bg-white bg-opacity-20' 
                        : `bg-gradient-to-r ${category.color} text-white group-hover:scale-110`
                    }`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base">{category.title}</div>
                      <div className="text-sm opacity-90">{category.titleEn}</div>
                    </div>
                    {selectedCategory === index && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Links */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-gradient-to-br from-white to-gray-50">
              <div className="mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${quickLinksData[selectedCategory].color} text-white rounded-xl shadow-lg`}>
                    {quickLinksData[selectedCategory].icon}
                  </div>
                  <div>
                    <div className="text-gray-800">{quickLinksData[selectedCategory].titleEn}</div>
                    <div className="text-lg text-gray-600 font-normal">{quickLinksData[selectedCategory].title}</div>
                  </div>
                </h4>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {quickLinksData[selectedCategory].links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.url}
                    className="block p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl bg-white"
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    onClick={onClose}
                  >
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-lg text-gray-800 group-hover:text-blue-700 mb-2 leading-tight">
                            {link.name}
                          </div>
                          <div className="text-gray-600 group-hover:text-gray-700 text-sm mb-2">
                            {link.nameKh}
                          </div>
                          {link.description && (
                            <div className="text-xs text-gray-500 italic">
                              {link.description}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          {link.external && (
                            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium border border-green-200">
                              External
                            </span>
                          )}
                        </div>
                        <div className={`p-2 rounded-full transition-all duration-200 ${
                          link.external ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        } group-hover:scale-125`}>
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 md:px-8 py-4 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
              <p className="text-center md:text-left text-gray-600 flex items-center space-x-2">
                <span>Need help? Contact us at</span>
                <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">info@edtechcambodia.org</span>
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function QuickLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-1 m-0 text-white hover:text-yellow-300 transition-colors duration-200"
      >
        <span className="font-medium">Quick Links</span>
      </button>
      
      <QuickLinksPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

