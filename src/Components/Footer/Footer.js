import React from "react";
import wave from "../../img/wave.png";
import insta from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>SajjadSaroya6@gmail.com</span>
        <div className="f-icons">
          <insta />
        </div>
      </div>
    </div>
  );
};

export default Footer;
