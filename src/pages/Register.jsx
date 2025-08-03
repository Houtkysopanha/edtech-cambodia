import { CircleDot, Facebook, Send, Mail, Phone, ChevronDown } from "lucide-react"
import { useState } from "react"
import theme from "@/assets/images/themes.png"

// Country codes data
const countries = [
  { code: '+855', country: 'KH', flag: '🇰🇭', name: 'Cambodia' }, 
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
  { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
  { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
  { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
  /*{ code: '+66', country: 'TH', flag: '��', name: 'Thailand' },*/ // we don't have to collaborate with thiefland
  { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
  { code: '+856', country: 'LA', flag: '🇱🇦', name: 'Laos' },
  { code: '+95', country: 'MM', flag: '🇲🇲', name: 'Myanmar' },
];

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.country === 'KH')); // Default to Cambodia
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Country:", selectedCountry);
    console.log("Full phone number:", selectedCountry.code + phoneNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with themes.png background */}
      <section 
         className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${theme})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-3xl md:text-4xl mb-2 khmer-text">ចុះឈ្មោះជាមួយEdTech</span>
            <span className="text-yellow-400">EdTech Register</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            we are looking forward to see you in our event.
          </p>
        </div>
      </section>

      {/* Main Content - Overlapping the hero section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10" style={{ 
        backgroundColor: 'white', 
        paddingTop: '4rem', 
        paddingBottom: '4rem', 
        marginTop: '-2rem', 
        borderRadius: '20px', 
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '4rem',
      }}>
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8" style={{ marginBottom: '6rem'}}>
            Register here
          </h2>

          {/* Registration Card */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden" style={{border: '1px solid #2d6deeff', marginBottom: '4rem'}}>
            {/* Blue Header */}
            <div className="bg-blue-600 text-white p-6">
              <h3 className="text-xl font-bold mb-2">EdTech Register</h3>
              <p className="text-blue-100 text-sm">Thank for your completed.</p>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                {/* Phone Number Input */}
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm mb-3">
                    Please input your phone number
                  </label>
                  <div className="relative">
                    <div className="flex">
                      {/* Country Code Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg px-4 py-3 h-12 hover:bg-gray-100 hover:border-blue-400 focus:outline-none focus:border-blue-500 min-w-[120px] transition-all duration-200"
                        >
                          <span className="text-sm mr-2">{selectedCountry.flag}</span>
                          <span className="text-gray-600 text-sm mr-2">{selectedCountry.code}</span>
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                            {countries.map((country) => (
                              <button
                                key={`${country.code}-${country.country}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 focus:outline-none focus:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                              >
                                <span className="text-base mr-3">{country.flag}</span>
                                <span className="text-gray-600 text-sm mr-3 font-medium min-w-[50px]">{country.code}</span>
                                <span className="text-gray-800 text-sm truncate">{country.name}</span>
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
                        placeholder="000 000 000"
                        className="flex-1 border border-gray-300 rounded-r-lg px-4 py-3 h-12 hover:border-blue-400 focus:outline-none focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit
                </button>
              </form>

              {/* Powered by Sala */}
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                  <span className="text-gray-600 text-sm">Powered by</span>
                  <div className="bg-blue-600 rounded px-3 py-1">
                    <span className="text-white font-bold text-sm">Sala</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
