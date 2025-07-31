import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import logo from '@/assets/images/edtech_logo.png'; 
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOurWorkDropdownOpen, setIsOurWorkDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <header className="text-white bg-[url('./assets/images/themes.png')] bg-cover bg-center">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-6 py-6 text-sm ">
        <div className="flex space-x-6">
          <div>
            <span className="text-1xl font-medium">ICT for Education: Network and Meeting</span>
            <br />
            <span className=" text-gray-300">January 21-22 2025</span>
          </div>
          
          <div className='border-l-2 border-white px-3'>
            <span className="text-1xl font-medium">EdTech summit 2026</span>
            <br />
            <span className=" text-gray-300">January 21-22 2025</span>
          </div>
          
          <div className='border-l-2 border-white px-3'>
            <span className="text-1xl font-medium">Digital Mission for 100k teacher</span>
            <br />
            <span className=" text-gray-300">January 21-22 2025</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 pr-10">
          <Link to="/contact" className="border-2 border-[bg-edtech-gradient] px-5 py-2 text-white font-bold rounded-[10px] shadow-md">Contact us</Link>
          <span className='font-bold'>| Follow us:</span>
          <FaFacebookF />
          <FaYoutube />
          <FaTiktok />
        </div>
      </div>

      {/* Middle Logo */}
      <div className="bg-white py-3">
        <div className="flex justify-between items-center px-52">
          <img
            src={logo}
            alt="EdTech Cambodia Logo"
            className="h-20 sm:h-20"
          />
          <div className="flex justify-between text-[#0a1d53] items-center px-6 py-3 gap-10">
            <nav className="flex space-x-8 text-sm sm:text-base font-semibold text-center">
              <Link to="/about" className="khmer-text hover:text-yellow-400">អំពីយើង<br />About Us</Link>
              
              {/* Our Work Dropdown */}
              <div className="relative" ref={dropdownRef}>
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
                
                {/* Dropdown Menu */}
                {isOurWorkDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 text-left" style={{ borderRadius: '0.5rem' }}>
                    <div className="py-2">
                      {/* ICT4E */}
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-left">
                        <Link to="/our-work/ict4e" className="text-gray-800 hover:text-blue-600 block text-left">
                          ICT4E
                        </Link>
                      </div>
                      
                      {/* EdTech Summit with submenu */}
                      <div className="group relative">
                        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between text-left">
                          <Link to="/our-work/edtech-summit" className="text-gray-800 hover:text-blue-600 text-left">
                            EdTech Summit
                          </Link>
                          <FaChevronRight className="text-xs text-gray-400" />
                        </div>
                        
                        {/* Submenu */}
                        <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-left" style={{ borderRadius: '0.5rem' }}>
                          <div className="py-2">
                            <Link to="/our-work/edtech-summit/s2025" className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-blue-600 text-left">
                              EdTech S2025
                            </Link>
                            <Link to="/our-work/edtech-summit/s2026" className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-blue-600 text-left">
                              EdTech S2026
                            </Link>
                            <Link to="/our-work/edtech-summit/s2027" className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-blue-600 text-left">
                              EdTech S2027
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* Networking Meeting */}
                      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-left">
                        <Link to="/our-work/networking-meeting" className="text-gray-800 hover:text-blue-600 block text-left">
                          Networking Meeting
                        </Link>
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
