import React from "react";
import { motion as MOTION } from "framer-motion";
import Summit2025_navbar from "@/components/section/Summit2025_navbar";
import Summit2025_HeroSection from "@/components/section/Summit2025_HeroSection";
import award1 from '@/assets/images/award1.png'
import award2 from '@/assets/images/award2.png'
import img1 from '@/assets/images/MOEYS.png'
const Summit2025_award = () => {

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection
          title="Summit Agenda"
          subtitle="2025"
          description="Explore our comprehensive program featuring keynotes, workshops, panels, and networking opportunities"
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar />

        {/* Main Content */}
        <main className="container max-w-7xl mx-auto min-h-screen px-4 py-12">
       <section className="grid md:grid-cols-2 gap-8 items-center mb-10">
           {/* Left: Khmer Heading and Crest */}
          <div className="flex flex-col items-center md:items-center mb-8 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              រៀបចំដោយ៖
            </h1>
              <img src={img1} alt="" />
          </div>
          {/* Right: Sponsors Heading and Logos */}
          <div className="flex flex-col items-center md:items-center mb-8 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              ឧបត្ថម្ភដោយ៖
            </h1>
               <div className="flex flex-1">
 <img className=" w-48 h-28" src={img1} alt="" />
   <img className=" w-48 h-28" src={img1} alt="" />
    <img className=" w-48 h-28" src={img1} alt="" />
     <img className=" w-48 h-28" src={img1} alt="" />
      <img className=" w-48 h-28" src={img1} alt="" />
               </div>
          </div>
        </section>

         {/* What is Cambodia's Most Innovative EdTech Teacher 2025? */}
        <section className="grid md:grid-cols-2 gap-8 items-center my-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-medium leading-tight">
              What is Cambodia's Most Innovative EdTech Teacher 2025?
            </h2>
            <div className="flex justify-center items-center"> <button className="bg-red-600 p-4 text-white w-36">ព័ត៌មានលម្អិត</button></div>
          </div>
          <div className="text-gray-700 space-y-4 text-justify">
            <p>
              Teachers are the everyday heroes of our time, dedicating their time, effort, and passion to shaping the future of our children, communities, and nation. To honor their invaluable contributions, we proudly introduce the <strong className="font-semibold text-blue-900">"Cambodia's Most Innovative EdTech Teacher 2025"</strong> competition. This initiative shines a spotlight on the most creative and impactful teaching methodologies, celebrating educators who lead the way in innovation and inspiring others to embrace transformative practices in education.
            </p>
            <p className="font-bold">
              Empowering Educators, Inspiring Innovation, Shaping the Future!
            </p>
          </div>
        </section>

        {/* --- */}
        
        {/* DIGITAL, MEDIA AND INFORMATION LITERACY CHALLENGE */}
        <section className="grid md:grid-cols-2 gap-8 items-center my-10">
          {/* Image on left, text on right */}
          <div className="relative">
            <img 
              src= {award1}
              alt="Digital, Media, and Information Literacy Challenge" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              DIGITAL, MEDIA AND INFORMATION LITERACY CHALLENGE
            </h3>
            <p className="text-justify">
              The Digital, Media, and Information Literacy (DMIL) Challenge is an interactive competition aimed at enhancing participants' skills in navigating, evaluating, and creating digital content responsibly. Open to students, educators, and enthusiasts, the challenge promotes critical thinking, ethical media use, and digital literacy. Participants will compete in knowledge rounds, practical tasks, and project showcases and enjoy many of our prizes and gifts.
            </p>
            <p className="text-sm font-semibold text-gray-500">
              Sponsored by: <span className="font-bold text-gray-800">CANADIA BANK</span>
            </p>
          </div>
        </section>
        
        {/* --- */}

        {/* LUCKY DRAW */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text on left, image on right */}
          <div className="space-y-4 text-gray-700">
            <h3 className="text-3xl text-center font-bold">
              LUCKY DRAW
            </h3>
            <p className="text-center">
              The <strong className="font-semibold text-gray-800">Lucky Draw</strong> at the <strong className="font-semibold text-gray-800">1st Cambodia EdTech Summit 2025</strong> offers attendees the chance to win exciting prizes, including EdTech gadgets, learning tools, and exclusive gifts. Simply register, attend the event, and be present during the draw for your chance to win!
            </p>
          </div>
          <div className="relative">
            <img 
              src= {award2}
              alt="Lucky Draw - Many gifts are waiting" 
              className="w-full h-auto object-cover "
            />
          </div>
        </section>
        </main>
      </div>
    </>
  );
};

export default Summit2025_award;
