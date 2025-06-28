import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import { Animate } from "react-simple-animate";
import "./style.css";

const Contact = () => {
  return (
    <section id="Contact Me" className="contact">
      <PageHeader
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact_content-header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_controls">
              <div className="nameWrapper">
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="InputName"
                  type="text"
                />
              </div>

              <div className="emailWrapper">
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="InputEmail"
                  type="email"
                />
              </div>

              <div className="descriptionWrapper">
                <label htmlFor="description" className="descriptionLabel">
                  Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="InputDescription"
                />
              </div>

              <button type="submit">Send Message</button>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
