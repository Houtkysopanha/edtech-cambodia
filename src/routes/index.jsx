import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/Aboutus'; // Assuming this is the correct path for AboutUs page
import React from 'react';
import ReactDOM from "react-dom/client";
import News from '../pages/News';
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}