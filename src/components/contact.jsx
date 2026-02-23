import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-5 bg-gray-900">
      <PageHeader headerText="Contact Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="max-w-4xl mx-auto flex flex-col gap-8 mt-10">

        {/* Section Title */}
        <Animate
          play
          duration={1.2}
          start={{ opacity: 0, transform: "translateY(-50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <h3 className="text-yellow-400 text-2xl font-bold text-center">Let's Talk</h3>
        </Animate>

        {/* Contact Form */}
        <Animate
          play
          duration={1.2}
          start={{ opacity: 0, transform: "translateY(50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <form className="flex flex-col gap-4 bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl">

            {/* Name & Email */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-1/2 px-3 py-2 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-1/2 px-3 py-2 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Phone & Subject */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full lg:w-1/2 px-3 py-2 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full lg:w-1/2 px-3 py-2 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-yellow-400 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
            ></textarea>

            {/* Optional Checkbox */}
          

            {/* Submit Button */}
            <button
  type="submit"
  className="w-auto mx-auto px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-gray-700 transition text-sm"
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