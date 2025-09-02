import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const FloatingBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user has scrolled down 30% of the page
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrolled / maxHeight) * 100;
      
      if (scrollPercentage > 15) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Use RAF for smooth performance
    let rafId;
    const smoothScroll = () => {
      rafId = requestAnimationFrame(() => {
        toggleVisibility();
      });
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', smoothScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default FloatingBackToTop;
