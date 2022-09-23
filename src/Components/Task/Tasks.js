import React from "react";
import "./Tasks.css";
import upwork from "../../img/Upwork.png";
import amazon from "../../img/amazon.png";
import fiverr from "../../img/fiverr.png";
import shopify from "../../img/Shopify.png";
import facebook from "../../img/Facebook.png";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-scroll";

const Tasks = () => {
  return (
    <div className="tasks" id="Tasks">
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
      {/* right side */}
      <div className="t-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          vieeport={{ margin: "-40px" }}
          transtion={{ duration: 3.5, type: "spring", ease: "easeout" }}
          className="t-mainCircle"
        >
          <div className="t-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="t-secCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="t-secCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="t-secCircle">
            <img src={shopify} alt="" />
          </div>
          <div className="t-secCircle">
            <img src={facebook} alt="" />
          </div>
        </motion.div>

        <div className="t-backCircle blueCircle"></div>
        <div className="t-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Tasks;
