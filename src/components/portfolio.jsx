import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

// Example project data
const projectsData = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with React, TailwindCSS, and animations.",
    image: "/assets/images/portfolio1.jpg", // replace with your project images
    link: "https://github.com/laibasaeed/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "A fully functional e-commerce web app with shopping cart and payment integration.",
    image: "/assets/images/portfolio2.jpg",
    link: "https://github.com/laibasaeed/ecommerce",
  },
  {
    title: "School Management System",
    description: "Web application for managing school operations and student data efficiently.",
    image: "/assets/images/portfolio3.jpg",
    link: "https://github.com/laibasaeed/school-management",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-5 bg-gray-900">
      <PageHeader
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projectsData.map((project, i) => (
          <Animate
            key={i}
            play
            duration={1}
            delay={i * 0.2}
            start={{ opacity: 0, transform: "translateY(50px)" }}
            end={{ opacity: 1, transform: "translateY(0px)" }}
          >
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-yellow-400 text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-gray-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
