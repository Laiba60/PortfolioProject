import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { HiMail, HiLocationMarker, HiUser } from "react-icons/hi";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

// Personal details with icons


const jobSummary =
"MERN Stack Developer with 1+ year of experience building scalable, responsive, and interactive web applications. Skilled in MongoDB, Express.js, React, and Node.js, with a strong focus on clean code, modern UI/UX design, and delivering high-quality digital solutions."
const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Section Header */}
      <PageHeader
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-10">

        {/* LEFT: Job Summary */}
        <Animate
          play
          duration={1.5}
          start={{ opacity: 0, transform: "translateX(-50px)" }}
          end={{ opacity: 1, transform: "translateX(0)" }}
          className="md:w-2/3"
        >
          <h3 className="text-yellow-400 text-3xl font-bold mb-4">
            Mern Stack Developer
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed tracking-wide text-justify">
            {jobSummary}
          </p>
        </Animate>

        {/* RIGHT: Personal Info */}
       

      </div>
    </section>
  );
};

export default About;