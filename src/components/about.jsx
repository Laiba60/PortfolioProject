import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

const personalDetails = [
  { label: "Name", value: "Laiba Saeed" },
  { label: "Age", value: "21" },
  { label: "Address", value: "Pakistan" },
  { label: "Email", value: "laibasaeed026@gmail.com" },
];

const jobSummary =
  "Front End Developer with 2 years of experience creating responsive, interactive, and modern web applications. Passionate about UI/UX design and writing clean, maintainable code.";

const About = () => {
  return (
    <section id="about" className="py-16 px-5 bg-gray-900">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto mt-10">

        {/* Summary */}
        <Animate
          play
          duration={1.5}
          start={{ opacity: 0, transform: "translateX(-50px)" }}
          end={{ opacity: 1, transform: "translateX(0)" }}
          className="md:w-1/2"
        >
          <h3 className="text-yellow-400 text-3xl font-bold mb-4">Front End Developer</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{jobSummary}</p>
        </Animate>

        {/* Personal Info */}
        <Animate
          play
          duration={1.5}
          start={{ opacity: 0, transform: "translateX(50px)" }}
          end={{ opacity: 1, transform: "translateX(0)" }}
          className="md:w-1/2"
        >
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">Personal Information</h3>
          <ul className="space-y-3">
            {personalDetails.map((item, i) => (
              <li key={i} className="flex justify-between text-gray-300">
                <span className="font-semibold">{item.label}:</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </Animate>

      </div>
    </section>
  );
};

export default About;
