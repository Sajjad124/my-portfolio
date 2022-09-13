import React from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_d19u2fc",
  //       "template_3lmkk5p",
  //       form.current,
  //       "m2EKzJHuee128syDZ"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
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
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Enter your email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="your message here"
          />
          <input type="submit" value="Send it" className="button" />
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
