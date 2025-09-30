
import { Link } from 'react-router-dom';
import firstAward from '@/assets/images/edtech-2025/1st-Award.png';
import secondAward from '@/assets/images/edtech-2025/2nd-Award.png';
import thirdAward from '@/assets/images/edtech-2025/3rd-Award.png';
import moeysLogo from '@/assets/images/MOEYS.png';
import koicaLogo from '@/assets/images/edtech-2025/Koica-logo.png';
import unescoLogo from '@/assets/images/edtech-2025/unesco-logo.png';
import digitalMediaChallenge from '@/assets/images/edtech-2025/DIGITAL-MEDIA-AND-INFORMATION-LITERACY-CHALLENGE.jpg';
import luckyDraw from '@/assets/images/edtech-2025/LUCKY-DRAW.jpg';
import { MdAlignHorizontalLeft } from 'react-icons/md';

import ACElogo from '@/assets/images/edtech-2025/ACE-logo.png';
import Aidlogo from '@/assets/images/edtech-2025/AIDE-ET-ACTION-logo.png';
import celllogo from '@/assets/images/edtech-2025/cellcard-logo.png';

const EdTech2025Award = () => {
  return (
    <div>
      <section className="relative min-h-screen bg-transparent text-white overflow-hidden pb-20">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontWeight: '800' }}>
              កម្មវិធីប្រកួតប្រជែង
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-relaxed">
              គ្រូបង្រៀនដែលមានគំនិតច្នៃប្រឌិតខ្ពស់
              <br className="hidden md:block" />
              <span className="inline-block mt-4">ផ្នែកបច្ចេកវិទ្យាអប់រំឆ្នាំ២០២៥</span>
            </h1>
          </div>
        </div>
        <Link 
          to="#" 
          className="relative bg-red-600 hover:bg-blue-600 text-white px-8 py-7 rounded-lg font-bold text-base transition-all duration-150 flex items-center justify-center w-[180px] h-[80px] group overflow-hidden transform hover:scale-105 hover:shadow-lg" 
          style={{ position: 'absolute', bottom: '480px', left: '50%', transform: 'translateX(-50%)' }}
        >
          {/* Khmer Text (slides out to left) */}
          <div className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-full transition-transform duration-150 ease-in-out">
            <span>ដាក់ពាក្យប្រកួត</span>
          </div>
          {/* English Text (slides in from right) */}
          <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out">
            <span>Register</span>
          </div>
        </Link>
        
        {/* Award Images Section */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-8 md:space-x-12">
          <div className="w-80 h-30 md:w-96 md:h-50 rounded-2xl overflow-hidden  hover:scale-105 transition-transform duration-300 cursor-pointer" style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5)) drop-shadow(0 -5px 10px rgba(0,0,0,0.3)) drop-shadow(-5px 0 10px rgba(0,0,0,0.3)) drop-shadow(5px 0 10px rgba(0,0,0,0.3))'
            }}>
            <img 
              src={firstAward} 
              alt="1st Place Award" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-80 h-30 md:w-96 md:h-50 rounded-2xl overflow-hidden bg-white/5 hover:scale-105 transition-transform duration-300 cursor-pointer" style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5)) drop-shadow(0 -5px 10px rgba(0,0,0,0.3)) drop-shadow(-5px 0 10px rgba(0,0,0,0.3)) drop-shadow(5px 0 10px rgba(0,0,0,0.3))'
            }}>
            <img 
              src={secondAward} 
              alt="2nd Place Award" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-80 h-30 md:w-96 md:h-50 rounded-2xl overflow-hidden bg-white/5 hover:scale-105 transition-transform duration-300 cursor-pointer" style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5)) drop-shadow(0 -5px 10px rgba(0,0,0,0.3)) drop-shadow(-5px 0 10px rgba(0,0,0,0.3)) drop-shadow(5px 0 10px rgba(0,0,0,0.3))'
            }}>
            <img 
              src={thirdAward} 
              alt="3rd Place Award" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          
          {/* Two-Column Layout matching the reference photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            
            {/* LEFT SIDE */}
            <div className="flex flex-col">
              {/* MOEYS Logo Section */}
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">រៀបចំដោយ៖</h3>
                  <img 
                    src={moeysLogo} 
                    alt="MOEYS Logo" 
                    className="w-42 h-42 object-contain"
                  />
              </div>
              
              {/* Main Title */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ marginLeft: '50px' }}>
                  What is Cambodia's Most Innovative EdTech Teacher <br />2025?
                </h2>
              </div>
              
              {/* Red Button */}
              <div>
                <Link 
                  to="#" 
                  style={{ marginLeft: '50px' }}
                  className="relative bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-lg font-bold transition-all duration-150 text-lg inline-block group overflow-hidden min-w-[100px] h-[60px] flex items-center justify-center"
                >
                  {/* Khmer Text (slides up and out on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-full transition-transform duration-150 ease-in-out">
                    <span className="text-lg font-bold">ព័ត៌មានលំអិត</span>
                  </div>
                  {/* English Text (slides up from bottom on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out">
                    <span className="text-lg font-bold">DETAIL INFO</span>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* RIGHT SIDE */}
            <div className="flex flex-col">
              {/* Partner Logos Section */}
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">ឧបត្ថម្ភដោយ៖</h3>
                <div className="grid grid-cols-5 gap-3">
                  <img 
                    src={koicaLogo} 
                    alt="KOICA" 
                    className="w-30 h-30 object-contain rounded-xl shadow-sm"
                  />
                  <img 
                    src={unescoLogo} 
                    alt="UNESCO" 
                    className="w-30 h-30 object-contain rounded-xl shadow-sm"
                  />
                  <img 
                    src={ACElogo} 
                    alt="ACE" 
                    className="w-30 h-30 object-contain rounded-xl shadow-sm"
                  />
                  <img 
                    src={Aidlogo} 
                    alt="AIDE ET ACTION" 
                    className="w-30 h-30 object-contain rounded-xl shadow-sm"
                  />
                  <img 
                    src={celllogo} 
                    alt="Cellcard" 
                    className="w-30 h-30 object-contain rounded-xl shadow-sm"
                  />
                </div>
              </div>
              
              {/* Description Text */}
              <div className="text-sm text-gray-700 leading-relaxed" style={{ marginTop: '50px' }}>
                <p className="mb-4">
                  Teachers are the everyday heroes of our time, dedicating their time, effort, and passion to shaping the future of our children, communities, and nation. To honor their invaluable contributions, we proudly introduce the <span className="font-semibold">"Cambodia's Most Innovative EdTech Teacher 2025"</span> competition. This initiative shines a spotlight on the most creative and impactful teaching methodologies, celebrating educators who lead the way in innovation and inspiring others to embrace transformative practices in education.
                </p>
                <p className="font-bold text-gray-900">
                  Empowering Educators, Inspiring Innovation, Shaping the Future!
                </p>
              </div>
            </div>
          </div>
          
          {/* Middle - Digital Media Challenge */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={digitalMediaChallenge} 
                  alt="Digital Media and Information Literacy Challenge" 
                  className="rounded-2xl"
                  style={{ width: '530px', height: '300px', objectFit: 'cover',marginLeft: '50px',marginTop: '40px' }}
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  DIGITAL MEDIA AND INFORMATION LITERACY CHALLENGE
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  The Digital, Media, and Information Literacy (DMIL) Challenge is an interactive competition aimed at enhancing participants' skills in navigating, evaluating, and creating digital content responsibly. Open to students, educators, and enthusiasts, the challenge promotes critical thinking, ethical media use, and digital literacy. Participants will compete in knowledge rounds, practical tasks, and project showcases and enjoy many of our prizes and gifts.
                </p>
                <p className="text-blue-600 font-semibold text-sm">
                  Sponsored by: CANADIA BANK
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom - Lucky Draw */}
          <div className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">LUCKY DRAW</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The <strong>Lucky Draw</strong> at the <strong>1st Cambodia EdTech Summit 2025</strong> offers attendees the chance to win exciting prizes, including EdTech gadgets, learning tools, and exclusive gifts. Simply register, attend the event, and be present during the draw for your chance to win!
                </p>
              </div>
              <div>
                <img 
                  src={luckyDraw} 
                  alt="Lucky Draw" 
                  className="w-full h-auto rounded-2xl"
                  style={{ width: '530px', height: '300px', objectFit: 'cover',marginLeft: '50px',marginTop: '40px' }}
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default EdTech2025Award;