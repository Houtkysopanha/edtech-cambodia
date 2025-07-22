import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';
import logo from '@/assets/images/edtech_logo.png'; 
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="text-white bg-[url('./assets/images/themes.png')] bg-cover bg-center">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-6 py-6 text-sm ">
        <div className="flex space-x-6">
          <div>
            <span className="text-1xl font-medium">ICT for Education: Network and Meeting</span>
            <br />
            <span className=" text-gray-300">January 21-22 2025</span>
          </div>
          
          <div className='border-l-2 border-white px-3'>
            <span className="text-1xl font-medium">EdTech summit 2026</span>
            <br />
            <span className=" text-gray-300">January 21-22 2025</span>
          </div>
          
          <div className='border-l-2 border-white px-3'>
            <span className="text-1xl font-medium">Digital Mission for 100k teacher</span>
            <br />
            <span className=" text-gray-300">January 21-22 2025</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 pr-10">
          <Link to="/contact" className="border-2 border-[bg-edtech-gradient] px-5 py-2 text-white font-bold rounded-[10px] shadow-md">Contact us</Link>
          <span className='font-bold'>| Follow us:</span>
          <FaFacebookF />
          <FaYoutube />
          <FaTiktok />
        </div>
      </div>

      {/* Middle Logo */}
      <div className="bg-white py-3">
        <div className="flex justify-between items-center px-52">
          <img
            src={logo}
            alt="EdTech Cambodia Logo"
            className="h-20 sm:h-20"
          />
          <div className="flex justify-between text-[#0a1d53] items-center px-6 py-3 gap-10">
            <nav className="flex space-x-8 text-sm sm:text-base font-semibold text-center">
              <Link to="/about" className="khmer-text hover:text-yellow-400">អំពីយើង<br />About Us</Link>
              <Link to="/our-work" className="khmer-text hover:text-yellow-400">ការងាររបស់យើង<br />Our Work</Link>
              <Link to="/news" className="khmer-text hover:text-yellow-400">ព័ត៌មាន<br />Our News</Link>
            </nav>
           <Button>
             <Link
              to="/register"
              className=" bg-edtech-gradient px-5 py-3 text-white font-bold rounded-[10px] shadow-md"
            >
              EDTECH MEMBERS
            </Link>
           </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
