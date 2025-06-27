import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader"; 
import { Animate } from "react-simple-animate";
import './style.css'
const personaldetails=[
  {
    label:"Name",
    value:"Laiba Saeed"
  },
  {
    label:"Age",
    value:"27",
  },
  {
    label:"Address",
    value:"Pakistan"
  },
  {
    label:"email",
    value:"laibasaeed026@gmail.com"
  }
]
const jobsummary =
  "Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you'll be judged by your ability to use UX and UI concepts and follow design guidelines. It's about expressing your attention to detail and how you can help implement design ideas for your future employer.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front end Developer</h3>
            <p>{jobsummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Personal Information</h3>
            <ul>
              {personaldetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">Services wrapper</div>
      </div>
    </section>
  );
};

export default About;
