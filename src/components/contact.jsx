import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-5 py-10">
      <PageHeader
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-col items-center gap-8">

        {/* HEADER TEXT */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="text-yellow-400 text-xl font-extrabold mt-3 text-center">
            Let's Talk
          </h3>
        </Animate>

        {/* FORM */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form className="flex flex-col items-center gap-5 w-full">

            {/* NAME */}
            <div className="w-full max-w-xl flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-yellow-400 text-lg font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-3 text-sm border-2 border-yellow-400 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* EMAIL */}
            <div className="w-full max-w-xl flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-yellow-400 text-lg font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 text-sm border-2 border-yellow-400 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* MESSAGE */}
            <div className="w-full max-w-xl flex flex-col">
              <label
                htmlFor="description"
                className="mb-1 text-yellow-400 text-lg font-medium"
              >
                Message
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="w-full px-4 py-3 text-sm border-2 border-yellow-400 rounded-md outline-none resize-y focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full max-w-xs mt-3 px-6 py-3 bg-yellow-400 text-white rounded-md text-base font-semibold hover:bg-gray-500 transition"
            >
              Send Message
            </button>

          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
