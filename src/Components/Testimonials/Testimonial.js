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
            <span
              style={{
                color: "black",
                fontSize: "20px",
                textAlign: "justify",
                padding: "50px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatcum laborum numquam blanditiis harum quisquam eius sed
              odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,
            </span>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Testimonial;
