import React from "react";
import "./intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Sajjad1 from "../../img/sajjad1.png";
import Sajjad2 from "../../img/sajjad2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Boy from "../../img/boy.png";
const intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am </span>
          <span>Sajjad</span>
          <span>
            Reactjs Developer with high levelof experience in web designing and
            development, producting the quaility work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt=""></img>
          </a>
          <a href="">
            <img src={Linkedin} alt=""></img>
          </a>
          <a href="">
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt=""></img>
        <img src={Vector2} alt=""></img>
        <img
          src={Boy}
          // style={{ width: "300px", height: "400px"}}
          alt=""
        ></img>
        <div>
          <FloatingDiv />
        </div>
      </div>
    </div>
  );
};

export default intro;
