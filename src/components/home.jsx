
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profileImg from "../assets/images/Profileimage.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <p className="text-yellow-400">Hi, This is me</p>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-yellow-400">Laiba Saeed</span>
          </h1>

          <h2 className="text-xl font-semibold text-yellow-400">
             
            <span className="text-yellow-400">MERN STACK DEVELOPER</span> 
            
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Crafting seamless digital experiences with
            <span className="text-gray-400 font-medium">
              {" "}MongoDB, Express.js, React.js, and Node.js
            </span>.
            Passionate about building scalable web applications that merge creativity with cutting-edge technology.
          </p>

          <button className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
            VIEW MY WORK
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="border border-gray-700 p-2 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition">
              <FaGithub />
            </a>
            <a href="#" className="border border-gray-700 p-2 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="border border-gray-700 p-2 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (Profile Image with Glow Effect) */}
        <div className="flex justify-center md:justify-end relative">
          <div className="relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-3xl opacity-30 animate-pulse"></div>

            {/* Profile Image */}
            <img
              src={profileImg}   // Replace with your image path
              alt="Profile"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
