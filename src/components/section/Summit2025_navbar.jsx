import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Summit2025_navbar = () => {
  const location = useLocation();

  // Function to determine active tab based on current route
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/summit2025/about-summit') return 'about';
    if (path === '/summit2025/agenda') return 'agenda';
    if (path === '/summit2025/partners') return 'sponsors';
    if (path === '/summit2025/award') return 'awards';
    if (path === '/summit2025/contact') return 'contact';
    return ''; // No active tab for other pages
  };
  
  const activeTab = getActiveTab();
  
  const navItems = [
    { id: 'about', title: 'អំពីកម្មវិធី', subtitle: 'About', route: '/summit2025/about-summit' },
    { id: 'agenda', title: 'របៀបវារៈ', subtitle: 'Agenda', route: '/summit2025/agenda' },
    { id: 'sponsors', title: 'ឧបត្ថម្ភ និងតាំងពិពណ៌', subtitle: 'Sponsors & Exhibitors', route: '/summit2025/partners' },
    { id: 'awards', title: 'ពានរង្វាន់', subtitle: 'Awards', route: '/summit2025/award' },
    { id: 'contact', title: 'ទំនាក់ទំនង', subtitle: 'Contact', route: '/summit2025/contact' }
  ];

  return (
    <nav className="bg-white text-gray-800 py-3 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          {/* Logo Container */}
          <div className="w-12 h-12 flex-shrink-0">
            {/* Placeholder for the logo image */}
          </div>
          {/* Logo Text */}
        </div>

        {/* Middle Section: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
          
        </div>

        {/* Right Section: Buttons */}
        <div className="flex space-x-8">

          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              className={`flex flex-col items-center justify-center text-sm sm:text-base font-semibold text-center transition-colors duration-200 ${
                activeTab === item.id ? 'text-blue-700 font-bold' : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              <div className="text-sm sm:text-base">{item.title}</div>
              <div className="text-sm sm:text-base">{item.subtitle}</div>
            </Link>
          ))}

          <Link
            to="/register"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3  shadow-md transition-colors duration-200"
          >
            CERTIFICATE
          </Link>
          <Link
            to="/summit2025/partners"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3  shadow-md transition-colors duration-200"
          >
            PARTNER
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Summit2025_navbar;