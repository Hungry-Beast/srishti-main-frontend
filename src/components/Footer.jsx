import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Importing Instagram icon from free-brands-svg-icons

const Footer = (props) => {

  const conditionalClasses = props.isEvents ? "fixed" : "";
  return (
    <footer className={` bg-black text-white py-4 bottom-0 w-full ${conditionalClasses}`}>
      <div className="flex margin-auto">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/shristi_2k24/">
              <i>
                <FontAwesomeIcon icon={faInstagram} className="object-cover h-6 w-6" />
              </i>
            </a>
            <a href="#">
              <i>
                <FontAwesomeIcon icon={faYoutube} className="object-cover h-6 w-6" />
              </i>
            </a>
            <a href="#">
              <i>
                <FontAwesomeIcon icon={faTwitter} className="object-cover h-6 w-6" />
              </i>
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/events" className="text-xs">EVENTS</a>
            </li>
            <li>
              <a href="/#work" className="text-xs">ROADMAP</a>
            </li>
            <li>
              <a href="/team" className="text-xs">SHRISTI TEAM</a>
            </li>
            <li>
              <a href="mailto:contact@shristi2k24.com" className="text-xs">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="text-[9px]">
            &copy; {new Date().getFullYear()} Shristi 2k24. All Rights Reserved.
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
