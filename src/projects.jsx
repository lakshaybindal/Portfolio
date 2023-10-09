import React from "react";

function Projects() {
  return (
    <section id="Projects">
      <div className="container">
        <h1 className="sub-title project-title">My Projects</h1>
        <div className="project-list">
          <div className="badge pro1 row">
            <div className="text ">
              <div>
                <h1>Portfolio</h1>
                <p>My Portfolio</p>
                <p>website showing</p>
                <p>my work over</p>
                <p> here.</p>
                <a
                  className="link"
                  href="https://github.com/lakshaybindal/Portfolio"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="badge pro2 row">
            <div className="text ">
              <div>
                <h1>To-Do list </h1>
                <p>To-Do is a </p>
                <p>app to write your</p>
                <p>tasks and remove</p>
                <p>once done.</p>
                <a
                  className="link"
                  href="https://github.com/lakshaybindal/To-Do-list"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="badge pro3 row">
            <div className="text ">
              <div>
                <h1>Notes App</h1>
                <p>App which </p>
                <p>allow you to add</p>
                <p>notes and also</p>
                <p>delete them..</p>
                <a
                  className="link"
                  href="https://github.com/lakshaybindal/Keeper-App"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-div">
        <a className="button-see" href="https://github.com/lakshaybindal">
          <button className="see-button">See More</button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
