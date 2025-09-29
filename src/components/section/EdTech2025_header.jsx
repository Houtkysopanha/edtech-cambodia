import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok, FaTelegramPlane } from 'react-icons/fa';

export default function EdTech2025_header({ setIsMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const location = useLocation();

  // Function to check if a navigation link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuToggled;
    setIsMobileMenuToggled(newState);
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(newState);
    }
  };

  return (
    <>
      {/* Top Bar - Follow us section */}
      <div className={`relative z-10 flex justify-end items-center px-8 transition-all duration-100 ${isScrolled ? 'hidden' : 'py-3'} min-[746px]:flex hidden`}>
        <span className="text-sm mr-4 text-white">Follow us:</span>
        <div className="flex space-x-3">
          <a href="https://www.facebook.com/edtechcambodia.org" className="text-white hover:text-blue-400 transition-colors duration-100">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="https://www.youtube.com/@edtechcambodia" className="text-white hover:text-red-400 transition-colors duration-100">
            <FaYoutube className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-pink-400 transition-colors duration-100">
            <FaTiktok className="w-4 h-4" />
          </a>
          <a href="https://t.me/edtechcambodia" className="text-white hover:text-blue-300 transition-colors duration-100">
            <FaTelegramPlane className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <div className={`${isScrolled ? 'hidden' : 'block'} border-t border-white border-opacity-150`}></div>

      {/* Main Navigation Bar */}
      <header className={`transition-all duration-150 ease-out will-change-transform ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow-md text-gray-800 z-50' : 'text-white bg-transparent relative'}`}>
        <nav className={`relative z-10 flex justify-between items-center px-8 transition-all duration-150 ease-out will-change-transform ${isScrolled ? 'py-3' : 'py-6'}`}>
          
          {/* Logo */}
          <Link to="/edtech-s2025" className="flex items-center justify-center space-x-4">
            <img 
              src={isScrolled ? "/src/assets/images/edtech_logo.png" : "/src/assets/images/edtect_logo_white.png"}
              alt="EdTech Cambodia Logo" 
              className={`w-auto transition-all duration-150 ease-out will-change-transform ${
                isScrolled 
                  ? 'h-10 sm:h-12 lg:h-14' 
                  : 'h-12 sm:h-16 lg:h-20'
              }`}
            />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden lg:flex space-x-8 items-center font-medium">
            <Link 
              to="/edtech-s2025/about" 
              className={`relative transition-colors duration-200 py-2 text-center ${
                isActiveLink('/edtech-s2025/about')
                  ? 'text-red-600'
                  : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <div className="khmer-text">អំពីកម្មវិធី</div>
              <div className="text-sm">About</div>
            </Link>
            <Link 
              to="/edtech-s2025/agenda" 
              className={`relative transition-colors duration-200 py-2 text-center ${
                isActiveLink('/edtech-s2025/agenda')
                  ? 'text-red-600'
                  : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <div className="khmer-text">របៀបវារៈ</div>
              <div className="text-sm">Agenda</div>
            </Link>
            <Link 
              to="/edtech-s2025/sponsors" 
              className={`relative transition-colors duration-200 py-2 text-center ${
                isActiveLink('/edtech-s2025/sponsors')
                  ? 'text-red-600'
                  : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <div className="khmer-text">អ្នកឧបត្ថម្ភ និងពិព័រណ៍</div>
              <div className="text-sm">Sponsors & Exhibitors</div>
            </Link>
            <Link 
              to="/edtech-s2025/awards" 
              className={`relative transition-colors duration-200 py-2 text-center ${
                isActiveLink('/edtech-s2025/awards')
                  ? 'text-red-600'
                  : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <div className="khmer-text">ពានរង្វាន់</div>
              <div className="text-sm">Awards</div>
            </Link>
            <Link 
              to="/edtech-s2025/contact" 
              className={`relative transition-colors duration-200 py-2 text-center ${
                isActiveLink('/edtech-s2025/contact')
                  ? 'text-red-600'
                  : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-yellow-400'
              }`}
            >
              <div className="khmer-text">ទំនាក់ទំនង</div>
              <div className="text-sm">Contact</div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Certificate & Partner Buttons - Hidden on screens 745px and below */}
            <div className="hidden min-[746px]:flex items-center space-x-4">
              <Link 
                to="/edtech-s2025/certificate" 
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white transition-colors duration-100"
              >
                CERTIFICATE
              </Link>
              <Link 
                to="/edtech-s2025/partner" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold text-white transition-colors duration-100"
              >
                PARTNER
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className={`relative z-[100] p-3 transition-colors duration-200 ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'
                }`}
                aria-label="Toggle mobile menu"
              >
                {/* Hamburger icon */}
                <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-in-out ${
                    isMobileMenuToggled ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}></span>
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-in-out ${
                    isMobileMenuToggled ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-in-out ${
                    isMobileMenuToggled ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isMobileMenuToggled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-screen w-96 max-w-[90vw] flex flex-col transform transition-transform duration-300 ease-out ${
          isMobileMenuToggled ? 'translate-x-0' : 'translate-x-full'
        } bg-white shadow-2xl`}>
          
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              Menu
            </h3>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content - Full Height Scrollable Area */}
          <div className="flex-1 min-h-[600px] h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            <div className="px-6 py-8 min-h-full">
              <div className="space-y-4">
                {/* Navigation Links */}
                <Link 
                  to="/edtech-s2025/about" 
                  onClick={toggleMobileMenu}
                  className={`flex flex-col p-5 rounded-xl transition-all duration-200 transform hover:scale-[0.98] ${
                    isActiveLink('/edtech-s2025/about')
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <span className="text-xl font-bold khmer-text">អំពីកម្មវិធី</span>
                  <div className="text-sm opacity-80 mt-1">About</div>
                </Link>

                <Link 
                  to="/edtech-s2025/agenda" 
                  onClick={toggleMobileMenu}
                  className={`flex flex-col p-5 rounded-xl transition-all duration-200 transform hover:scale-[0.98] ${
                    isActiveLink('/edtech-s2025/agenda')
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <span className="text-xl font-bold khmer-text">របៀបវារៈ</span>
                  <div className="text-sm opacity-80 mt-1">Agenda</div>
                </Link>

                <Link 
                  to="/edtech-s2025/sponsors" 
                  onClick={toggleMobileMenu}
                  className={`flex flex-col p-5 rounded-xl transition-all duration-200 transform hover:scale-[0.98] ${
                    isActiveLink('/edtech-s2025/sponsors')
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <span className="text-xl font-bold khmer-text">អ្នកឧបត្ថម្ភ និងពិព័រណ៍</span>
                  <div className="text-sm opacity-80 mt-1">Sponsors & Exhibitors</div>
                </Link>

                <Link 
                  to="/edtech-s2025/awards" 
                  onClick={toggleMobileMenu}
                  className={`flex flex-col p-5 rounded-xl transition-all duration-200 transform hover:scale-[0.98] ${
                    isActiveLink('/edtech-s2025/awards')
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <span className="text-xl font-bold khmer-text">ពានរង្វាន់</span>
                  <div className="text-sm opacity-80 mt-1">Awards</div>
                </Link>

                <Link 
                  to="/edtech-s2025/contact" 
                  onClick={toggleMobileMenu}
                  className={`flex flex-col p-5 rounded-xl transition-all duration-200 transform hover:scale-[0.98] ${
                    isActiveLink('/edtech-s2025/contact')
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <span className="text-xl font-bold khmer-text">ទំនាក់ទំនង</span>
                  <div className="text-sm opacity-80 mt-1">Contact</div>
                </Link>

                {/* Action Buttons for smaller screens */}
                <div className="min-[746px]:hidden pt-8 space-y-4 border-t border-opacity-20 border-gray-400 mt-8">
                  <Link 
                    to="/edtech-s2025/certificate"
                    onClick={toggleMobileMenu}
                    className="block w-full bg-red-600 hover:bg-red-700 active:bg-red-800 px-6 py-5 rounded-xl font-bold text-lg text-white transition-all duration-200 transform hover:scale-[0.98] shadow-lg text-center"
                  >
                    CERTIFICATE
                  </Link>
                  <Link 
                    to="/edtech-s2025/partner"
                    onClick={toggleMobileMenu}
                    className="block w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 py-5 rounded-xl font-bold text-lg text-white transition-all duration-200 transform hover:scale-[0.98] shadow-lg text-center"
                  >
                    PARTNER
                  </Link>
                </div>

                {/* Extra spacing at bottom for scroll */}
                <div className="h-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
