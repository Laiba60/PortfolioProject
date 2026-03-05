import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { Animate } from "react-simple-animate";

// Example project data
const projectsData = [
  {
    title: "Fitness Website",
    description: "A responsive portfolio website built with React, TailwindCSS, and animations.",
    image: "/images/FitnessWebsite.png", 
    link: "https://spontaneous-sawine-30d8b0.netlify.app/",
  },
  {
    title: "Password Manager",
    description: "A secure and responsive password manager built with React and Tailwind CSS that allows users to store, generate, and manage passwords safely with a clean and user-friendly interface.",
    image: "/images/FitnessWebsite.png", 
    link: "https://neuropassword.com/",
  },
  {
    title: "Music Website",
    description: "A modern and responsive music website that allows users to explore albums, artists, and playlists with an interactive UI and smooth user experience.",
    image: "/images/MusicWebsite.png",
    link: "https://papaya-babka-682202.netlify.app/",
  },
  {
    title: "Xpertiverse Website",
    description: "A modern and responsive web application built using React.js and Tailwind CSS, featuring a clean UI, reusable components, and optimized performance for a smooth user experience.",
    image: "/images/xpertiverse.png",
    link: "https://steady-parfait-f26b2b.netlify.app/",
  },
  {
    title: "Mini Bussiness Dashboard",
    description: "A responsive mini business dashboard that provides insights through interactive charts and data visualization, helping users track performance, sales, and key business metrics efficiently.",
    image: "/images/MiniBussiness.png",
    link: "https://laiba60.github.io/Mini-Business-Dashboard/",
  },
  {
    title: "Ecommerce Website",
    description: "A fully responsive e-commerce website that allows users to browse products, add items to the cart, and complete purchases with a smooth and user-friendly shopping experience.",
    image: "/images/EcommerceWebsite.png",
    link: "https://spiffy-quokka-5cd07b.netlify.app/",
  },
   {
    title: "The Lanudary Hub",
    description: "A responsive laundry service website that allows users to explore services, book pickups, and manage orders through a clean and user-friendly interface.",
    image: "/images/LanudaryHub.png",
    link: "https://laiba60.github.io/The-Laundary-Hub/",
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-5 bg-gray-800">
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
