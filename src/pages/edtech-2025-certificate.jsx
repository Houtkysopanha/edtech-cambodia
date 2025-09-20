import React, { useState } from 'react';
import powerBySalaLogo from '@/assets/images/power-by-sala-blue-color.452b7d94.svg';

const EdTech2025Certificate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('KH');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Countries list with Cambodia first, no Thailand
  const countries = [
    { code: 'KH', name: 'Cambodia', dialCode: '+855', flag: '🇰🇭' },
    { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
    { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
    { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
    { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
    { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
    { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
    { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
    { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
    { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
    { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
    { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
    { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
    { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
    { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  ];

  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number input
    if (!phoneNumber.trim()) {
      alert('Please enter your phone number before submitting.');
      return;
    }
    
    // Check if phone number has reasonable length (at least 6 digits)
    if (phoneNumber.trim().length < 6) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    const fullPhoneNumber = `${selectedCountryData.dialCode} ${phoneNumber}`;
    console.log('Full phone number submitted:', fullPhoneNumber);
    
    // Here you can add your certificate generation logic
    alert(`Certificate request submitted for: ${fullPhoneNumber}`);
  };

  const selectCountry = (countryCode) => {
    setSelectedCountry(countryCode);
    setIsDropdownOpen(false);
  };

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
              ការចុះឈ្មោះ
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
              Certificate
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          
          {/* Certificate Form Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg">
              
              {/* Blue Header */}
              <div className="bg-blue-600 text-white px-8 py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Your Certificate
                </h1>
                <p className="text-xl text-blue-100">
                  Congratulations
                </p>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Phone Number Input */}
                  <div>
                    <label className="block text-gray-700 text-lg mb-4">
                      Please input your phone number
                    </label>
                    
                    <div className="flex relative">
                      {/* Country Code Selector */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center bg-gray-50 border border-gray-300 rounded-l-lg px-4 py-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {/* Country Flag */}
                          <span className="text-lg mr-2">{selectedCountryData.flag}</span>
                          <span className="text-sm text-gray-600 mr-2">{selectedCountryData.dialCode}</span>
                          
                          {/* Dropdown Arrow */}
                          <svg className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                            {countries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => selectCountry(country.code)}
                                className="w-full flex items-center px-4 py-3 hover:bg-gray-100 text-left"
                              >
                                <span className="text-lg mr-3">{country.flag}</span>
                                <span className="flex-1 text-sm">{country.name}</span>
                                <span className="text-sm text-gray-600">{country.dialCode}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Phone Input */}
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder=" 70 216 127"
                        className="flex-1 border border-gray-300 border-l-0 rounded-r-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
                    >
                      Submit
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>

          {/* Powered by Sala */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <span>Powered By</span>
              <a 
                href="https://www.sala.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src={powerBySalaLogo} 
                  alt="Powered by Sala" 
                  className="h-8 cursor-pointer"
                />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default EdTech2025Certificate;
