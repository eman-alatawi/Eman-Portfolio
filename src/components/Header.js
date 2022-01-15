import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="Header-section" id="home">
      <div className="pt-1 text-center ">
        <p className="text-capitalize myTitle">Full Stack Web Developer | MERN </p>
        <Typed
          className=" typed-text "
          strings={[
            
            "React.js",
            "Redux Toolkit",
            "HTML 5",
            "CSS 3",
            "SCSS",
            "Styled Components",
            "Bootstrap 5",
            "Java Spring Boot",
            "JavaScript",
            "jquery",
            "Tailwindcss",
            "Material-UI",
            "GitHub",
            "MySQL",
            "MongoDB", 
            "Express.js",
            "Node.js",
            "Docker",
            "AWS"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
}

export default Header;
