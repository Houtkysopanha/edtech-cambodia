import React from 'react';

const ICT4E_navbar = ({ activeTab = 'about-ict4e' }) => {
  const navItems = [
    { id: 'about-ict4e', title: 'About', subtitle: 'ICT4E', isActive: true },
    { id: 'about-meeting', title: 'About', subtitle: 'Meeting' },
    { id: 'public-agenda', title: 'Public', subtitle: 'Agenda' },
    { id: 'contact', title: 'Contact', subtitle: 'Us' },
    { id: 'e-registration', title: 'E-Registration', subtitle: 'Form' },
    { id: 'registration-list', title: 'Registration', subtitle: 'List' }
  ];

  return (
    <section 
      className="bg-blue-900 text-white" 
      style={{
        padding: '20px 0', 
        backgroundColor: 'white', 
        borderRadius: '0 0 10px 10px', 
        borderBottomColor: 'black', 
        borderBottomWidth: '2px', 
        borderBottomStyle: 'solid'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className={`px-6 py-4 text-center flex-1 md:flex-none cursor-pointer transition-colors duration-200 ${
                activeTab === item.id 
                  ? 'bg-blue-800' 
                  : 'bg-blue-700 hover:bg-blue-600'
              }`}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ICT4E_navbar;
