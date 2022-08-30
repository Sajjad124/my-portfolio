import React from "react";
import "./Testimonial.css";
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

const Testimonial = () => {
  return (
    <div className="t-slider">
      <span>Testimonial</span>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="all-slide" key={index}>
            <img src={slideImage.url} alt="" />
            <div>
              dfdfdffffffffffffffffffffffffffffffffffffffff
              dfdfdffffffffffffffffffffffffffffffffffffffffsdfsfs
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Testimonial;
