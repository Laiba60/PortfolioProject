import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils.js";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-10">
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

          <VerticalTimeline layout="1-column" lineColor="#FFEF00">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="pb-7"
                contentStyle={{ background: "#1a1a1a", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid #FFEF00",
                }}
                date={item.date}
                iconStyle={{ background: "#FFEF00", color: "#000" }}
              >
                <div className="mb-3">
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-yellow-400 font-extrabold text-sm">
                    {item.Description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h3 className="text-yellow-400 text-2xl font-bold mb-5 border-b-2 border-yellow-400 pb-2">
            Education
          </h3>

          <VerticalTimeline layout="1-column" lineColor="#FFEF00">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="pb-7"
                contentStyle={{ background: "#1a1a1a", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid #FFEF00",
                }}
                date={item.date}
                iconStyle={{ background: "#FFEF00", color: "#000" }}
              >
                <div className="mb-3">
                  <h3 className="text-yellow-400 font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <h3 className="text-yellow-400 font-bold text-base mb-1">
                    {item.Marks}
                  </h3>
                  <p className="text-yellow-400 font-extrabold text-sm">
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
