import { ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Country:", selectedCountry);
    console.log("Full phone number:", selectedCountry.code + phoneNumber);

    setIsSubmitting(false);
    // You can add success notification here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with themes.png background */}
      <motion.section
        className="relative bg-cover bg-center py-16 sm:py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${theme})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <motion.div
          className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <motion.span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 khmer-text"
              variants={itemVariants}
            >
              ចុះឈ្មោះជាមួយEdTech
            </motion.span>
            <motion.span
              className="text-yellow-400"
              variants={itemVariants}
            >
              EdTech Register
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            We are looking forward to see you in our event.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content - Overlapping the hero section */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{
          backgroundColor: 'white',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginTop: '-4rem',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6 sm:mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Register here
          </motion.h2>

          {/* Registration Card */}
          <motion.div
            className="bg-white rounded-lg shadow-lg border border-blue-200 overflow-hidden mb-6 sm:mb-8 md:mb-16"
            style={{border: '1px solid #2d6deeff'}}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Blue Header */}
            <motion.div
              className="bg-blue-600 text-white p-4 sm:p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">EdTech Register</h3>
              <p className="text-blue-100 text-sm">Thank you for your participation.</p>
            </motion.div>

            {/* Form Content */}
            <motion.div
              className="p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <form onSubmit={handleSubmit}>
                {/* Phone Number Input */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <label className="block text-gray-600 text-sm mb-3 font-medium">
                    Please input your phone number
                  </label>
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      {/* Country Code Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        <motion.button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center justify-between w-full sm:w-auto bg-gray-50 border border-gray-300 sm:border-r-0 rounded-lg sm:rounded-l-lg sm:rounded-r-none px-4 py-3 h-12 hover:bg-gray-100 hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-w-[120px] transition-all duration-200"
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center">
                            <span className="text-sm mr-2">{selectedCountry.flag}</span>
                            <span className="text-gray-600 text-sm mr-2">{selectedCountry.code}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </motion.div>
                        </motion.button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              className="absolute top-full left-0 mt-1 w-full sm:w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto custom-scrollbar"
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                            >
                              {countries.map((country, index) => (
                                <motion.button
                                  key={`${country.code}-${country.country}`}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setIsDropdownOpen(false);
                                  }}
                                  className="w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 focus:outline-none focus:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.1, delay: index * 0.02 }}
                                  whileHover={{ backgroundColor: "#eff6ff" }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <span className="text-base mr-3">{country.flag}</span>
                                  <span className="text-gray-600 text-sm mr-3 font-medium min-w-[50px]">{country.code}</span>
                                  <span className="text-gray-800 text-sm truncate">{country.name}</span>
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone Input */}
                      <motion.input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="000 000 000"
                        className="flex-1 border border-gray-300 rounded-lg sm:rounded-l-none sm:rounded-r-lg px-4 py-3 h-12 hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Submitting...
                    </motion.div>
                  ) : (
                    "Submit"
                  )}
                </motion.button>
              </form>

              {/* Powered by Sala */}
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-600 text-sm">Powered by</span>
                  <motion.div
                    className="bg-blue-600 rounded px-3 py-1"
                    whileHover={{ backgroundColor: "#1d4ed8" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-sm">Sala</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Register
