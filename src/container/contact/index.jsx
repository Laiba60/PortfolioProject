import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader"; 
const Contact = () => {
  return (
    <section id="Contact Me" className="contact">
      <PageHeader
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default Contact;
