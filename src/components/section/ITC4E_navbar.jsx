import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ICT4E_navbar = () => {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [navOffsetTop, setNavOffsetTop] = useState(0);
  const navRef = useRef(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const currentScrollY = window.scrollY;
        
        // Set the original offset position and height once
        if (navOffsetTop === 0 && navRef.current.offsetTop > 0) {
          setNavOffsetTop(navRef.current.offsetTop);
          setNavHeight(navRef.current.offsetHeight);
        }
        
        // Check if we've scrolled past the navbar's original position
        if (currentScrollY >= navOffsetTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    // Set initial measurements
    if (navRef.current) {
      setNavOffsetTop(navRef.current.offsetTop);
      setNavHeight(navRef.current.offsetHeight);
    }

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [navOffsetTop]);
  
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
      {/* Placeholder to maintain layout when navbar becomes fixed */}
      {isFixed && (
        <div 
          style={{ height: navHeight }}
          className="w-full"
        />
      )}
      
      <section 
        ref={navRef}
        className={`bg-blue-900 text-white shadow-lg transition-all duration-200 ease-out ${
          isFixed 
            ? 'fixed top-0 left-0 right-0 z-50' 
            : 'relative'
        }`}
        style={{
          padding: '20px 0', 
          backgroundColor: 'white', 
          borderRadius: '0 0 10px 10px', 
          borderBottom: '4px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #ff7f00,  #ff0000, #4b0082)',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'border-box',
          boxShadow: '0 5px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.id}
              to={item.route}
              className={`px-6 py-4 text-center flex-1 md:flex-none cursor-pointer transition-colors duration-200 no-underline ${
                activeTab === item.id 
                  ? (item.id === 'partner' || item.id === 'register')
                    ? 'text-black rounded-lg'
                    : 'text-white rounded-lg'
                  : 'bg-white text-black hover:bg-yellow-400 rounded-lg'
              }`}
              style={{
                backgroundColor: activeTab === item.id 
                  ? (item.id === 'partner' || item.id === 'register')
                    ? '#FFD900' 
                    : '#02114C'
                  : 'white',
                border: activeTab === item.id 
                  ? 'none'
                  : '1px solid yellow'
              }}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm">{item.subtitle}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ICT4E_navbar;
