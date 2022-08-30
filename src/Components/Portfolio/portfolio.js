import React from "react";
import "./portfolio.css";
import SideBar from "../../img/sidebar.png";
import Hoc from "../../img/hoc.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: MusicApp,
    caption: "Music App",
  },
  {
    url: Ecommerce,
    caption: "Ecommerce",
  },
  {
    url: Hoc,
    caption: "Hoc Work",
  },
  {
    url: SideBar,
    caption: "Side Bar",
  },
];

const portfolio = () => {
  return (
    <div className="slider">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImage.url} alt="" />
            <h3>{slideImage.caption}</h3>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default portfolio;

