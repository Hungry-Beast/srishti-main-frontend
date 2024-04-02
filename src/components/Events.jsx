import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./style.css";

import "../index.css";
import { prodUrl } from "../utils/config";

const Events = () => {
  const [events, setEvents] = useState([]);

  const clubs = [
    {
      _id: "634ed266bbd048305ac96029",
      name: "ELOCUTION CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-18%20at%209.42.18%20PM.jpeg?alt=media&token=0939d9a1-82f2-4ebc-9a95-52845cb9a79d",
      desc: "Creative presentation of ideas and thoughts in attractive fashion for effective speech.",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-18T16:20:54.042Z",
      updatedAt: "2022-10-21T14:09:15.852Z",
      __v: 0,
      phoneNo: "6003116744",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/21788.png?alt=media&token=81b79559-6b9a-4979-a122-3dffe0d6a6bd",
    },
    {
      _id: "634eda34bbd048305ac9604e",
      name: "HOBBY CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-18%20at%2010.22.44%20PM.jpeg?alt=media&token=4f205df9-7ebf-4c3a-abb8-933625733378",
      desc: "You don't have to hide what you love to do. Hobby club calls you forth",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-18T16:54:12.260Z",
      updatedAt: "2022-10-23T16:57:08.875Z",
      __v: 0,
      phoneNo: "9863236751",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%2010.35.15%20PM%20(1).jpeg?alt=media&token=c71472f3-c14e-4d02-9ec1-e341bd6a8ef9",
      upi: "longjampremkumarsingh1@oksbi",
    },
    {
      _id: "6350588bf07cf68292e6ecf0",
      name: "WRITERS' FORUM",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%201.22.31%20AM.jpeg?alt=media&token=0d26416a-982a-44ed-aafb-cd3977536a97",
      desc: "There is no greater agony than bearing an untold story inside you.",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-19T20:05:31.583Z",
      updatedAt: "2022-10-21T14:34:08.776Z",
      __v: 0,
      phoneNo: "7640978510",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/21788.png?alt=media&token=eceebcb1-cff5-43cb-82fa-9bf54dddec4a",
    },
    {
      _id: "6350af51b115f0ab0c7d1ada",
      name: "DRAMA CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%206.54.48%20AM.jpeg?alt=media&token=b73c4aa3-5fbc-4e4e-ae4f-d47550a05509",
      desc: "The only place that drama should be in is the stage, not in your personal life!!!",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-20T02:15:45.566Z",
      updatedAt: "2022-10-20T09:17:08.846Z",
      __v: 0,
      phoneNo: "8808613087",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/drama%20club.jpeg?alt=media&token=5be13cc5-6ebf-4975-be84-fda420065641",
      upi: "8808613087@paytm",
    },
    {
      _id: "634ee21abbd048305ac9609d",
      name: "GAME ZONE",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-18%20at%2010.57.17%20PM.jpeg?alt=media&token=29b5dda0-a5d2-44d2-8a70-dfa5ab2a36a9",
      desc: "The Battle Won for Glory.",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-18T17:27:54.527Z",
      updatedAt: "2022-10-20T08:57:00.800Z",
      __v: 0,
      phoneNo: "9378114244",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/game%20gone%20qr.jpeg?alt=media&token=667d55fa-43af-478e-99e7-8268f6ae7374",
      upi: "voodoo.ajit74-2@okaxis",
    },
    {
      _id: "63516babb115f0ab0c7d1e73",
      name: "COSPLAY ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/originalfilecosplay.png?alt=media&token=cb362176-3686-40f7-b3af-19e5fe1e399f",
      desc: "どうもありがとうございます\r\nだってばよ",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-20T15:39:23.490Z",
      updatedAt: "2022-10-21T14:36:35.894Z",
      __v: 0,
      phoneNo: "9339129112",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/pintso.jpeg?alt=media&token=652c1da3-d39d-4d9d-9dbe-cfc92a219254",
      upi: "pintsoblinked@okicici",
    },
    {
      _id: "63503852bbd048305ac963bf",
      name: "MUSIC CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-19%20at%2011.14.49%20PM.jpeg?alt=media&token=a5fd2674-b7d5-487e-83ab-9b2e5b500b28",
      desc: "Sometimes it's not all about the bass. ",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-19T17:48:02.277Z",
      updatedAt: "2022-10-21T14:18:13.672Z",
      __v: 0,
      phoneNo: "8837259553",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/pugai.jpeg?alt=media&token=d41ee4ba-b4e8-497f-bb59-e941583e3a5a",
      upi: "pougaigangmei19@oksbi",
    },
    {
      _id: "6350ae1eb115f0ab0c7d1ad6",
      name: "QUIZ CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%207.12.22%20AM.jpeg?alt=media&token=fa49f3b5-8b98-4d24-9a8e-1bdb9c6e1eee",
      desc: "Are you a Quiz master? Dare to take the ultimate Quiz challenge? Don't be so shy — Our Fun Quiz club presents questions and answers beyond your skull!",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-20T02:10:38.132Z",
      updatedAt: "2022-10-23T16:58:32.978Z",
      __v: 0,
      phoneNo: "7085124151",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%2010.35.15%20PM%20(1).jpeg?alt=media&token=0b11dd27-e53e-47d2-bf8d-952907d5926b",
      upi: "longjampremkumarsingh1@oksbi",
    },
    {
      _id: "6350290fbbd048305ac963a8",
      name: "VIDEOGRAPHY CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-19%20at%2010.07.36%20PM.jpeg?alt=media&token=1261d6c4-834d-4415-8978-0fe0a38f28a2",
      desc: "Capture the chills, In your reels!!!",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-19T16:42:55.727Z",
      updatedAt: "2022-10-20T17:13:09.631Z",
      __v: 0,
      phoneNo: "6204761027",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%2010.35.15%20PM%20(1).jpeg?alt=media&token=07096ce3-22cc-4219-ae92-6ebe66f5f698",
      upi: "kumarpriyanshu2324@oksbi",
    },
    {
      _id: "63500d61bbd048305ac9631f",
      name: "DANCE CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-19%20at%207.57.25%20PM.jpeg?alt=media&token=86f7dee9-88b8-4492-9a69-4f39f090b4cc",
      desc: "If your body vibrates to the sound of music, then the dance floor calls you forth.",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-19T14:44:49.539Z",
      updatedAt: "2022-10-21T14:05:15.512Z",
      __v: 0,
      phoneNo: "8794053931",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/lonjam.jpeg?alt=media&token=f6d986e0-ec98-410a-8639-1f240d443b70",
      upi: "longjampremkumarsingh1@oksbi",
    },
    {
      _id: "6351a735b115f0ab0c7d2153",
      name: "MR. & MS. SONABYSS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-21%20at%2012.34.24%20AM.jpeg?alt=media&token=a2b212c9-0b77-4ef9-b8d7-975509bcd6aa",
      desc: "NERIST in collaboration with Mega Entertainment is organizing SONABYSS ‘22 to outcast the talents of \r\nthe students from different north eastern states .",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-20T19:53:25.635Z",
      updatedAt: "2022-10-21T14:21:51.633Z",
      __v: 0,
      phoneNo: "6909873621",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/21788.png?alt=media&token=2a139099-b713-4f2d-875b-883bc0ee125e",
    },
    {
      _id: "63508983b115f0ab0c7d1a7e",
      name: "PHOTOGRAPHY CLUB",
      image:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/WhatsApp%20Image%202022-10-20%20at%204.50.58%20AM.jpeg?alt=media&token=77cc247f-1b96-4124-8414-64c2a1e1829b",
      desc: "Life doesn't give you many shots but a camera does!",
      createdBy: "634ed0c9bbd048305ac9601d",
      createdAt: "2022-10-19T23:34:27.156Z",
      updatedAt: "2022-10-21T14:11:49.403Z",
      __v: 0,
      phoneNo: "9077598933",
      qrCode:
        "https://firebasestorage.googleapis.com/v0/b/sonabyss-source.appspot.com/o/106268.jpg?alt=media&token=ba62284f-0389-4eff-8a87-5f2d53d95e60",
      upi: "",
    },
    {
      _id: "6608790f8f2ffc0e1454b930",
      name: "Gaming",
      image:
        "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/Gaming-download%20(7).png",
      desc: "This is a gaming Club",
      createdBy: "660804ca76641f21982384ca",
      createdAt: "2024-03-30T20:41:51.515Z",
      updatedAt: "2024-03-30T20:41:51.515Z",
      __v: 0,
    },
    {
      _id: "66087a70c18888d3a079037b",
      name: "Gamingd",
      image:
        "https://lkefjyhyetaykbxencgg.supabase.co/storage/v1/object/public/srishti/Gamingd-download%20(7).png",
      desc: "This is a gaming Club",
      createdBy: "660804ca76641f21982384ca",
      createdAt: "2024-03-30T20:47:44.648Z",
      updatedAt: "2024-03-30T20:47:44.648Z",
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