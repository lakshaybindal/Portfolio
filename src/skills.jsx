import React from "react";
import C from "./images/c.png";
import Cpp from "./images/c++.svg";
import R from "./images/react.png";
import Html from "./images/html.png";
import Css from "./images/css.png";
import Javascript from "./images/javascript.png";
function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skills-row">
        <div className="techstack">
          <div className="skill">
            <img src={Html} alt=""></img>
            <p className="skillName">HTML</p>
          </div>
          <div className="skill">
            <img src={Css} alt=""></img>
            <p className="skillName">CSS</p>
          </div>
          <div className="skill">
            <img src={Javascript} alt=""></img>
            <p className="skillName">JavaScript</p>
          </div>
        </div>
        <div className="techstack2">
          <div className="skill">
            <img src={R} alt=""></img>
            <p className="skillName"> React</p>
          </div>
          <div className="skill">
            <img src={Cpp} alt=""></img>
            <p className="skillName">C++</p>
          </div>
          <div className="skill">
            <img src={C} alt=""></img>
            <p className="skillName">C Language</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
