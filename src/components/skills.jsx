import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { skillsData } from "../utils.js"; 

import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-5">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-wrap justify-center gap-5">

        {skillsData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-gray-900 rounded-lg p-5 shadow-lg min-w-[300px] max-w-[350px]"
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="text-yellow-400 text-lg font-bold mb-5 uppercase border-b-2 border-yellow-400 pb-1 text-center">
                {item.label}
              </h3>
            </Animate>

            <div className="w-full">
              {item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  key={j}
                  play
                  duration={1}
                  keyframes={["opacity: 0", "opacity: 1"]}
                  iterationCount="1"
                >
                  <div className="mb-4">
                    <p className="text-white text-sm mb-1">{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeColor="#FFEF00"
                      trailWidth={2}
                      strokeLinecap="square"
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
