import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="c-form">
      <div className="w-left">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="user_email"
            className="email"
            placeholder="Enter your email"
          ></input>
          <textarea
            name="message"
            className="message"
            placeholder="Enter your message"
          ></textarea>
          <input type="submit" value="send" className="button"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
