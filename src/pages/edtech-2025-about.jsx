
import React, { useState } from 'react';
import edtech_logo from '/src/assets/images/logo-edtech.png';
import panelDiscussionImg from '@/assets/images/edtech-2025/panel disscusion.png';
import showcaseImg from '@/assets/images/edtech-2025/showcase.png';
import competitionImg from '@/assets/images/edtech-2025/competition.png';
import keynoteImg from '@/assets/images/edtech-2025/keynote.png';
const Edtech2025About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 modal-backdrop" 
          onClick={closeModal}
          style={{ zIndex: 999999 }}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Simple Hero Section for About Us */}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontWeight: '800' }}>
              អំពីយើង
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          {/* Header with Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-8">
              <img 
                src={edtech_logo} 
                alt="EdTech Summit Logo" 
                className="h-20 md:h-24"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'KantumruyPro, sans-serif' }}>
              សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទី១
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
              The First Cambodia EdTech Summit
            </h2>
          </div>

          {/* Summit Introduction */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why is The First Cambodia EdTech Summit initiated?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              {/* Left Column - English */}
              <div className="space-y-6 text-justify">
                <p>
                  The <strong style={{ fontWeight: '900', color: '#000000' }}>Cambodia EdTech Summit</strong> is a premier platform that annually convenes a diverse community of policymakers, educators, <strong style={{ fontWeight: '900', color: '#000000' }}>IT experts</strong>, <strong style={{ fontWeight: '900', color: '#000000' }}>EdTech innovators</strong>, industry leaders, and other stakeholders to foster knowledge sharing, innovation, and collaboration to address challenges and seize opportunities in integrating technology into Cambodia's education system.
                </p>
                
                <p>
                  <strong style={{ fontWeight: '900', color: '#000000' }}>The First Cambodia EdTech Summit</strong>, themed <strong style={{ fontWeight: '900', color: '#000000' }}>"Pathways to Cambodia's Digital Education"</strong>, will convene at the <strong style={{ fontWeight: '900', color: '#000000' }}>Institute of Technology of Cambodia</strong> on <strong style={{ fontWeight: '900', color: '#000000' }}>February 17-18, 2025</strong>. The theme of this year's summit revolves around discussions on navigating the <strong style={{ fontWeight: '900', color: '#000000' }}>EdTech ecosystem</strong> for equitable, sustainable, and safe education, innovation, and skills development in Cambodia. Through insightful discussions, exhibitions, and networking opportunities, the summit aims to drive continuous innovation, promote collaboration, and accelerate the adoption of <strong style={{ fontWeight: '900', color: '#000000' }}>technology-enhanced learning solutions</strong> to shape the future of education in Cambodia.
                </p>

                <p>
                  The <strong style={{ fontWeight: '900', color: '#000000' }}>Cambodia EdTech Summit</strong> is the country's first and largest platform for convening discussions and collaboration to transform education through technology. Led by the <strong style={{ fontWeight: '900', color: '#000000' }}>Ministry of Education, Youth, and Sport</strong> under the coordination of the <strong style={{ fontWeight: '900', color: '#000000' }}>Department of Policy (DoPo)</strong> and organizing committees, this landmark event aims to bring together key stakeholders to pave the future of education in Cambodia.
                </p>

                <p>
                  As the world becomes increasingly digital, the education sector must adapt to meet the needs of the <strong style={{ fontWeight: '900', color: '#000000' }}>21st century</strong>. The <strong style={{ fontWeight: '900', color: '#000000' }}>Cambodia EdTech Summit</strong> serves as a platform to address the challenges and opportunities of integrating technology into Cambodia's education, administration, schools, and universities. The event will gather policymakers, educators, school directors, <strong style={{ fontWeight: '900', color: '#000000' }}>IT managers</strong>, <strong style={{ fontWeight: '900', color: '#000000' }}>EdTech innovators</strong>, and <strong style={{ fontWeight: '900', color: '#000000' }}>private companies</strong>, making it the most comprehensive forum to discuss and capitalize on the roles of <strong style={{ fontWeight: '900', color: '#000000' }}>digital technology</strong>.
                </p>
              </div>

              {/* Right Column - Khmer */}
              <div className="space-y-6 text-justify" style={{ fontFamily: 'KantumruyPro, sans-serif' }}>
                <p>
                  <strong style={{ fontWeight: '900', color: '#000000' }}>សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំ (EdTech Summit)</strong> គឺជាវេទិកាឈានមុខគេមួយដែលរៀបចំឡើងជារៀងរាល់ឆ្នាំនៅតាមបណ្ដាប្រទេសជឿនលឿននៅលើសកលលោក ដើម្បីប្រជុំជាមួយសហគមន៍ដែលមកពីស្ថាប័នចម្រុះរួមមាន អ្នកបង្កើតគោលនយោបាយ អ្នកឯកទេសអប់រំ <strong style={{ fontWeight: '900', color: '#000000' }}>អ្នកឯកទេសព័ត៌មានវិទ្យា</strong> <strong style={{ fontWeight: '900', color: '#000000' }}>អ្នកច្នៃប្រឌិតបច្ចេកវិទ្យាអប់រំ</strong> អ្នកដឹកនាំផ្នែកឧស្សាហកម្ម និងអ្នកពាក់ព័ន្ធផ្សេងទៀតដើម្បីជំរុញការចែករំលែកចំណេះដឹង ការច្នៃប្រឌិត និងការសហការគ្នាដើម្បីដោះស្រាយបញ្ហាប្រឈម និងចាប់យកឱកាសក្នុងការរួមបញ្ចូលបច្ចេកវិទ្យាទៅក្នុងប្រព័ន្ធអប់រំ ដើម្បីលើកកម្ពស់ និងធ្វើទំនើបកម្មអប់រំតាមរយៈបច្ចេកវិទ្យា។
                </p>

                <p>
                  <strong style={{ fontWeight: '900', color: '#000000' }}>សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំ លើកទី១ នៅកម្ពុជា (The First Cambodia EdTech Summit)</strong> នឹងត្រូវរៀបចំឡើងក្រោមប្រធានបទ <strong style={{ fontWeight: '900', color: '#000000' }}>"មាគ៌ាឆ្ពោះទៅកាន់ការអប់រំឌីជីថលកម្ពុជា"</strong> នឹងប្រព្រឹត្តទៅនៅ<strong style={{ fontWeight: '900', color: '#000000' }}>ថ្ងៃទី១៧ ដល់ ១៨ ខែកុម្ភៈ ឆ្នាំ២០២៥</strong> នៅ<strong style={{ fontWeight: '900', color: '#000000' }}>វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា</strong>។ ប្រធានបទនៃសន្និសីទ និងពិព័ណ៌ ឆ្នាំនេះ ផ្តោតលើការពិភាក្សាលើការស្វែងរក<strong style={{ fontWeight: '900', color: '#000000' }}>ប្រព័ន្ធអេកូឡូស៊ី បច្ចេកវិទ្យាអប់រំ (EdTech)</strong> គាំទ្រការអប់រំប្រកបដោយសមធម៌ និរន្តរភាព និងសុវត្ថិភាព ការបង្កើតថ្មី និងការអភិវឌ្ឍជំនាញនៅកម្ពុជា។ តាមរយៈការពិភាក្សាដ៏ស៊ីជម្រៅនានា ការតាំងពិព័ណ៌បច្ចេកវិទ្យាបម្រើការអប់រំ និងការបង្កើតឱកាសទំនាក់ទំនង សន្នីសីទ្ធនេះមានគោលបំណងជំរុញនវានុវត្តន៍បច្ចេកវិទ្យាក្នុងវិស័យអប់រំ លើកកម្ពស់កិច្ចសហប្រតិបត្តិការ និងពន្លឿនការបញ្ចូល<strong style={{ fontWeight: '900', color: '#000000' }}>បច្ចេកវិទ្យាជំនួយការបង្រៀន ការរៀន និងអភិបាលកិច្ច</strong> ដើម្បីចូលរួមរៀបចំអនាគតនៃការអប់រំតាមបែបឌីជីថលនៅកម្ពុជា។
                </p>

                <p>
                  <strong style={{ fontWeight: '900', color: '#000000' }}>សន្និសីទ និងពិព័រណ៌បច្ចេកវិទ្យាអប់រំកម្ពុជា</strong> គឺជាវេទិកាដំបូង និងធំជាងគេបំផុតរបស់ប្រទេសសម្រាប់ការប្រជុំពិភាក្សា និងកិច្ចសហការដើម្បីលើកកម្ពស់ការអប់រំតាមរយៈបច្ចេកវិទ្យា ដែលសហការរៀបចំដោយ <strong style={{ fontWeight: '900', color: '#000000' }}>ក្រសួងអប់រំ យុវជន និងកីឡា</strong> ក្រោមការសម្របសម្រួលរបស់<strong style={{ fontWeight: '900', color: '#000000' }}>នាយកដ្ឋានគោលនយោបាយ (DoPo)</strong> និងដៃគូអភិវឌ្ឍន៍ ដែលព្រឹត្តិការណ៍ដ៏សំខាន់នេះ មានគោលបំណងប្រមូលផ្តុំគ្រប់ភាគីពាក់ព័ន្ធសំខាន់ៗ ដើម្បីត្រួសត្រាយអនាគតនៃការអប់រំតាមបែបឌីជីថលនៅកម្ពុជា។
                </p>

                <p>
                  នៅពេលដែលពិភពលោកអភិវឌ្ឍកាន់តែខ្លាំងលើឌីជីថល វិស័យអប់រំត្រូវតែសម្របខ្លួនដើម្បីបំពេញតម្រូវការនៃ<strong style={{ fontWeight: '900', color: '#000000' }}>សតវត្សទី ២១</strong> ។ <strong style={{ fontWeight: '900', color: '#000000' }}>សន្និសីទ និងពិព័រណ៌បច្ចេកវិទ្យាអប់រំកម្ពុជា</strong> ជាវេទិកាមួយដើម្បីស្វែងរកដំណោះស្រាយនៃបញ្ហាប្រឈមនានា និងឱកាសនៃការបញ្ចូលបច្ចេកវិទ្យាទៅក្នុងវិស័យអប់រំ រដ្ឋបាល សាលារៀន និងសាកលវិទ្យាល័យនៅកម្ពុជា។ ព្រឹត្តិការណ៍នេះនឹងប្រមូលផ្តុំអ្នកបង្កើតគោលនយោបាយ អ្នកអប់រំ នាយកសាលា <strong style={{ fontWeight: '900', color: '#000000' }}>អ្នកគ្រប់គ្រងផ្នែកព័ត៌មានវិទ្យា</strong> <strong style={{ fontWeight: '900', color: '#000000' }}>អ្នកច្នៃប្រឌិតបច្ចេកវិទ្យាអប់រំ</strong> និង<strong style={{ fontWeight: '900', color: '#000000' }}>ក្រុមហ៊ុនឯកជន</strong> ដែលធ្វើឱ្យវាក្លាយជាវេទិកាដ៏ទូលំទូលាយបំផុតដើម្បីពិភាក្សា និងទាញយកប្រយោជន៍ពី<strong style={{ fontWeight: '900', color: '#000000' }}>បច្ចេកវិទ្យាឌីជីថលបម្រើការអប់រំ</strong>។
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Notes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* English Side */}
            <div className="text-center">
              <div className="grid grid-cols-2 gap-3 mb-8">
                <img 
                  src="/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_ENG_Page_1-724x1024.jpg" 
                  alt="EdTech Summit Announcement English Page 1" 
                  className="w-full h-80 object-contain cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                  onClick={() => openModal('/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_ENG_Page_1-724x1024.jpg', 'EdTech Summit Announcement English Page 1')}
                  style={{ 
                    backgroundColor: 'transparent'
                  }}
                />
                <img 
                  src="/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_ENG_Page_2-724x1024.jpg" 
                  alt="EdTech Summit Announcement English Page 2" 
                  className="w-full h-80 object-contain cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                  onClick={() => openModal('/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_ENG_Page_2-724x1024.jpg', 'EdTech Summit Announcement English Page 2')}
                  style={{ 
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
                onClick={() => window.open('https://docs.google.com/document/d/12UCT_aXmxoiDauqhcI6nV5-97cXB26xm/edit?tab=t.0', '_blank')}
              >
                CONCEPT NOTE
              </button>
            </div>

            {/* Khmer Side */}
            <div className="text-center">
              <div className="grid grid-cols-2 gap-3 mb-8">
                <img 
                  src="/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_KH_Page_1-724x1024.jpg" 
                  alt="EdTech Summit Announcement Khmer Page 1" 
                  className="w-full h-80 object-contain cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                  onClick={() => openModal('/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_KH_Page_1-724x1024.jpg', 'EdTech Summit Announcement Khmer Page 1')}
                  style={{ 
                    backgroundColor: 'transparent'
                  }}
                />
                <img 
                  src="/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_KH_Page_2-724x1024.jpg" 
                  alt="EdTech Summit Announcement Khmer Page 2" 
                  className="w-full h-80 object-contain cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                  onClick={() => openModal('/src/assets/images/edtech-2025/16Jan2025_Annoucement_EdTech_KH_Page_2-724x1024.jpg', 'EdTech Summit Announcement Khmer Page 2')}
                  style={{ 
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors" 
                style={{ fontFamily: 'KantumruyPro, sans-serif' }}
                onClick={() => window.open('https://docs.google.com/document/d/1Y5lMzPAfoqwCPNjq-xbv_-g6IZppGDlN/edit?tab=t.0', '_blank')}
              >
                ឯកសារទស្សនទាន
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6 md:px-8">
          <hr className="my-8 border-t border-gray-300 bg-white max-w-6xl mx-auto" />
          <img 
            src="/src/assets/images/edtech-2025/Registration-2-2048x719.png" 
            alt="EdTech Summit Registration" 
            className="w-full max-w-6xl mx-auto rounded-lg shadow-lg"
          />
          <hr className="my-8 border-t border-gray-300 bg-white max-w-6xl mx-auto" />
        </div>
      </section>
      <section className="py-16 bg-white">
              <div className="container mx-auto px-6 max-w-7xl">
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
    </>
  );
};

export default Edtech2025About;
