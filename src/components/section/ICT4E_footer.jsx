import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin} from 'lucide-react';
import { FaFacebook, FaYoutube, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import MOEYSLogo from '@/assets/images/MOEYS.png';

const ICT4E_footer = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#181D4D' }}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2" style={{fontSize: '1.5rem'}}>ICT for Education Network Meeting</h3>
          <h4 className="text-lg mb-4" style={{ color: '#FFD700' }}>(ICT4E)</h4>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '0.8rem' }}>
            1st quarterly meeting of ICT for Education group in Cambodia<br /> was organized with the collaboration between the Ministry of<br /> Education, Youth and Sport (MoEYS) and the Open Institute<br /> (OI), supported by the SPIDER program in Sweden.
          </p>
          <hr style={{marginTop: '1rem', marginBottom: '1rem', height: '3px', border: 'none', backgroundColor: 'white'}}/>
        </div>
        
        {/* Contact and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4">
          {/* Contact Information */}
          <div className="text-left">
            <h4 className="font-semibold mb-6 text-lg" style={{ color: '#FFD700' }}>Our Location</h4>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>#80, Preah Norodom Blvd. Phnom Penh</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+855 77 488 887</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>info@edtechcambodia.org</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-left ml-8">
            <h4 className="font-semibold mb-6 text-lg" style={{ color: '#FFD700' }}>Quick Links</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <Link to="/ict4e/about-meeting" className="block hover:text-white transition-colors" onClick={() => window.scrollTo(0, 500)}>About Event</Link>
              <Link to="/ict4e/agenda" className="block hover:text-white transition-colors" onClick={() => window.scrollTo(0, 800)}>Agenda</Link>
              <Link to="/ict4e/contact" className="block hover:text-white transition-colors" onClick={() => window.scrollTo(0, 800)}>Contact</Link>
              <Link to="/register" className="block hover:text-white transition-colors" onClick={() => window.scrollTo(0, 200)}>Register</Link>
              <Link to="/ict4e/registration-list" className="block hover:text-white transition-colors" onClick={() => window.scrollTo(0, 800)}>Partner</Link>
            </div>
          </div>
          
          {/* Supported By */}
          <div className="text-center">
            <h4 className="font-semibold mb-6 text-lg" style={{ color: '#FFD700' }}>SUPPORTED BY</h4>
            <div className="flex justify-center">
              {/* MOEYS Logo */}
              <div className=" rounded-lg p-3">
                <img 
                  src={MOEYSLogo} 
                  alt="Ministry of Education, Youth and Sport" 
                  className="w-35 h-35 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: '1rem', marginBottom: '3rem', borderColor: 'white', textDecoration: 'dotted' }} />
        {/* Bottom Section - Follow Us on top, Copyright/Address and Links below */}
        <div className="space-y-4">
          {/* Follow Us Row */}
          <div className="flex items-center space-x-4" style={{marginBottom: '2rem'}}>
            <span className="text-white font-semibold">Follow Us:</span>
            <div className="flex space-x-10">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <FaTelegramPlane className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-pink-400 transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Bottom Row - Copyright/Address and Policy Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-300 text-sm space-y-2 sm:space-y-0">
            {/* Left - Copyright and Address */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0">
              <span>&copy; {new Date().getFullYear()} Abstergo Ltd.</span>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>8502 Preston Rd. Inglewood, Maine 98380</span>
              </div>
            </div>
            
            {/* Right - Policy Links */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ICT4E_footer;
