import React from "react";

function Contact() {
  function onclick() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxpzhLIN_6vX9IHowzB7typ_M6y89vPJzG6ULJJjwGXVsnj-JQi7HC3GVW6XdT3-BL7/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          msg.innerText = "Your Message has been sent";
          setTimeout(function () {
            msg.innerText = "";
          }, 3000);
          form.reset();
        })

        .catch((error) => console.error("Error!", error.message));
    });
  }
  return (
    <section id="contact">
      <div className="container">
        <div className="contact row">
          <div className="contact-left col">
            <h1 className="sub-title">Contact Me</h1>

            <p>
              <i className="fa-solid fa-paper-plane"></i>
              lakshaybindal999@gmail.com
            </p>

            <p>
              <i className="fa-solid fa-phone"></i>7495008535
            </p>
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
            <a
              href="LakshayBindal_Resume.pdf"
              download
              className="download see-button btn2"
            >
              Download CV
            </a>
          </div>

          <div className="contact-right col">
            <form name="submit-to-google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                s
                required
              />
              <input
                type="text"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                onClick={onclick}
                className="download see-button btn2"
              >
                Submit
              </button>
              <br />
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
