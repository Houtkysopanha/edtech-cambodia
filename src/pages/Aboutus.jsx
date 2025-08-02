import React from 'react';
import theme from '@/assets/images/themes.png';
import logoEdtech from '@/assets/images/logo-edtech.png'
import b2b from '@/assets/images/b2b.png';
import edtectaboutus from '@/assets/images/EdTectAboutUs.png';
import img1 from '@/assets/images/whoweare.png';
import img3 from '@/assets/images/edtech_logo.png';
import img4 from '@/assets/images/keynote.png';
import img5 from '@/assets/images/panel-discuss.png';
import img6 from '@/assets/images/showcase.png';
import OrganizeTeam from '@/components/common/OrganizeTeam';
import { Button } from "@/components/ui/button"

import { BookOpen, Users, Lightbulb, Trophy } from "lucide-react" // Using Lucide React for icons
// import Image from "next/image"

// const theme = "/placeholder.svg?height=80&width=80"
// const teamMemberImage = "@/assets/images/ICT4E.png"
const Aboutus = () => {
  return (
   <div className="font-sans  text-gray-800 bg-gray-50 min-h-screen">
     {/* Hero Section */}
   <section
  className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
  style={{ backgroundImage: `url(${theme})` }} // ✅ Fix here
>
   <div className="absolute inset-0 bg-blue-900/30 z-0" />
  {/* Remove the <img /> — it's not needed */}
  <div className="relative z-10 text-center  px-4 py-6 rounded">
    <h1 className="text-4xl khmer-text md:text-6xl font-bold mb-4">អំពីយើង</h1>
    <h2 className="text-2xl md:text-6xl font-semibold mb-4 text-[#FFD900]">About Us</h2>
    <p className="text-lg md:text-xl">
      Learn about our objective and goal with our event.
    </p>
  </div>
</section>

  <main className="container mx-auto px-6 md:px-12 py-8 md:py-12">
      {/* Main Content Card */}
      <div className="bg-white  p-8 md:p-12 rounded-2xl shadow-lg -mt-16 relative z-20">
        {/* Main Title */}
        <div className=" flex items-center justify-center mx-auto mb-8 md:mx-auto">
          <img
            src={logoEdtech }
            alt="Summit Icon"
            className="w-16 h-16 md:w-44 md:h-44  mb-4 md:mb-0 "
          />
          <h2 className="text-3xl khmer-text md:text-4xl font-bold text-center md:text-left text-gray-900 leading-tight">
            សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទី១ <br />
            <span className="text-black">The First Cambodia EdTech Summit</span>
          </h2>
        </div>

        {/* Two-Column Text Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-12">
          {/* English Column */}
          <div className="text-gray-700 text-base text-justify leading-[3.5] " >
            <p className="mb-4 font-medium">
              The Cambodia EdTech Summit is a premier platform that annually convenes a diverse community of
              policymakers, educators, IT experts, EdTech innovators, industry leaders, and other stakeholders to foster
              knowledge sharing, innovation, and collaboration to address challenges and seize opportunities in
              integrating technology into Cambodia's education system.
            </p>
          </div>
          {/* Khmer Column */}
          <div className="text-gray-700 text-justify text-base leading-[3]">
            <p className="mb-4 khmer-text font-medium">
              សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំ (EdTech Summit)
              គឺជាវេទិកាឈានមុខគេមួយដែលរៀបចំឡើងជារៀងរាល់ឆ្នាំដើម្បីប្រមូលផ្តុំសហគមន៍ចម្រុះនៃអ្នកធ្វើគោលនយោបាយអប់រំ អ្នកជំនាញបច្ចេកវិទ្យាព័ត៌មាន
              អ្នកបង្កើតថ្មីក្នុងវិស័យអប់រំ ថ្នាក់ដឹកនាំឧស្សាហកម្ម និងអ្នកពាក់ព័ន្ធផ្សេងទៀត ដើម្បីជំរុញការចែករំលែកចំណេះដឹង ការច្នៃប្រឌិត
              និងការសហការគ្នាដើម្បីដោះស្រាយបញ្ហាប្រឈម និងចាប់យកឱកាសក្នុងការបញ្ចូលបច្ចេកវិទ្យាទៅក្នុងប្រព័ន្ធអប់រំរបស់កម្ពុជា។
              បេសកកម្មរបស់យើងគឺជំរុញកិច្ចសហប្រតិបត្តិការ បំផុសគំនិតច្នៃប្រឌិត និងពន្លឿនការអនុម័តបច្ចេកវិទ្យាក្នុងវិស័យអប់រំនៅកម្ពុជា។
            </p>
           
          </div>
        </div>
        {/* Why is the First Cambodia EdTech Summit initiated?*/}
        <section>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4 py-1">
              Why is the First Cambodia EdTech Summit initiated?
            </h3>
            <p className="mb-4">
              The Cambodia EdTech Summit is a premier platform that annually convenes a diverse community of
              policymakers, educators, IT experts, EdTech innovators, and education leaders. Our mission is to foster
              collaboration, inspire innovation, and accelerate the adoption of technology in Cambodia's education
              sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 mt-20">
            <div className="text-gray-700 text-base leading-relaxed">
              <p className= " khmer-text text-black text-lg font-medium text-justify leading-2">
               សន្និសីទបច្ចេកវិទ្យាអប់រំកម្ពុជា (Cambodia EdTech Summit) 
              គឺជាវេទិកាធំបំផុតមួយដែលនាំយកអ្នកចាប់អារម្មណ៍ខាងបច្ចេកវិទ្យាអប់រំមកជួបជុំគ្នាដើម្បីចែករំលែកបទពិសោធន៍និងជួយជំរុញការអភិវឌ្ឍន៍បច្ចេកវិទ្យាអប់រំនៅកម្ពុជា។
              </p>
            </div>
             <div className="flex justify-center md:justify-start">
              <img
                src={b2b }
                alt="EdTech Cambodia Logo"
                className="w-full max-w-xl rounded-lg "
              />
            </div>
          </div>


        </section>

        {/* Who We Are Section */}
        <section className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-16 border-l-4 border-blue-600 pl-4 py-1">
            Who we are
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
            <div className="flex justify-center md:justify-center">
              <img
                src={edtectaboutus}
                alt="EdTech Cambodia Logo"
                className="w-full max-w-xs rounded-lg"
              />
            </div>
            <div className="text-gray-700 text-lg leading-2 font-medium">
              <p>
                The EdTech Summit is a premier annual event that brings together educators, technologists, policymakers,
                and innovators to explore how technology can transform education for the better.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-center">
              <img
                src={img1 }
                alt="Students learning with laptops"
                className="w-full max-w-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-700 text-sm">
                  To inspire collaboration, showcase cutting-edge solutions, and drive meaningful conversations that
                  shape the future of learning through technology.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Impact</h4>
                <p className="text-gray-700 text-sm">
                  Since 2020, our summit has hosted over <span className="font-bold">5,000 participants</span> across 10
                  countries, showcasing 100+ EdTech startups and sparking collaborative initiatives in digital
                  education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4 py-1">
            What We Do
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            We organize keynote speeches from global thought leaders, hands-on workshops, product showcases, and panel
            discussions. Our summit offers opportunities for professional development, networking, and innovation
            sharing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-sm">
              <div className="">
               <img
            src={img4}
            alt="Summit Icon"
            className="w-16 h-16 md:w-44 md:h-44  mb-4 md:mb-0 "
          />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Keynotes</h4>
              <p className="text-sm text-gray-600">
                Keynote speakers from national and international experts will share a number of topics.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-sm">
              <div className="">
               <img
            src={img5}
            alt="Summit Icon"
            className="w-16 h-16 md:w-44 md:h-44  mb-4 md:mb-0 "
          />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Panel Discussion</h4>
              <p className="text-sm text-gray-600">
                Young students will be invited to join the panel discussion to share their experiences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-sm">
              <div className="">
                <img
            src={img6}
            alt="Summit Icon"
            className="w-16 h-16 md:w-44 md:h-44  mb-4 md:mb-0 "
          />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">EdTech Showcase</h4>
              <p className="text-sm text-gray-600">
                Cambodian EdTech innovators will be invited to showcase their products and services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-sm">
              <div className="">
                 <img
            src={img3}
            alt="Summit Icon"
            className="w- h-16 md:w-52 md:h-44  mb-4 md:mb-0 "
          />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Competition</h4>
              <p className="text-sm text-gray-600">
                The competition for EdTech startups and students will be held to find out the best solution.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Attend Section */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4 py-1">
            Who Should Attend
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            This summit is designed for educators, school leaders, students, EdTech entrepreneurs, researchers,
            investors, and anyone passionate about transforming education.
          </p>
        </section>

         {/* Organizers & Partners Section */}
        <section className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4 py-1">
            Organizers & Partners
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            The EdTech Summit is proudly organized by [Your Organization], in collaboration with leading universities, tech companies, and educational institutions committed to innovation in learning.
          </p>
        </section>

       <OrganizeTeam/>
      </div>
    </main>
    </div>
  );
};

export default Aboutus;
