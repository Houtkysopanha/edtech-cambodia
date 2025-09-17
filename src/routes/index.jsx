import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout';
import ICT4E_Layout from '../layouts/ICT4E_Layout';
import Home from '../pages/Home';
import AboutUs from '../pages/Aboutus';
import React from 'react';
import News from '../pages/News';
import ContactPage from "../pages/ContactPage";
import Member from "@/pages/Member";
import Register from "@/pages/Register";
import ICT4E_home from "@/pages/ICT4E_home";
import ICT4E_about from "@/pages/ICT4E_about"; 
import ICT4E_agenda from "@/pages/ICT4E_agenda";
import ICT4E_contact from "@/pages/ICT4E_contact";
import ICT4E_partner from "@/pages/ICT4E_partner";
import Summit2025_home from "@/pages/Summit2025_home";
import Summit2025_about from "@/pages/Summit2025_about";
import Summit2025_award from "@/pages/Summit2025_award";
import Summit2025_agenda from "@/pages/Summit2025_agenda";
import Summit2025_contact from "@/pages/Summit2025_contact";
import Summit2025_partners from "@/pages/Summit2025_partners";
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

        {/* ICT4E Routes - Using main EdTech navbar/footer */}
        <Route element={<DefaultLayout />}>
          <Route path="/ict4e" element={<ICT4E_home/>}/>
          <Route path="/ict4e/about-meeting" element={<ICT4E_about/>}/>
          <Route path="/ict4e/agenda" element={<ICT4E_agenda/>}/>
          <Route path="/ict4e/contact" element={<ICT4E_contact/>}/>
          <Route path="/ict4e/registration-list" element={<ICT4E_partner/>}/>
        </Route>

        {/* Summit 2025 Routes - Using main EdTech navbar/footer */}
        <Route element={<DefaultLayout />}>
          <Route path="/summit2025" element={<Summit2025_home/>}/>
          <Route path="/summit2025/about-summit" element={<Summit2025_about/>}/>
          <Route path="/summit2025/agenda" element={<Summit2025_agenda/>}/>
          <Route path="/summit2025/award" element={<Summit2025_award/>} />
          <Route path="/summit2025/contact" element={<Summit2025_contact/>}/>
          <Route path="/summit2025/partners" element={<Summit2025_partners/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}