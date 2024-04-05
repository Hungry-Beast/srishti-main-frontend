import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextAnimation from "./Background";
import "./Hero.css";
import Lottie from "lottie-react";
import animationData from "../assets/Earth.json";
// import Halo from "vanta/dist/vanta.halo.min";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      // Check if scrolling up or down
      const scrollDelta = event.deltaY;

      // Adjust the scale based on scroll direction
      if (scrollDelta > 0) {
        // Scrolling down, decrease value
        setValue((prevValue) => prevValue - 1);
      }
      // else {
      //   // Scrolling up, increase value
      //   setValue((prevValue) => prevValue + 1);
      // }
    };

    // Add event listener for scroll
    window.addEventListener("wheel", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); // Empty dependency array to run effect only once
  return (
    <section
      className={`relative w-full h-screen mx-auto flex justify-center items-center `}>
      {/* <ComputersCanvas /> */}
      <div className="font-potra relative  flex items-center justify-center z-10  max-w-7xl mx-auto  ">
        <h1
          className="text-2xl leading-6 absolute top-[-75px] tracking-[24px] left-0  w-max "
          style={{}}>
          Techno management fest
        </h1>
        <div className="flex">
          {"Shristi"?.split("").map((word, index, currentArray) => (
            <h1
              className={`text-[8rem] leading-6 ${
                currentArray.length - 1 === index
                  ? " tracking-normal "
                  : " tracking-[56px]"
              }  w-max`}
              key={index}

              // ref={wordRef}
            >
              {word}
            </h1>
          ))}
        </div>
        <h1
          className="text-2xl leading-6  tracking-[20px] absolute  bottom-[-80px] grid grid-cols-3 items-center  "
          style={{}}>
          <div className="h-0.5 bg-white  "></div>
          2K24
          <div className="h-0.5 bg-white  "></div>
        </h1>
      </div>
      <div className=" mix-blend-normal  ">
        <img
          src="/high_res.jpeg"
          className="w-full   absolute left-0 top-0 mix-blend-color-burn -z-10 opacity-0.3 image"
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
