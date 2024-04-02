import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles"; // Assuming you have styles imported correctly
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion"; // Assuming you have slideIn imported correctly

const RegisterUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    isNeristian: "", // Added isNeristian to the initial state
    regNo: "" // Added regNo to the initial state
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "name": form.name,
      "password": form.password,
      "phoneNo": form.phoneNo, // Assuming you have this field in your form state
      "regNo": form.regNo,
      "email":form.email
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    fetch("https://shristi-backend.azurewebsites.net/auth/createUser", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // Log the response from the server
        setLoading(false); // Reset loading state after successful request
        // Add any additional logic here, such as redirecting the user after successful registration
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Reset loading state in case of error
        // Handle error, such as displaying an error message to the user
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Shrist 2k24</p>
        <h3 className={styles.sectionHeadText}>Register.</h3>

        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex items-center justify-between'>
            <span className='text-white font-medium  w-max'>Are you a Neristian?</span>
            <select name='isNeristian' value={form.isNeristian} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ml-0 mt-0'>
              <option value='' className="text-center">Select</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </label>
          {form.isNeristian === 'yes' && (
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Registration Number</span>
              <input
                type='text'
                name='regNo'
                value={form.regNo}
                onChange={handleChange}
                placeholder='Enter your registration number'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
          )}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Password</span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Register User
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(RegisterUser, "register");
