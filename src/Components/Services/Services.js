import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          lorem ipsum is a simply dummy text of printing a lorem
          <br />
          lorem ipsum is simpley a text of printing
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Canva,Photoshop,StarUml, Figma, Framers"}
          />
        </div>
        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML,CSS,JavaScript, React, ES6, MySQL"}
          />
        </div>
        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"Android"}
            detail={"Android,FrontEnd, Backend,"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
