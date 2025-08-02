"use client"

import { Link } from "react-router-dom"
import { FaFacebookF, FaYoutube, FaTiktok, FaChevronDown, FaChevronRight } from "react-icons/fa"
import logo from "@/assets/images/edtech_logo.png"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"

const Navbar = () => {
  const [isOurWorkDropdownOpen, setIsOurWorkDropdownOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const dropdownRef = useRef(null)
  const navRef = useRef(null) // Ref for the second navbar element
  const [navHeight, setNavHeight] = useState(0) // State to store the height of the second navbar

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOurWorkDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Add scroll listener to trigger sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on when you want the sticky effect to start
      // For example, if you want it to stick after the top info bar scrolls out of view
      if (window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    // Measure the height of the second navbar
    const measureNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight)
      }
    }

    // Initial measurement
    measureNavHeight()

    // Re-measure on window resize to handle responsiveness
    window.addEventListener("resize", measureNavHeight)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", measureNavHeight)
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <>
      {/* Top Info Bar */}
      <div className="text-white bg-[url('./assets/images/themes.png')] bg-cover bg-top">
        <div className="flex justify-between items-center px-6 py-6 text-sm">
          
          <div className="flex space-x-6">
            <div>
              <span className="text-1xl font-medium">ICT for Education: Network and Meeting</span>
              <br />
              <span className="text-gray-300">January 21-22 2025</span>
            </div>
            <div className="border-l-2 border-white px-3">
              <span className="text-1xl font-medium">EdTech summit 2026</span>
              <br />
              <span className="text-gray-300">January 21-22 2025</span>
            </div>
            <div className="border-l-2 border-white px-3">
              <span className="text-1xl font-medium">Digital Mission for 100k teacher</span>
              <br />
              <span className="text-gray-300">January 21-22 2025</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 pr-10">
            <Link
              to="/contact"
              className="border-2 border-white px-5 py-2 text-white font-bold rounded-[10px] shadow-md"
            >
              Contact us
            </Link>
            <span className="font-bold">| Follow us:</span>
            <FaFacebookF />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* Spacer element to prevent content jump when navbar becomes fixed */}
      {isSticky && <div style={{ height: `${navHeight}px` }} />}

      {/* Second Navbar */}
      <div
        ref={navRef} // Attach the ref here to measure its height
        className={`${isSticky ? "fixed top-0 w-full bg-white shadow-md z-50" : "relative"} transition-all duration-300`}
      >
        <div className="flex justify-between items-center px-6 py-3 md:px-20">
          <Link to="/">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="h-16 sm:h-20" />
          </Link>
          <div className="flex justify-between text-[#0a1d53] items-center gap-10">
            <nav className="flex space-x-8 text-sm sm:text-base font-semibold text-center">
              <Link to="/about" className="khmer-text hover:text-yellow-400">
                អំពីយើង
                <br />
                About Us
              </Link>
              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOurWorkDropdownOpen(!isOurWorkDropdownOpen)}
                  className="khmer-text hover:text-yellow-400 flex flex-col items-center focus:outline-none"
                >
                  <span>ការងាររបស់យើង</span>
                  <span className="flex items-center gap-1">
                    Our Work
                    <FaChevronDown
                      className={`text-xs transition-transform ${isOurWorkDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                {isOurWorkDropdownOpen && (
                  <div className="absolute top-full text-start left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <Link
                        to="/our-work/ict4e"
                        className="block px-4 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                      >
                        ICT4E
                      </Link>
                      <div className="group relative">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                          <Link to="/our-work/edtech-summit" className="text-gray-800 hover:text-blue-600">
                            EdTech Summit
                          </Link>
                          <FaChevronRight className="text-xs text-gray-400" />
                        </div>
                        <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="py-2">
                            <Link
                              to="/our-work/edtech-summit/s2025"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              EdTech S2025
                            </Link>
                            <Link
                              to="/our-work/edtech-summit/s2026"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              EdTech S2026
                            </Link>
                            <Link
                              to="/our-work/edtech-summit/s2027"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              EdTech S2027
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/our-work/networking-meeting"
                        className="block px-4 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                      >
                        Networking Meeting
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/news" className="khmer-text hover:text-yellow-400">
                ព័ត៌មាន
                <br />
                Our News
              </Link>
            </nav>
            <Button>
              <Link
                to="/member"
                className="bg-edtech-gradient px-5 py-3 text-white font-bold rounded-[10px] shadow-md"
              >
                EDTECH MEMBERS
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
