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
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full px-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-yellow-400 text-6xl md:text-5xl sm:text-3xl font-bold overflow-hidden whitespace-nowrap animate-typing">
            Hello, I'm Laiba.
            <br />
            Frontend Developer
          </h1>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <div className="flex gap-4 mt-4 justify-center">
              <button
                onClick={handleScrollToContact}
                className="px-10 py-2 text-sm bg-black text-white border border-black rounded hover:text-yellow-400 transition"
              >
                Hire Me
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-10 py-2 text-sm bg-black text-white border border-black rounded hover:text-yellow-400 transition"
              >
                Download Resume
              </button>
            </div>
          </Animate>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-5 md:mt-0">
          <img
            src={profileImg}
            alt="Laiba Profile"
            className="w-72 h-72 object-cover rounded-full mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
