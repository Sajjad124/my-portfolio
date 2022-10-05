import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Sajjad Saroya</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              activeClass="activeClass"
              smooth={true}
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              activeClass="activeClass"
              smooth={true}
            >
              {" "}
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              activeClass="activeClass"
              smooth={true}
            >
              {" "}
              <li>Experiences</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              activeClass="activeClass"
              smooth={true}
            >
              {" "}
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              activeClass="activeClass"
              smooth={true}
            >
              {" "}
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" activeClass="activeClass" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
