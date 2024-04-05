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
import { Select, SelectItem } from "@nextui-org/select";
import { staticClubs } from "../utils/constants";
import ALoader from "../utils/ALoader";
import { toast } from "react-toastify";

const Events = () => {
  const [events, setEvents] = useState({
    preEvents: [],
    mainEvents: [],
  });
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [clubs, setClubs] = useState([]);
  const params = useParams();
  const [selectedClubState, setSelectedClubState] = useState();

  const [loading, setLoading] = useState(true);

  const fetchEvents = async (selectedClub) => {
    setSelectedClubState(selectedClub);
    setSearchParams({ deptId: selectedClub });
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        const res = await functionWrapper.get(
          prodUrl + "/events/" + selectedClub
        );

        console.log("registered events", res);
        setEvents({ preEvents: res[0], mainEvents: res[1] });
        // setEvents(res[1]);

        setLoading(false);
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
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setLoading(true);
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    console.log(data, params.deptId);
    var formdata = new FormData();
    formdata.append("date", formattedToday);
    formdata.append("clubId", selectedClub);
    formdata.append("clubName", data.clubName);
    formdata.append("eventId", data.id);
    formdata.append("eventName", data.name);

    functionWrapper
      .post(`${prodUrl}/registration`, formdata)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          toast.success("Successfully registered.", {
            position: "bottom-center",
          });
          navigate("/events");
        } else throw res.statusText;
      })
      .catch((err) => {
        console.log(err);

        toast.error("Failed to register", {
          position: "bottom-center",
        });
      })
      .finally(() => {
        setLoading(false);

        fetchEvents(selectedClub);
      });

    // functionWrapper
    //   .post(`${prodUrl}/registration`, formdata)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setLoading(false);

    //   });
  };

  // Call fetchEvents directly when the component mounts
  const selectedClub = searchParams.get("deptId");

  useEffect(() => {
    if (selectedClub) fetchEvents(selectedClub);
    else {
      fetchEvents(staticClubs[0]._id);
    }
  }, []);

  // console.log(selectedClub);

  return (
    <>
      <div id="portfolio" className="EventsClass max-w-7xl mx-auto h-full">
        <h3 className="glitch Event  text-xl font-bold text-center text-events">
          Events
        </h3>
        <div className="flex justify-center items-center">
          <Select
            label="Select a department"
            // className="font-poppins font-bold"
            classNames={{
              label: "font-poppins font-bold",
              trigger: "w-[400px] mt-10",
              popoverContent: "font-poppins font-bold",
              base: "font-poppins",
              innerWrapper: "font-poppins",
              value: "font-poppins",
              mainWrapper: "flex justiy-center items-center",
            }}
            onChange={(e) => fetchEvents(e.target.value)}
            value={selectedClub}
            defaultSelectedKeys={[staticClubs[0]._id]}
            // selectedKeys={}
          >
            {staticClubs.map((club, index) => {
              return (
                <SelectItem
                  classNames={{
                    base: "font-poppins",
                    title: "font-poppins",
                  }}
                  className="font-poppins"
                  key={club._id}
                  value={club._id}>
                  {club.name}
                </SelectItem>
              );
            })}
          </Select>
        </div>

        <div className="container">
          <>
            <div className="mt-10">
              <h3 className="mb-5 text-2xl font-bold text-event">
                Main Events of {events?.mainEvents[0]?.clubName}
              </h3>

              <div className={`grid grid-cols-4 gap-6 gap-y-14`}>
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
                      <div className="flex absolute bottom-9 justify-around w-full px-3 gap-2  flex-wrap">
                        <button
                          className="border-[#804dee] py-3 px-6 rounded-xl outline-none w-fit text-black bg-slate-100 font-bold font-poppins uppercase "
                          type="submit"
                          disabled={loading}
                          onClick={() =>
                            navigate(
                              `/events/${event.id ? event.id : event["_id"]}`
                            )
                          }>
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
                          <div>
                            <button
                              className=" py-3 px-6 rounded-xl outline-none w-fit text-white font-bold font-poppins  border-2   border-[#804dee] bg-black bg-opacity-60 uppercase"
                              type="submit"
                              onClick={() => handleRegister(event)}>
                              Register
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
          <ALoader isLoading={loading} />
        </div>
      </div>
    </>
  );
};

export default Events;
