import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

const personaldetails = [
  { label: "Name", value: "Laiba Saeed" },
  { label: "Age", value: "21" },
  { label: "Address", value: "Pakistan" },
  { label: "Email", value: "laibasaeed026@gmail.com" },
];

const jobsummary =
  "Seasoned and independent Front End Developer with 2 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you'll be judged by your ability to use UX and UI concepts and follow design guidelines. It's about expressing your attention to detail and how you can help implement design ideas for your future employer.";

const About = () => {
  return (
    <section id="about" className="w-full px-5 py-10">
      <PageHeader
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-col gap-10 items-start w-full">

        {/* SUMMARY */}
        <div className="w-full max-w-4xl pl-5 md:pl-3">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="text-yellow-400 text-4xl md:text-3xl font-bold mb-3">
              Front End Developer
            </h3>

            <p className="text-gray-400 text-lg md:text-base leading-relaxed text-justify pb-5">
              {jobsummary}
            </p>
          </Animate>
        </div>

        {/* PERSONAL INFO */}
        <div className="w-full max-w-4xl pl-5 md:pl-3">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="text-yellow-400 text-3xl md:text-2xl font-bold mb-4">
              Personal Information
            </h3>

            <ul className="space-y-4">
              {personaldetails.map((item, index) => (
                <li key={index} className="flex flex-wrap gap-4">
                  <span className="text-gray-400 text-lg md:text-base font-semibold">
                    {item.label}:
                  </span>
                  <span className="text-gray-400 text-lg md:text-base">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

      </div>
    </section>
  );
};

export default About;
