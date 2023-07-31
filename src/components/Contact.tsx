import React from "react";
import Window from "./Window";
const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-y-6 items-center justify-center px-4 my-32 ">
      <div className="text-7xl font-mono md:w-1/2 w-full">Say Hi!</div>
      <Window title="Contact" className="md:w-1/2 w-full ">
        <div className="w-full h-full flex flex-col  gap-y-4 p-2 md:p-4">
          <input
            className="focus:outline-none bg-transparent w-min border-white border-2 focus:border-indigo-500 text-white p-2"
            placeholder="Your Name"
          />
          <textarea
            rows={10}
            className="focus:outline-none bg-transparent w-full border-white border-2 focus:border-indigo-500 text-white p-2"
            placeholder="Your Message"
          />

          <button className="w-full p-4 bg-indigo-500">Send</button>
        </div>
      </Window>
    </div>
  );
};

export default Contact;
