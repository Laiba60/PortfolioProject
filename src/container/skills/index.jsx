import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import skillsData from "./utils";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skilss_content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skilss_content-wrapper_inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skilss_content-wrapper_inner-content_category-text">
                {item.label}
              </h3>
            </Animate>

            <div className="progress-section">
              {item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  key={j}
                  play
                  duration={1}
                  keyframes={["opacity: 0", "opacity: 1"]}
                  iterationCount="1"
                >
                  <div className="progressbar-wrapper">
                    <p>{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeColor="var(--yellow-theme-main-color)"
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
