import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TextAnimation from "./Background";
import "./Hero.css";
import Lottie from "lottie-react";
import animationData from "../assets/Earth.json";
import Halo from "vanta/dist/vanta.halo.min";
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
      } else {
        // Scrolling up, increase value
        setValue((prevValue) => prevValue + 1);
      }
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
      className={`relative w-full h-screen mx-auto flex justify-center items-center `}
    >
      {/* <ComputersCanvas /> */}
      {/* <div className="font-potra relative mx-auto flex items-center justify-center z-10  ">
        <h1
          className="text-2xl leading-6 absolute top-[-75px] tracking-[24px] left-0  w-max "
          style={{}}
        >
          Techno management fest
        </h1>
        <h1
          className="text-[8rem] tracking-[56px] leading-6 w-max"
          ref={wordRef}
        >
          {" "}
          Shristi
        </h1>
        <h1
          className="text-2xl leading-6 absolute tracking-[20px] left-0 bottom-[-80px] grid grid-cols-3 items-center  "
          style={{}}
        >
          <div className="h-0.5 bg-white  "></div>
          2K24
          <div className="h-0.5 bg-white  "></div>
        </h1>
      </div> */}
      <div className="w-full h-screen overflow-hidden  ">
        <img
          src="/high_res.jpeg"
          className="w-full  absolute left-0 top-0 mix-blend-multiply -z-10 opacity-100 image"
          
        />
      </div>
    </section>
  );
};

export default Hero;
