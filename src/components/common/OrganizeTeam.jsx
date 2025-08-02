
import img1 from "@/assets/images/edtect_logo_white.png"
import img2 from "@/assets/images/EdTectAboutUs.png"
export default function OrganizersTeamPage() {
  // Define the custom gradient directly in a style object for the banner
  const edtechGradientStyle = {
    backgroundImage: "linear-gradient(to right, #DEB128, #DC5D3B, #E12045, #953773, #3843B3)",
  }

  return (
    <main className="container mx-auto ">
      {/* Organizers & Partners Section */}
      <section className="mb-12 md:mb-16">
        {/* The main content of this page starts here, so no negative margin needed */}
        <div className="relative p-14 rounded-xl overflow-hidden shadow-r-lg" style={edtechGradientStyle}>
          {/* This div creates the slight cutout effect on the left, similar to the UI */}
<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full -ml-9"></div>

          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <img
              src={img1}
              alt="EdTech Cambodia Logo"
              className=" md:w-72"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = "/placeholder.svg?height=60&width=60"
              }}
            />
            <h4 className="text-xl md:text-2xl my-8 font-bold ">Join the Future of Education</h4>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
              <a
                href="/register"
                className="text-blue-900 font-bold hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full border border-white transition-colors duration-200"
              >
                Register Now
              </a>
              <span className="hidden md:inline-block">|</span>
              <a
                href="/partner"
                className="text-yellow-400 font-bold hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full border border-white transition-colors duration-200"
              >
                Become a Partner
              </a>
              <span className="hidden md:inline-block">|</span>
              <a
                href="/learn-more"
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full border border-white transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-8 md:py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card 1 */}
          <div
            className="relative p-1 rounded-xl shadow-lg overflow-hidden"
            style={{
              background: "linear-gradient(to right, #DEB128, #DC5D3B, #E12045, #953773, #3843B3)", // Border gradient
            }}
          >
            <div className="bg-white p-6 rounded-xl h-full flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-75"></div>
                <img
                  src= {img2}
                  alt="Thomas Clark"
                  className="relative z-10 rounded-full object-cover w-full h-full border-4 border-white"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = "/placeholder.svg?height=128&width=128"
                  }}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Thomas Clark</h4>
              <p className="text-sm text-red-500">Photo Grapher</p> {/* Role color from screenshot */}
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div
            className="relative p-1 rounded-xl shadow-lg overflow-hidden"
            style={{
              background: "linear-gradient(to right, #DEB128, #DC5D3B, #E12045, #953773, #3843B3)", // Border gradient
            }}
          >
            <div className="bg-white p-6 rounded-xl h-full flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-75"></div>
                <img
                  src= {img2}
                  alt="Thomas Clark"
                  className="relative z-10 rounded-full object-cover w-full h-full border-4 border-white"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = "/placeholder.svg?height=128&width=128"
                  }}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Thomas Clark</h4>
              <p className="text-sm text-red-500">Photo Grapher</p>
            </div>
          </div>

          {/* Team Member Card 3 */}
          <div
            className="relative p-1 rounded-xl shadow-lg overflow-hidden"
            style={{
              background: "linear-gradient(to right, #DEB128, #DC5D3B, #E12045, #953773, #3843B3)", // Border gradient
            }}
          >
            <div className="bg-white p-6 rounded-xl h-full flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-75"></div>
                <img
                  src= {img2}
                  alt="Thomas Clark"
                  className="relative z-10 rounded-full object-cover w-full h-full border-4 border-white"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = "/placeholder.svg?height=128&width=128"
                  }}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Thomas Clark</h4>
              <p className="text-sm text-red-500">Photo Grapher</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
