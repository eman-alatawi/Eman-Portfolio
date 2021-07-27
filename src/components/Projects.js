import React from "react";
import ProjectCard from "./ProjectCard";
import projectsList from "../ProjectsList";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h3>My projects</h3>
      <div className="projects-list">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.proID}
            title={project.title}
            imgUrl={project.imgUrl}
            gitHubUrl={project.gitHubUrl}
            discription={project.discription}
            year={project.year}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
