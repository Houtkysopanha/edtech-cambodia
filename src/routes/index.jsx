import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout';
import ICT4E_Layout from '../layouts/ICT4E_Layout';
import Home from '../pages/Home';
import AboutUs from '../pages/Aboutus'; // Assuming this is the correct path for AboutUs page
import React from 'react';
import ReactDOM from "react-dom/client";
import News from '../pages/News';
import ContactPage from "../pages/ContactPage";
import Member from "@/pages/Member";
import Register from "@/pages/Register";
import ICT4E_home from "@/pages/ICT4E_home";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* EdTech Main Website Routes */}
        <Route element={<DefaultLayout />}>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/member" element={<Member/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>

        {/* ICT4E Dedicated Routes - No EdTech navbar/footer */}
        <Route element={<ICT4E_Layout />}>
          <Route path="/ict4e" element={<ICT4E_home/>}/>
          <Route path="/ICT4E_home" element={<ICT4E_home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}