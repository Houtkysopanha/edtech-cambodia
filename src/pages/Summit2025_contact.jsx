import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Calendar } from 'lucide-react';
import Summit2025_navbar from '@/components/section/Summit2025_navbar';
import Summit2025_HeroSection from '@/components/section/Summit2025_HeroSection';

const Summit2025_contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["summit2025@edtech-cambodia.org", "info@edtech-cambodia.org"],
      description: "Send us your questions anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+855 23 123 4567", "+855 96 123 4567"],
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Sokha Phnom Penh Hotel & Residence", "Street 94, Sangkat Boeung Prolit, Khan 7 Makara, Phnom Penh"],
      description: "Summit venue address"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 12:00 PM"],
      description: "Cambodian Time (ICT)"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'registration', label: 'Registration Support' },
    { value: 'speakers', label: 'Speaker Inquiries' },
    { value: 'partnerships', label: 'Partnership Opportunities' },
    { value: 'media', label: 'Media & Press' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'technical', label: 'Technical Support' }
  ];

  const departments = [
    {
      title: "Summit Organizing Committee",
      contact: "Dr. Chanrith Nhem",
      role: "Summit Director",
      email: "director@summit2025.org",
      phone: "+855 12 345 678"
    },
    {
      title: "Registration & Logistics",
      contact: "Ms. Sophea Lim",
      role: "Operations Manager",
      email: "registration@summit2025.org",
      phone: "+855 17 234 567"
    },
    {
      title: "Partnerships & Sponsorship",
      contact: "Mr. Vichea Sok",
      role: "Partnership Director",
      email: "partnerships@summit2025.org",
      phone: "+855 92 345 678"
    },
    {
      title: "Technical Support",
      contact: "Mr. Dara Pich",
      role: "Technical Manager",
      email: "tech@summit2025.org",
      phone: "+855 98 234 567"
    }
  ];

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection 
          title="Contact Us"
          subtitle="2025"
          description="Get in touch with our team for registration, partnerships, or any questions about the EdTech Summit 2025"
          showButtons={false}
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar activeTab="contact" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          
          {/* Contact Information Grid */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">We're here to help with all your summit needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 text-sm font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">{info.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form and Department Info */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your organization or company"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Department Contacts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Department Contacts</h2>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-6 border border-gray-100"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                      <div className="space-y-2">
                        <p className="text-emerald-600 font-medium">{dept.contact}</p>
                        <p className="text-gray-600 text-sm">{dept.role}</p>
                        <div className="flex items-center space-x-3 text-sm text-gray-700">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${dept.email}`} className="hover:text-blue-600 transition-colors">
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-700">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${dept.phone}`} className="hover:text-blue-600 transition-colors">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Contacts & FAQs */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Emergency Contacts */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Emergency Contacts
                </h3>
                <div className="space-y-3 text-red-700">
                  <p><strong>During Summit (March 15-17):</strong></p>
                  <p>Summit Hotline: <strong>+855 70 123 456</strong></p>
                  <p>WhatsApp Support: <strong>+855 96 789 012</strong></p>
                  <p>On-site Help Desk: <strong>Main Reception</strong></p>
                  <p className="text-sm text-red-600">Available 24/7 during the summit</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a href="/register" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                    → Register for the Summit
                  </a>
                  <a href="/summit2025/agenda" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                    → View Full Agenda
                  </a>
                  <a href="/summit2025/speakers" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                    → Meet Our Speakers
                  </a>
                  <a href="/summit2025/partners" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                    → Partnership Opportunities
                  </a>
                  <a href="#" className="block text-blue-700 hover:text-blue-900 font-medium transition-colors">
                    → Download Media Kit
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Summit Venue Location</h2>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sokha Phnom Penh Hotel & Residence</h3>
                <p className="text-gray-700 mb-4">
                  Street 94, Sangkat Boeung Prolit, Khan 7 Makara, Phnom Penh, Cambodia
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
                    View on Google Maps
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                    Download Directions
                  </button>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Summit2025_contact;
