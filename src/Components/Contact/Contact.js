import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d19u2fc",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
            className="user"
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
