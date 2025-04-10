import React from "react";

const HomeNavbar = () => {
  return (
    <header className="bg-[#385A4E] text-white px-6 md:px-20 py-6 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold flex items-center gap-1">
        Furni
        <span className="text-xs border border-white rounded-full px-1 pb-[2px] ml-1">
          r
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-10 text-lg font-medium">
        {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
};

export default HomeNavbar;
