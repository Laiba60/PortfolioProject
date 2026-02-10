import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-5 bg-gray-900">
      <PageHeader headerText="Contact Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="max-w-4xl mx-auto flex flex-col gap-10 mt-10">

        <Animate
          play
          duration={1.2}
          start={{ opacity: 0, transform: "translateY(-50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <h3 className="text-yellow-400 text-2xl font-bold text-center">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1.2}
          start={{ opacity: 0, transform: "translateY(50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <form className="flex flex-col gap-6 bg-gray-800 p-8 rounded-xl shadow-xl">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-gray-700 transition"
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
