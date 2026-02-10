import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { resumeData } from "../utils.js";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-10 bg-gray-900">
      <PageHeader
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-col lg:flex-row w-full px-5 gap-10 lg:gap-20">

        {/* EXPERIENCE */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h3 className="text-yellow-400 text-2xl font-bold mb-5 border-b-2 border-yellow-400 pb-2">
            Experience
          </h3>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-yellow-400"></div>

            <div className="flex flex-col gap-8 ml-12">
              {resumeData.experience.map((item, i) => (
                <div key={i} className="relative pl-8">
                  {/* timeline circle */}
                  <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-yellow-400"></div>

                  <div className="bg-gray-800 p-4 rounded-md shadow-lg">
                    <h3 className="text-yellow-400 font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-yellow-400 font-extrabold text-sm mb-1">{item.Description}</p>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h3 className="text-yellow-400 text-2xl font-bold mb-5 border-b-2 border-yellow-400 pb-2">
            Education
          </h3>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-yellow-400"></div>

            <div className="flex flex-col gap-8 ml-12">
              {resumeData.education.map((item, i) => (
                <div key={i} className="relative pl-8">
                  {/* timeline circle */}
                  <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-yellow-400"></div>

                  <div className="bg-gray-800 p-4 rounded-md shadow-lg">
                    <h3 className="text-yellow-400 font-bold text-lg mb-1">{item.title}</h3>
                    <h4 className="text-yellow-400 font-bold text-base mb-1">{item.Marks}</h4>
                    <p className="text-yellow-400 font-extrabold text-sm">{item.Description}</p>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
