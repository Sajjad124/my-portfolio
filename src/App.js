import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
    </div>
  );
}

// Portfolio with reactjs, useState Hook, useContext Hook, IconScout, Framer Motion, react smooth scroll, CSS3, Email js, Swiper js
export default App;
