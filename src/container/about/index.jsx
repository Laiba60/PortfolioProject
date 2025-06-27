import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeaderContent"; 

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default About;
