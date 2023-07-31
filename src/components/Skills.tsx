import React, { useEffect, useRef, useState } from "react";
import MySkills from "../util/skills";
import { ImFileText2 } from "react-icons/im";
import TreeView from "./TreeView";
import technologies from "../util/technologies";
import Window from "./Window";
import useIsMobile from "../util/useIsMobile";
import { animated, useSpringValue } from "react-spring";
import getStringPercentage from "../util/getStringPercentage";
import { useIntervalEffect } from "@react-hookz/web";
import Bg from "./Bg";

export default function Skills() {
  const buttonClass =
    "items-center gap-y-5 aspect-square justify-center hover:bg-opacity-50  focus:bg-indigo-600 focus:bg-opacity-50 hover:bg-indigo-600  p-4 flex flex-col font-mono";
  const [techName, setTechName] =
    useState<keyof typeof technologies>("ReactJS");

  const tech = technologies[techName];
  const ref = useRef<HTMLDivElement>(null);
  const Icon = technologies[techName].icon;
  const isMobile = useIsMobile();
  const [pct, setPct] = useState(0);
  useEffect(() => {
    setPct(0);
  }, [techName]);
  useIntervalEffect(() => {
    if (pct < 100) {
      setPct((pct) => pct + 1);
    }
  }, 10);
  return (
    <div
      role="skills"
      className="min-w-screen  min-h-screen p-4 flex flex-col gap-y-4 overflow-hidden"
    >
      <div className="text-4xl font-roboto">{"<My_Skills/>"}</div>
      <div className="absolute w-full h-full -mx-16  my-32 scale-125 -z-50">
        <Bg className="w-full h-full" />
      </div>
      <div className="w-full min-h-screen flex md:flex-row-reverse flex-col-reverse gap-x-12   ">
        {
          <div className="w-full h-screen">
            <Window className="w-full md:w-3/4 mx-auto h-1/2 md:h-5/6 md:5/6 bg-zinc-950 ">
              <div>
                {" "}
                {<tech.icon className=" text-3xl md:text-7xl"></tech.icon>}
              </div>
              <div className="text-2xl">{techName}</div>
              <animated.div className="flex items-center justify-center gap-x-2 w-full whitespace-nowrap text-sm md:text-lg text-center">
                <div>{getStringPercentage(tech.description, pct)}</div>
                <div className="animate-pulse">█</div>
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
    </div>
  );
}
