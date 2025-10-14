// src/layouts/DefaultLayout.jsx
import React from 'react';
import Navbar from '../components/section/Navbar';
import Footer from '../components/section/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className="bg-[url('./assets/images/themes.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
