import { motion as MOTION } from 'framer-motion';
import edtechImage from '@/assets/images/edtech.png';

export default function IntroSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <MOTION.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Khmer Text */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-800 leading-relaxed">
                ឱកាសប្រាណីត ក្នុងការចូលរួមកសាងប្រព័ន្ធអប់រំ
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join us in Cambodia, where innovation meets education. Don't miss the opportunity to be part of the transformation shaping Cambodia's education system!
              </p>
            </div>

            {/* English Text */}
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                ក្រសួងអប់រំ យុវជន និងកីឡា អញ្ជើញឱ្យអ្នកពាក់ព័ន្ធគ្រប់រូប 
                និងអ្នកជំនាញគ្រប់វិស័យ រួមទាំងវិស័យបច្ចេកវិទ្យា ស្ថាប័នអប់រំ 
                និងដៃគូអភិវឌ្ឍន៍ ចូលរួម និងបង្ហាញ នូវដំណោះស្រាយ EdTech នៅ 
                ក្នុងកិច្ចប្រជុំ The First Cambodia EdTech Summit។ Contact Us!
              </p>
            </div>

            {/* Social Media Buttons */}
            <MOTION.div 
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-blue-600 font-semibold mb-2 w-full">
                Stay updated by following us on our social media channels!
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                TELEGRAM CHANNEL
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                FACEBOOK PAGE
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                TIKTOK
              </button>
            </MOTION.div>
          </MOTION.div>

          {/* Right Column - Image */}
          <MOTION.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md">
              <img 
                src={edtechImage} 
                alt="EdTech Cambodia Summit" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </MOTION.div>
        </div>
      </div>
    </section>
  );
}
