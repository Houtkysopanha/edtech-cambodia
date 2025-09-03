import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/assets/images/edtech_logo.png';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import QuickLinks from '@/components/common/QuickLinks';

// Data for the dropdown menu
const ourWorkData = {
  programs: [
    
    { 
      title: 'EdTech Summit', 
      link: '/our-work/edtech-summit',
      hasSubmenu: true,
      image: '/src/assets/images/edtech_logo.png',
      description: 'Annual technology conference bringing together educators, innovators, and policymakers to explore the future of education.',
      submenu: [
        { 
          title: 'EdTech Summit 2025', 
          link: '/edtech-summit/2025', 
          image: '/src/assets/images/edtech_logo.png',
          description: 'Annual technology in education conference focusing on digital transformation in learning environments and modern teaching methodologies.'
        },
        { 
          title: 'EdTech Summit 2026', 
          link: '/edtech-summit/2026', 
          image: '/src/assets/images/edtech_logo.png',
          description: 'Next generation educational technology showcase and networking event featuring AI integration and virtual reality in classrooms.'
        },
        { 
          title: 'EdTech Summit 2027', 
          link: '/edtech-summit/2027', 
          image: '/src/assets/images/edtech_logo.png',
          description: 'Future of education technology and AI integration in classrooms with focus on personalized learning experiences.'
        },
      ]
    },
    { 
      title: 'ICT4E Program', 
      link: '/ict4e',
      image: '/src/assets/images/ICT4E_logo.png',
      description: 'ICT for Education initiative promoting digital literacy and technology integration in Cambodian schools and communities.'
    },
    { 
      title: 'Networking Meeting', 
      link: '/our-work/networking-meeting',
      image: '/src/assets/images/edtech_logo.png',
      description: 'Regular networking sessions connecting educators, technology experts, and policy makers to share knowledge and best practices.'
    },
  ],
  initiatives: [
    { 
      title: 'Digital Mission for 100k teachers', 
      link: '/initiatives/digital-mission',
      image: '/src/assets/images/Digital100k.png',
      description: 'Comprehensive digital training program aimed at empowering 100,000 teachers with essential digital skills and modern teaching tools.'
    },
    { 
      title: 'ICT for Education Network', 
      link: '/initiatives/ict-network',
      image: '/src/assets/images/ICT4E_logo.png',
      description: 'Building a strong network of ICT professionals and educators to advance technology adoption in education sector.'
    },
  ],
  resources: [
    { 
      title: 'Case Studies', 
      link: '/resources/case-studies',
      image: '/src/assets/images/edtech_logo.png',
      description: 'In-depth analysis of successful EdTech implementations and their impact on learning outcomes in Cambodia.'
    },
    { 
      title: 'Publications', 
      link: '/resources/publications',
      image: '/src/assets/images/edtech_logo.png',
      description: 'Research papers, reports, and articles on educational technology trends and innovations in Southeast Asia.'
    },
    { 
      title: 'Reports', 
      link: '/resources/reports',
      image: '/src/assets/images/edtech_logo.png',
      description: 'Annual reports and studies on the progress of digital transformation in education across Cambodia.'
    },
  ],
};

// Dropdown content component
function DropdownContent() {
  const [activeTab, setActiveTab] = useState('programs');
  const [selectedMainEvent, setSelectedMainEvent] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const currentData = ourWorkData[activeTab];
  const selectedEvent = selectedMainEvent !== null ? currentData[selectedMainEvent] : null;

  return (
    <div className="absolute top-0 left-0 right-0 mx-5 mt-7 bg-white rounded-lg shadow-xl border border-gray-200 z-50 text-left max-w-7xl" 
         style={{ width: 'calc(100vw - 2.5rem)', left: 'calc(-50vw + 50% + 1.25rem)' }}>
      <div className="flex h-[500px]">
        {/* Column 1: Main Events */}
        <div className="flex flex-col w-[350px] p-5 border-r border-gray-200 bg-white">
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'programs' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => setActiveTab('initiatives')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'initiatives' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Initiatives
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'resources' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Resources
            </button>
          </div>
          
          <h3 className="text-xl font-bold text-[#0a1d53] mb-4 border-b border-gray-200 pb-2">
            {activeTab === 'programs' && 'Our Programs'}
            {activeTab === 'initiatives' && 'Our Initiatives'}
            {activeTab === 'resources' && 'Resources & Publications'}
          </h3>
          
          <div className="overflow-y-auto flex-1 space-y-1">
            {currentData.map((item, index) => (
              <div key={item.title}>
                <div 
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                    selectedMainEvent === index 
                      ? 'bg-blue-50 border-blue-200 shadow-sm' 
                      : 'hover:bg-gray-50 border-transparent hover:border-gray-200'
                  }`}
                  onMouseEnter={() => {
                    setHoveredEvent({ type: 'main', data: item });
                    if (item.hasSubmenu) {
                      setSelectedMainEvent(index);
                    } else {
                      setSelectedMainEvent(null);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!item.hasSubmenu) {
                      setHoveredEvent(null);
                    }
                  }}
                  onClick={() => {
                    if (item.hasSubmenu) {
                      setSelectedMainEvent(selectedMainEvent === index ? null : index);
                    }
                  }}
                >
                  <Link 
                    to={item.link} 
                    className="text-base text-gray-700 font-medium flex-1 hover:text-blue-600"
                    onClick={(e) => item.hasSubmenu && e.preventDefault()}
                  >
                    {item.title}
                  </Link>
                  {item.hasSubmenu && (
                    <FaChevronDown className={`text-gray-400 text-sm transition-transform duration-200 ml-2 ${
                      selectedMainEvent === index ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Sub Events - Only show if selectedEvent has submenu */}
        {selectedEvent && selectedEvent.hasSubmenu && (
          <div className="flex flex-col w-[300px] p-5 border-r border-gray-200 bg-gray-50">
            <h4 className="text-lg font-bold text-[#0a1d53] mb-4 border-b border-gray-300 pb-2">
              {selectedEvent.title} Events
            </h4>
            <div className="overflow-y-auto flex-1 space-y-1">
              {selectedEvent.submenu.map((subItem) => (
                <Link 
                  key={subItem.title}
                  to={subItem.link} 
                  className="block p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-gray-200"
                  onMouseEnter={() => setHoveredEvent({ type: 'sub', data: subItem })}
                  onMouseLeave={() => setHoveredEvent({ type: 'main', data: selectedEvent })}
                >
                  <div className="font-medium text-gray-800 hover:text-blue-600">{subItem.title}</div>
                  <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {subItem.description.substring(0, 60)}...
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Column 3: Information Panel - Takes remaining space */}
        <div className="flex-1 p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-r-lg">
          {hoveredEvent ? (
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex items-start space-x-6">
                <img 
                  src={hoveredEvent.data.image} 
                  alt={hoveredEvent.data.title}
                  className="w-32 h-32 object-cover rounded-2xl border-4 border-white shadow-xl flex-shrink-0"
                  onError={(e) => {
                    e.target.src = '/src/assets/images/edtech_logo.png';
                  }}
                />
                <div className="flex-1">
                  <h5 className="text-3xl font-bold text-[#0a1d53] mb-3 leading-tight">
                    {hoveredEvent.data.title}
                  </h5>
                  <span className="inline-block px-4 py-2 text-sm text-blue-700 bg-blue-100 rounded-full font-medium">
                    {hoveredEvent.type === 'main' ? 'Main Event' : 'Sub Event'}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <h6 className="text-lg font-semibold text-gray-800 mb-3">About this event</h6>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {hoveredEvent.data.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/50">
                <Link 
                  to={hoveredEvent.data.link}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
                >
                  Learn More & Register
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-center text-gray-500">
              <div>
                <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-600 mb-3">Discover Our Work</h4>
                <p className="text-lg text-gray-500">Hover over any event to see detailed information</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Dynamic events data - you can easily update these
  const upcomingEvents = [
    {
      title: "ICT for Education: Network and Meeting",
      date: "January 21-22 2025",
      isActive: true
    },
    {
      title: "EdTech Summit 2026",
      date: "February 17-18 2026",
      isActive: true
    },
    {
      title: "Digital Mission for 100k Teachers",
      date: "March 15-16 2025",
      isActive: true
    },
    {
      title: "Teacher Training Workshop",
      date: "April 20-21 2025",
      isActive: true
    },
    {
      title: "AI in Education Conference",
      date: "May 10-11 2025",
      isActive: true
    }
  ];

  // Filter only active events
  const activeEvents = upcomingEvents.filter(event => event.isActive);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show sticky navbar when scrolled down more than 100px
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-cycle through events every 4 seconds
  useEffect(() => {
    if (activeEvents.length > 1) {
      const interval = setInterval(() => {
        setCurrentEventIndex((prevIndex) => 
          (prevIndex + 1) % activeEvents.length
        );
      }, 4000); // Change event every 4 seconds

      return () => clearInterval(interval);
    }
  }, [activeEvents.length]);

  return (
    <>
    <header className="text-white bg-[url('./assets/images/themes.png')] bg-cover bg-center">
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden md:flex justify-between items-center px-6 py-6 text-sm ">
        <div className="flex items-center space-x-3 flex-1">
          {/* Ultra Compact Dynamic Event Display */}
          <div className="relative overflow-hidden max-w-xs h-10 flex items-center">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ 
                transform: `translateX(-${currentEventIndex * 100}%)`
              }}
            >
              {activeEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full min-w-full"
                >
                  <div className="text-left">
                    <div className="text-xs font-medium text-white truncate">{event.title}</div>
                    <div className="text-xs text-gray-300">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Minimal Event Dots */}
          {activeEvents.length > 1 && (
            <div className="flex space-x-1">
              {activeEvents.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentEventIndex(dotIndex)}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    dotIndex === currentEventIndex 
                      ? 'bg-yellow-400' 
                      : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 pr-10">
          <QuickLinks />
          <span className="text-gray-300">|</span>
          <Link to="/contact" className="border-2 border-[bg-edtech-gradient] px-5 py-2 text-white font-bold rounded-[10px] shadow-md">Contact us</Link>
          <span className='font-bold'>| Follow us:</span>
          <FaFacebookF />
          <FaYoutube />
          <FaTiktok />
        </div>
      </div>

      {/* Main navbar - Becomes sticky when scrolled */}
      <div className={`bg-white py-3 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-40 shadow-lg transform translate-y-0' 
          : 'relative'
      }`}>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center px-52">
          <Link to="/">
            <img
              src={logo}
              alt="EdTech Cambodia Logo"
              className="h-20 sm:h-20 cursor-pointer"
            />
          </Link>
          <div className="flex justify-between text-[#0a1d53] items-center px-6 py-3 gap-10">
            <nav className="flex space-x-8 text-sm sm:text-base font-semibold text-center">
              <Link to="/about" className="khmer-text hover:text-yellow-400">អំពីយើង<br />About Us</Link>

              {/* Our Work Dropdown */}
              <div className="relative group z-50">
                <button
                  className="khmer-text hover:text-yellow-400 flex flex-col items-center focus:outline-none"
                >
                  <span>ការងាររបស់យើង</span>
                  <span className="flex items-center gap-1">
                    Our Work
                    <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <DropdownContent />
                </div>
              </div>

              <Link to="/news" className="khmer-text hover:text-yellow-400">ព័ត៌មាន<br />Our News</Link>
            </nav>
            <Button>
              <Link
                to="/register"
                className=" bg-edtech-gradient px-5 py-3 text-white font-bold rounded-[10px] shadow-md"
              >
                EDTECH MEMBERS
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center px-4 sm:px-6">
          <Link to="/">
            <img
              src={logo}
              alt="EdTech Cambodia Logo"
              className="h-12 sm:h-16 cursor-pointer"
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0a1d53] p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Event Display */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="text-[#0a1d53]">
                  <div className="text-sm font-medium">{activeEvents[currentEventIndex]?.title}</div>
                  <div className="text-xs text-gray-600">{activeEvents[currentEventIndex]?.date}</div>
                </div>
                {/* Event Dots for Mobile */}
                {activeEvents.length > 1 && (
                  <div className="flex space-x-1 mt-2">
                    {activeEvents.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setCurrentEventIndex(dotIndex)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex === currentEventIndex 
                            ? 'bg-yellow-400' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                <Link 
                  to="/about" 
                  className="block text-[#0a1d53] font-semibold hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  អំពីយើង / About Us
                </Link>

                {/* Mobile Our Work Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="flex items-center justify-between w-full text-[#0a1d53] font-semibold hover:text-yellow-400 transition-colors"
                  >
                    <span>ការងាររបស់យើង / Our Work</span>
                    <FaChevronDown className={`text-xs transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-3 border-l-2 border-gray-200 pl-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-[#0a1d53]">Programs</h4>
                        {ourWorkData.programs.map((item) => (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="block text-sm text-gray-600 hover:text-[#0a1d53] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-[#0a1d53]">Initiatives</h4>
                        {ourWorkData.initiatives.map((item) => (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="block text-sm text-gray-600 hover:text-[#0a1d53] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-[#0a1d53]">Resources</h4>
                        {ourWorkData.resources.map((item) => (
                          <Link
                            key={item.title}
                            to={item.link}
                            className="block text-sm text-gray-600 hover:text-[#0a1d53] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link 
                  to="/news" 
                  className="block text-[#0a1d53] font-semibold hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ព័ត៌មាន / Our News
                </Link>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Link
                  to="/register"
                  className="block w-full bg-edtech-gradient px-4 py-3 text-white font-bold rounded-lg text-center shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EDTECH MEMBERS
                </Link>
                
                <Link
                  to="/contact"
                  className="block w-full border-2 border-[#0a1d53] px-4 py-3 text-[#0a1d53] font-bold rounded-lg text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>

                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-6 pt-2">
                  <span className="text-[#0a1d53] font-bold">Follow us:</span>
                  <FaFacebookF className="text-[#0a1d53] hover:text-yellow-400 cursor-pointer" />
                  <FaYoutube className="text-[#0a1d53] hover:text-yellow-400 cursor-pointer" />
                  <FaTiktok className="text-[#0a1d53] hover:text-yellow-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    
    {/* Spacer to prevent layout shift when navbar becomes fixed */}
    {isScrolled && <div className="h-[116px]"></div>}
    </>
  );
}