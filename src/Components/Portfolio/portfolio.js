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

// <div className="portfolio">
// <Swiper
//   spaceBetween={50}
//   slidesPerView={3}
//   onSlideChange={() => console.log("slide change")}
//   onSwiper={(swiper) => console.log(swiper)}
// >
//   <SwiperSlide>
//     <img src={SideBar} alt="" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src={Ecommerce} alt="" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src={MusicApp} alt="" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src={Hoc} alt="" />
//   </SwiperSlide>
// </Swiper>
// </div>

// <div className="portfolio">
//   <span>Recent Projects</span>
//   <span>Portfolio</span>

//   <swiper
//     spaceBetween={30}
//     slidesPerView={3}
//     grabCursor={true}
//     className="portfolio-slider"
//   >
//     <SwiperSlide>
//       <img src={SideBar} alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//       <img src={Ecommerce} alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//       <img src={MusicApp} alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//       <img src={Hoc} alt="" />
//     </SwiperSlide>
//   </swiper>
// </div>
