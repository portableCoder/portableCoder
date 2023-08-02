import projects from "../util/projects";
import ProjectCard from "./ProjectCard";
import useSection from "../util/useSection";
import SectionHeading from "./SectionHeading";
import Bg3 from "./Bg3";
type Project = (typeof projects)[0];
const Projects = () => {
  const [containerRef] = useSection("work");

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative w-full min-h-screen flex flex-col gap-y-6 overflow-hidden"
    >
      <SectionHeading name={"Projects"} />
      <div className="absolute top-0 left-0 w-full h-full -z-50">
        <Bg3 width={"0"} height={"0"} className="w-full h-full my-24 mx-12" />
      </div>
      <div className="w-full h-full grid grid-cols-2   gap-12 px-4 ">
        {projects.map((el, i) => (
          <ProjectCard project={el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
