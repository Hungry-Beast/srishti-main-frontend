import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./style.css";

import "../index.css";
import { prodUrl } from "../utils/config";
import {
  useNavigate,
  useNavigation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { functionWrapper } from "../utils/wrapper";

const Events = () => {
  const [events, setEvents] = useState({
    preEvents: [],
    mainEvents: [],
  });
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [clubs, setClubs] = useState([]);
  const params = useParams();

  // let clubs = [
  //   {
  //     _id: "660ae031ee9e68bfcccc506b",
  //     name: "trial",
  //     image:
  //       "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/trial-vecteezy_background-of-the-topographic-map-white-wave-paper-curved_14720206.jpg",
  //     desc: "sdf",
  //     createdBy: "6609709a5dfe52e400154f20",
  //     createdAt: "2024-04-01T16:26:25.482Z",
  //     updatedAt: "2024-04-01T16:26:25.482Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "660ae7aeee9e68bfcccc5087",
  //     name: "ECE",
  //     image:
  //       "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/ECE-Snapchat-247335793.jpg",
  //     desc: "xyz",
  //     createdBy: "660ae185ee9e68bfcccc507f",
  //     createdAt: "2024-04-01T16:58:22.881Z",
  //     updatedAt: "2024-04-01T16:58:22.881Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "660c2aba9d8662efb033de0e",
  //     name: "CSE",
  //     image:
  //       "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/CSE-herobg.png",
  //     desc: "sdsdf",
  //     createdBy: "6609709a5dfe52e400154f20",
  //     createdAt: "2024-04-02T15:56:42.144Z",
  //     updatedAt: "2024-04-02T15:56:42.144Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "660c5318aff3e73c503ff174",
  //     name: "Gaming",
  //     image:
  //       "https://llm1041430350.blob.core.windows.net/shristi-images/abbabc0b-3631-4caf-a74a-a254f9fbbac0backend.png?sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2024-04-30T00:15:08Z&st=2024-04-02T16:15:08Z&spr=https&sig=%2BOjFAqiCutR7Urdzz9GU5LF3QhsJpMP1NQLRlRI5Znk%3D",
  //     desc: "This is a gaming Club",
  //     createdBy: "6609709a5dfe52e400154f20",
  //     createdAt: "2024-04-02T18:48:56.104Z",
  //     updatedAt: "2024-04-02T18:48:56.104Z",
  //     __v: 0,
  //   },
  // ].map((club) => ({ label: club.name, value: club._id }));

  useEffect(() => {
    functionWrapper
      .get(prodUrl + "/clubs")
      .then((res) => {
        console.log(res);

        setClubs(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {}, [clubs]);

  const [loading, setLoading] = useState(true);

  const fetchEvents = async (selectedClub) => {
    setSearchParams({ deptId: selectedClub });
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      if (user) {
        functionWrapper
          .get(prodUrl + "/events/" + selectedClub)
          .then((res) => {
            console.log("registered events", res);
            setEvents({ preEvents: res[0], mainEvents: res[1] });
            // setEvents(res[1]);
          })
          .catch((err) => console.log(err));
      } else {
        const response = await axios.get(
          prodUrl + `/events/noAuth/${selectedClub}`
        );
        console.log("logged out user", response);
        setEvents({
          preEvents: response.data[0],
          mainEvents: response.data[1],
        });
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = (data) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    // console.log(data);
    var formdata = new FormData();
    formdata.append("date", formattedToday);
    formdata.append("clubId", params.deptId);
    formdata.append("clubName", data.clubName);
    formdata.append("eventId", data.id);
    formdata.append("eventName", data.eventName);
    // if (file) {
    //   formdata.append("file", file);
    // }

    // var raw = JSON.stringify({
    //   date: formattedToday,
    //   clubId: selectedClub.value,
    //   clubName: selectedClub.value,
    //   eventId: data.id,
    //   eventName: data.name,
    // });
    // console.log(raw);
    functionWrapper
      .post(`${prodUrl}/registration`, formdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  // Call fetchEvents directly when the component mounts
  const selectedClub = searchParams.get("deptId");
  useEffect(() => {
    if (selectedClub) fetchEvents(selectedClub);
  }, []);

  return (
    <div id="portfolio" className="EventsClass">
      <h3 className="text-4xl font-bold text-center text-event">Events</h3>
      <select
        className="select  "
        onChange={(e) => fetchEvents(e.target.value)}
        value={selectedClub}>
        {clubs.map((club, index) => {
          return (
            <option key={index} value={club["_id"]}>
              {club.name}
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
          <>
            {/* <h3 className="text-2xl font-bold text-event"> Pre Events</h3>
            {events.preEvents.length > 0 ? (
              <div className="grid grid-cols-4 gap-4">
                {events.preEvents?.map((event, index) => (
                  <div
                    className="work"
                    key={index}
                    onClick={() => navigate(`/event/${event["id"]}`)}>
                    <img src={event.image} alt={event.name} loading="lazy" />
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
            ) : (
              <div className="text-center">Nothing to show!</div>
            )} */}
            <div className="mt-10">
              <h3 className="mb-5 text-2xl font-bold text-event">
                Main Events
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {events.mainEvents?.map((event, index) => (
                  <div className="work" key={index}>
                    <img src={event.image} alt={event.name} loading="lazy" />
                    <div className="layer">
                      <h3 className="text-3xl font-extrabold  uppercase text-black ">
                        {event.name}
                      </h3>
                      {/* <p>{event.description}</p>
                      <a href={event.registration}>
                        <i className="fa-solid fa-link"></i>
                      </a> */}
                      <div className="flex absolute bottom-9 justify-around w-full px-3  flex-wrap">
                        <button
                          className="border-[#804dee] py-3 px-6 rounded-xl outline-none w-fit text-black bg-slate-100 font-bold font-poppins uppercase "
                          type="submit"
                          disabled={loading}
                          onClick={() => navigate(`/event/${event.id}`)}>
                          View More
                        </button>
                        {event.isRegistered ? (
                          <div className="cursor-not-allowed">
                            <button
                              className=" py-3 px-6 rounded-xl outline-none w-fit text-white font-bold font-poppins  border-2  bg-[#804dee] border-slate-200 uppercase pointer-events-none"
                              type="submit">
                              Registered
                            </button>
                          </div>
                        ) : (
                          <button
                            className=" py-3 px-6 rounded-xl outline-none w-fit text-white font-bold font-poppins  border-2   border-[#804dee] bg-black bg-opacity-60 uppercase"
                            type="submit"
                            onClick={() => handleRegister(event)}>
                            Register
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
