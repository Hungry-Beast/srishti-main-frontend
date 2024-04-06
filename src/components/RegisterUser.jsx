import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles"; // Assuming you have styles imported correctly
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion"; // Assuming you have slideIn imported correctly
import { localUrl, prodUrl } from "../utils/config";
import { parse } from "postcss";
import Switch from "react-switch";
import { functionWrapper } from "../utils/wrapper";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";

const RegisterUser = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNo: "",
    password: "",
    isNeristian: "",
    regNo: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phoneNo: false,
    password: false,
    isNeristian: false,
    regNo: false,
  });
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let isErrors = false;
    const phoneRegex = /^[6-9]\d{9}$/;
    const registrationNoRegex = /\d{6}/;

    const isValidPhoneNumber = phoneRegex.test(form.phoneNo);

    const isValidRegistrationNo = registrationNoRegex.test(form.regNo);

    let errorsOccured = {
      name: false,
      phoneNo: false,
      password: false,
      isNeristian: false,
      regNo: false,
    };

    if (!isValidPhoneNumber) {
      errorsOccured.phoneNo = true;
      isErrors = true;
    }

    if (form.password.length < 6) {
      errorsOccured.password = true;
      isErrors = true;
    }

    if (form.isNeristian && isValidRegistrationNo) {
      errorsOccured.regNo = true;
      isErrors = true;
    }

    if (isErrors) {
      setFormErrors({ ...errorsOccured });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: form.name,
      password: form.password,
      phoneNo: form.phoneNo, // Assuming you have this field in your form state
      regNo: form.regNo,
      isNeristian: form.isNeristian ? "s" : "o",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${prodUrl}/auth/createUser`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);

        if (result.success) {
          toast.success("Registration successful!", {
            position: "bottom-center",
          });
          localStorage.setItem("user", JSON.stringify(result));
          window.location.href = "/";
        } else {
          if (result.error === 1) {
            toast.error("User with this phone number already exists!", {
              position: "bottom-center",
            });
          } else if (result.error === 2) {
            toast.error("User with this registration number already exists!", {
              position: "bottom-center",
            });
          } else {
            toast.error("Registration failed. Please try again later.", {
              position: "bottom-center",
            });
          }
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    e.target.reset();
    setChecked(false);
    // setForm({
    //   name: "",
    //   phoneNo: "",
    //   password: "",
    //   isNeristian: "",
    //   regNo: "",
    // });
  };

  // error: 1 - user with this phone number already exist
  //error: 2 - user with this reg number already exist

  return (
    <div
      className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl backdrop-blur-sm border-2 border-gray-700 bg-gray-800/70"
      >
        <p className={styles.sectionSubText}>Shristi 2k24</p>
        <h3 className={styles.sectionHeadText}>Register.</h3>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 font-poppins">
              Your Name
            </span>
            <input
              minLength={"3"}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="backdrop-blur-sm border-gray-700 bg-gray-800/70 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-poppins"
            />
          </label>
          <label className="flex flex-col">
            {formErrors.phoneNo ? (
              <span className=" font-medium mb-4 font-poppins text-red-500 ">
                Please Enter a Vaild Phone Number
              </span>
            ) : (
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 font-poppins">
                  Phone Number
                </span>
              </label>
            )}
            <div className="flex w-full items-center gap-2">
              <span className="font-poppins">+91</span>
              <input
                type="number"
                name="phoneNo"
                value={form.phoneNo}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                className="backdrop-blur-sm border-gray-700 bg-gray-800/70 py-4 px-6 placeholder:text-secondary text-white w-[100%] rounded-lg outline-none border-none font-poppins [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-white font-medium  w-max">
              Are you a Neristian?
            </span>
            <Switch
              name="isNeristian"
              value={form.isNeristian}
              onChange={(e) => {
                setChecked(e);
                setForm({
                  ...form,
                  ["isNeristian"]: e,
                });
              }}
              checked={checked}
              className="bg-black-100"
              onColor="#A77EFF"
              onHandleColor="#915EFF"
            />
          </label>
          {form.isNeristian && (
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 font-poppins">
                Registration Number
              </span>
              <input
                type="text"
                name="regNo"
                value={form.regNo}
                onChange={handleChange}
                placeholder="Enter your registration number"
                className="backdrop-blur-sm border-gray-700 bg-gray-800/70 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-poppins"
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
                value={form.password}
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
            type="submit"
            className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold font-poppins "
          >
            Register User
          </button>
          <Link to="/login">
            <span className="text-white underline decoration-solid mt-2">
              Already a user? Login here!
            </span>
          </Link>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hidden md:block xl:flex-1 xl:w-auto md:w-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(RegisterUser, "register");
