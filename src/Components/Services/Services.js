import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Sajjad-Resume.pdf";
import { motion } from "framer-motion/dist/framer-motion";

const Services = () => {
  const transtion = { duration: 1, type: "spring", ease: "easeOut" };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          lorem ipsum is a simply dummy text of printing a lorem
          <br />
          lorem ipsum is simpley a text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "16rem" }}
          transtion={transtion}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Canva,Photoshop,StarUml, Figma, Framers"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14%" }}
          transtion={transtion}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML,CSS,JavaScript, React, ES6, MySQL"}
          />
        </motion.div>
        <motion.div
          initial={{ right: "25%" }}
          whileInView={{ left: "14rem" }}
          transtion={transtion}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Android"}
            detail={"Android,FrontEnd, Backend, API, Google Map"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ backgroud: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
