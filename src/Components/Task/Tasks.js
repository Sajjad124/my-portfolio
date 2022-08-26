import React from "react";
import "./Tasks.css";
import upwork from "..//..//img//Upwork.png";
import amazon from "..//..//img//amazon.png";
import fiverr from "..//..//img//fiverr.png";
import shopify from "..//..//img//Shopify.png";
import facebook from "..//..//img//Facebook.png";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="awesome">
        <span>Tasks Done for </span>
        <span>Our Clients</span>
        <span>
          lorem ipsum is a simply dummy text of printing a lorem
          <br />
          lorem ipsum is simpley a text of printing
        </span>
        <button className="button s-button">HIre me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Tasks;
