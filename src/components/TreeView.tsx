import React, { useState } from "react";
import type { Skill } from "../util/skills";
import { BiChevronRight, BiChevronDown, BiFolder } from "react-icons/bi/index";
import technologies, { Tech } from "../util/technologies";
interface TreeViewProps {
  skill: Skill;
  mx: number;
  selectedTech: string;
  skillName: string;
  onTechSelect: (t: string) => void;
}
const TreeView = ({
  skillName,
  mx,
  skill,
  selectedTech,
  onTechSelect,
}: TreeViewProps) => {
  const [open, setOpen] = useState(true);
  const cls = `flex flex-col gap-y-2 text-sm p-2 box-border ${
    selectedTech === skillName ? "bg-indigo-500" : ""
  }  `;
  const ob = Object.entries(skill);
  let margins = {
    marginLeft: `${mx}px`,
    marginRight: `${mx}px`,
  };
  if (ob.length === 0) {
    mx += 6;
    margins = {
      marginLeft: `${mx}px`,
      marginRight: `${mx}px`,
    };
    const Icon = technologies[skillName as Tech].icon;
    return (
      <div className="w-full">
        <button
          onClick={() => {
            onTechSelect(skillName);
          }}
          className={cls}
          style={margins}
        >
          <div className="flex items-center md:text-lg gap-x-2 ">
            {<Icon />}
            {skillName}
          </div>
        </button>
      </div>
    );
  }
  return (
    <div style={margins} className={cls}>
      <button
        onClick={() => setOpen(!open)}
        className="gap-x-2 flex items-center text-xl md:text-2xl"
      >
        <div>{open ? <BiChevronDown /> : <BiChevronRight />}</div>
        <div>
          <BiFolder />
        </div>
        <div className="text-left whitespace-nowrap">{skillName}</div>
      </button>

      <div
        className={`${cls}  ${
          open ? "h-auto opacity-100" : "h-0 opacity-0 absolute -z-50"
        } `}
      >
        {" "}
        {ob.map(([k, v], i) => (
          <TreeView
            onTechSelect={onTechSelect}
            selectedTech={selectedTech}
            mx={mx + 6}
            skill={v}
            skillName={k}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TreeView;
