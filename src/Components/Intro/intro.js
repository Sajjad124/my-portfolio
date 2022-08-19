import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

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
          <img src={Github} alt=""></img>
          <img src={Linkedin} alt=""></img>
          <img src={Instagram} alt=""></img>
        </div>
      </div>
      <div className="i-right">i am right side</div>
    </div>
  );
};

export default intro;
