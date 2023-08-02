import { useEffect } from "react";
import useSection from "../util/useSection";

const DummyLanding = () => {
  const [ref] = useSection("landing");
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return <div ref={ref}> </div>;
};

export default DummyLanding;
