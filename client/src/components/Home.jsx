import React, { useState, useEffect } from "react";
import couchImage from "../assets/couch.png";

const HomeSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-['Poppins',sans-serif] bg-[#131829] text-white overflow-hidden">
      {/* Navbar */}
      <header className={`px-8 md:px-20 py-4 flex items-center justify-between fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#131829]/90 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center gap-1 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Furni</span>
          <span className="text-xs border-2 border-rose-400 text-rose-400 rounded-full px-1 pb-[2px] ml-1 absolute -right-4 top-0">
            r
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-12 text-base font-medium">
          {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveLink(item)}
                className={`relative px-2 py-1 transition-all duration-300 ${
                  activeLink === item 
                    ? 'text-rose-400' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item}
                {activeLink === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-400 rounded-full"></span>
                )}
              </a>
            )
          )}
        </nav>

        {/* Call to action */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-rose-400 to-purple-500 hover:from-rose-500 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-rose-400/30 hover:shadow-xl">
            Get Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl text-rose-400 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <div className="pt-28 px-6 md:px-20 min-h-screen flex flex-col md:flex-row items-center justify-between relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] -top-20 -left-20"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-[120px] bottom-0 right-0"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px] top-1/3 right-1/3"></div>
          
          {/* Abstract shapes */}
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-rose-400/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-blue-400/20 rounded-full"></div>
          
          {/* Line pattern - vertical */}
          <div className="absolute h-[70%] w-px bg-gradient-to-b from-transparent via-rose-400/20 to-transparent right-[15%] top-[15%]"></div>
          <div className="absolute h-[50%] w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent left-[10%] top-[25%]"></div>
        </div>

        {/* Left Content */}
        <div className="max-w-xl z-10 md:ml-12 mt-10 md:mt-0 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-rose-400/10 to-purple-500/10 text-rose-300 text-sm font-medium mb-6 border border-rose-400/20">
            Finest Quality Interior Design
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">Modern Interior</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-500">Design Studio</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
            Transform your space with our curated selection of modern furniture and expert design services tailored to your unique style.
          </p>
          
          <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
            <button className="group relative bg-gradient-to-r from-rose-400 to-purple-500 px-8 py-3 rounded-full font-medium overflow-hidden">
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Shop Now</span>
              <span className="absolute inset-0 bg-[#131829] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
            
            <button className="relative group px-8 py-3 rounded-full font-medium overflow-hidden border border-rose-400/50 text-rose-300 hover:text-black transition-all duration-300">
              <span className="relative z-10">Explore</span>
              <span className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6 text-gray-400">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">25+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            
            <div className="h-10 w-px bg-gray-700"></div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-sm">Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Right Image & Decoration */}
        <div className="relative flex-1 flex items-center justify-center z-10 mt-20 md:mt-0">
          {/* Rotating circle behind image */}
          <div className="absolute w-[450px] h-[450px] border border-purple-400/20 rounded-full animate-[spin_40s_linear_infinite] opacity-60"></div>
          
          {/* Dot Grid - replaced with more modern decoration */}
          <div className="absolute top-1/4 right-1/4 z-0">
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <span 
                  key={i} 
                  className={`w-2 h-2 rounded-full opacity-60 ${
                    i % 3 === 0 ? 'bg-rose-400' : i % 3 === 1 ? 'bg-purple-500' : 'bg-blue-400'
                  }`}
                  style={{
                    animationName: 'pulse',
                    animationDuration: '3s', 
                    animationIterationCount: 'infinite',
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product display card */}
          <div className="relative bg-gradient-to-br from-[#1c2236]/90 to-[#252b44]/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl shadow-black/40 border border-white/5 max-w-[550px]">
            {/* Product tag */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              New Arrival
            </div>
            
            {/* Sofa Image with reflection */}
            <div className="relative">
              <img
                src={couchImage}
                alt="Modern designer couch"
                className="w-full max-w-[500px] object-contain relative z-10 drop-shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1c2236] to-transparent z-0"></div>
            </div>
            
            {/* Product info */}
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium">Scandinavian Sofa</h3>
                <div className="flex items-center gap-1 text-rose-400 mt-1">
                  <span>★★★★★</span>
                  <span className="text-sm text-gray-400">(4.9)</span>
                </div>
              </div>
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-500">$1,299</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;