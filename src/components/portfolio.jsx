import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";

import Imagefive from "../assets/images/image5.png";
import Imagetwo from "../assets/images/imag2.jpeg";
import Imagethree from "../assets/images/image3.jpeg";
import Imagefour from "../assets/images/image4.jpeg";

const portfoliodata = [
  {
    id: 1,
    name: "Password Manager",
    image: Imagefive,
    link: "https://github.com/Laiba60",
  },
  {
    id: 2,
    name: "Personal Portfolio Website",
    image: Imagetwo,
    link: "https://github.com/Laiba60",
  },
  {
    id: 3,
    name: "Ecommerce Website",
    image: Imagethree,
    link: "https://github.com/Laiba60",
  },
  {
    id: 4,
    name: "Laundry Hub",
    image: Imagefour,
    link: "https://github.com/Laiba60",
  },
  {
    id: 5,
    name: "Elevatrix Website",
    image: Imagefour,
    link: "https://github.com/Laiba60",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Design" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full px-5 py-10">
      <PageHeader
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="max-w-6xl mx-auto">

        {/* FILTERS */}
        <ul className="flex gap-5 mb-10 justify-start">
          {filterData.map((item) => (
            <li
              key={item.filterId}
              className="px-5 py-2 text-sm bg-white border-2 border-yellow-400 rounded-lg cursor-pointer font-medium text-black hover:bg-yellow-400 hover:border-black transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfoliodata.map((item) => (
            <div
              key={item.id}
              className="bg-black border border-gray-200 rounded-xl overflow-hidden text-center shadow-md hover:-translate-y-1 transition"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              <h3 className="py-3 text-yellow-400 font-semibold text-base">
                {item.name}
              </h3>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-5 px-4 py-2 bg-yellow-400 text-black rounded-md font-semibold text-sm hover:bg-black hover:text-white border border-transparent hover:border-yellow-400 transition"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
