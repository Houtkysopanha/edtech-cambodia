import React from "react";
import { motion as MOTION } from "framer-motion";
import Summit2025_navbar from "@/components/section/Summit2025_navbar";
import Summit2025_HeroSection from "@/components/section/Summit2025_HeroSection";
// Import images
import showcaseImage from "@/assets/images/showcase.png";
import keynoteImage from "@/assets/images/keynote.png";
import panelImage from "@/assets/images/panel-discuss.png";
import logo from "@/assets/images/logo-edtech.png";
import banner from "@/assets/images/bannerAbout.png"

const Summit2025_about = () => {

  return (
    <>
      <div className="font-sans text-gray-800 bg-white min-h-screen">
        {/* Hero Section */}
        <Summit2025_HeroSection
          title="Summit Agenda"
          subtitle="2025"
          description="Explore our comprehensive program featuring keynotes, workshops, panels, and networking opportunities"
        />

        {/* Navigation Tabs */}
        <Summit2025_navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Logo and Title Section */}
          <div className="flex flex-col md:flex-row items-center justify-center  md:space-y-0 md:space-x-4">
            <div className="flex-shrink-0">
              <img
                src={logo}
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
          <p className="text-xl text-center mt-4 text-gray-800 mb-4">
            <strong>Why is The First Cambodia EdTech Summit initiated?</strong>
          </p>

          {/* Detailed Content Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - English Content */}
              <div className="space-y-6">
                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>
                    The Cambodia EdTech Summit is a premier platform that
                    annually convenes a diverse community of policymakers,
                    educators, IT experts , EdTech innovators, industry leaders,
                    and other stakeholders to foster knowledge sharing,
                    innovation, and collaboration to address challenges and
                    seize opportunities in integrating technology into
                    Cambodia’s education system.
                  </p>

                  <p>
                    The First Cambodia EdTech Summit, themed “Pathways to
                    Cambodia’s Digital Education” , will convene at the
                    Institute of Technology of Cambodia on February 17-18, 2025
                    . The theme of this year’s summit revolves around
                    discussions on navigating the EdTech ecosystem for
                    equitable, sustainable, and safe education, innovation, and
                    skills development in Cambodia. Through insightful
                    discussions, exhibitions, and networking opportunities, the
                    summit aims to drive continuous innovation, promote
                    collaboration, and accelerate the adoption of
                    technology-enhanced learning solutions to shape the future
                    of education in Cambodia.
                  </p>
                  <p>
                    The Cambodia EdTech Summit is the country’s first and
                    largest platform for convening discussions and collaboration
                    to transform education through technology. Led by the
                    Ministry of Education, Youth, and Sport under the
                    coordination of the Department of Policy (DoPo) and
                    organizing committees, this landmark event aims to bring
                    together key stakeholders to pave the future of education in
                    Cambodia.
                  </p>
                  <p>
                    As the world becomes increasingly digital, the education
                    sector must adapt to meet the needs of the 21st century. The
                    Cambodia EdTech Summit serves as a platform to address the
                    challenges and opportunities of integrating technology into
                    Cambodia’s education, administration, schools, and
                    universities. The event will gather policymakers, educators,
                    school directors, IT managers, EdTech innovators , and
                    private companies, making it the most comprehensive forum to
                    discuss and capitalize on the roles of digital technology.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center shadow-sm">
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center mb-3">
                      <span className="text-4xl">📄</span>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold">
                      CONCEPT NOTE
                    </button>
                  </div>
              </div>

              {/* Right Column - Khmer Content */}
              <div className="space-y-6">
                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>
                   សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំ (EdTech Summit) គឺជាវេទិកាឈានមុខគេមួយដែល
រៀបចំំឡើងជារៀងរាល់ឆ្នាំនៅតាមបណ្ដាប្រទេសជឿនលឿននៅលើសកលលោក ដើម្បីប្រជុំជា
មួយសហគមន៍ដែលមកពីស្ថាប័នចម្រុះរួមមាន អ្នកបង្កើតគោលនយោបាយ អ្នកឯកទេសអប់រំ
អ្នកឯកទេសព័ត៌មានវិទ្យា អ្នកច្នៃប្រឌិតបច្ចេកវិទ្យាអប់រំ អ្នកដឹកនាំផ្នែកឧស្សាហកម្ម និង
អ្នកពាក់
ព័ទ្ធផ្សេងទៀតី
ដើម្បជំរុញការចែករំលែកចំណេះដឹង ការច្នៃប្រឌិត និងការសហការគ្នាដើម្បីដោះ
ស្រាយបញ្ហាប្រឈម នឹងចាប់យកឱកាសក្នុងការរួមបញ្ចូលបច្ចេកវិទ្យាទៅក្នុង ប្រព័ន្ឋអប់រំដើម្បីលើក
កម្ពស់ និងធ្វើទំនើបកម្មអប់រំតាមរយៈបច្ចេកវិទ្យា។
                  </p>

                  <p>
                    សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំ លើកទី១ នៅកម្ពុជា (The First Cambodia
“មាគ៌ាឆ្ពោះទៅកាន់ការអប់រំឌីជីថល
EdTech Summit)
នឹងត្រូវរៀបចំឡើងក្រោមប្រធានបទ
វិទ្យាស្ថានបច្ចេកវិទ្យា 
កម្ពុជា
” នឹងប្រព្រឹត្តទៅនៅថ្ងៃទី១៧ ដល់ ១៨ ខែកុម្ភៈ ឆ្នាំ២០២៥ នៅ
កម្ពុជ
។ ប្រធានបទនៃសន្និសីទ និងពិព័ណ៌ ឆ្នាំនេះ ផ្តោតលើការពិភាក្សាលើការស្វែងរកប្រព័ន្ធ
អេកូឡូស៊ី បច្ចេកវិទ្យាអប់រំ (EdTech) គាំទ្រការអប់រំប្រកបដោយសមធម៌ និរន្តរភាព និង
សុវត្ថិភាព ការបង្កើតថ្មី និងការអភិវឌ្ឍជំនាញនៅកម្ពុជា។ តាមរយៈការពិភាក្សាដ៏ស៊ីជម្រៅនានា
ការតាំងពិព័ណ៌បច្ចេកវិទ្យាបម្រើការអប់រំ និងការបង្កើតឱកាសទំនាក់ទំនង សន្និសិទ្ធនេះមាន
គោលបំណងជំរុញនវានុវត្តន៍បច្ចេកវិទ្យាក្នុងវិស័យអប់រំ លើកកម្ពស់កិច្ចសហប្រតិបត្តិការ នឹងពន្លឿន
ការបញ្ចូលបច្ចេកវិទ្យាជំនួយការបង្រៀន ការរៀន និងអភិបាលកិច្ច ដើម្បីចូលរួមរៀបចំអនាគតនៃ
ការអប់រំតាមបែបនីធីចលនៅកម្ពុជា។
                  </p>

                  <p>
                   សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា គឺជាវេទិកាដំបូង និងធំជាងគេបំផុតរបស់ប្រទេស
សម្រាប់ការប្រជុំពិភាក្សា និងកិច្ចសហការដើម្បីលើកកម្ពស់ការអប់រំតាមរយៈបច្ចេកវិទ្យា ដែល
សហការរៀបចំដោយ
ក្រសួងអប់រំ យុវជន និងកីឡា
 ក្រោមការសម្របសម្រួលរបស់
នាយក
ដ្ឋានគោលនយោបាយ (DoPo)
និងដៃគូអភិវឌ្ឍន៍ ដែលព្រឹត្តិការណ៍ដ៏សំខាន់នេះ មាន
គោលបំណងប្រមូលផ្តុំគ្រប់ភាគីពាក់ព័ន្ឋសំខាន់ៗ ដើម្បីត្រួសត្រាយអនាគតនៃការអប់រំតាម
បែបនីធីចលនៅកម្ពុជា។
                  </p>
                  <p>
                    នៅពេលដែលពិភពលោកអភិវឌ្ឍកាន់តែខ្លាំងលើឌីជីថល វិស័យអប់រំត្រូវតែសម្របខ្លួនដើម្បីបំពេញ
តម្រូវការនៃសតវត្សទី ២១ ។ សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា ជាវេទិកាមួយដើម្ប
ស្វែងរកដំណោះស្រាយនៃបញ្ហាប្រឈមនានា និងឱកាសនៃការបញ្ចូលបច្ចេកវិទ្យាទៅក្នុងវិស័យអប់រំ
រដ្ឋបាល សាលារៀន និងសាកលវិទ្យាល័យនៅកម្ពុជា។ ព្រឹត្តិការណ៍នេះនឹងប្រមូលផ្តុំអ្នក
បង្កើត
គោលនយោបាយ អ្នកអប់រំ នាយកសាលា អ្នកគ្រប់គ្រងផ្នែកព័ត៌មានវិទ្យា អ្នកច្នៃប្រឌិត
បច្ចេកវិទ្យាអប់រំ និងក្រុមហ៊ុនឯកជន
ដែលធ្វើឱ្យវាក្លាយជាវេទិកាដ៏ទូលំទូលាយបំផុតដើម្បីពិភាក្សា
នឹងទាញយកប្រយោជន៍ពីបច្ចេកវិទ្យានីជីថលបម្រើការអប់រំ។
                  </p>
                   <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center shadow-sm">
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center mb-3">
                      <span className="text-4xl">📋</span>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold">
                      អំណុលអ្វី
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="mb-16">
            <div className=" text-white text-center">
             <img src= {banner} alt="banner" />
            </div>
          </section>
          <div className="border-1 border-gray-700"></div>

          {/* Feature Programs Section */}
                   <section className=" py-16 text-center">
                     <div className="max-w-7xl mx-auto px-4">
                       <MOTION.h2 
                         className="text-4xl font-bold mb-16 uppercase text-gray-800" 
                         initial={{ opacity: 0, y: -20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                       >
                         FEATURE PROGRAMS
                       </MOTION.h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {[
                           {
                             title: 'KEYNOTE',
                             desc: 'Key insights and updates from national and international experts on the current and future vision of EdTech.',
                             img: keynoteImage,
                           },
                           {
                             title: 'PANEL DISCUSSION',
                             desc: 'Navigating the EdTech ecosystem for equitable, sustainable and safe education, innovation, and skills development in Cambodia.',
                             img: panelImage,
                           },
                           {
                             title: 'EDTECH SHOWCASE',
                             desc: 'Exhibition of EdTech initiatives from both public and private sectors and opportunity for collaborations.',
                             img: showcaseImage,
                           },
                           {
                             title: 'COMPETITION',
                             desc: 'Most innovative EdTech Teacher and Public Digital, Media and Information Literacy Challenge.',
                             img: showcaseImage,
                           },
                         ].map((prog, idx) => (
                           <MOTION.div
                             key={idx}
                             className="bg-white rounded-lg overflow-hidden flex flex-col "
                             initial={{ opacity: 0, y: 30 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: idx * 0.2, duration: 0.6 }}
                             whileHover={{ y: -5 }}
                           >
                             {/* Image Section */}
                             <div className="flex justify-center items-center h-48 p-6">
                               <img 
                                 src={prog.img} 
                                 alt={prog.title} 
                                 className="max-h-full max-w-full object-contain"
                               />
                             </div>
                             
                             {/* Title Section */}
                             <div className=" text-black uppercase font-bold text-lg py-4 px-4">
                               {prog.title}
                             </div>
                             
                             {/* Description Section */}
                             <div className="p-6 flex-grow flex items-center">
                               <p className="text-sm text-gray-700 leading-relaxed text-center">
                                 {prog.desc}
                               </p>
                             </div>
                           </MOTION.div>
                         ))}
                       </div>
                     </div>
                   </section>
        </main>
      </div>
    </>
  );
};

export default Summit2025_about;
