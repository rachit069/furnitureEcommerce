import React from "react";
import HomeNavbar from "./Home.section.jsx";
import couchImage from "../assets/couch.png";

const HomeSection = () => {
  return (
    <>
      <HomeNavbar />
      <div className="bg-[#385A4E] min-h-[calc(100vh-80px)] px-6 md:px-20 text-white flex flex-col md:flex-row items-center justify-between pt-10 pb-10 relative overflow-hidden">


        {/* Left Content */}
        <div className="max-w-xl z-10 ml-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2 -mt-14">
            Modern Interior <br /> Design Studio
          </h1>
          <div className="flex items-center gap-5 mt-28">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium shadow-lg">
              Shop Now
            </button>
            <button className="border border-white hover:bg-white hover:text-[#385A4E] px-8 py-3 rounded-full font-medium">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image & Dot Grid */}
        <div className="relative flex-1 flex items-center justify-center z-10 mt-20">

          {/* Dot Grid */}
          <div className="absolute top-16 right-[60px] z-0">
            <div className="grid grid-cols-5 gap-[60px] opacity-30">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-6 h-6 bg-white rounded-full" />
              ))}
            </div>
          </div>

          {/* Sofa Image */}
          <img
            src={couchImage}
            alt="couch"
            className="w-[950px] object-contain relative z-10 ml-12"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
