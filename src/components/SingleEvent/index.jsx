import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { prodUrl } from "../../utils/config";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { functionWrapper } from "../../utils/wrapper";
import ALoader from "../../utils/ALoader";

const SingleEvent = () => {
  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  const [eventData, setEventData] = useState(null);
  const [isReadMore, setIsReadMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if (!user) {
      navigate("/login");

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
    // console.log(data);
    var formdata = new FormData();
    formdata.append("date", formattedToday);
    formdata.append("clubId", eventData.club);
    formdata.append("clubName", eventData.clubName);
    formdata.append("eventId", eventData["id"]);
    formdata.append("eventName", eventData.name);
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
        if (res.ok) {
          toast.success("Successfully registered.", {
            position: "bottom-center",
          });
          // navigate("/events");
        } else throw res.statusText;
      })
      .catch((err) => {
        console.log(err);

        toast.error("Failed to register", {
          position: "bottom-center",
        });
      })
      .finally(() => setLoading(false));
  };

  const getEventData = async () => {
    try {
      const res = await axios.get(
        `${prodUrl}/events/event/noAuth/${id}?optionalAuth=true`
      );
      console.log(res);
      setEventData(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch event data. Please try again later.", {
        position: "bottom-center",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      functionWrapper
        .get(prodUrl + "/events/event/" + id)
        .then((res) => {
          console.log("registered events", res);
          setEventData(res);
          // setEvents(res[1]);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      getEventData();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <ALoader isLoading={loading} />
      {eventData && (
        <div className="sm:flex items-center justify-center p-8 sm:px-8  mt-14 gap-8 sm:gap-12 container max-w-7xl mx-auto h-full">
          <div className="mx-auto mb-12 sm:mt-28 sm:mr-3 sm:sticky sm:top-0">
            <div className="bg-white mx-auto w-64 sm:w-80 h-80 sm:h-96 mb-10 sm:mb-[80px] relative">
              <img
                src={eventData?.image}
                alt={eventData?.name}
                className="w-full h-full object-cover "
                style={{ position: "sticky", top: "49px " }}
              />
              <div className="border  mx-auto border-white border-l-0 border-t-0 absolute left-[30px] top-[20px] w-[240px] h-[312px] first-letter: sm:left-[19px] sm:top-[15px] sm:w-[315px] sm:h-[380px]"></div>
            </div>

            <div className="mb-9! flex  justify-center md:block ">
              {eventData.isRegistered ? (
                <div className="cursor-not-allowed">
                  <button
                    className=" btn-register font-potra px-[90px] sm:px-[100px] sm:ml-3 text-[21px]  border-2  bg-[#804dee] border-slate-200 uppercase pointer-events-none"
                    type="submit">
                    Registered
                  </button>
                </div>
              ) : (
                <button
                  className=" btn-register font-potra px-[90px] sm:px-[100px] sm:ml-3 text-[21px]"
                  type="submit"
                  onClick={() => handleRegister(event)}>
                  REGISTER
                </button>
              )}
            </div>
          </div>

          <div className="sm:flex flex-col sm:mb-[5px]  justify-center w-full sm:w-full h-80 sm:h-96">
            <div className="">
              <p className="text-3xl sm:text-5xl font-bold pb-2 font-potra">
                {eventData?.name}
              </p>
              <p className="text-xl sm:text-2xl font-bold mb-2 font-potra">
                {eventData?.clubName}
              </p>

              <div className="flex lg:items-center mb-4 flex-col gap-4 items-start lg:flex-row">
                <p className="mr-2 flex gap-2 items-center">
                  <span className="bg-white text-black p-2  rounded font-potra">
                    {eventData?.time?.split(":")[0]}
                  </span>{" "}
                  :
                  <span className="bg-white text-black p-2 rounded font-potra">
                    {eventData?.time.split(":")[1]}
                  </span>{" "}
                  <span className="bg-white text-black p-2 rounded font-potra">
                    {eventData?.time.includes("am") ? "am" : "pm"}
                  </span>
                </p>
                <p className="font-potra  bg-white text-black p-[5px] rounded">
                  {eventData?.date}
                </p>

                <div className="flex w-full gap-2 items-center">
                  <p className="sm:text-base sm:ml-[10%] "> Venue: </p>
                  <span className="">{eventData?.venue}</span>
                </div>
              </div>
            </div>

            <div
              className="text-base sm:text-[16px]  "
              style={{
                maxHeight: isReadMore ? "300px" : "300px",
                overflowY: "visible",
              }}>
              <div className="event-description font-poppins pb-9">
                <div
                  className="font-popppins"
                  dangerouslySetInnerHTML={{
                    __html: isReadMore
                      ? eventData?.desc
                      : eventData?.desc.slice(0, 750),
                  }}
                  style={{ lineHeight: "1.7" }}
                />
                {eventData?.desc.length > 800 && (
                  <span onClick={toggleReadMore} className="showMoreLink">
                    {isReadMore ? "...show less" : "... more"}
                  </span>
                )}
              </div>
            </div>

            {/* <p className="font-bold font-potra mt-3 mb-3 text-lg">
            PRIZE POOL:
          </p>
  
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 font-bold text-lg">
            <div className="pb-2">
              <span className="bg-white text-black p-2 rounded font-potra">
                1st
              </span>{" "}
              <span className="font-potra">$ 10,000</span>
            </div>
            <div className="pb-2">
              <span className="bg-white text-black p-2 rounded font-potra">
                2nd
              </span>{" "}
              <span className="font-potra">$ 8,000</span>
            </div>
            <div className="pb-2 mb-10">
              <span className="bg-white text-black p-2 rounded font-potra">
                3rd
              </span>{" "}
              <span className="font-potra">$ 5,000</span>
            </div>
          </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleEvent;
