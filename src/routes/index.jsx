import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout';
import ICT4E_Layout from '../layouts/ICT4E_Layout';
import EdTech2025Layout from '../layouts/EdTech2025_Layout';
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
import Edtech2025Home from "@/pages/edtech-2025-home";
import Edtech2025About from "@/pages/edtech-2025-about";
import Edtech2025Agenda from "@/pages/edtech-2025-agenda";
import EdTech2025Exhibitors from "@/pages/edtech-2025-exhibitors";
import EdTech2025Contact from "@/pages/edtech-2025-contact";  
import EdTech2025Partner from "@/pages/edtech-2025-partner";
import Edtech2025Certificate from "@/pages/edtech-2025-certificate";
import EdTech2025Award from "@/pages/edtech-2025-award";
import EdTech2025Award1 from "@/pages/edtech-2025-award-1";
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

        {/* EdTech S2025 Dedicated Routes - Separate layout */}
        <Route element={<EdTech2025Layout />}>
          <Route path="/edtech-s2025" element={<Edtech2025Home/>}/>
          <Route path="/edtech-s2025/about" element={<Edtech2025About/>}/>
          <Route path="/edtech-s2025/agenda" element={<Edtech2025Agenda/>}/>
          <Route path="/edtech-s2025/sponsors" element={<EdTech2025Exhibitors/>}/>
          <Route path="/edtech-s2025/awards" element={<EdTech2025Award/>}/>
          <Route path="/edtech-s2025/awards1" element={<EdTech2025Award1/>}/>
          <Route path="/edtech-s2025/contact" element={<EdTech2025Contact/>}/>
          <Route path="/edtech-s2025/partner" element={<EdTech2025Partner/>}/>
          <Route path="/edtech-s2025/certificate" element={<Edtech2025Certificate/>}/>
        </Route>

        {/* ICT4E Dedicated Routes - No EdTech navbar/footer */}
        <Route element={<ICT4E_Layout />}>
          <Route path="/ict4e" element={<ICT4E_home/>}/>
          <Route path="/ict4e/about-meeting" element={<ICT4E_about/>}/>
          <Route path="/ict4e/agenda" element={<ICT4E_agenda/>}/>
          <Route path="/ict4e/contact" element={<ICT4E_contact/>}/>
          <Route path="/ict4e/registration-list" element={<ICT4E_partner/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}