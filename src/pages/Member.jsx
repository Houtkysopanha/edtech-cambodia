import theme from "@/assets/images/themes.png"
import { CircleDot, Facebook, Send, Mail, Phone } from "lucide-react" // Using Lucide React for icons

const Member = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${theme})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
        <div className="relative z-10 text-center px-4 py-6 rounded">
          <h1 className="text-4xl khmer-text md:text-6xl font-bold mb-4">ក្លាយជាសមាកជិករបស់ពួកយើង</h1>
          <h2 className="text-2xl md:text-6xl font-semibold mb-4 text-[#FFD900]">Become an EdTech Members</h2>
          <p className="text-lg md:text-xl">we are looking forward to see you as our member together.</p>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Main Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg -mt-16 relative z-20">
          {/* Why Member With Us Section */}
          <section className="py-12">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Why Member With Us ?
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <CircleDot className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Connect with educators, innovators, and policymakers in the EdTech space.</span>
                </li>
                <li className="flex items-start">
                  <CircleDot className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Showcase your solutions and brand to a national and international audience.</span>
                </li>
                <li className="flex items-start">
                  <CircleDot className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Collaborate on workshops, panels, and networking events.</span>
                </li>
                <li className="flex items-start">
                  <CircleDot className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Support digital transformation in Cambodia's education sector.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Join Us as a Valued Member Section */}
          <section className="py-12 ">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4 inline-block">
              Join Us as a Valued Member and Drive the Future of Education
            </h2>
            <p className=" mx-auto text-gray-700 mb-8">
              Be part of Cambodia's leading EdTech community — connect with innovators, showcase your impact, and grow
              with industry leaders.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className=" mx-auto text-blue-800 text-center font-semibold text-xl mb-12">
              Join our vibrant community of educators, students, and innovators. Get exclusive access to events,
              resources, and networking opportunities in Cambodia's EdTech ecosystem!
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 border-b-2 border-blue-300 rounded-t-lg w-full py-3 mb-4">
                  <h3 className="text-xl font-bold text-blue-800">Community</h3>
                </div>
                <p className="text-gray-700">Connect with passionate educators, students, and EdTech leaders.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 border-b-2 border-blue-300 rounded-t-lg w-full py-3 mb-4">
                  <h3 className="text-xl font-bold text-blue-800">Learning</h3>
                </div>
                <p className="text-gray-700">Access workshops, webinars, and digital resources.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 border-b-2 border-blue-300 rounded-t-lg w-full py-3 mb-4">
                  <h3 className="text-xl font-bold text-blue-800">Networking</h3>
                </div>
                <p className="text-gray-700">Attend exclusive events and build your professional network.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 border-b-2 border-blue-300 rounded-t-lg w-full py-3 mb-4">
                  <h3 className="text-xl font-bold text-blue-800">Recognition</h3>
                </div>
                <p className="text-gray-700">Get certificates and showcase your EdTech achievements.</p>
              </div>
            </div>
          </section>

          {/* Call to Action and Contact */}
          <section className="py-12 text-center">
            <a href="#" className="text-red-600 font-bold text-lg hover:underline mb-8 block">
              Click here!! Become an EdTech Memeber
            </a>
            <p className="text-xl font-semibold text-gray-900 mb-4">Contact & Join Us Instantly</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="flex items-center text-blue-600 hover:underline">
                <Facebook className="w-5 h-5 mr-1" /> Facebook
              </a>
              <a href="#" className="flex items-center text-blue-500 hover:underline">
                <Send className="w-5 h-5 mr-1" /> Telegram
              </a>
              <a href="mailto:info@edtechsummi.com" className="flex items-center text-gray-700 hover:underline">
                <Mail className="w-5 h-5 mr-1" /> Email
              </a>
              <a href="tel:0123456789" className="flex items-center text-green-600 hover:underline">
                <Phone className="w-5 h-5 mr-1" /> Call
              </a>
            </div>
            <p className="text-gray-700">
              Need help?{" "}
              <a href="mailto:infor@edtechsummi.com" className="text-blue-600 hover:underline">
                infor@edtechsummi.com
              </a>{" "}
              |{" "}
              <a href="tel:0123456789" className="text-blue-600 hover:underline">
                0123 456 789
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Member
