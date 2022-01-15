import React from "react";
import banner from "../images/banner.png";


function AboutMe() {
  return (
    <div className="about-me" id="aboutMe">
      <img src={banner} alt="banner" />
      <div>
        <h3>About Me</h3>
        <p>
          Hi, I am Eman, a full stack web developer / mern developer. I have been contributed to
          Multi-phases of the app development lifecycle and wrote a well-designed,
          testable, and efficient code following the conventions of the
          programming in order to give a professional look. I'm ready to build
          full-stack web applications with MERN stack (MongoDB, Express.js, React.js, Node.js) or Java stack (Java Spring boot, Spring security,
          Jwt Authentication, JPA, Rest API, React, MySQL) with MVC design pattern and design the wireframes and mockups with UI & UX concepts in mind. Full Stack Development Languages: JavaScript, Java, Html5, CSS3. Full Stack Development Skills: Java Spring Boot, Spring Security, Spring MVC, AJAX,
          jQuery, Bootstrap, Tailwind CSS, Material-UI, Node.js, ExpressJs, Redux Toolkit, Git & GitHub.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
