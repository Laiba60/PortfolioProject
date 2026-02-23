import React from "react";
import { Animate } from "react-simple-animate";
import profileImg from "../assets/images/Profileimage.jpg";

const Home = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/LaibaSaeed.pdf";
    link.download = "LaibaSaeed.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full px-6 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Animate
            play
            duration={1.5}
            start={{ opacity: 0, transform: "translateX(-100px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <h1 className="text-yellow-400 text-5xl sm:text-4xl font-bold mb-4">
              Hello, I'm Laiba.
              <br />
              Frontend Developer
            </h1>

            <p className="text-gray-300 text-lg mb-6 max-w-md">
              I build modern, responsive, and interactive web applications
              using React, TailwindCSS, and modern frontend tools.
            </p>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <button
                onClick={handleScrollToContact}
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-gray-700 transition"
              >
                Hire Me
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-black transition"
              >
                Download Resume
              </button>
            </div>
          </Animate>
        </div>

        {/* RIGHT SIDE */}
        <Animate
          play
          duration={1.5}
          start={{ opacity: 0, transform: "translateX(100px)" }}
          end={{ opacity: 1, transform: "translateX(0)" }}
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
            <img
              src={profileImg}
              alt="Laiba Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
