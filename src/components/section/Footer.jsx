import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5'; // Icons for location, phone, mail
import { FaFacebookF, FaYoutube, FaTelegramPlane, FaTiktok } from 'react-icons/fa'; // Icons for social media
import logo from '@/assets/images/edtect_logo_white.png';
export default function Footer() {
  return (
    <footer className="bg-[#0b1e51] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={logo}
                alt="EdTech Cambodia Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <IoLocationSharp className="w-5 h-5 mt-1 text-white flex-shrink-0" />
                <span className="text-gray-200">#80, Preah Norodom Blvd. Phnom Penh</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoCall className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-200">+855 77 488 887</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoMail className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-200">info@edtechcambodia.org</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-200 leading-relaxed">
              Cambodia EdTech Summit 2025 is the country's first and largest event dedicated to transforming education through technology.
            </p>
          </div>
          
          {/* Middle Section - Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-white">
              The First Cambodia EdTech Summit
            </h3>
            <nav className="space-y-4">
              <Link to="/edtech-s2025/about" className="block text-gray-200 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link to="/edtech-s2025/agenda" className="block text-gray-200 hover:text-white transition-colors duration-200">
                Agenda
              </Link>
              <Link to="/edtech-s2025/partners" className="block text-gray-200 hover:text-white transition-colors duration-200">
                Sponsors & Exhibitors
              </Link>
              <Link to="/edtech-s2025/awards" className="block text-gray-200 hover:text-white transition-colors duration-200">
                Awards
              </Link>
              <Link to="/edtech-s2025/contact" className="block text-gray-200 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Right Section - Social Media */}
          <div className="lg:col-span-1 ">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Follow Us:
            </h3>
            <div className="space-y-4 text-end">
              <a href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200 group">
                <FaFacebookF className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200 group">
                <FaYoutube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200 group">
                <FaTelegramPlane className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors duration-200 group">
                <FaTiktok className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Copyright */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p className="mb-2 sm:mb-0">
              Copyright © 2025 EdTech Cambodia | Designed by{' '}
              <span className="text-red-500 font-semibold">EdTech Team</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}
