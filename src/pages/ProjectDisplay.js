import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
        <p className="desc">{project.description}</p>
      </p>
      <div className="icons">
        {project.link}
        {project.link2}
      </div>
    </div>
  );
}

export default ProjectDisplay;
