import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./portfolio.css";
import SideBar from "../../img/sidebar.png";
import Hoc from "../../img/hoc.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";

const portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={SideBar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </swiper>
    </div>
  );
};

export default portfolio;
