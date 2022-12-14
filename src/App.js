import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Tasks from "./Components/Task/Tasks";
import Portfolio from "./Components/Portfolio/portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Tasks />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

// Portfolio with reactjs, useState Hook, useContext Hook, IconScout, Framer Motion, react smooth scroll, CSS3, Email js, Swiper js
export default App;
