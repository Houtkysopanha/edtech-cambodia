// src/layouts/ICT4E_Layout.jsx
import React from 'react';
import ICT4E_footer from '../components/section/ICT4E_footer';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/section/ICT4E_header';
export default function ICT4E_Layout() {
  return (
    <div className="bg-[url('./assets/images/ICT4E.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <ICT4E_footer />
    </div>
  );
}
