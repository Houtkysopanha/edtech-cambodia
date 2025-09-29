import React from 'react';
import { Link } from 'react-router-dom';

const EdTech2025Contact = () => {
  return (
    <>
      {/* Simple Hero Banner */}
      <section className="relative min-h-[50vh] bg-transparent text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-pink-400 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-14 h-14 border-2 border-green-400 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-10 h-10 border-2 border-purple-400 rounded-lg"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontWeight: '800' }}>
              ទំនាក់ទំនង
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          
          {/* Get Information Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Get Information
            </h2>
            
            <div className="text-center space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                The First Cambodia EdTech Summit is hosted by the Ministry of Education, Youth, and Sport, with 
                coordination from the Department of Policy and the Department of Digital Transformation. For more 
                inquiries, please contact us below:
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                H.E. Professor Bo Chankoulika
              </h3>
              <p className="text-gray-700 mb-2">
                Under Secretary of State, MoEYS Cambodia
              </p>
              <p className="text-gray-700">
                Email: bo.chankoulika@moeys.gov.kh
              </p>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Get Involved
            </h2>
            
            <div className="text-center space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We'd love to hear from you! Whether you have questions about the event, want to explore partnership 
                opportunities, or need assistance with registration, our team is here to help.
              </p>
              
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Reach out to us through the contact form below, email us directly, or give us a call.
              </p>
              
              <p className="text-gray-700 font-semibold leading-relaxed max-w-3xl mx-auto">
                Let's work together to shape the future of education through technology!
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Event Management</span> | Tel (TG): +855 77 488 887 | Email: info@edtechcambodia.org
              </p>
              
              <div className="mt-6">
                <Link 
                  to="/edtech-s2025/partner" 
                  className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold" >
                  &gt;&gt; Become a valued partner! &lt;&lt;
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/edtechcambodia.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100 cursor-pointer"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Follow our Facebook Page
              </h3>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/edtechcambodia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100 cursor-pointer"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Follow our Telegram Channel
              </h3>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default EdTech2025Contact;
