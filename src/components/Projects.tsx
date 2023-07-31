import React from "react";
import projects from "../util/projects";
import ProjectCard from "./ProjectCard";
import Bg from "./Bg";
import Bg2 from "./Bg2";
type Project = (typeof projects)[0];
const Projects = () => {
  return (
    <section
      role="region"
      className="relative w-full min-h-screen flex flex-col gap-y-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-50"></div>
      <div className="px-4 text-4xl 2">{"<Projects/>"}</div>

      <div className="w-full h-full grid grid-cols-2   gap-12 px-4 ">
        {projects.map((el, i) => (
          <ProjectCard project={el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
