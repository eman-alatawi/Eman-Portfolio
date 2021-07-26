import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <>
      <div className="pt-1 text-center ">
        <p className="text-uppercase myTitle">Full stack developer</p>
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
    </>
  );
}

export default Header;
