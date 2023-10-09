import React from "react";
import Profile from "./images/WhatsApp.jpg";

function Main() {
  return (
    <main>
      <div className="container-fluid first-section">
        <section className="firstSection" id="home">
          <div className="leftSection">
            Hi, My name is <span className="purple">Lakshay</span>
            <div className="">and I am a passionate</div>
            <span id="element">Web Developer</span>
            <div className="social-icon">
              <a href="https://instagram.com/lakshay_bindal?igshid=MzNlNGNkZWQ4Mg==">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/lakshay-bindal-705aa6269">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/lakshaybindal">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="rightSection">
            <img src={Profile} alt=""></img>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Main;
