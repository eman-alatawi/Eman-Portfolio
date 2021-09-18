import React from "react";
import banner from "../images/banner.png";


function AboutMe() {
  return (
    <div className="about-me" id="aboutMe">
      <img src={banner} alt="banner" />
      <div>
        <h3>About Me</h3>
        <p>
          Hi, I am Eman, a full stack developer. I have been contributed to
          Multi-phases of the development lifecycle and Wrote a well-designed,
          testable, and efficient code following the conventions of the
          programming in order to give a professional look. I'm ready to build
          full-stack web applications (using Java Spring boot, Spring security,
          Jwt Authentication, JPA, Rest API, React, Html5, CSS3, JavaScript,
          jQuery, MySQL, Tailwind CSS, Bootstrap, Material-UI, Axios, and
          GitHub) with MVC design pattern and design the wireframes and mockups
          with UI & UX concepts in mind.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
