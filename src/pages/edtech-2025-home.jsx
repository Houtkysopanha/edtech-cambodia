import EdTech2025HeroSection from "@/components/section/EdTech2025_hero";
import { FaTelegramPlane, FaFacebookF, FaTiktok } from 'react-icons/fa';
import homeEdtech2025 from '@/assets/images/home_edtech2025.png';
import keynoteImg from '@/assets/images/edtech-2025/keynote.png';
import panelDiscussionImg from '@/assets/images/edtech-2025/panel disscusion.png';
import showcaseImg from '@/assets/images/edtech-2025/showcase.png';
import competitionImg from '@/assets/images/edtech-2025/competition.png';
import hostedByImg from '@/assets/images/MOEYS.png';

// Strategic Partners Logos
import ptcLogo from '@/assets/images/edtech-2025/P.T.C-logo.png';
import koicaLogo from '@/assets/images/edtech-2025/Koica-logo.png';
import cellcardLogo from '@/assets/images/edtech-2025/cellcard-logo.png';
import unicefLogo from '@/assets/images/edtech-2025/unicef-logo.png';
import cdriLogo from '@/assets/images/edtech-2025/CDRI-logo.png';
import unescoLogo from '@/assets/images/edtech-2025/unesco-logo.png';
import wbLogo from '@/assets/images/edtech-2025/WB-logo.png';
import britishEmbassyLogo from '@/assets/images/edtech-2025/British-Embassy-logo.png';

// Sponsors/Knowledge Partners Logos
import aceLogo from '@/assets/images/edtech-2025/ACE-logo.png';
import dichiLogo from '@/assets/images/edtech-2025/DICHI-logo.png';
import niccLogo from '@/assets/images/edtech-2025/NICC-logo.png';
import canadiaLogo from '@/assets/images/edtech-2025/CANADIA-logo.png';
import hpLogo from '@/assets/images/edtech-2025/HP-1-logo.png';
import koompiLogo from '@/assets/images/edtech-2025/Koompi-logo.png';
import ebookLogo from '@/assets/images/edtech-2025/EBOOK-logo.png';
import aideActionLogo from '@/assets/images/edtech-2025/AIDE-ET-ACTION-logo.png';
import ebcLogo from '@/assets/images/edtech-2025/EBC-logo.png';
import wingLogo from '@/assets/images/edtech-2025/Wing-logo.png';
import prosethLogo from '@/assets/images/edtech-2025/Proseth-logo.png';
import uwsLogo from '@/assets/images/edtech-2025/UWS-logo.png';
import iBloomingLogo from '@/assets/images/edtech-2025/iBlooming-logo.png';
import stepLogo from '@/assets/images/edtech-2025/STEP-logo.png';
import logo13 from '@/assets/images/edtech-2025/13-logo.png';
import logo14 from '@/assets/images/edtech-2025/14-logo.png';
import cdpfLogo from '@/assets/images/edtech-2025/CDPF-logo.png';

// Event Partners Logos
import salaLogo from '@/assets/images/edtech-2025/SALA-logo.png';
import camexLogo from '@/assets/images/edtech-2025/CAMEX-logo.png';
import powerLiveLogo from '@/assets/images/edtech-2025/POWER-LIVE-logo.png';
const Edtech2025Home = () => {
  // Strategic Partners data
  const strategicPartners = [
    { src: ptcLogo, alt: "PTC" },
    { src: koicaLogo, alt: "KOICA" },
    { src: cellcardLogo, alt: "Cellcard" },
    { src: unicefLogo, alt: "UNICEF" },
    { src: cdriLogo, alt: "CDRI" },
    { src: unescoLogo, alt: "UNESCO" },
    { src: wbLogo, alt: "The World Bank" },
    { src: britishEmbassyLogo, alt: "UK International Development" }
  ];

  // Sponsors/Knowledge Partners data - arranged in rows as shown in the design
  const sponsorsKnowledgePartners = [
    // Row 1
    { src: aceLogo, alt: "ACE" },
    { src: dichiLogo, alt: "DICHI Academy" },
    { src: niccLogo, alt: "NICC" },
    { src: canadiaLogo, alt: "Canadia Bank" },
    { src: hpLogo, alt: "HP" },
    
    // Row 2
    { src: koompiLogo, alt: "KOOMPI" },
    { src: ebookLogo, alt: "eBook" },
    { src: aideActionLogo, alt: "Aide et Action" },
    { src: ebcLogo, alt: "EBC" },
    { src: wingLogo, alt: "Wing Bank" },
    // Row 3
    { src: logo13, alt: "Partner 13" },
    { src: prosethLogo, alt: "Proseth Institute" },
    { src: uwsLogo, alt: "UWS" },
    { src: iBloomingLogo, alt: "iBlooming" },
    { src: stepLogo, alt: "STEP" },
    
    // Row 4
    { src: logo14, alt: "Partner 14" }
  ];

  // Event Partners data
  const eventPartners = [
    { src: salaLogo, alt: "Sala" },
    { src: camexLogo, alt: "CAMEX Community" },
    { src: stepLogo, alt: "STEP IT Academy" },
    { src: powerLiveLogo, alt: "Power Live" }
  ];

  return (
    <>
      <EdTech2025HeroSection />
      
      {/* EdTech 2025 Promotional Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
              ចូលរួមដោយសេរី ក្នុងព្រឹត្តិការណ៍នវានុវត្តន៍និងការអប់រំ
            </h2>
            <p className="text-lg md:text-xl text-blue-800 max-w-5xl mx-auto">
              Join us in Cambodia, where innovation meets education. Don’t miss the opportunity to be part of the transformation shaping Cambodia’s education system!
            </p>
          </div>

          {/* Content Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch mb-12">
              {/* Left Content - Text (2 columns) */}
              <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
                {/* Khmer Text */}
                <p className="text-lg text-gray-800 leading-relaxed">
                 ក្រសួងអប់រំ យុវជន និងកីឡាអញ្ជើញភាគីពាក់ព័ន្ធក្នុងវិស័យបច្ចេកវិទ្យា គ្រឹះស្ថានសិក្សា និងដៃគូអភិវឌ្ឍន៍ចូលរួមសហការ និងតាំងបង្ហាញផលិផល និងស្នាដៃបច្ចេកវិទ្យាក្នុងសន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទី១។
                </p>

                {/* English Text */}
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold">The Ministry of Education, Youth, and Sport</span> invites <span className="font-semibold">stakeholders from all sectors</span>, including <span className="font-semibold">tech companies, educational institutions,</span> and <span className="font-semibold">development partners,</span> to collaborate and showcase EdTech solutions at <span className="font-semibold">The First Cambodia EdTech Summit.</span> <span className="text-red-500 font-semibold">Contact Us!</span>
                </p>
              </div>

              {/* Right Content - Image (3 columns) */}
              <div className="lg:col-span-3 flex justify-center items-center">
                <img 
                  src={homeEdtech2025} 
                  alt="EdTech Cambodia Summit 2025 - Pathways to Cambodia's Digital Education" 
                  className="w-full h-auto max-w-md lg:max-w-lg shadow-lg rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Social Media Follow Section - Separate */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
              តាមដានព័ត៌មានថ្មីៗអំពីកម្មវិធី!
            </h3>
            <p className="text-lg md:text-xl text-blue-800 mb-6">
              Stay updated by following us on our social media channels!
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
              <a 
                href="https://t.me/edtechcambodia" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-red-600 hover:bg-blue-600 text-white px-6 py-4 rounded font-bold text-base transition-all duration-300 flex items-center justify-center w-full sm:w-[260px] h-[56px] group overflow-hidden"
              >
                {/* English Text (slides out to left) */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:-translate-x-full transition-transform duration-200 ease-in-out">
                  <FaTelegramPlane className="mr-2" />
                  <span>TELEGRAM CHANNEL</span>
                </div>
                {/* Khmer Text (slides in from right) */}
                <div className="absolute inset-0 flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out">
                  <FaTelegramPlane className="mr-2" />
                  <span>តេឡេក្រាមផ្លូវការ</span>
                </div>
              </a>
              <a 
                href="https://www.facebook.com/edtechcambodia.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-red-600 hover:bg-blue-600 text-white px-6 py-4 rounded font-bold text-base transition-all duration-300 flex items-center justify-center w-full sm:w-[260px] h-[56px] group overflow-hidden"
              >
                {/* English Text (slides out to top) */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-full transition-transform duration-200 ease-in-out">
                  <FaFacebookF className="mr-2" />
                  <span>FACEBOOK PAGE</span>
                </div>
                {/* Khmer Text (slides in from bottom) */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in-out">
                  <FaFacebookF className="mr-2" />
                  <span>គេហទំព័រហ្វេសប៊ុក</span>
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@edtechcambodia" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-red-600 hover:bg-blue-600 text-white px-6 py-4 rounded font-bold text-base transition-all duration-300 flex items-center justify-center w-full sm:w-[260px] h-[56px] group overflow-hidden"
              >
                {/* English Text (slides out to right) */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:translate-x-full transition-transform duration-200 ease-in-out">
                  <FaTiktok className="mr-2" />
                  <span>TIKTOK</span>
                </div>
                {/* Khmer Text (slides in from left) */}
                <div className="absolute inset-0 flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out">
                  <FaTiktok className="mr-2" />
                  <span>តិចតុកផ្លូវការ</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              FEATURE PROGRAMS
            </h2>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Keynote */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={keynoteImg} 
                  alt="Keynote" 
                  className="w-48 h-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">KEYNOTE</h3>
              <p className="text-gray-600 leading-relaxed">
                Key insights and updates from national and international experts on the current and future vision of EdTech.
              </p>
            </div>

            {/* Panel Discussion */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={panelDiscussionImg} 
                  alt="Panel Discussion" 
                  className="w-48 h-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">PANEL DISCUSSION</h3>
              <p className="text-gray-600 leading-relaxed">
                Navigating the EdTech ecosystem for equitable, sustainable and safe education, innovation, and skills development in Cambodia.
              </p>
            </div>

            {/* EdTech Showcase */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={showcaseImg} 
                  alt="EdTech Showcase" 
                  className="w-48 h-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">EDTECH SHOWCASE</h3>
              <p className="text-gray-600 leading-relaxed">
                Exhibition of EdTech initiatives from both public and private sectors and opportunity for collaborations.
              </p>
            </div>

            {/* Competition */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={competitionImg} 
                  alt="Competition" 
                  className="w-48 h-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">COMPETITION</h3>
              <p className="text-gray-600 leading-relaxed">
                Most innovative EdTech Teacher and Public Digital, Media and Information Literacy Challenge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            HOSTED BY
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <img src={hostedByImg} alt="Hosted By" className="mx-auto w-32 h-auto md:w-48" />
        </div>
      </section>
      {/* Strategic Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              STRATEGIC PARTNERS
            </h2>
          </div>

          {/* Partners Grid - 2 rows x 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
            {strategicPartners.map((partner, index) => (
              <img 
                key={index}
                src={partner.src} 
                alt={partner.alt} 
                className="max-w-full h-32 md:h-40 object-contain rounded-2xl"
                style={{ boxShadow: '3px 3px 3px rgba(0,0,0,0.1), -3px 3px 3px rgba(0,0,0,0.1), 3px -3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors/Knowledge Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SPONSORS/KNOWLEDGE PARTNERS
            </h2>
          </div>

          {/* Sponsors Grid - 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center mb-12">
            {sponsorsKnowledgePartners.map((sponsor, index) => (
              <img 
                key={index}
                src={sponsor.src} 
                alt={sponsor.alt} 
                className="max-w-full h-28 md:h-32 object-contain rounded-xl"
                style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.1), -2px 2px 2px rgba(0,0,0,0.1), 2px -2px 2px rgba(0,0,0,0.1), -2px -2px 2px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>

          {/* Wide bottom logo - separated due to different dimensions */}
          <div className="flex justify-center mb-8">
            <img 
              src={cdpfLogo} 
              alt="CDPF III - Cambodia Development Finance Program" 
              className="max-w-full h-50 md:h-70 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Event Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              EVENT PARTNERS
            </h2>
          </div>

          {/* Event Partners Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center" style={{ marginBottom: '2rem' }}>
            {eventPartners.map((partner, index) => (
              <img 
                key={index}
                src={partner.src} 
                alt={partner.alt} 
                className="max-w-full h-32 md:h-40 object-contain rounded-2xl"
                style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.1), -2px 2px 2px rgba(0,0,0,0.1), 2px -2px 2px rgba(0,0,0,0.1), -2px -2px 2px rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Edtech2025Home;
