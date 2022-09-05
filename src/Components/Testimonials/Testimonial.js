import React from "react";
import "./Testimonial.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import profile1 from "..//..//img/profile1.jpg";
import profile2 from "..//..//img/profile2.jpg";
import profile3 from "..//..//img/profile3.jpg";
import profile4 from "..//..//img/profile4.jpg";
import profile5 from "..//..//img/profile5.jpg";

const clients = [
  {
    url: profile1,
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
    voluptatcum laborum numquam blanditiis harum quisquam eius sed
    odit fugiat iusto fuga praesentium optio,`,
  },
  {
    url: profile2,
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
    voluptatcum laborum numquam blanditiis harum quisquam eius sed
    odit fugiat iusto fuga praesentium optio,`,
  },
  {
    url: profile3,
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
    voluptatcum laborum numquam blanditiis harum quisquam eius sed
    odit fugiat iusto fuga praesentium optio,`,
  },
  {
    url: profile4,
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
    voluptatcum laborum numquam blanditiis harum quisquam eius sed
    odit fugiat iusto fuga praesentium optio,`,
  },
  {
    url: profile5,
    caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
    voluptatcum laborum numquam blanditiis harum quisquam eius sed
    odit fugiat iusto fuga praesentium optio,`,
  },
];

const Testimonial = () => {
  return (
    <div className="main">
      <div className="head">Testimonial</div>
      <div className="t-slider">
        <Slide>
          {clients.map((client, index) => (
            <div className="all-slide" key={index}>
              <img src={client.url} alt="" />
              <span>{client.caption}</span>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Testimonial;
