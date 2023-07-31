import { useRef } from "react";
import type projects from "../util/projects";
import Window from "./Window";
import { isMobile } from "react-device-detect";
import { useMeasure } from "@react-hookz/web";
import technologies, { Tech } from "../util/technologies";
type Project = (typeof projects)[0];
interface ProjectCardProps {
  project: Project;
}
const ProjectCard = (props: ProjectCardProps) => {
  const proj = props.project;
  return (
    <>
      <div className=" col-span-2 md:col-span-1 w-full h-full flex flex-col gap-y-2 border-4 border-white">
        <img
          role="figure"
          style={{
            imageRendering: "crisp-edges",
          }}
          src={proj.images[0]}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full h-full col-span-2 md:col-span-1">
        <Window title={proj.name} className="w-full h-full font-mono ">
          <div className="w-full h-full ">
            <div>{proj.description}</div>
            <div className="w-full h-full my-12  gap-x-2 flex flex-1 flex-wrap gap-4 items-center  justify-end">
              {proj.technologies.map((el) => {
                const tech = technologies[el as Tech];
                if (tech) {
                  return (
                    <div className="text-xl md:text-2xl flex flex-col gap-y-2 items-center">
                      <div>
                        <tech.icon />
                      </div>
                      <div className="text-lg md:text-xl">{el}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </Window>
      </div>
    </>
  );
};

export default ProjectCard;
