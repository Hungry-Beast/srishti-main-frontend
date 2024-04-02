
import React from 'react';
import "./style.css";

import { AllEvents } from "../constants";

import "../index.css";


const Events = () => {
  return (
    <div id="portfolio" className="EventsClass">
    <h3 className="text-4xl font-bold text-center text-event">Events</h3>
    <select className="select select_body">
      <option value="branch" selected> Sort: Branch</option>
      <option value="day">Sort: Day</option>
    </select>
    <div className="container">
      <div className="work-list">
        {/* Sort events by Department */}
        {AllEvents.sort((a, b) => a.Department - b.Department).map((event, index) => (
          <div className="work" key={index}>
            <img src={event.image} alt={event.name} />
            <div className="layer">
              <h3>{event.name}</h3>
              <p>{event.Discription}</p>
              <a href={event.Registration}><i className="fa-solid fa-link"></i></a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}

export default Events;
