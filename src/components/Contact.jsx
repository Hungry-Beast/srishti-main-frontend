import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  Link
} from 'react-router-dom';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ regNo: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(formData);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const response = await fetch("https://shristi-backend.azurewebsites.net/auth/login", requestOptions);
      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log("Login successful:", data);
        localStorage.setItem("authToken", response);
        localStorage.setItem("registrationNumber", formData.regNo);
       


      } else {
        // Login failed
        console.error("Login failed:", data.error);
        alert(data.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>SHRISTI | NERIST</p>
        <h3 className={styles.sectionHeadText}>Login.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>Registration Number</span>
            <input
              type='text'
              name='regNo'
              value={formData.regNo}
              onChange={handleChange}
              placeholder='Enter your registration number'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium font-poppins'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>Password</span>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium font-poppins'
            />
          </label>
          <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ' type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

      <Link to="/register"> {/* Link to the register page */}
        <button 
          id="newUserRegistration"
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          
        >
          New User?
        </button>
      </Link>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
