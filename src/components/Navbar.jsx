import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const data = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setToggleIcon(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#181818] z-50 flex items-center">
      <div className="flex items-center justify-between w-full px-6">
        
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <FaReact size={32} className="text-yellow-400" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {data.map((item, index) => (
            <li
              key={index}
              className="text-yellow-400 cursor-pointer hover:text-white transition"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden cursor-pointer text-yellow-400"
          onClick={handleToggleIcon}
        >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-20 left-0 w-full bg-[#181818] flex flex-col items-center transition-all duration-500 ${
          toggleIcon ? "opacity-100 left-0" : "opacity-0 -left-full"
        } md:hidden`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="py-4 w-full text-center text-yellow-400 border-b border-gray-700 cursor-pointer hover:bg-gray-800"
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
