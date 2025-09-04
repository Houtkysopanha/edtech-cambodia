import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom"
export default function HeroSection() {


  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('./src/assets/images/Home_theme.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        <div className="space-y-6">
          {/* Logo and Title Section */}
          <div className="flex flex-col md:flex-row items-center justify-center  md:space-y-0 md:space-x-4">
            <div className="flex-shrink-0">
              <img 
                src="./src/assets/images/logo-edtech.png" 
                alt="EdTech Cambodia Logo" 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              {/* Khmer Title */}
             <div className="text-1">
             <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight khmer-text">
                សន្និសីទ និងពិព័រណ៌បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទី១
              </h2>
              {/* English Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                The First Cambodia EdTech Summit
              </h1>
             </div>
            </div>
          </div>

           <div className="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-4">
            <div className="flex-shrink-0">
              {/* <img 
                src="./src/assets/images/logo-edtech.png" 
                alt="EdTech Cambodia Logo" 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              /> */}
            </div>
            {/* second content */}
            <div className="text-center md:text-start">
              {/* Khmer Title */}
             <div className="text-1">
             <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl  font-normal leading-tight khmer-text">
               មាគ៌ាកម្ពុជាឆ្ពោះទៅកាន់ការអប់រំឌីជីថល
              </h2>
              {/* English Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal leading-tight">
                 Pathways to Cambodia's Digital Education
              </h1>
             </div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 py-8">
            <div className="flex items-center space-x-4  px-6 py-3">
              <MdOutlineDateRange className="w-8 h-8 text-[#FFD900] flex-shrink-0" />
              <p className="text-lg md:text-xl font-medium">February 17-18th, 2025</p>
            </div>
            <div className="flex items-center space-x-4  px-6 py-3">
              <CiLocationOn className="w-8 h-8 text-[#FFD900] flex-shrink-0" />
              <p className="text-lg md:text-xl font-medium">Institute of Technology of Cambodia</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
            <Link 
              to="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[300px]"
            >
              GET E-CERTIFICATE
            </Link>
            <Link 
              to="/summit2025/partners" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[300px]"
            >
              PARTNER NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
