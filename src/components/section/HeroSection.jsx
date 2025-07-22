import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function HeroSection() {
  return (
    <section className="bg-[url('./assets/images/themes.png')] bg-cover bg-center text-white py-50 min-h-[67rem] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl font-semibold">
          The second EdTech Summit <span className="text-[#FFD900]">2026</span>
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold my-4">
          ICT for Education Network Meeting
        </h1>
        <p className="text-lg mb-6 mx-auto">
          1st quarterly meeting of ICT for Education group in Cambodia was
          organized with the collaboration between the Ministry of Education,
          Youth and Sport (MoEYS) and the Open Institute (OI), supported by the
          SPIDER program in Sweden.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-10">
          <div className="flex items-center space-x-2">
            <MdOutlineDateRange className="w-8 h-8"/>
            <p>February 17-18th, 2025</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn className="w-8 h-8"/>
            <p>Phnom Penh, Cambodia</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <button className="bg-[#FFD900] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#e6c300] transition-colors">
            Watch Latest Event
          </button>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Join the Community
          </button>
          <button className="bg-transparent border-2 border-white text-[#FFD900] px-10 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}