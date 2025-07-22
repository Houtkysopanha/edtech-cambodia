import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import img1 from '@/assets/images/photo-slider.png';
import { motion as MOTION } from 'framer-motion';

export default function SliderSection() {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}" style="
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        background-color: black;
        color: white;
        text-align: center;
        font-size: 14px;
        margin: 0 5px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.3s;
      ">${index + 1}</span>`;
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
          {/* Left Text Content */}
          <MOTION.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 space-y-6"
          >
            <h2 className="text-4xl md:text4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Empowering Cambodia's Education Through Technology
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A platform connecting policymakers, educators, IT experts, and innovators 
              to shape the future of digital learning.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300/50">
                <span className="flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <button className="group px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-50">
                <span className="flex items-center gap-2">
                  Watch Video
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </MOTION.div>

          {/* Right Swiper Slider */}
          <MOTION.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={pagination}
              className="rounded-2xl shadow-2xl"
            >
             {[img1, img1, img1].map((image, i) => (
                <SwiperSlide key={i}>
                  <div className="relative">
                    <img
                      src={image}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-blue-200 rounded-2xl" />
            <div className="absolute -z-20 top-16 right-16 w-full h-full bg-purple-200 rounded-2xl" />
          </MOTION.div>
        </div>
      </div>
    </section>
  );
}
