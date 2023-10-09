import React from "react";
import about from "./images/HTML5-Developer-760x733-removebg-preview.png";
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row about">
          <div className="col">
            <img className="img2" src={about} alt="" />
          </div>

          <div className="col">
            <div className="intro">
              <h1 className="sub-title">About Me</h1>
              <p>
                Hello there! I am a enthusiastic undergraduate student at Thapar
                Institute of Engineering and Technology, pursuing my B.Tech in
                Computer Science and Business System. With an ardent love for
                coding, I am currently delving deeper into the realm of web
                development, eager to create innovative and interactive digital
                experiences.Alongside my web development journey, I am also
                honing my skills in C++,to understand the intricacies of this
                powerful programming language. With a curious and determined
                mindset, I am eagerly embracing every opportunity to expand my
                knowledge and skills in the dynamic world of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
