import React from "react";
import { motion as MOTION } from "framer-motion";
import { Facebook, Send, MapPin, Phone } from "lucide-react";
import Summit2025_navbar from "@/components/section/Summit2025_navbar";
import Summit2025_HeroSection from "@/components/section/Summit2025_HeroSection";
// Import images

const Summit2025_contact = () => {

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection
          title="Contact Us"
          subtitle="2025"
          description="Get in touch with us for inquiries, partnerships, and support for the First Cambodia EdTech Summit"
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="contact" />

        {/* Main Content */}
       <main className="container mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Main Content Card */}

          {/* Get Information Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get Information</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              The First Cambodia EdTech Summit is hosted by the Ministry of Education, Youth, and Sport, with
              coordination from the Department of Policy and the Department of Digital Transformation. For more
              inquiries, please contact us below:
            </p>
            <div className="text-gray-800 mb-8">
              <p className="font-semibold">H.E. Professor Bo Chankoulika</p>
              <p>Under Secretary of State, MoEYS Cambodia</p>
              <p>Email: bo.chankoulika@moeys.gov.kh</p>
            </div>
          </section>

          {/* Get Involved Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get Involved</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">
              We'd love to hear from you! Whether you have questions about the event, want to explore partnership
              opportunities, or need assistance with registration, our team is here to help.
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">
              Reach out to us through the contact form below, email us directly, or give us a call.
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              Let's work together to shape the future of education through technology!
            </p>
            <p className="text-gray-800 mb-8">
              <span className="font-semibold">Event Management</span> | Tel (TG): +855 77 488 587 | Email:
              info@edtechcambodia.org
            </p>
            <a href="#" className="text-red-600 font-bold text-lg hover:underline">
              &gt;&gt; Become our member! &lt;&lt;
            </a>
          </section>

          {/* Contact Cards Section */}
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Facebook className="w-12 h-12 text-blue-600 mb-4" />
                <p className="text-lg font-semibold">Follow our Facebook Page</p>
              </div>
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Send className="w-12 h-12 text-blue-500 mb-4" />
                <p className="text-lg font-semibold">Follow our Telegram Channel</p>
              </div>
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-12 h-12 text-gray-600 mb-4" />
                <p className="text-lg font-semibold">Location</p>
                <p className="text-sm text-gray-600">#80, Preah Norodom Blvd. Phnom Penh</p>
              </div>
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Phone className="w-12 h-12 text-green-600 mb-4" />
                <p className="text-lg font-semibold">+855 77 488 587</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                View larger map
              </a>
            </div>
          </section>
      </main>
      </div>
    </>
  );
};

export default Summit2025_contact;
