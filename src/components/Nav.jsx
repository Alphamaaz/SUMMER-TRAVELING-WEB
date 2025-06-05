import React from 'react'
import { Search } from "lucide-react";
import "../styles/footer.css"
const Nav = () => {
    const menuItems = [
          "HOME",
          "ABOUT",
          "SERVICES",
          "PACKAGES",
          "BLOG",
          "TO COMMUNICATE",
        ];
  return (
    <nav className="bg-[#00866B] rounded-bl-xl rounded-br-xl px-6 py-4 w-[1086px] mx-auto flex justify-between items-center">
      <ul className="flex gap-6 items-center">
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

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-black text-xl cursor-pointer hover:scale-105 transition-transform">
          <Search className="w-5 h-5 text-gray-500" />
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#FF870F] transition-colors">
          GET IN TOUCH
        </button>
      </div>
    </nav>
  );
}

export default Nav