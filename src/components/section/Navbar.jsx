import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok, FaChevronDown } from 'react-icons/fa';
import logo from '@/assets/images/edtech_logo.png'; 
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from 'react';
import QuickLinks from '@/components/common/QuickLinks';
export default function Navbar() {
  const [isOurWorkDropdownOpen, setIsOurWorkDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('programs'); // Track active tab
  const [isEdTechExpanded, setIsEdTechExpanded] = useState(true); // Track EdTech Summit expansion
  const [hoveredItem, setHoveredItem] = useState('edtech-summit-2025'); // Track hovered item for preview
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null); // Ref for the dropdown menu
  const navRef = useRef(null);

  const events = [
    {
      title: "ICT for Education: Network and Meeting",
      date: "January 21-22 2025"
    },
    {
      title: "EdTech summit 2026",
      date: "January 21-22 2025"
    },
    {
      title: "Digital Mission for 100k teacher",
      date: "January 21-22 2025"
    }
  ];

  // Auto-rotate events every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  // Handle scroll to make navbar fixed
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navOffsetTop = navRef.current.offsetTop;
        setIsFixed(window.scrollY > navOffsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click is outside both the button and the dropdown menu
      const isClickOutsideButton = dropdownRef.current && !dropdownRef.current.contains(event.target);
      const isClickOutsideMenu = dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target);
      
      if (isClickOutsideButton && isClickOutsideMenu) {
        setIsOurWorkDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <header className="text-white bg-transparent bg-cover bg-center">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-6 py-6 text-sm bg-black/30 backdrop-blur-sm">
        <div className="flex-1 overflow-hidden">
          <div className="transition-all duration-500 ease-in-out">
            <span className="text-1xl font-medium">{events[currentEventIndex].title}</span>
            <br />
            <span className="text-gray-300">{events[currentEventIndex].date}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 pr-10">
          <QuickLinks />
          <Link to="/contact" className="border-2 border-[bg-edtech-gradient] px-5 py-2 text-white font-bold rounded-[10px] shadow-md">Contact us</Link>
          <span className='font-bold'>| Follow us:</span>
          <FaFacebookF />
          <FaYoutube />
          <FaTiktok />
        </div>
      </div>

      {/* Placeholder to maintain layout when navbar becomes fixed */}
      {isFixed && <div style={{ height: navRef.current?.offsetHeight }} />}

      {/* Middle Logo and Navigation */}
      <div 
        ref={navRef}
        className={`bg-white py-3 transition-all duration-300 ${
          isFixed ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'
        }`}
      >
        <div className="flex justify-between items-center px-52">
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

                {/* Our Work Button */}
                <button
                  ref={dropdownRef}
                  onClick={() => setIsOurWorkDropdownOpen(!isOurWorkDropdownOpen)}
                  className="khmer-text hover:text-yellow-400 flex flex-col items-center focus:outline-none"
                >
                  <span>ការងាររបស់យើង</span>
                  <span className="flex items-center gap-1">
                    Our Work
                    <FaChevronDown className={`text-xs transition-transform ${isOurWorkDropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
              
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
      </div>

      {/* Full Width Dropdown Menu - Overlay Below Navbar */}
      {isOurWorkDropdownOpen && (
        <div ref={dropdownMenuRef} className={`${isFixed ? 'fixed' : 'absolute'} left-0 right-0 w-full bg-white shadow-xl border-t border-gray-200 z-40 ${isFixed ? 'top-24' : ''}`}>
          <div className="w-full max-w-full px-10">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-8 py-4 text-base font-semibold transition-all ${
                  activeTab === 'programs'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => setActiveTab('initiatives')}
                className={`px-8 py-4 text-base font-semibold transition-all ${
                  activeTab === 'initiatives'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Initiatives
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-8 py-4 text-base font-semibold transition-all ${
                  activeTab === 'resources'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Resources
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-2 gap-8 p-10">
              {/* Left Side - Navigation */}
              <div className="space-y-3">
                {activeTab === 'programs' && (
                  <>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Our Programs</h3>
                    
                    {/* EdTech Summit - Expandable */}
                    <div className="bg-blue-50 rounded">
                      <button 
                        onClick={() => setIsEdTechExpanded(!isEdTechExpanded)}
                        className="w-full p-4 hover:bg-blue-100 flex items-center justify-between text-left"
                      >
                        <h4 className="font-bold text-[#0a1d53]">EdTech Summit</h4>
                        <span className="text-sm text-gray-500">{isEdTechExpanded ? '▲' : '▼'}</span>
                      </button>
                      
                      {isEdTechExpanded && (
                        <div className="px-4 pb-4 space-y-2">
                          <Link 
                            to="/edtech-s2025" 
                            className="block p-3 hover:bg-white rounded transition-all text-gray-700 hover:text-blue-600"
                            onMouseEnter={() => setHoveredItem('edtech-summit-2025')}
                            onClick={() => setIsOurWorkDropdownOpen(false)}
                          >
                            <div className="font-semibold">EdTech Summit 2025</div>
                            <p className="text-xs text-gray-500">Transforming Education Through Innovation...</p>
                          </Link>
                          <Link 
                            to="/our-work/edtech-summit/s2026" 
                            className="block p-3 hover:bg-white rounded transition-all text-gray-700 hover:text-blue-600"
                            onMouseEnter={() => setHoveredItem('edtech-summit-2026')}
                            onClick={() => setIsOurWorkDropdownOpen(false)}
                          >
                            <div className="font-semibold">EdTech Summit 2026</div>
                            <p className="text-xs text-gray-500">Next generation educational technology...</p>
                          </Link>
                          <Link 
                            to="/our-work/edtech-summit/s2027" 
                            className="block p-3 hover:bg-white rounded transition-all text-gray-700 hover:text-blue-600"
                            onMouseEnter={() => setHoveredItem('edtech-summit-2027')}
                            onClick={() => setIsOurWorkDropdownOpen(false)}
                          >
                            <div className="font-semibold">EdTech Summit 2027</div>
                            <p className="text-xs text-gray-500">Future of education technology and AI...</p>
                          </Link>
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      to="/ict4e" 
                      className="block p-4 hover:bg-gray-100 rounded"
                      onMouseEnter={() => setHoveredItem('ict4e')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-semibold text-[#0a1d53]">ICT4E Program</h4>
                    </Link>
                    <Link 
                      to="/our-work/networking-meeting" 
                      className="block p-4 hover:bg-gray-100 rounded"
                      onMouseEnter={() => setHoveredItem('networking-meeting')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-semibold text-[#0a1d53]">Networking Meeting</h4>
                    </Link>
                  </>
                )}

                {activeTab === 'initiatives' && (
                  <>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Our Initiatives</h3>
                    <Link 
                      to="/initiatives/digital-mission" 
                      className="block bg-blue-50 p-4 rounded hover:bg-blue-100"
                      onMouseEnter={() => setHoveredItem('digital-mission')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-bold text-[#0a1d53]">Digital Mission for 100k teachers</h4>
                    </Link>
                    <Link 
                      to="/initiatives/ict-education" 
                      className="block p-4 hover:bg-gray-100 rounded"
                      onMouseEnter={() => setHoveredItem('ict-education-network')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-semibold text-[#0a1d53]">ICT for Education Network</h4>
                    </Link>
                  </>
                )}

                {activeTab === 'resources' && (
                  <>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Resources & Publications</h3>
                    <Link 
                      to="/resources/case-studies" 
                      className="block bg-blue-50 p-4 rounded hover:bg-blue-100"
                      onMouseEnter={() => setHoveredItem('case-studies')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-bold text-[#0a1d53]">Case Studies</h4>
                    </Link>
                    <Link 
                      to="/resources/publications" 
                      className="block p-4 hover:bg-gray-100 rounded"
                      onMouseEnter={() => setHoveredItem('publications')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-semibold text-[#0a1d53]">Publications</h4>
                    </Link>
                    <Link 
                      to="/resources/reports" 
                      className="block p-4 hover:bg-gray-100 rounded"
                      onMouseEnter={() => setHoveredItem('reports')}
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      <h4 className="font-semibold text-[#0a1d53]">Reports</h4>
                    </Link>
                  </>
                )}
              </div>

              {/* Right Side - Dynamic Preview Content */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
                {/* Programs Content */}
                {hoveredItem === 'edtech-summit-2025' && (
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded flex items-center justify-center text-white font-bold text-2xl">ET</div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0a1d53]">EdTech Summit</h3>
                          <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Main Event</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-[#0a1d53] mb-2">About this event</h4>
                    <p className="text-gray-700 mb-4">Annual technology conference bringing together educators, innovators, and policymakers to explore the future of education. Transforming Education Through Innovation - Join us for the most anticipated EdTech event of 2025.</p>
                    <Link 
                      to="/edtech-s2025" 
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Learn More & Register →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'edtech-summit-2026' && (
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center text-white font-bold text-2xl">26</div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0a1d53]">EdTech Summit 2026</h3>
                          <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Upcoming</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-[#0a1d53] mb-2">About this event</h4>
                    <p className="text-gray-700 mb-4">Next generation educational technology showcase and conference. Explore cutting-edge innovations, AI integration, and the future of digital learning in Southeast Asia.</p>
                    <Link 
                      to="/our-work/edtech-summit/s2026" 
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Learn More →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'edtech-summit-2027' && (
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded flex items-center justify-center text-white font-bold text-2xl">27</div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0a1d53]">EdTech Summit 2027</h3>
                          <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full">Future Event</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-[#0a1d53] mb-2">About this event</h4>
                    <p className="text-gray-700 mb-4">Future of education technology and AI integration in classroom environments. Discover how artificial intelligence will revolutionize teaching methodologies and student engagement.</p>
                    <Link 
                      to="/our-work/edtech-summit/s2027" 
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Learn More →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'ict4e' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">ICT4E Program</h3>
                    <p className="text-gray-700 mb-4">ICT for Education initiative focused on bringing technology to classrooms across Cambodia. Building digital literacy and connecting educators nationwide through innovative programs and networking opportunities.</p>
                    <Link 
                      to="/ict4e" 
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Explore Program →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'networking-meeting' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Networking Meeting</h3>
                    <p className="text-gray-700 mb-4">Regular community networking sessions bringing together education professionals, technology experts, and policymakers. Share best practices, collaborate on solutions, and build lasting partnerships.</p>
                    <Link 
                      to="/our-work/networking-meeting" 
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Join Meeting →
                    </Link>
                  </div>
                )}

                {/* Initiatives Content */}
                {hoveredItem === 'digital-mission' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Digital Mission for 100k Teachers</h3>
                    <p className="text-gray-700 mb-4">An ambitious initiative to train 100,000 teachers across Cambodia in digital skills and modern teaching methodologies. Empowering educators with technology tools and pedagogical approaches for the digital age.</p>
                    <Link 
                      to="/initiatives/digital-mission" 
                      className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Discover Initiative →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'ict-education-network' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">ICT for Education Network</h3>
                    <p className="text-gray-700 mb-4">Building connections and sharing best practices among education technology stakeholders. A collaborative platform for knowledge exchange, resource sharing, and collective problem-solving in EdTech implementation.</p>
                    <Link 
                      to="/initiatives/ict-education" 
                      className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Join Network →
                    </Link>
                  </div>
                )}

                {/* Resources Content */}
                {hoveredItem === 'case-studies' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Case Studies</h3>
                    <p className="text-gray-700 mb-4">Success stories and implementation guides from EdTech projects across Cambodia. Learn from real-world experiences, challenges overcome, and best practices for technology integration in education.</p>
                    <Link 
                      to="/resources/case-studies" 
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Read Case Studies →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'publications' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Publications</h3>
                    <p className="text-gray-700 mb-4">Research papers, articles, and scholarly publications on educational technology trends, impact assessments, and policy recommendations. Access evidence-based insights for informed decision-making.</p>
                    <Link 
                      to="/resources/publications" 
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      Browse Publications →
                    </Link>
                  </div>
                )}

                {hoveredItem === 'reports' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#0a1d53] mb-4">Annual Reports</h3>
                    <p className="text-gray-700 mb-4">Impact reports and comprehensive documentation of EdTech Cambodia's activities, achievements, and lessons learned. Transparent reporting on programs, partnerships, and measurable outcomes.</p>
                    <Link 
                      to="/resources/reports" 
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
                      onClick={() => setIsOurWorkDropdownOpen(false)}
                    >
                      View Reports →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
