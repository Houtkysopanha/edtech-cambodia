import React from 'react';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5'; // Icons for location, phone, mail
import { FaFacebookF, FaYoutube, FaTelegramPlane, FaTiktok } from 'react-icons/fa'; // Icons for social media
import logo from '@/assets/images/edtect_logo_white.png'; 
import moeys from '@/assets/images/MOEYS.png'
export default function Footer() {
  return (
     <div >
      {/* Main content area - for demonstration purposes */}
    

      {/* Footer Component */}
      <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Logo and Description */}
          <div className="text-center mb-12">
            {/* Placeholder for EdTech Cambodia Logo */}
            <img
              src= {logo}
              alt="EdTech Cambodia Logo"
              className="mx-auto mb-4 rounded-md"
            />
            <p className="max-w-2xl mx-auto text-white">
             Cambodia EdTech Summit 2025 is the country's first <br />
            and largest event dedicated to transforming <br />
          education through technology.
            </p>
            <div className="w-full h-[3px] bg-white my-8"></div> 
          </div>

          {/* Middle Section: Location, Quick Links, Supported By */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Our Location */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center justify-center md:justify-start">
                  <IoLocationSharp className="w-5 h-5 mr-3 text-blue-400" />
                  <span>ABD, Fresh Norodom Blvd. Phnom Penh</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <IoCall className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+855 77 488 887</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <IoMail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>info@edtechcambodia.org</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-center text-start md:text-start">
              <h3 className="text-xl text-start font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">EdTech Member</a></li>
              </ul>
            </div>

            {/* Supported By */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="text-xl font-semibold mb-4">SUPPORTED BY</h3>
              {/* Placeholder for Supported By Logo */}
              <img
                src={moeys}
                alt="Supported By Logo"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="w-full h-px bg-gray-400 my-8"></div> {/* Divider */}
          <div className="mb-6 md:mb-0 text-center">
              <h3 className="text-xl font-semibold mb-4">Follow Us:</h3>
              <div className="flex justify-center md:justify-center space-x-6">
                <a href="#" className="text-gray-300 flex space-x-1 items-center font-bold hover:text-blue-400 transition-colors">
                  <FaFacebookF className="w-7 h-7" /> 
                  <span>Facebook</span>
                </a>
                <a href="#" className="text-gray-300 flex space-x-1 items-center font-bold hover:text-blue-400 transition-colors">
                  <FaYoutube className="w-7 h-7" />
                   <span>YoutTube</span>
                </a>
                <a href="#" className="text-gray-300 flex space-x-1 items-center font-bold hover:text-blue-400 transition-colors">
                  <FaTelegramPlane className="w-7 h-7" />
                   <span>Telegram</span>
                </a>
                <a href="#" className="text-gray-300 flex space-x-1 items-center font-bold hover:text-blue-400 transition-colors">
                  <FaTiktok className="w-7 h-7" />
                   <span>TikTok</span>
                </a>
              </div>
            </div>
          {/* Bottom Section: Follow Us and Copyright/Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-10">
            {/* Follow Us */}

            {/* Copyright and Legal Links */}
    
              <div>
                 <p className="mb-2 md:mb-0">&copy; 2023 Abatenga Ltd. <span className="mx-2 hidden md:inline">|</span> 8902 Preston Rd. Inglewood, Maine 98380</p>
              </div>
            <div>
                <p className="mb-2 md:mb-0"> Privacy Policy Terms and Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}
