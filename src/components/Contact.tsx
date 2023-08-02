import { useRef } from "react";
import Window from "./Window";
import useSection from "../util/useSection";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si/index";
import SectionHeading from "./SectionHeading";
const socials = [
  {
    name: "LinkedIn",
    Icon: SiLinkedin,
    link: "https://www.linkedin.com/in/sayan-mukhopadhyay-184880244/",
  },
  {
    name: "Github",
    Icon: SiGithub,
    link: "https://github.com/portableCoder",
  },
  {
    name: "Leetcode",
    Icon: SiLeetcode,
    link: "https://leetcode.com/portableCoder/",
  },
];
function openEmailWithSubjectAndBody(subject: string, body: string): void {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const mailtoUrl = `mailto:sayanmukho23@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

  window.open(mailtoUrl, "_blank");
}

const Contact = () => {
  const [ref] = useSection("contact");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      ref={ref}
      id="contact"
      className="w-full h-full flex flex-col gap-y-6 items-center justify-center px-4 my-32 "
    >
      <div className="md:w-1/2 w-full flex flex-col gap-y-12  ">
        <SectionHeading name="Contact" />
        <Window title="Contact" className="w-full ">
          <div className="w-full h-full flex flex-col  gap-y-4 p-2 md:p-4">
            <input
              ref={inputRef}
              className="focus:outline-none bg-transparent w-min border-white border-2 focus:border-indigo-500 text-white p-2"
              placeholder="Your Name"
            />
            <textarea
              ref={bodyRef}
              rows={10}
              className="focus:outline-none bg-transparent w-full border-white border-2 focus:border-indigo-500 text-white p-2"
              placeholder="Your Message"
            />

            <button
              onClick={() => {
                const inp = inputRef.current;
                const body = bodyRef.current;
                if (inp && body) {
                  openEmailWithSubjectAndBody(
                    "Contact portableCoder",
                    `Hello, I'm ${inp.value} \n` + `${body.value}`
                  );
                }
              }}
              className="w-full p-4 bg-indigo-500"
            >
              Send
            </button>
          </div>
        </Window>
        <div className="w-3/4 m-auto border-b-2 border-zinc-700 "></div>
        <div className="w-full text-3xl text-center">Socials & Platforms</div>
        <div className="w-full my-12  text-2xl gap-x-4 items-center justify-center flex">
          {socials.map((el, i) => {
            const Icon = el.Icon;
            return (
              <a
                href={el.link}
                key={i}
                className="flex text-xl md:text-2xl flex-col items-center gap-y-2"
              >
                <div className="text-2xl">{<Icon />}</div>
                <div>{el.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
