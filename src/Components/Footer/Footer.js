import React from "react";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>SajjadSaroya6@gmail.com</span>
        <div className="f-icons">
          <a
            title="go to instagram profile"
            href="https://www.instagram.com/sajjad_saroya/"
          >
            <Insta size="3rem" />
          </a>
          <a href="" title="go to facbook profile">
            <Facebook color="white" size="3rem" />
          </a>
          <a title="go to Github profile" href="https://github.com/Sajjad124">
            <Github color="white" size="3rem" />
          </a>
          <a
            title="go to linkedin profile"
            href="https://pk.linkedin.com/in/sajjad-saroya-1a7359238?trk=people-guest_people_search-card"
          >
            <Linkedin color="white" size="3rem" />
          </a>
        </div>
        <div>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
