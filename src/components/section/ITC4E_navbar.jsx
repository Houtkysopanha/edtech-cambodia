import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ICT4E_navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = React.useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [originalTop, setOriginalTop] = useState(0);

  useEffect(() => {
    // Calculate original position and height once on mount
    const calculatePosition = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setOriginalTop(rect.top + scrollTop);
        setNavbarHeight(rect.height);
      }
    };

    // Calculate position after component mounts
    setTimeout(calculatePosition, 100);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldStick = scrollPosition >= originalTop - 10; // 10px buffer
      
      if (shouldStick !== isScrolled) {
        setIsScrolled(shouldStick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculatePosition);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [originalTop, isScrolled]);
  
  // Function to determine active tab based on current route
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/ict4e') return 'home';
    if (path === '/ict4e/about-meeting') return 'about';
    if (path === '/ict4e/agenda') return 'agenda';
    if (path === '/ict4e/contact') return 'contact';
    if (path === '/ict4e/register') return 'register';
    if (path === '/ict4e/registration-list') return 'partner';
    return 'home'; // default
  };
  
  const activeTab = getActiveTab();
  
  const navItems = [
    { id: 'home', title: '​ទំព័រដើម', subtitle: 'Home', route: '/ict4e' },
    { id: 'about', title: 'អំពីកម្មវិធី', subtitle: 'About', route: '/ict4e/about-meeting' },
    { id: 'agenda', title: 'របៀបវារៈ', subtitle: 'Agenda', route: '/ict4e/agenda' },
    { id: 'contact', title: 'ទំនាក់ទំនង', subtitle: 'Contact', route: '/ict4e/contact' },
    { id: 'register', title: 'ចុះឈ្មោះចូលរួម', subtitle: 'Register', route: '/register' },
    { id: 'partner', title: 'ដៃគូសហការ', subtitle: 'Partner', route: '/ict4e/registration-list' }
  ];

  return (
    <>
    {/* Spacer when navbar is sticky */}
    {isScrolled && <div style={{ height: navbarHeight }} />}
    
    <section 
      ref={navbarRef}
      className={`text-white shadow-xl overflow-hidden ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-40' : 'relative'
      }`} 
      style={{
        padding: '24px 0', 
        backgroundColor: 'white', 
        borderRadius: isScrolled ? '0' : '0 0 10px 10px', 
        borderBottom: '4px solid transparent',
        backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #ff7f00, #ff0000, #4b0082)',
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'border-box',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.25)' : '0 5px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.id}
              to={item.route}
              className={`group relative px-6 py-4 text-center min-w-[140px] cursor-pointer transform hover:scale-105 hover:-translate-y-1 ${
                activeTab === item.id 
                  ? 'text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-white'
              }`}
              style={{
                background: activeTab === item.id 
                  ? (item.id === 'partner' || item.id === 'register')
                    ? 'linear-gradient(135deg, #FFD900 0%, #FFE55C 100%)' 
                    : 'linear-gradient(135deg, #02114C 0%, #1e3a8a 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.8) 100%)',
                borderRadius: '16px',
                border: activeTab === item.id 
                  ? 'none'
                  : '1px solid rgba(156, 163, 175, 0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: activeTab === item.id 
                  ? (item.id === 'partner' || item.id === 'register')
                    ? '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(255, 217, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(2, 17, 76, 0.3)'
                  : '0 4px 16px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 rounded-16px transition-opacity duration-300 ${
                activeTab === item.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(249, 250, 251, 0.2) 100%)',
                borderRadius: '16px'
              }}></div>
              
              {/* Active Tab Indicator */}
              {activeTab === item.id && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              )}
              
              <div className="relative z-10">
                <div className={`font-bold text-base mb-1 transition-colors duration-300 ${
                  activeTab === item.id 
                    ? (item.id === 'partner' || item.id === 'register')
                      ? 'text-blue-900'
                      : 'text-white'
                    : 'text-gray-700 group-hover:text-white'
                }`}>
                  {item.title}
                </div>
                <div className={`text-sm font-medium transition-colors duration-300 ${
                  activeTab === item.id 
                    ? (item.id === 'partner' || item.id === 'register')
                      ? 'text-blue-700'
                      : 'text-blue-200'
                    : 'text-gray-500 group-hover:text-blue-100'
                }`}>
                  {item.subtitle}
                </div>
              </div>
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 rounded-16px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                  transform: 'translateX(-100%)',
                  animation: activeTab !== item.id ? 'shine 1.5s ease-in-out' : 'none'
                }}
              ></div>
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
    </>
  );
};

export default ICT4E_navbar;
