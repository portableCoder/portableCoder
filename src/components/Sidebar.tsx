import React, { useState } from "react";
import useIsMobile from "../util/useIsMobile";
import { IoClose, IoMenuOutline } from "react-icons/io5/index";
import { animated, useSpring } from "react-spring";
import store, { sections } from "../util/store";
import { useStore } from "@nanostores/react";
const Sidebar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const barSpring = useSpring({
    opacity: open ? 1 : 0,
    x: open ? 0 : 100,
  });
  function onItemClick() {
    setOpen(false);
  }
  return (
    <nav
      role="navigation"
      className={`flex justify-between   gap-x-4 text-xs md:text-2xl items-center`}
    >
      {isMobile && (
        <button
          className="text-xl"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <IoMenuOutline />
        </button>
      )}
      {!isMobile && (
        <div className="flex gap-x-4">
          <MenuItems onClick={() => {}} />
        </div>
      )}

      {isMobile && (
        <animated.div
          style={{
            ...barSpring,
            x: barSpring.x.to((el) => `${el}vw`),
          }}
          role="menubar"
          className="fixed text-xl top-0 left-0 z-50 w-full h-full flex flex-col gap-y-4  bg-zinc-900 bg-opacity-70 backdrop-blur-2xl p-4"
        >
          <div role="heading" className="text-4xl">
            Menu
          </div>
          <MenuItems onClick={onItemClick} />
          <button
            role="menuitem"
            className="gap-x-2 items-center flex"
            onClick={onItemClick}
          >
            <IoClose className="text-center" /> <span> Close </span>
          </button>
        </animated.div>
      )}
    </nav>
  );
};

const MenuItems = ({ onClick }: { onClick: () => void }) => {
  const $store = useStore(store);
  return (
    <>
      {sections.map((el, i) => (
        <a
          role="menuitem"
          key={i}
          onClick={onClick}
          href={`#${el}`}
          className={`capitalize w-min flex flex-col `}
        >
          {el}
          <div
            className={`
          w-3/4
          ${
            $store.section === el
              ? "border-b-2 border-indigo-400"
              : "border-b-0 border-white"
          } transition-all duration-200`}
          />
        </a>
      ))}

      <a
        role="menuitem"
        target="_blank"
        onClick={onClick}
        href="https://github.com/portableCoder"
      >
        {" "}
        Github
      </a>

      <a
        role="menuitem"
        target="_blank"
        onClick={onClick}
        href="https://portableCoder.github.io/portableThoughts"
      >
        {" "}
        Blog
      </a>
    </>
  );
};
export default Sidebar;
