import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="c-form">
      <div className="c-left">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Enter your name..."
          ></input>
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Enter your email..."
          ></input>
          <textarea
            name="message"
            className="message"
            placeholder="enter your message here..."
          ></textarea>
          <input type="submit" value="send" className="button"></input>
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
