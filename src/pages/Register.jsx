import theme from "@/assets/images/themes.png"
import { CircleDot, Facebook, Send, Mail, Phone } from "lucide-react" // Using Lucide React for icons

const Register = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${theme})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
        <div className="relative z-10 text-center px-4 py-6 rounded">
          <h1 className="text-4xl khmer-text md:text-6xl font-bold mb-4">ចុះឈ្មោះជាមួយEdTech</h1>
          <h2 className="text-2xl md:text-6xl font-semibold mb-4 text-[#FFD900]">EdTech Register</h2>
          <p className="text-lg md:text-xl">we are looking forward to see you in our event. </p>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Main Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg -mt-16 relative z-20">
            <div className="mx-auto"></div>
 <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6pl-4">
                Register here
              </h2>
         
        </div>
      </main>
    </div>
  )
}

export default Register
