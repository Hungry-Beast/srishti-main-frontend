import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter  } from '@fortawesome/free-brands-svg-icons'; // Importing Instagram icon from free-brands-svg-icons

const Footer = () => {
  return (
    <footer>
      <div className="footer" >
        <div className="row">
          <a href="https://www.instagram.com/shristi_2k24/"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
          <a href="#"> <i><FontAwesomeIcon icon={faYoutube} /></i></a>
          <a href="#">  <i><FontAwesomeIcon icon={faTwitter} /></i></a>
        </div>
        <div className="row">
          <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/#work">RoadMap</a></li>
            <li><a href="/team">Shristi Team</a></li>
            <li><a href="mailto:contact@shristi2k24.com">Contact</a></li>

          </ul>
        </div>

        <div className="row">
        &copy; {new Date().getFullYear()} Shristi 2k24. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
