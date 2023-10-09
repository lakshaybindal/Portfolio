import React from "react";
import "./App.css";
import Navbar from "./nav-bar";
import Main from "./main";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Back from "./images/Screenshot 2023-10-09 172143.png";
import Footer from "./footer";

function App() {
  return (
    <div>
      <div className="video-container">
        <img src={Back} alt=""></img>
      </div>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
