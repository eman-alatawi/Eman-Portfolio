import React from "react";
import ProjectCard from "./ProjectCard";
import projectsList from "../ProjectsList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h3>projects</h3>
      <div className="projects-list">
        <Carousel
          className="carousel"
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
          autoPlay
        >
          {projectsList.map((project) => (
            <ProjectCard key={project.proID} {...project} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
