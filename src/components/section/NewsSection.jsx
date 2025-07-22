import img1 from "@/assets/images/img1-news.png";
import img2 from "@/assets/images/img2-news.png";
import img3 from "@/assets/images/img3-news.png";
import img4 from "@/assets/images/img4-news.png";
import { motion as Motion } from "framer-motion";

export default function NewsSection() {
  const featuredNews = {
    date: "2025-06-06",
    title: "Upcoming EdTech Summit 2026. Stay tuned!",
    image: img1,
  };

  const sideNews = [
    {
      image: img2,
      title: "A meeting for schools and partners to share ideas and plan ICT in education.",
    },
    {
      image: img3,
      title: "EdTech Summit 2025 – A national event showing how technology can improve teaching.",
    },
    {
      image: img4,
      title: "A campaign to train 100,000 teachers to use digital tools in classrooms.",
    },
  ];

  return (
    <Motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-16 w-full"
    >
      <div className="w-full px-4 max-w-7xl mx-auto">
        <Motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-blue-900 uppercase tracking-wide mb-12"
        >
          Latest News & Updates
        </Motion.h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Featured News */}
          <Motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-[#F2F7FD] shadow-md overflow-hidden relative group"
          >
            <img
              src={featuredNews.image}
              alt="Featured News"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-[#F2F7FD] bg-opacity-95 px-6 py-4"
            >
              <div className="flex items-center gap-2 text-blue-900 font-semibold text-sm">
                <span>📅</span>
                <span>{featuredNews.date}</span>
              </div>
              <p className="text-blue-900 font-medium text-base mt-1">
                {featuredNews.title}
              </p>
            </Motion.div>
          </Motion.div>

          {/* Right: Side News */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {sideNews.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex bg-[#F2F7FD] shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-1/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`News ${index + 1}`}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center p-4 w-2/3">
                  <p className="text-blue-900 text-lg leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-900 w-60 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View All News
          </button>
        </Motion.div>
      </div>
    </Motion.section>
  );
}