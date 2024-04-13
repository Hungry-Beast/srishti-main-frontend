import React from 'react';


import { motion } from "framer-motion";



import {  textVariant } from "../utils/motion";

function YouTubeVideo() {
    const isMobileDevice = window.innerWidth <= 600; // Assuming 768px as the threshold for mobile devices
    console.log(isMobileDevice)
    const paddingStyle = isMobileDevice ? { paddingTop: '10px', paddingBottom: '10px',  } : {};


  return (
    
    <div style={{ textAlign: 'center' }} className={` ${isMobileDevice ? 'mt-0' : ''}`}>
        <motion.div variants={textVariant()}>

        <p class={`glitch text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center mb-6`}>
        Shristi 2k24 Trailer 
        </p>
      </motion.div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <iframe 
    width={isMobileDevice ? "375" : "1000"} // Adjusted width based on device type
    height={isMobileDevice ? "250" : "600"} // Adjusted height based on device type
    src="https://drive.google.com/file/d/1wOIouaV2umM9cvx33l_r3xVimcye-7cQ/preview" 
    title="YouTube video player" 
    referrerPolicy="strict-origin-when-cross-origin" 
    className="border-5 border-purple-800"
    style={paddingStyle}

  ></iframe>
</div>

    </div>
  );
}

export default YouTubeVideo;
