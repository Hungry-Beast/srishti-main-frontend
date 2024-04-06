import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 font-potra  ${
        scrolled ? "bg-primary" : "bg-transparent"
      } z-10`}>
      <div className="w-full flex justify-between font-potra items-center max-w-7xl mx-auto tracking-[0.9px]">
        <Link
          to="/"
          className="flex items-center font-potra  gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 font-potra object-contain"
          />
          <div className="flex items-center w-fit md:text-[18px]">
            <p className="text-white xl:text-[24px] font-potra font-bold cursor-pointer flex sm:text-base ">
              SHRiSTi &nbsp;{" "}
            </p>
            <span className="sm:block hidden font-potra ">
              {" "}
              <span className="font-potra sm:text-base font-bold  xl:text-[24px]">
                <span className="font-poppins font-bold">|</span> NERiST
              </span>
            </span>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row sm:justify-between sm:gap-2 sm:text-sm font-potra md:gap-10 xl:text-[18.5px]  items-center ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={` font-bold text-white font-potra${
                nav.highlight && " highlight "
              } `}
              onClick={() => setActive(nav.title)}>
              <Link to={`${nav.href}`} className={` `}>
                <div
                  className={` font-bold text-white font-potra ${
                    nav.highlight && " highlight "
                  }   ${
                    nav.id === "Login"
                      ? "border border-[#bf34a9] p-2 rounded-sm hover:bg-[#bf34a9] hover:transition-background "
                      : ""
                  }`}>
                  {nav.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center font-potra ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-potra font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  {nav.id === "font-potra Login" ? (
                    <Link to="/login">
                      <span className="   NavBar NavBarLogin">{nav.title}</span>
                    </Link>
                  ) : nav.id === "team" ? (
                    <Link to="/team" className=" NavBar">
                      {nav.title}
                    </Link> // Modify the href accordingly for the team link
                  ) : nav.id === "events" ? (
                    <Link to="/events" className="NavBar">
                      {nav.title}
                    </Link> // Modify the href accordingly for the team link
                  ) : (
                    <a href={`#${nav.id}`} className="  NavBar">
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
