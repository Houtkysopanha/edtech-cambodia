// src/layouts/EdTech2025_Layout.jsx
import React, { useState } from 'react';
import EdTech2025Header from '../components/section/EdTech2025_header';
import EdTech2025Footer from '../components/section/EdTech2025_footer';
import FloatingBackToTop from '../components/common/FloatingBackToTop';
import { Outlet } from 'react-router-dom';

export default function EdTech2025Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[url('./assets/images/Home_theme.png')] bg-cover bg-center bg-fixed">
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <EdTech2025Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <EdTech2025Footer />
      </div>
      
      {/* Floating Back to Top Button - Hidden when mobile menu is open */}
      {!isMobileMenuOpen && <FloatingBackToTop />}
    </div>
  );
}
