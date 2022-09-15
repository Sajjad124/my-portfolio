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
          <a href>
            <img src={Github} alt=""></img>
          </a>
          <a href>
            <img src={Linkedin} alt=""></img>
          </a>
          <a href>
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt=""></img>
        <img src={Vector2} alt=""></img>
        <img
          src={Sajjad2}
          style={{ width: "320px", height: "450px", left: "19%" }}
          alt=""
        ></img>
        <img src={glassesimoji} alt=""></img>
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "14rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default intro;
