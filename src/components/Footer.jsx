import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // Importing Instagram icon from free-brands-svg-icons
import { Link } from "react-router-dom";

const Footer = (props) => {
  const conditionalClasses = props.isEvents ? "fixed" : "";

  const handleSmoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={` bg-black text-white py-4 bottom-0 w-full`}>
      <div className="flex margin-auto container">
        <div className="container mx-auto">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/shristi_2k24/">
                <i>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="object-cover h-6 w-6"
                  />
                </i>
              </a>
              <a href="#">
                <i>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="object-cover h-6 w-6"
                  />
                </i>
              </a>
              <a href="https://www.linkedin.com/school/north-eastern-regional-institute-of-science-and-technology-nerist-/">
                <i>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="object-cover h-6 w-6"
                  />
                </i>
              </a>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <ul className="flex space-x-4 md:space-x-16 sm:space-x-6 font-poppins">
              <li>
                <Link to="/events" className="text-xs ">
                  EVENTS
                </Link>
              </li>

              <li>
                <Link
                  to="/#journey"
                  className="text-xs "
                  onClick={() => handleSmoothScroll("journey")}
                >
                  JOURNEY
                </Link>
              </li>

              <li>
                <Link to="/team" className="text-xs ">
                  TEAM
                </Link>
              </li>

              <li>
                <a
                  href="mailto:contact@email.shristi2k24.com"
                  className="text-xs "
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="text-[13px] font-poppins text-gray-400">
              &copy; Shristi 2k24. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
