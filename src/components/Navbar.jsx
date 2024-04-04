import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close , Avatar} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility


  const handleImageClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Perform logout operations here
    // Clear authentication token from local storage
    localStorage.removeItem("authenticationToken");
    localStorage.removeItem("userName");
    console.log("logged out");
    // Redirect to login page
    window.location.href = "/";  };


  useEffect(() => {
    // Check if authentication token exists in local storage
    const authToken = localStorage.getItem("authenticationToken");
    setIsLoggedIn(!!authToken); // Set isLoggedIn to true if authToken exists, otherwise false

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
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
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 font-poppins  ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between font-poppins items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center font-poppins  gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 font-poppins object-contain' />
          <p className='text-white text-[18px] font-poppins font-bold cursor-pointer flex '>
            SHRISTI &nbsp;
            <span className='sm:block hidden font-poppins '> | NERIST</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 font-poppins  '>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer font-poppins  `}

              onClick={() => setActive(nav.title)}
            >
              {nav.id === "Login" && !isLoggedIn ? (
                <Link to="/login" className="font-poppins NavBar NavBarLogin">{nav.title}</Link>
              ) : nav.id === "team" ? (
                <Link to="/team" className="font-poppins NavBar">{nav.title}</Link>
              ) : nav.id === "events" ? (
                <Link to="/events" className="font-poppins NavBar">{nav.title}</Link>
              ) : (nav.id !== "Login" || !isLoggedIn) && (
                nav.title !== "Login" ? (
                  <Link to={`/${nav.id}`} className="font-poppins NavBar">{nav.title}</Link>
                ) : null   
              )}
            </li>
          ))}
          <li>{isLoggedIn && (
          <div className="relative">
          <img src={Avatar} alt="User" className="w-9 h-9 rounded-full cursor-pointer"  style={{ cursor: "pointer !important" }} onClick={handleImageClick} />
          {showDropdown && (
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
              <li><a className="dropdown-item"  onClick={handleLogout} >Logout</a></li>
            </ul>
          )}
        </div>
      )}

        </li>
        <li><a className="dropdown-item">{localStorage.getItem("userName")}</a></li>
        </ul>
        

        <div className='sm:hidden flex flex-1 justify-end items-center font-poppins '>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                 {nav.id === "Login" && !isLoggedIn ? (
                <Link to="/login" className="font-poppins NavBar NavBarLogin">{nav.title}</Link>
              ) : nav.id === "team" ? (
                <Link to="/team" className="font-poppins NavBar">{nav.title}</Link>
              ) : nav.id === "events" ? (
                <Link to="/events" className="font-poppins NavBar">{nav.title}</Link>
              ) : (nav.id !== "Login" || !isLoggedIn) && (
                nav.title !== "Login" ? (
                  <Link to={`/${nav.id}`} className="font-poppins NavBar">{nav.title}</Link>
                ) : null
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
