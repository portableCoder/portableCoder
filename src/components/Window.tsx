import React, { ReactNode } from "react";
import {
  VscChromeMaximize as Maximize,
  VscChromeMinimize as Minimize,
  VscChromeClose as Close,
} from "react-icons/vsc";
interface WindowProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  title?: string;
}
const Window = React.forwardRef<HTMLDivElement, WindowProps>((props, ref) => {
  const { title, children, className } = props;
  return (
    <div ref={ref} {...props} className={`border-2 border-white ${className}`}>
      <div className="p-1  md:p-2  bg-white flex justify-between">
        <div className="text-black">{title}</div>
        <div className="flex gap-x-2 text-black items-center text-lg md:text-2xl ">
          <div className="m-auto w-4 h-4 md:w-8 md:h-8 text-center">
            <Minimize />
          </div>
          <div className="text-center m-auto w-4 h-4 md:w-8 md:h-8">
            <Maximize />
          </div>
          <div className="text-center m-auto w-4 h-4 md:w-8 md:h-8">
            <Close />
          </div>
        </div>
      </div>
      <div className="w-full h-full p-2 font-mono items-center justify-center flex flex-col gap-y-2">
        {<>{children}</>}
      </div>
    </div>
  );
});

export default Window;
