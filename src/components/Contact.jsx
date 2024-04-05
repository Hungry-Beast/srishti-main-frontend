import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Link } from "react-router-dom";
import { prodUrl } from "../utils/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ phoneNo: "", password: "" });
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
        redirect: "follow",
      };
  
      const response = await fetch(`${prodUrl}/auth/login`, requestOptions);
      const data = await response.json();
  
      if (response.ok) {
        // Login successful
        console.log("Login successful:", data);
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        // Login failed
        console.error("Login failed:", data.error);
        toast.error(data.error,{
          position: "bottom-center"
        }); // Display error message using toastify
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login. Please try again later."); // Display generic error message using toastify
    } finally {
      setLoading(false);
    }
  };
 

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8 rounded-2xl backdrop-blur-sm border-2 border-gray-700 bg-gray-800/70">
        <p className={styles.sectionSubText}>Shristi 2k24</p>
        <h3 className={styles.sectionHeadText}>Login.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" mt-6 flex flex-col gap-4  ">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 font-poppins ">
              Registration Number
            </span>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your registration number"
              className="backdrop-blur-sm border-2 border-gray-700 bg-gray-800/70  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-poppins"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 font-poppins">
              Password
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="backdrop-blur-sm border-gray-700 bg-gray-800/70 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-poppins"
            />
          </label>
          <button
            className="bg-[#804dee] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold font-poppins"
            type="submit"
            disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <Link to="/register">
            <span
              id="newUserRegistration"
              type="submit"
              className="text-white underline decoration-solid font-poppins">
              Don't have an account? Register here
            </span>
          </Link>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hidden md:block xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
