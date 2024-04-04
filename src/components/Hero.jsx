import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextAnimation from "./Background";
import "./Hero.css";
import Lottie from "lottie-react";
import animationData from "../assets/Earth.json";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex justify-center items-center `}
    >
      {/* <ComputersCanvas /> */}

      <div className="  m-auto ">
        <div>
          <div className="relative ">
            <div
              className="font-potra text-8xl logo_gitch  uppercase top-0  "
              title="Shristi"
            >
              Shristi
            </div>
            <h1
              className="font-potra  text-8xl absolute top-[5px] left-[-3px] text-[#915eff] logo_gitch uppercase "
              title="Shristi"
            >
              Shristi
            </h1>
          </div>
        </div>
        <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
          <div className="m-auto  max-w-[700px]  ">
            <Lottie animationData={animationData} className="" />
          </div>
          {/* <div>
            <h1 className="capitalize font-potra">
              Above And <br />
              Beyond
            </h1>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
