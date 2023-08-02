import { useEffect, useRef, useState } from "react";
import MySkills from "../util/skills";
import TreeView from "./TreeView";
import technologies, { Tech } from "../util/technologies";
import Window from "./Window";
import { animated, useSpring } from "react-spring";
import getStringPercentage from "../util/getStringPercentage";
import { useIntervalEffect } from "@react-hookz/web";
import Bg from "./Bg";
import useSection from "../util/useSection";
import SectionHeading from "./SectionHeading";
export default function Skills() {
  const [techName, setTechName] = useState<Tech>("ReactJS");
  const tech = technologies[techName];
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    setPct(0);
  }, [techName]);
  useIntervalEffect(() => {
    if (pct < 100) {
      setPct((pct) => pct + 1);
    }
  }, 10);
  const [containerRef, _, inView] = useSection("skills");
  const spring = useSpring({
    opacity: inView ? 1 : 0,
  });
  return (
    <animated.section
      ref={containerRef}
      style={spring}
      id="skills"
      className="min-w-screen  min-h-screen p-4 flex flex-col gap-y-4 overflow-hidden"
    >
      <SectionHeading name="Skills" />
      <div className="absolute w-full h-full -mx-16  my-32 scale-125 -z-50">
        <Bg className="w-full h-full" />
      </div>
      <div className="w-full min-h-screen flex md:flex-row-reverse flex-col-reverse gap-x-12   ">
        {
          <div className="w-full  h-screen">
            <Window
              ref={ref}
              title="Tech Info"
              className="w-full md:w-3/4 mx-auto h-3/4 aspect-square md:aspect-auto md:h-5/6 md:5/6 bg-opacity-50 backdrop-blur-lg bg-zinc-800 "
            >
              <div>
                {" "}
                {<tech.icon className=" text-3xl md:text-7xl"></tech.icon>}
              </div>
              <div className="text-2xl">{techName}</div>
              <animated.div className="flex items-center justify-center gap-x-1 w-full  text-sm md:text-lg text-center">
                <div>
                  {getStringPercentage(tech.description, pct)}

                  <span className="animate-pulse">█</span>
                </div>
              </animated.div>
            </Window>
          </div>
        }
        <div className="flex flex-col w-2/5  font-mono gap-y-3">
          <TreeView
            skill={MySkills}
            skillName="/dev/skills"
            selectedTech={techName}
            mx={0}
            onTechSelect={(t) => {
              setTechName(t as typeof techName);
              if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </div>
    </animated.section>
  );
}
