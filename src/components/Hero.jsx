import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextAnimation from "./Background";
import "./Hero.css";
import Lottie from "lottie-react";
import animationData from "../assets/Earth.json";
// import Halo from "vanta/dist/vanta.halo.min";
import { useEffect, useRef, useState } from "react";
import LoaderComponent from "./LoaderComponent";

const Hero = () => {
  const [value, setValue] = useState(0);
  // Empty dependency array to run effect only once
  const [text, setText] = useState("Shristi");
  const [fadeValue, setFadeValue] = useState("0");
  const [flickerDurationValue, setFlickerDurationValue] = useState(30);

  // const [temp, setTemp] = useState(0);
  let isCalled = false;
  useEffect(() => {
    let temp = 0;
    const myInterval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1600);

    return () => clearInterval(myInterval);
  }, []);

  return (
    <section
      className={`relative w-full min-h-[65vh] sm:min-h-[100vh] md:w-3/4 sm:h-screen mx-auto mt-[8em] md:mt-0 grid  sm:flex items-center justify-center lg:justify-center lg:items-center  `}
    >
      {/* <ComputersCanvas /> */}

      <div className="font-potra mt-12 sm:mt-0 lg:mt-0 relative justify-self-start flex flex-col md:items-center md:justify-center z-10  max-w-7xl mx-auto">
        <h1
          className=" text-sm  tracking-[3.2px] absolute top-0 xs:text-sm xs:tracking-[7px] sm:text-sm sm:tracking-[10.8px] md:text-base md:tracking-[15.6px] lg:absolute lg:tracking-[26.1px]  lg:top-[12px]     xl:top-[25px] xl:tracking-[30.8px] left-0  w-max font-potra "
          style={{}}
        >
          Techno management fest
        </h1>
        <div id="flicker-container" className="flex font-potra flicker  ">
          {"Shristi"?.split("").map((word, index, currentArray) => (
            <h1
              className={` text-[3rem] xs:text-[4rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem] font-potra ${
                currentArray.length - 1 === index
                  ? " tracking-normal "
                  : " tracking-[16px] xs:tracking-[30x] sm:tracking-[30px] md:tracking-[40px] lg:tracking-[40px] xl:tracking-[56px]"
              }  w-max flicker transition-all  duration-700  ease-in-out ${
                value % 2 === 0 ? "white duration-1000" : "on "
              } `}
              key={index}

              // ref={wordRef}
            >
              {word}
            </h1>
          ))}
        </div>
        <h1
          className=" leading-6  w-full  grid grid-cols-3 items-center text-sm  tracking-[5px] absolute -bottom-2 xs:text-sm xs:tracking-[7px] sm:text-sm sm:tracking-[10.8px] md:text-base md:tracking-[15.6px] lg:absolute lg:tracking-[20px] md:bottom-0 lg:bottom-2  xl:tracking-[30.8px] left-0   "
          style={{}}
        >
          <div className="h-0.5 bg-white  "></div>
          2K24
          <div className="h-0.5 bg-white  "></div>
        </h1>
      </div>

      <div className=" mix-blend-normal ">
        <img
          src="/phone_bgt.png"
          className="w-full absolute left-0 top-0 mix-blend-color-burn -z-10 opacity-0.3 image"
          style={
            {
              // top: value > 0 ? `-${value * 4}%` : 0,
            }
          }
        />
      </div>
    </section>
  );
};

export default Hero;
