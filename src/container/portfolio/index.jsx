import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import Imagefive from "../../assets/images/image5.png";
import Imagetwo from "../../assets/images/imag2.jpeg";
import Imagethree from "../../assets/images/image3.jpeg";
import Imagefour from "../../assets/images/image4.jpeg";
import "./style.css";

const portfoliodata = [
  {
    id: 1,
    name: "Paradise Website Contributors ",
    image: Imagefive,
    link: "https://github.com/Laiba60",
  },
  {
    id: 2,
    name: "Personal Portfolio website",
    image: Imagetwo,
    link: "https://github.com/Laiba60",
  },
  {
    id: 3,
    name: "Password Manager Website Contributors",
    image: Imagethree,
    link: "https://github.com/Laiba60",
  },
  {
    id: 4,
    name: "Neuromail Website",
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
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>

        <div className="portfolio_content_cards">
          {portfoliodata.map((item) => (
            <div className="portfolio_content_cards_item" key={item.id}>
              <div className="portfolio_content-cards_imag-wrapper">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="portfolio_content_cards_item_title">
                {item.name}
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit_button"
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
