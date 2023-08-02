import { animated, useSpring } from "react-spring";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import useIsMobile from "../util/useIsMobile";

function checkScrollDirectionIsUp(event: WheelEvent) {
  return event.deltaY < 0;
}
const Header = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const spring = useSpring({
    y: scrollDown ? -100 : 0,
  });
  useEffect(() => {
    const scrollFn = (ev: WheelEvent) => {
      if (checkScrollDirectionIsUp(ev)) {
        setScrollDown(false);
      } else {
        setScrollDown(true);
      }
    };
    const evt = window.addEventListener("wheel", scrollFn);
    return () => {
      window.removeEventListener("wheel", scrollFn);
    };
  }, []);
  const isMobile = useIsMobile();
  return (
    <animated.header
      style={isMobile ? {} : spring}
      className="w-full bg-zinc-900 md:bg-opacity-50 md:backdrop-blur-xl sticky top-0 left-0 text-base font-mono  items-center p-4  flex justify-between z-50"
    >
      <div className="text-lg md:text-2xl font">
        <div className="mx-2">
          {" "}
          portableCoder
          <span className="animate-pulse duration-100 md:text-2xl text-xs">
            █
          </span>
        </div>
      </div>

      <Sidebar />
    </animated.header>
  );
};

export default Header;
