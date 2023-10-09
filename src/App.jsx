import React from "react";
import "./App.css";
import Navbar from "./nav-bar";
import Main from "./main";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import video from "./video/Untitled.mp4";
import Footer from "./footer";

function App() {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
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
