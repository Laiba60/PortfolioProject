import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-gray-900 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => scrollTo("home")}>
          <FaReact size={32} className="text-yellow-400" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-yellow-400">
          {links.map((link, i) => (
            <li
              key={i}
              className="hover:text-white cursor-pointer transition"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-yellow-400" onClick={() => setOpen(!open)}>
          {open ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center transition-all duration-500 ${
          open ? "opacity-100 left-0" : "opacity-0 -left-full"
        }`}
      >
        {links.map((link, i) => (
          <li
            key={i}
            className="py-4 w-full text-center text-yellow-400 border-b border-gray-700 cursor-pointer hover:bg-gray-800"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
