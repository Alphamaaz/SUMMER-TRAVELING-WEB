import React, { useState } from "react";
import { Search, Menu } from "lucide-react";

const Nav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "PACKAGES",
    "BLOG",
    "TO COMMUNICATE",
  ];

  return (
    <nav className="relative bg-[#00866B] md:rounded-bl-xl md:rounded-br-xl px-4 sm:px-6 py-4 w-full max-w-[1086px] mx-auto flex justify-between items-center">
      {/* Mobile Logo - Visible only on small screens */}
      <div className="lg:hidden text-white font-bold text-xl">LAYNOVA</div>

      {/* Desktop Menu - Visible on large screens */}
      <ul className="hidden lg:flex gap-6 items-center">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`relative group ${
              index === 0
                ? "text-orange-500"
                : "text-white hover:text-orange-500"
            } transition-all duration-300 pl-3 cursor-pointer`}
          >
            <span
              className={`absolute top-1/2 left-0 h-2 w-2 rounded-full bg-orange-500 ${
                index === 0
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              } transform -translate-y-1/2 transition-opacity duration-300`}
            ></span>
            <span className="menue_item">{item}</span>
          </li>
        ))}
      </ul>

      {/* Search and CTA Container */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Search - Visible only on small screens */}
        <div className="lg:hidden relative">
          <input
            type="text"
            className="px-4 py-[7px] w-[180px] sm:w-48 border-none outline-none rounded-md bg-white"
            placeholder="Search..."
          />
        </div>

        {/* Desktop Search - Visible on large screens */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative flex items-center">
            <div
              onClick={()=>toggleSearch()}
              className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex justify-center items-center text-black text-xl cursor-pointer hover:scale-105 transition-transform ${
                isSearchOpen
                  ? "opacity-0 scale-0 absolute"
                  : "opacity-100 scale-100"
              }`}
              style={{ transition: "all 0.3s ease" }}
            >
              <Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500 pointer-events-none" />
            </div>
            <input
              type="text"
              className={`px-5 lg:px-7 py-2 lg:py-[10px] border-none outline-none rounded-md bg-white transition-all duration-300 ${
                isSearchOpen
                  ? "opacity-100 w-50 lg:w-60 scale-100"
                  : "opacity-0 w-0 scale-90 absolute"
              }`}
              placeholder="Search..."
              style={{ transition: "all 0.3s ease" }}
            />
          </div>
          <button className="hidden lg:block bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium hover:bg-[#FF870F] transition-colors">
            GET IN TOUCH
          </button>
        </div>

        {/* Mobile Hamburger Menu - Visible only on small screens */}
        <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#00866B] z-50 px-4 py-2 shadow-lg">
          <ul className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`text-white py-2 px-3 ${
                  index === 0 ? "bg-orange-500 rounded" : ""
                }`}
              >
                {item}
              </li>
            ))}
            <li className="mt-2">
              <button className="w-full bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-[#FF870F] transition-colors">
                GET IN TOUCH
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
