import theme from "@/assets/images/themes.png"
import { MapPin, Phone, Facebook, Send } from "lucide-react" // Using Lucide React for icons

const ContactPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${theme})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30 z-0" />
        <div className="relative z-10 text-center px-4 py-6 rounded">
          <h1 className="text-4xl khmer-text md:text-6xl font-bold mb-4">ទំនាក់ទំនង</h1>
          <h2 className="text-2xl md:text-6xl font-semibold mb-4 text-[#FFD900]">Contact Us</h2>
          <p className="text-lg md:text-xl">
            Want to get in touch? we'd love to hear from you. Here's how you can reach us
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Main Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg -mt-16 relative z-20">

          {/* Get Information Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get Information</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              The First Cambodia EdTech Summit is hosted by the Ministry of Education, Youth, and Sport, with
              coordination from the Department of Policy and the Department of Digital Transformation. For more
              inquiries, please contact us below:
            </p>
            <div className="text-gray-800 mb-8">
              <p className="font-semibold">H.E. Professor Bo Chankoulika</p>
              <p>Under Secretary of State, MoEYS Cambodia</p>
              <p>Email: bo.chankoulika@moeys.gov.kh</p>
            </div>
          </section>

          {/* Get Involved Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get Involved</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">
              We'd love to hear from you! Whether you have questions about the event, want to explore partnership
              opportunities, or need assistance with registration, our team is here to help.
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">
              Reach out to us through the contact form below, email us directly, or give us a call.
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              Let's work together to shape the future of education through technology!
            </p>
            <p className="text-gray-800 mb-8">
              <span className="font-semibold">Event Management</span> | Tel (TG): +855 77 488 587 | Email:
              info@edtechcambodia.org
            </p>
            <a href="#" className="text-red-600 font-bold text-lg hover:underline">
              &gt;&gt; Become our member! &lt;&lt;
            </a>
          </section>

          {/* Contact Cards Section */}
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col   items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Facebook className="w-12 h-12 text-blue-600 mb-4" />
                <p className="text-lg font-semibold">Follow our Facebook Page</p>
              </div>
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Send className="w-12 h-12 text-blue-500 mb-4" />
                <p className="text-lg font-semibold">Follow our Telegram Channel</p>
              </div>
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-12 h-12 text-gray-600 mb-4" />
                <p className="text-lg font-semibold">Location</p>
                <p className="text-sm text-gray-600">#80, Preah Norodom Blvd. Phnom Penh</p>
              </div>
              <div className="bg-[#F1F5FF] border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Phone className="w-12 h-12 text-green-600 mb-4" />
                <p className="text-lg font-semibold">+855 77 488 887</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                View larger map
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full h-[400px] md:h-[500px] p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7999999999996!2d104.916667!3d11.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513888888888%3A0x8888888888888888!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Phnom Penh"
        ></iframe>
      </section>
    </div>
  )
}

export default ContactPage
