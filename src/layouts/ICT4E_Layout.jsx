// src/layouts/ICT4E_Layout.jsx
import React from 'react';
import ICT4E_footer from '../components/section/ICT4E_footer';
import { Outlet } from 'react-router-dom';
import ICT4E_Header from '@/components/section/ICT4E_header';
export default function ICT4E_Layout() {
  return (
    <div>
      <ICT4E_Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <ICT4E_footer />
    </div>
  );
}
