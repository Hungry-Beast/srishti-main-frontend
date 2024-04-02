import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { prodUrl } from "../../utils/config";

const SingleEvent = () => {
  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  const [eventData, setEventData] = useState();
  const getEventData = async () => {
    try {
      const res = await axios.get(`${localUrl}/events/event/${id}`);
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    getEventData();
  }, [id]);

  return <div></div>;
};

export default SingleEvent;
