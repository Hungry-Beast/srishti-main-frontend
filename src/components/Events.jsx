import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./style.css";

import "../index.css";
import { prodUrl } from "../utils/config";

const Events = () => {
  const [events, setEvents] = useState([]);

  const clubs = [
    {
      _id: "660ae031ee9e68bfcccc506b",
      name: "trial",
      image:
        "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/trial-vecteezy_background-of-the-topographic-map-white-wave-paper-curved_14720206.jpg",
      desc: "sdf",
      createdBy: "6609709a5dfe52e400154f20",
      createdAt: "2024-04-01T16:26:25.482Z",
      updatedAt: "2024-04-01T16:26:25.482Z",
      __v: 0,
    },
    {
      _id: "660ae7aeee9e68bfcccc5087",
      name: "ECE",
      image:
        "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/ECE-Snapchat-247335793.jpg",
      desc: "xyz",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-01T16:58:22.881Z",
      updatedAt: "2024-04-01T16:58:22.881Z",
      __v: 0,
    },
    {
      _id: "660c2aba9d8662efb033de0e",
      name: "CSE",
      image:
        "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/CSE-herobg.png",
      desc: "sdsdf",
      createdBy: "6609709a5dfe52e400154f20",
      createdAt: "2024-04-02T15:56:42.144Z",
      updatedAt: "2024-04-02T15:56:42.144Z",
      __v: 0,
    },
    {
      _id: "660c5318aff3e73c503ff174",
      name: "Gaming",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/abbabc0b-3631-4caf-a74a-a254f9fbbac0backend.png?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "This is a gaming Club",
      createdBy: "6609709a5dfe52e400154f20",
      createdAt: "2024-04-02T18:48:56.104Z",
      updatedAt: "2024-04-02T18:48:56.104Z",
      __v: 0,
    },
  ].map((club) => ({ label: club.name, value: club._id }));

  const [selectedClub, setSetedClub] = useState(clubs[0].value);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async (selectedClub) => {
    try {
      const response = await axios.get(
        prodUrl + `/events/noAuth/${selectedClub}`
      );
      setEvents(response.data.flat());
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchEvents directly when the component mounts
  useEffect(() => {
    if (selectedClub) fetchEvents(selectedClub);
  }, []);

  return (
    <div id="portfolio" className="EventsClass">
      <h3 className="text-4xl font-bold text-center text-event">Events</h3>
      <select
        className="select select_body .bg-gray-400"
        onChange={(e) => fetchEvents(e.target.value)}
      >
        {clubs.map((club, index) => {
          return (
            <option key={index} value={club.value}>
              {club.label}
            </option>
          );
        })}
      </select>

      <div className="container">
        {loading ? ( // Display loader while loading is true
          <div className="flex justify-center items-center h-full">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {events.map((event, index) => (
              <div className="work" key={index}>
                <img src={event.image} alt={event.name} />
                <div className="layer">
                  <h3>{event.name}</h3>
                  <p>{event.description}</p>
                  <a href={event.registration}>
                    <i className="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
