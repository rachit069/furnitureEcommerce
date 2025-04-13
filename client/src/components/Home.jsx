import React, { useState, useEffect } from "react";
import couchImage from "../assets/couch.png";

const HomeSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // hello
  return (
    <div className="min-h-screen font-['Poppins',sans-serif] bg-[#1a202c] text-white overflow-hidden relative">
      {/* Gradient Background Overlay (Adjusted for blue) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a202c] to-[#2d3748] opacity-70 mix-blend-overlay"></div>

      {/* Animated Background Blobs (Adjusted for blue/purple) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-xl animate-[pulse_4s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* Navbar */}
      <header className={`px-8 md:px-20 py-6 flex items-center justify-between fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a202c]/80 backdrop-blur-md shadow-lg border-b border-b-gray-800' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">We</span>
          <span className="text-white">Furn</span>
        </div>
        

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-16 text-lg font-medium">
          {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveLink(item)}
                className={`relative px-2 py-1 transition-all duration-300 ${
                  activeLink === item
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
                {activeLink === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                )}
              </a>
            )
          )}
        </nav>

        {/* Call to action */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-blue-400/40 hover:shadow-xl">
            Get Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl text-blue-400 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <div className="pt-32 px-6 md:px-20 min-h-screen flex flex-col md:flex-row items-center justify-between relative">
        {/* Decorative elements - Subtle & Refined (Adjusted for blue/purple) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-blue-400/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-36 h-36 border border-purple-400/30 rounded-full animate-[spin_80s_linear_infinite_reverse]"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-500/10 rounded-full animate-[pulse_5s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
        </div>

        {/* Left Content */}
        <div className="max-w-xl z-10 md:ml-16 mt-10 md:mt-0 text-center md:text-left">
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-400/20">
            Finest Quality Interior Design
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-gray-100">Modern Interior</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Design Studio</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
            Transform your space with our curated selection of modern furniture and expert design services tailored to your unique style. Experience the art of living beautifully.
          </p>

          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <button className="group relative bg-gradient-to-r from-blue-400 to-purple-500 px-10 py-4 rounded-full font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Shop Now</span>
              <span className="absolute inset-0 bg-[#1a202c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              <svg className="w-5 h-5 ml-2 absolute right-3 top-1/2 -translate-y-1/2 text-white opacity-70 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>

            <button className="relative group px-10 py-4 rounded-full font-medium overflow-hidden border border-blue-400/50 text-blue-400 hover:text-white transition-all duration-300">
              <span className="relative z-10">Explore</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center gap-8 text-gray-500">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">25+</span>
              <span className="text-sm">Years Experience</span>
            </div>

            <div className="h-12 w-px bg-gray-700"></div>

            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-sm">Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Right Image & Decoration (Adjusted for blue/purple) */}
        <div className="relative flex-1 flex items-center justify-center z-10 mt-24 md:mt-0">
          {/* Subtle rotating element */}
          <div className="absolute w-[480px] h-[480px] border border-purple-400/15 rounded-full animate-[spin_120s_linear_infinite] opacity-50"></div>

          {/* Animated Dot Grid */}
          <div className="absolute top-1/4 right-1/4 z-0">
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full opacity-70 ${
                    i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-purple-600' : 'bg-indigo-500'
                  }`}
                  style={{
                    animationName: 'pulse',
                    animationDuration: `${2 + i * 0.2}s`,
                    animationIterationCount: 'infinite',
                    animationDirection: i % 2 === 0 ? 'alternate' : 'alternate-reverse',
                    animationDelay: `${i * 0.15}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product display card - Elevated (Adjusted for blue/purple) */}
          <div className="relative bg-gradient-to-br from-[#1c2236]/80 to-[#252b44]/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl shadow-black/50 border border-white/10 max-w-[580px] transform translate-x-6 md:translate-x-12 hover:scale-105 transition-transform duration-300">
            {/* Product tag - Enhanced */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-md">
              New Arrival
            </div>

            {/* Sofa Image with subtle tilt */}
            <div className="relative">
              <img
                src={couchImage}
                alt="Modern designer couch"
                className="w-full max-w-[520px] object-contain relative z-10 drop-shadow-xl rounded-xl"
                style={{ transform: 'rotate(-2deg)' }}
              />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1c2236]/80 to-transparent z-0 rounded-b-xl"></div>
            </div>

            {/* Product info - More prominent */}
            <div className="mt-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">Modern Scandinavian Sofa</h3>
                <div className="flex items-center gap-1 text-blue-400 mt-2">
                  <span>★★★★★</span>
                  <span className="text-sm text-gray-500">(4.9)</span>
                </div>
              </div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">$1,299</div>
            </div>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Elegant and comfortable sofa for your modern living space.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;