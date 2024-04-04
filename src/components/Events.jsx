import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./style.css";

import "../index.css";
import { prodUrl } from "../utils/config";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const clubs = [
    {
      _id: "660d584215a1c739a242b667",
      name: "Civil Engineering",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/463a4f81-0bd8-4831-92c1-5cfbaadaee4dSnapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:23:14.518Z",
      updatedAt: "2024-04-03T13:23:14.518Z",
      __v: 0,
    },
    {
      _id: "660d58c415a1c739a242b675",
      name: "Electronics and Communication Engineering",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/453049e6-62ab-422e-b643-773e587c9aa9Snapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:25:24.742Z",
      updatedAt: "2024-04-03T13:25:24.742Z",
      __v: 0,
    },
    {
      _id: "660d592915a1c739a242b67a",
      name: "Mechanical Engineering",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/5e1589fd-abd9-4c01-824b-a18588f0993eSnapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:27:05.080Z",
      updatedAt: "2024-04-03T13:27:05.080Z",
      __v: 0,
    },
    {
      _id: "660d595015a1c739a242b67f",
      name: "Electrical Engineering",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/81e96c59-8e45-43a6-b2be-bd195de79045Snapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:27:44.007Z",
      updatedAt: "2024-04-03T13:27:44.007Z",
      __v: 0,
    },
    {
      _id: "660d596215a1c739a242b684",
      name: "MBA",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/7390a8a3-82ca-4322-b61d-2fff2bc1a075Snapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:28:02.183Z",
      updatedAt: "2024-04-03T13:28:02.183Z",
      __v: 0,
    },
    {
      _id: "660d599215a1c739a242b689",
      name: "Techno Club",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/51f2dda3-d759-4f2e-b96e-ab1fc0b02cffSnapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:28:50.136Z",
      updatedAt: "2024-04-03T13:28:50.136Z",
      __v: 0,
    },
    {
      _id: "660d59a515a1c739a242b68e",
      name: "Forestry",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/b622b623-b70c-4ec7-a0f9-cd599cbe757cSnapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:29:09.791Z",
      updatedAt: "2024-04-03T13:29:09.791Z",
      __v: 0,
    },
    {
      _id: "660d59c015a1c739a242b693",
      name: "Agricultural Engineering",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/af97b82b-fbd0-4e22-979e-9d8d8efba7c5Snapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:29:36.400Z",
      updatedAt: "2024-04-03T13:29:36.400Z",
      __v: 0,
    },
    {
      _id: "660d59e215a1c739a242b698",
      name: "Computer Science Engineering",
      image:
        "https://llm1041430350.blob.core.windows.net/shristi-images/b54174da-7d98-42c4-b25e-6b5b27dc99e9Snapchat-247335793.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
      desc: "abc",
      createdBy: "660ae185ee9e68bfcccc507f",
      createdAt: "2024-04-03T13:30:10.733Z",
      updatedAt: "2024-04-03T13:30:10.733Z",
      __v: 0,
    },
  ].map((club) => ({ label: club.name, value: club._id }));

  const [loading, setLoading] = useState(true);

  const fetchEvents = async (selectedClub) => {
    setSearchParams({ deptId: selectedClub });
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
  const selectedClub = searchParams.get("deptId");
  useEffect(() => {
    if (selectedClub) fetchEvents(selectedClub);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen  ">
      <div id="portfolio" className="EventsClass mt-10 max-w-7xl mx-auto ">
        <h3 className="glitch Event  text-xl font-bold text-center text-events">
          Events
        </h3>
        <div className="flex justify-center items-center">
          <select
            className="m-0 select w-max my-10 font-poppins font-bold"
            onChange={(e) => fetchEvents(e.target.value)}
            value={selectedClub}
          >
            {clubs.map((club, index) => {
              return (
                <option className="font-poppins" key={index} value={club.value}>
                  {club.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="container flex-1">
          
          {loading ? ( // Display loader while loading is true
            <div className="flex justify-center items-center ">
              <div className="loader font-poppins">Loading...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
              {events.map((event, index) => (
                <div
                  className="work"
                  key={index}
                  onClick={() => navigate(`/event/${event._id}`)}
                >
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
    </div>
  );
};

export default Events;
