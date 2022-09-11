import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="c-form">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Enter your name..."
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Enter your email..."
          />
          <textarea
            name="message"
            className="user"
            placeholder="your message here..."
          />
          <input type="submit" value="send" className="button" />
          <div
            className="blur c-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
