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
import { IoEye, IoEyeOff } from "react-icons/io5";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ phoneNo: "", password: "" });
  const [visible, setVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({ phoneNo: "", password: "" });
  const [loading, setLoading] = useState(false);
  const phoneRegex = /^[6-9]\d{9}$/; // Regex for Indian phone numbers without the country code

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const isValidPhoneNumber = phoneRegex.test(formData.phoneNo);
      let isErrors = false;
      let errorsOccured = {
        phoneNo: "",
        password: "",
      };
      if (!isValidPhoneNumber) {
        errorsOccured.phoneNo = true;
        isErrors = true;
      }
      if (formData.password.length < 6) {
        errorsOccured.password = true;
        isErrors = true;
      }
      if (isErrors) {
        setFormErrors({ ...errorsOccured });
        console.log("Hi")
        return;
      }
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
        window.location.href='/events'
      } else {
        // Login failed
        console.error("Login failed:", data.error);
        toast.error(data.error, {
          position: "bottom-center",
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
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8 rounded-2xl backdrop-blur-sm border-2 border-gray-700 bg-gray-800/70"
      >
        <p className={styles.sectionSubText}>Shristi 2k24</p>
        <h3 className={styles.sectionHeadText}>Login.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" mt-6 flex flex-col gap-4  "
        >
          {formErrors.phoneNo ? (
            <label className="flex flex-col">
              <span className=" font-medium mb-4 font-poppins text-red-500 ">
                Please Enter a Vaild Phone Number
              </span>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="backdrop-blur-sm border-2 border-red-700 bg-gray-800/70  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-poppins "
              />
            </label>
          ) : (
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 font-poppins ">
                Phone Number
              </span>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="backdrop-blur-sm border-2 border-gray-700 bg-gray-800/70  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-poppins "
              />
            </label>
          )}

          <div className="relative">
            {formErrors.password ? (
              <span className=" font-medium mb-4 font-poppins text-red-500 ">
                Please Enter a Vaild Password
              </span>
            ) : (
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 font-poppins">
                  Password
                </span>
              </label>
            )}

            <div
              className={`backdrop-blur-sm  bg-gray-800/70  placeholder:text-secondary text-white rounded-lg ${
                formErrors.password 
                  ? "outline-red-600 border-red-600 "
                  : "outline-none border-none border-gray-700"
              }  font-poppins flex  items-center `}
            >
              <input
                type={visible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full py-4 px-6 bg-transparent h-full outline-none border-none "
              />
              <div className="pr-2" onClick={() => setVisible(!visible)}>
                {visible ? <IoEye size={24} /> : <IoEyeOff size={24} />}
              </div>
            </div>
          </div>

          <button
            className="bg-[#804dee] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold font-poppins"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <Link to="/register">
            <span
              id="newUserRegistration"
              type="submit"
              className="text-white underline decoration-solid font-poppins"
            >
              Don't have an account? Register here
            </span>
          </Link>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hidden md:block xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
