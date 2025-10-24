import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok, FaChevronDown } from 'react-icons/fa';
import logo from '@/assets/images/edtech_logo.png'; 
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from 'react';
import QuickLinks from '@/components/common/QuickLinks';
export default function Navbar() {
  const [isOurWorkDropdownOpen, setIsOurWorkDropdownOpen] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const dropdownRef = useRef(null);
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

                {/* Our Work Mega Dropdown */}
              <div 
                className="relative" 
                ref={dropdownRef}
              >
                <button
                  onClick={() => setIsOurWorkDropdownOpen(!isOurWorkDropdownOpen)}
                  className="khmer-text hover:text-yellow-400 flex flex-col items-center focus:outline-none"
                >
                  <span>ការងាររបស់យើង</span>
                  <span className="flex items-center gap-1">
                    Our Work
                    <FaChevronDown className={`text-xs transition-transform ${isOurWorkDropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                
                {/* Full Width Mega Dropdown Menu */}
                {isOurWorkDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-7xl bg-white shadow-2xl border border-gray-200 z-50 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 gap-8 p-10">
                      
                      {/* Programs Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                          </div>
                          <h3 className="text-xl font-bold text-[#0a1d53]">Programs</h3>
                        </div>
                        
                        <div className="space-y-4">
                          {/* EdTech Summit */}
                          <div className="group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all cursor-pointer border-l-4 border-transparent hover:border-blue-600">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-blue-600 mb-1">EdTech Summit</h4>
                                <div className="space-y-2 mt-3">
                                  <Link to="/edtech-s2025" className="block text-sm text-gray-600 hover:text-blue-600 hover:pl-2 transition-all">
                                    → EdTech Summit 2025
                                  </Link>
                                  <Link to="/our-work/edtech-summit/s2026" className="block text-sm text-gray-600 hover:text-blue-600 hover:pl-2 transition-all">
                                    → EdTech Summit 2026
                                  </Link>
                                  <Link to="/our-work/edtech-summit/s2027" className="block text-sm text-gray-600 hover:text-blue-600 hover:pl-2 transition-all">
                                    → EdTech Summit 2027
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ICT4E Program */}
                          <Link to="/ict4e" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all border-l-4 border-transparent hover:border-blue-600">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-blue-600 mb-1">ICT4E Program</h4>
                                <p className="text-sm text-gray-600">ICT for Education initiative and networking</p>
                              </div>
                            </div>
                          </Link>

                          {/* Networking Meeting */}
                          <Link to="/our-work/networking-meeting" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all border-l-4 border-transparent hover:border-blue-600">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-blue-600 mb-1">Networking Meeting</h4>
                                <p className="text-sm text-gray-600">Regular community networking sessions</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Initiatives Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">I</span>
                          </div>
                          <h3 className="text-xl font-bold text-[#0a1d53]">Initiatives</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <Link to="/initiatives/digital-mission" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-yellow-50 transition-all border-l-4 border-transparent hover:border-yellow-500">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-yellow-600 mb-1">Digital Mission 100k Teachers</h4>
                                <p className="text-sm text-gray-600">Training 100,000 teachers in digital skills</p>
                              </div>
                            </div>
                          </Link>

                          <Link to="/initiatives/teacher-training" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-yellow-50 transition-all border-l-4 border-transparent hover:border-yellow-500">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-yellow-600 mb-1">Teacher Training Programs</h4>
                                <p className="text-sm text-gray-600">Professional development for educators</p>
                              </div>
                            </div>
                          </Link>

                          <Link to="/initiatives/innovation" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-yellow-50 transition-all border-l-4 border-transparent hover:border-yellow-500">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-yellow-600 mb-1">Innovation Hub</h4>
                                <p className="text-sm text-gray-600">EdTech innovation and collaboration space</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Resources Section */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                          </div>
                          <h3 className="text-xl font-bold text-[#0a1d53]">Resources</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <Link to="/resources/case-studies" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 transition-all border-l-4 border-transparent hover:border-green-600">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-green-600 mb-1">Case Studies</h4>
                                <p className="text-sm text-gray-600">Success stories and implementation guides</p>
                              </div>
                            </div>
                          </Link>

                          <Link to="/resources/publications" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 transition-all border-l-4 border-transparent hover:border-green-600">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-green-600 mb-1">Publications</h4>
                                <p className="text-sm text-gray-600">Research papers and articles</p>
                              </div>
                            </div>
                          </Link>

                          <Link to="/resources/reports" className="block group">
                            <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 transition-all border-l-4 border-transparent hover:border-green-600">
                              <div className="flex-1">
                                <h4 className="font-bold text-[#0a1d53] group-hover:text-green-600 mb-1">Annual Reports</h4>
                                <p className="text-sm text-gray-600">Impact reports and documentation</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
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
      </div>
    </header>
  );
}
