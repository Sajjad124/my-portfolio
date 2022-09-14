import React from "react";
import wave from "../../img/wave.png";
import insta from "@iconscout/react-unicons/icons/uil-instagram";
import facebook from "@iconscout/react-unicons/icons/uil-facebook";
import github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>SajjadSaroya6@gmail.com</span>
        <div className="f-icons">
          <insta color="white" size="3rem" />
          <facebook color="white" size="3rem" />
          <github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
