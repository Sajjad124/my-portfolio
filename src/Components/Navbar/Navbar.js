import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Sajjad</div>
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
              <li>Experience</li>
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
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
