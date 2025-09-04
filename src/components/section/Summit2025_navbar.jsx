import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Summit2025_navbar = () => {
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
    if (path === '/summit2025') return 'home';
    if (path === '/summit2025/about-summit') return 'about';
    if (path === '/summit2025/agenda') return 'agenda';
    if (path === '/summit2025/partners') return 'sponsors';
    if (path === '/summit2025/speakers') return 'awards';
    if (path === '/summit2025/contact') return 'contact';
    if (path === '/register') return 'certificate';
    return 'home'; // default
  };
  
  const activeTab = getActiveTab();
  
  const navItems = [
    { id: 'home', title: 'ទំព័រដើម', subtitle: 'Home', route: '/summit2025' },
    { id: 'about', title: 'អំពីកម្មវិធី', subtitle: 'About', route: '/summit2025/about-summit' },
    { id: 'agenda', title: 'របៀបវារៈ', subtitle: 'Agenda', route: '/summit2025/agenda' },
    { id: 'sponsors', title: 'ឧបត្ថម្ភ និងតាំងពិពណ៌ន', subtitle: 'Sponsors & Exhibitors', route: '/summit2025/partners' },
    { id: 'awards', title: 'ពានរង្វាន់', subtitle: 'Awards', route: '/summit2025/speakers' },
    { id: 'contact', title: 'ទំនាក់ទំនង', subtitle: 'Contact', route: '/summit2025/contact' },
    { id: 'certificate', title: 'វិញ្ញាបនបត្រ', subtitle: 'Certificate', route: '/register' },
    { id: 'partner', title: 'ដៃគូសហការ', subtitle: 'Partner', route: '/summit2025/partners' }
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
        backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #3b82f6, #1e40af, #1e3a8a)',
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'border-box',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.25)' : '0 5px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform skew-y-1"></div>
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
                  ? (item.id === 'certificate')
                    ? 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)' // Red for certificate
                    : (item.id === 'partner')
                      ? 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' // Blue for partner
                      : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' // Blue gradient for others
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.8) 100%)',
                borderRadius: '16px',
                border: activeTab === item.id 
                  ? 'none'
                  : '1px solid rgba(156, 163, 175, 0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: activeTab === item.id 
                  ? (item.id === 'certificate')
                    ? '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(220, 38, 38, 0.3)'
                    : (item.id === 'partner')
                      ? '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(37, 99, 235, 0.3)'
                      : '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(30, 58, 138, 0.3)'
                  : '0 4px 16px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 rounded-16px transition-opacity duration-300 ${
                activeTab === item.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(30, 58, 138, 0.2) 100%)',
                borderRadius: '16px'
              }}></div>
              
              {/* Active Tab Indicator */}
              {activeTab === item.id && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              )}
              
              <div className="relative z-10">
                <div className={`font-bold text-base mb-1 transition-colors duration-300 ${
                  activeTab === item.id 
                    ? 'text-white'
                    : 'text-gray-700 group-hover:text-white'
                }`}>
                  {item.title}
                </div>
                <div className={`text-sm font-medium transition-colors duration-300 ${
                  activeTab === item.id 
                    ? 'text-blue-200'
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

export default Summit2025_navbar;
