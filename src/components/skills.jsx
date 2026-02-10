import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { skillsData } from "../utils.js"; 
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-5 bg-gray-900">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {skillsData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-xl w-full max-w-sm hover:scale-105 transform transition duration-500"
          >
            <Animate
              play
              duration={1}
              delay={0.3 + i * 0.2}
              start={{ transform: "translateY(50px)", opacity: 0 }}
              end={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <h3 className="text-yellow-400 text-xl font-bold mb-6 uppercase border-b-2 border-yellow-400 pb-2 text-center">
                {item.label}
              </h3>
            </Animate>

            <div className="w-full space-y-4 mt-4">
              {item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  key={j}
                  play
                  duration={1}
                  keyframes={["opacity: 0", "opacity: 1"]}
                  iterationCount="1"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-medium">{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeColor="#FFEF00"
                      trailColor="#333"
                      strokeWidth={4}
                      trailWidth={4}
                      strokeLinecap="round"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
