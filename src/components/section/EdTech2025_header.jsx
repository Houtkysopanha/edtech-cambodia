import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok,FaTelegramPlane } from 'react-icons/fa';
import edtechLogoWhite from '@/assets/images/edtect_logo_white.png';
import edtechLogoDark from '@/assets/images/edtech_logo.png';

const EdTech2025Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Function to check if a navigation link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    // Use RAF for ultra-smooth performance
    let rafId;
    const smoothScroll = () => {
      rafId = requestAnimationFrame(() => {
        handleScroll();
      });
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', smoothScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className={`transition-all duration-150 ease-out will-change-transform ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow-md text-gray-800 z-50' : 'text-white bg-transparent relative'}`}>
      {/* Top Bar - Follow us section */}
      <div className={`relative z-10 flex justify-end items-center px-8 transition-all duration-100 ${isScrolled ? 'hidden' : 'py-3'}`}>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Follow us:</span>
          <a href="https://www.facebook.com/edtechcambodia.org" className="text-white hover:text-blue-400 transition-colors duration-100">
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a href="https://www.youtube.com/@edtechcambodia" className="text-white hover:text-red-400 transition-colors duration-100">
            <FaYoutube className="w-4 h-4" />
          </a>
          <a href="https://t.me/edtechcambodia" className="text-white hover:text-blue-300 transition-colors duration-100">
            <FaTelegramPlane className="w-4 h-4" />
          </a>
          <a href="https://www.tiktok.com/@edtechcambodia" className="text-white hover:text-pink-400 transition-colors duration-100">
            <FaTiktok className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <div className={`border-t transition-all duration-100 ${isScrolled ? 'hidden' : 'border-white'}`}></div>

      {/* Main Navigation Bar */}
      <nav className={`relative z-10 flex justify-between items-center px-8 transition-all duration-150 ease-out will-change-transform ${isScrolled ? 'py-3' : 'py-6'}`}>
        {/* Logo */}
        <Link to="/edtech-s2025" className="flex items-center justify-center space-x-4">
          <img 
            src={isScrolled ? edtechLogoDark : edtechLogoWhite} 
            alt="EdTech Cambodia Logo" 
            className={`w-auto transition-all duration-150 ease-out will-change-transform ${isScrolled ? 'h-14' : 'h-20'}`}
          />
        </Link>

        {/* Navigation Menu */}
        <div className={`hidden lg:flex items-center justify-center space-x-12 transition-colors duration-100 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          <Link to="/edtech-s2025/about" className={`transition-colors duration-100 text-center flex flex-col items-center ${
            isActiveLink('/edtech-s2025/about') 
              ? 'text-red-600' 
              : isScrolled 
                ? 'hover:text-blue-600' 
                : 'hover:text-yellow-400'
          }`}>
            <div className="text-sm font-medium">អំពីកម្មវិធី</div>
            <div className="text-sm">About</div>
          </Link>
          <Link to="/edtech-s2025/agenda" className={`transition-colors duration-100 text-center flex flex-col items-center ${
            isActiveLink('/edtech-s2025/agenda') 
              ? 'text-red-600' 
              : isScrolled 
                ? 'hover:text-blue-600' 
                : 'hover:text-yellow-400'
          }`}>
            <div className="text-sm font-medium">របៀបវារៈ</div>
            <div className="text-sm">Agenda</div>
          </Link>
          <Link to="/edtech-s2025/sponsors" className={`transition-colors duration-100 text-center flex flex-col items-center ${
            isActiveLink('/edtech-s2025/sponsors') 
              ? 'text-red-600' 
              : isScrolled 
                ? 'hover:text-blue-600' 
                : 'hover:text-yellow-400'
          }`}>
            <div className="text-sm font-medium">អ្នកឧបត្ថម្ភ និងពិព័រណ៍</div>
            <div className="text-sm">Sponsors & Exhibitors</div>
          </Link>
          <Link to="/edtech-s2025/awards" className={`transition-colors duration-100 text-center flex flex-col items-center ${
            isActiveLink('/edtech-s2025/awards') 
              ? 'text-red-600' 
              : isScrolled 
                ? 'hover:text-blue-600' 
                : 'hover:text-yellow-400'
          }`}>
            <div className="text-sm font-medium">ពានរង្វាន់</div>
            <div className="text-sm">Awards</div>
          </Link>
          <Link to="/edtech-s2025/contact" className={`transition-colors duration-100 text-center flex flex-col items-center ${
            isActiveLink('/edtech-s2025/contact') 
              ? 'text-red-600' 
              : isScrolled 
                ? 'hover:text-blue-600' 
                : 'hover:text-yellow-400'
          }`}>
            <div className="text-sm font-medium">ទំនាក់ទំនង</div>
            <div className="text-sm">Contact</div>
          </Link>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          {/* Certificate & Partner Buttons */}
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white transition-colors duration-100">
            CERTIFICATE
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold text-white transition-colors duration-100">
            PARTNER
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className={`transition-colors duration-100 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default EdTech2025Header;
