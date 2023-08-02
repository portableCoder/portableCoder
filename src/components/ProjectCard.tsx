import type projects from "../util/projects";
import Window from "./Window";
import technologies, { Tech } from "../util/technologies";
import { animated, useInView, useSpring } from "react-spring";
type Project = (typeof projects)[0];
interface ProjectCardProps {
  project: Project;
}
const ProjectCard = (props: ProjectCardProps) => {
  const proj = props.project;
  const [ref, inView] = useInView({});
  const imgSpring = useSpring({
    x: inView ? 0 : -50,
    opacity: inView ? 1 : 0,
  });
  const windowSpring = useSpring({
    x: inView ? 0 : 100,
    opacity: inView ? 1 : 0,
  });
  return (
    <>
      <animated.div className=" col-span-2 md:col-span-1 w-full h-full flex flex-col gap-y-2 border-2 border-zinc-600">
        <animated.img
          alt="project"
          style={{
            ...imgSpring,
            imageRendering: "crisp-edges",
          }}
          src={proj.images[0]}
          className="object-cover w-full h-full"
        />
      </animated.div>
      <animated.div
        style={windowSpring}
        ref={ref}
        className="w-full h-full col-span-2 md:col-span-1 "
      >
        <Window
          title={proj.name}
          className="w-full h-full font-mono bg-opacity-50 bg-zinc-800 backdrop-blur "
        >
          <div className="w-full h-full flex flex-col justify-between bg-transparent  gap-y-4 ">
            <div>{proj.description}</div>
            <div className="self-end my-14  bottom-7 left-0 flex-col  w-full items-center">
              <div className="flex justify-end w-full md:w-auto gap-x-2">
                {proj.link[1] && (
                  <a className="btn" href={proj.link[1]}>
                    Live Link
                  </a>
                )}
                <a className="btn" href={proj.link[0]}>
                  Repository Link{" "}
                </a>
              </div>
              <>
                <div className="w-full h-full   gap-x-4 flex flex-1 flex-wrap gap-y-1 py-4 items-center justify-end ">
                  {proj.technologies.map((el, i) => {
                    const tech = technologies[el as Tech];
                    if (tech) {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={i}
                          className="text-lg md:text-xl flex flex-col gap-y-2 items-center"
                        >
                          <div>
                            <Icon />
                          </div>
                          <div className="text-base md:text-lg">{el}</div>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            </div>
          </div>
        </Window>
      </animated.div>
    </>
  );
};

export default ProjectCard;
