import React from 'react';
import ICT4EBackground from '@/assets/images/ICT4E.png';

const ICT4E_HeroSection = ({ 
  title = "ICT for Education Network Meeting", 
  subtitle = "(ICT4E)",
  description = "1st quarterly meeting of ICT for Education Network Committee ICT4E on Education Network Meeting of Low-skill Youth and Labor mobility especially on Digital Solutions in Response of School Closure",
  showButtons = true,
  primaryButtonText = "Register Now",
  secondaryButtonText = "About Us",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${ICT4EBackground})`
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 text-center" style={{marginTop: '100px', marginBottom: '100px'}}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title} <span className="text-yellow-400">{subtitle}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{fontSize: '1rem'}}>
          {description}
        </p>
        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ICT4E_HeroSection;
