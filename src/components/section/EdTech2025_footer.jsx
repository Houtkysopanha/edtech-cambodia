import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok, FaTelegramPlane, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import edtechLogo from '@/assets/images/edtect_logo_white.png';

const EdTech2025Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-sm text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={edtechLogo} 
                alt="EdTech Cambodia Logo" 
                className="h-19 w-auto"
              />
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
             Cambodia EdTech Summit 2025 is the country's first and largest event dedicated to transforming education through technology.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow us:</span>
              <a href="https://www.facebook.com/edtechcambodia.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@edtechcambodia" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@edtechcambodia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <FaTiktok className="w-4 h-4" />
              </a>
              <a href="https://t.me/edtechcambodia" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                <FaTelegramPlane className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/edtech-s2025/about" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Summit
                </Link>
              </li>
              <li>
                <Link 
                  to="/edtech-s2025/agenda" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link 
                  to="/edtech-s2025/sponsors" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Sponsors & Exhibitors
                </Link>
              </li>
              <li>
                <Link 
                  to="/edtech-s2025/awards" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link 
                  to="/edtech-s2025/contact" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-200 text-sm">#80, Preah Norodom Blvd. Phnom Penh</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-200 text-sm">info@edtechcambodia.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-200 text-sm">+855 77 488 887</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2025 EdTech Cambodia Summit. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-blue-200 hover:text-white text-sm transition-colors">
              Back to EdTech Cambodia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EdTech2025Footer;
