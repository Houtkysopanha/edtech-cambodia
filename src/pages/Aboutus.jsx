import React from 'react';
import theme from '@/assets/images/themes.png'
const Aboutus = () => {
  return (
   <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
     {/* Hero Section */}
   <section
  className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
  style={{ backgroundImage: `url(${theme})` }} // ✅ Fix here
>
  {/* Remove the <img /> — it's not needed */}
  <div className="relative z-10 text-center  px-4 py-6 rounded">
    <h1 className="text-4xl khmer-text md:text-6xl font-bold mb-4">អំពីយើង</h1>
    <h2 className="text-2xl md:text-6xl font-semibold mb-4 text-[#FFD900]">About Us</h2>
    <p className="text-lg md:text-xl">
      Learn about our objective and goal with our event.
    </p>
  </div>
</section>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 md:px-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg -mt-16 relative z-20">
          {/* Main Title */}
          <div className="flex flex-col md:flex-row items-center mb-8 md:mb-12">
            <img
              src={theme}
              alt="Summit Icon"
              className="w-16 h-16 md:w-20 md:h-20 mr-0 md:mr-6 mb-4 md:mb-0 rounded-full shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = {theme}; }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-900 leading-tight">
              សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំកម្ពុជា លើកទី១ <br />
              <span className="text-blue-700">The First Cambodia EdTech Summit</span>
            </h2>
          </div>

          {/* Two-Column Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* English Column */}
            <div className="text-gray-700 text-base leading-relaxed">
              <p className="mb-4">
                The Cambodia EdTech Summit is a premier platform that annually convenes a diverse
                community of policymakers, educators, IT experts, EdTech innovators, industry leaders,
                and other stakeholders to foster knowledge sharing, innovation, and collaboration to
                address challenges and seize opportunities in integrating technology into Cambodia's
                education system.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-4 py-1 mb-4">
                Why is the First Cambodia EdTech Summit initiated?
              </h3>
              <p>
                The Cambodia EdTech Summit is a premier platform that annually convenes a diverse community of policymakers, educators, IT experts, EdTech innovators, and education leaders. Our mission is to foster collaboration, inspire innovation, and accelerate the adoption of technology in Cambodia's education sector.
              </p>
            </div>
            {/* Khmer Column - Placeholder Text */}
            <div className="text-gray-700 text-base leading-relaxed">
              <p className="mb-4">
                សន្និសីទ និងពិព័រណ៍បច្ចេកវិទ្យាអប់រំ (EdTech Summit) គឺជាវេទិកាឈានមុខគេមួយដែលរៀបចំឡើងជារៀងរាល់ឆ្នាំដើម្បីប្រមូល
                ផ្តុំសហគមន៍ចម្រុះនៃអ្នកធ្វើគោលនយោបាយអប់រំ អ្នកជំនាញបច្ចេកវិទ្យាព័ត៌មាន អ្នកបង្កើតថ្មីក្នុងវិស័យអប់រំ ថ្នាក់ដឹកនាំឧស្សាហកម្ម
                និងអ្នកពាក់ព័ន្ធផ្សេងទៀត ដើម្បីជំរុញការចែករំលែកចំណេះដឹង ការច្នៃប្រឌិត និងការសហការគ្នាដើម្បីដោះស្រាយបញ្ហាប្រឈម
                និងចាប់យកឱកាសក្នុងការបញ្ចូលបច្ចេកវិទ្យាទៅក្នុងប្រព័ន្ធអប់រំរបស់កម្ពុជា។
              </p>
              <p>
                បេសកកម្មរបស់យើងគឺជំរុញកិច្ចសហប្រតិបត្តិការ បំផុសគំនិតច្នៃប្រឌិត និងពន្លឿនការអនុម័តបច្ចេកវិទ្យាក្នុងវិស័យអប់រំនៅកម្ពុជា។
              </p>
            </div>
          </div>

          {/* Image/Video Placeholder */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h3>
            <img
              src="https://placehold.co/800x450/2c3e50/ffffff?text=Upcoming+Event+Image"
              alt="Upcoming Event"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/cccccc/333333?text=Image+Placeholder"; }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutus;
