import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; // Assuming you're using React Router

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon, className }) =>{
  
  return (
  <Tilt className='xs:w-[250px] w-full relative'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={'w-full green-pink-gradient p-[1px] rounded-[20px]   '}
      
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        onClick={index === 3 ? handleRedirect : null} // Attach onClick event handler conditionally
        style={{ cursor: 'pointer' }} 
        
      >
        <img
          src={icon}
          alt='web-development'
          className='w-full h-full object-contain absolute   rounded-[18px]'
          height='10px' // Specify the height here
                  />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>ABOUT</p> */}
        {/* <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center'}>ABOUT.</h2> */}
        <p class="glitch 'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center">
    About.
    
  </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='flex justify-center text-center font-poppins'
      >
        <b className="font-poppins">
        At NERIST, we ignite a passion for exploration. Shristi is a vibrant stage where students from across the region converge to showcase their ingenuity. From the electrifying whir of Battlebots to the insightful discourse of Model United Nations, a kaleidoscope of events awaits. Hackathons pulsate with the thrill of problem-solving, while Humanoids and pneumatic rockets push the boundaries of robotics. Here, eco-conscious models envision a sustainable future, and innovative ideas blossom under the spotlight.<br />
Shristi isn't just about competition, it's about connection. It's a platform to learn from industry leaders, ignite minds with captivating SHRTISTI Talks, and hone essential skills like teamwork, communication, and leadership. It's the spark that ignites a sense of community, where students share, collaborate, and refine their talents.
<br></br><br /> 
Join us at Shristi and embark on a journey of exploration. Let's transform potential into brilliance, together.</b>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            className={`${index < 2 ? 'md:hidden' : ''}`} 
            index={index} 
            title={service.title}
            icon={service.icon}
          />
          
        ))}
      </div>

      <div>
        <Link to="/events">
        <a class ="btn font-poppins">SEE MORE</a>
        </Link>
     
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
