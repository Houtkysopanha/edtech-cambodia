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
      className="bg-[url('./assets/images/Home_theme.png')] bg-cover bg-center bg-no-repeat bg-fixed text-white py-20 min-h-[50rem] flex flex-col items-center justify-center"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl font-semibold">
          The second EdTech Summit{" "}
          <span className="text-[#FFD900]">2026</span>
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold my-4">
          ICT for Education Network Meeting
        </h1>
        <p className="text-lg mb-6 mx-auto max-w-prose">
          1st quarterly meeting of ICT for Education group in Cambodia was
          organized with the collaboration between the Ministry of Education,
          Youth and Sport (MoEYS) and the Open Institute (OI), supported by the
          SPIDER program in Sweden.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-10">
          <div className="flex items-center space-x-2">
            <MdOutlineDateRange className="w-8 h-8" />
            <p>February 17-18th, 2025</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn className="w-8 h-8" />
            <p>Phnom Penh, Cambodia</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-14">
          <button className="bg-[#FFD900] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e6c300] transition-colors">
            Watch Latest Event
          </button>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Join the Community
          </button>
          <button className="bg-transparent border-2 border-white text-[#FFD900] px-10 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
            <Link to="/register">
            Register</Link>
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black bg-opacity-40 rounded-lg px-8 py-6 flex space-x-8 text-center max-w-md w-full justify-center text-yellow-400 font-mono select-none">
          <div>
            <div className="text-4xl font-bold">{countdown.days}</div>
            <div className="text-sm uppercase">Days</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{countdown.hours}</div>
            <div className="text-sm uppercase">Hours</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{countdown.minutes}</div>
            <div className="text-sm uppercase">Minutes</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{countdown.seconds}</div>
            <div className="text-sm uppercase">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
