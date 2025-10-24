import { motion as MOTION } from 'framer-motion';

export default function StartSection() {
  const stats = [
    { label: 'Teachers Trained', value: '50,000+', icon: '👨‍🏫' },
    { label: 'Participants', value: '60,000+', icon: '👥' },
    { label: 'Events Held', value: '10+', icon: '🎯' },
    { label: 'Schools Involved', value: '200+', icon: '🏫' },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-70" />
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply blur-2xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <MOTION.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <MOTION.h3 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.value}
                </MOTION.h3>
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </div>
            </MOTION.div>
          ))}
        </div>
      </div>
    </section>
  );
}