import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { localUrl, prodUrl } from "../../utils/config";

const SingleEvent = () => {
  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  const [eventData, setEventData] = useState();
  const getEventData = async () => {
    try {
      const res = await axios.get(`${localUrl}/events/noAuth/${id}?optionalAuth=true`);
      console.log(res);
    } catch (error) {
        console.log(error)
    }
  };
  useEffect(() => {
    if (id) getEventData();
    console.log(eventData)
  }, [id]);


  return <div>dd</div>;
};

export default SingleEvent;
