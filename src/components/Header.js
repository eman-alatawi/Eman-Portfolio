import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="Header-section" id="home">
      <div className="pt-1 text-center ">
        <p className="text-capitalize myTitle">Full stack developer</p>
        <Typed
          className=" typed-text "
          strings={[
            "Java Spring Boot",
            "React",
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "Jquery",
            "Tailwind CSS",
            "Material-UI",
            "GitHub",
            "MySQL",
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
