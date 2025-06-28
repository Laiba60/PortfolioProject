import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils.js";
import './style.css'
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experience-header-text">Experience</h3>

          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{ background: "#1a1a1a", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--yellow-theme-main-color)",
                }}
                date={item.date}
                iconStyle={{
                  background: "var(--yellow-theme-main-color)",
                  color: "#000",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <p className="vertical-timeline-element-description">
                    {item.Description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline_education">
          <h3 className="timeline_experience-header-text">Education</h3>

          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical-timeline-element"
                contentStyle={{ background: "#1a1a1a", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid var(--yellow-theme-main-color)",
                }}
                date={item.date}
                iconStyle={{
                  background: "var(--yellow-theme-main-color)",
                  color: "#000",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.Marks}
                  </h3>

                  <p className="vertical-timeline-element-description">
                    {item.Description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
