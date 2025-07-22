// src/layouts/DefaultLayout.jsx
import React from 'react';
import Navbar from '../components/section/Navbar';
import Footer from '../components/section/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
