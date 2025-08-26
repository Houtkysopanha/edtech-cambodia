import { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom"
export default function HeroSection() {
  const [countdown, setCountdown] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    // Target date: Feb 17, 2025, midnight
    const eventDate = new Date("2025-02-17T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            The second EdTech Summit{" "}
            <span className="text-[#FFD900]">2026</span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            ICT for Education Network Meeting
          </h1>
          <p className="text-lg md:text-xl mb-8 mx-auto max-w-4xl leading-relaxed">
            1st quarterly meeting of ICT for Education group in Cambodia was
            organized with the collaboration between the Ministry of Education,
            Youth and Sport (MoEYS) and the Open Institute (OI), supported by the
            SPIDER program in Sweden.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
            <div className="flex items-center space-x-3">
              <MdOutlineDateRange className="w-8 h-8 text-[#FFD900]" />
              <p className="text-lg font-medium">February 17-18th, 2025</p>
            </div>
            <div className="flex items-center space-x-3">
              <CiLocationOn className="w-8 h-8 text-[#FFD900]" />
              <p className="text-lg font-medium">Phnom Penh, Cambodia</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
            <button className="bg-[#FFD900] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#e6c300] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Watch Latest Event
            </button>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join the Community
            </button>
            <button className="bg-transparent border-2 border-white text-[#FFD900] px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Link to="/register" className="block w-full h-full">
                Register
              </Link>
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl px-8 py-8 mx-auto max-w-2xl">
            <div className="grid grid-cols-4 gap-6 text-center text-yellow-400 font-mono">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{countdown.days}</div>
                <div className="text-sm md:text-base uppercase tracking-wider">Days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{countdown.hours}</div>
                <div className="text-sm md:text-base uppercase tracking-wider">Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{countdown.minutes}</div>
                <div className="text-sm md:text-base uppercase tracking-wider">Minutes</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{countdown.seconds}</div>
                <div className="text-sm md:text-base uppercase tracking-wider">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
