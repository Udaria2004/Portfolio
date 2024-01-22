import { m, LazyMotion, domAnimation } from "framer-motion";
import TText from "../Components/HeadingText";
import Particles from "../Components/Particles/Particles";
import Scroller from "../Components/elements/Scoller";

const Beginning = () => {
  return (
    <div id="Page1" className="w-full flex justify-center overflow-hidden-web relative">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="Page1"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <TText />
        <Particles />
      </m.div>
      <Scroller />
    </LazyMotion>
    </div>
  );
};

export default Beginning;
