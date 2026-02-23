import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { resumeData } from "../utils.js";
import { Animate } from "react-simple-animate";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-16 bg-gray-800">
      <PageHeader
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-col lg:flex-row gap-12 px-5 mt-10">

        {/* EXPERIENCE */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-yellow-400 text-2xl font-bold mb-6 border-b-2 border-yellow-400 pb-2">
            Experience
          </h3>

          <div className="relative pl-8">
            <div className="absolute left-2 top-0 w-1 bg-yellow-400 h-full"></div>

            {resumeData.experience.map((item, i) => (
              <Animate
                key={i}
                play
                duration={1}
                delay={i * 0.2}
                start={{ opacity: 0, transform: "translateX(-50px)" }}
                end={{ opacity: 1, transform: "translateX(0)" }}
              >
                <div className="relative mb-8 pl-6">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-yellow-400 border-2 border-black"></div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h4 className="text-yellow-400 font-bold text-lg">{item.title}</h4>
                    <p className="text-yellow-400 text-sm mt-1">{item.Description}</p>
                    <span className="text-gray-400 text-xs mt-1 block">{item.date}</span>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-yellow-400 text-2xl font-bold mb-6 border-b-2 border-yellow-400 pb-2">
            Education
          </h3>

          <div className="relative pl-8">
            <div className="absolute left-2 top-0 w-1 bg-yellow-400 h-full"></div>

            {resumeData.education.map((item, i) => (
              <Animate
                key={i}
                play
                duration={1}
                delay={i * 0.2}
                start={{ opacity: 0, transform: "translateX(50px)" }}
                end={{ opacity: 1, transform: "translateX(0)" }}
              >
                <div className="relative mb-8 pl-6">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-yellow-400 border-2 border-black"></div>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h4 className="text-yellow-400 font-bold text-lg">{item.title}</h4>
                    <p className="text-yellow-400 text-sm mt-1">{item.Description}</p>
                    <span className="text-gray-400 text-xs mt-1 block">{item.date}</span>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
