import React, { useState, useEffect } from "react";
import axios from "axios";
import { prodUrl } from "../../utils/config";
import "./style.css";

const Card = ({ member }) => {
  return (
    <div className="column" key={member._id}>
      {
        <div className="card hover:transition-background hover:bg-[#6045ea] hover:delay-100 hover:ease-in-out focus:transition-background focus:bg-[#6045ea] focus:delay-100 focus:ease-in-out">
          <div className="img-container  text-center flex justify-center items-center m-2">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full hover:transition-all hover:delay-100 hover:ease-in-out h-28 w-28 object-cover hover:scale-125"
            />
          </div>
          <h3 className="mt-3">{member.name}</h3>
          <p>{member.position}</p>
        </div>
      }
    </div>
  );
};
function TeamSection() {
  const [teamMembers, setTeamMembers] = useState({
    shristi: [],
    web: [],
    workshop: [],
    info: [],
    designing: [],
    forestry: [],
    computer: [],
    event: [],
    techno: [],
    ece: [],
    ae: [],
    me: [],
    ce: [],
    cms: [],
    ee: [],
    mun: []
  });

  useEffect(() => {
    // Fetch data from API using Axios
    axios
      .get(prodUrl + "/organisers")
      .then((response) => {
        setTeamMembers([...response.data]);
        console.log(response.data);
        setTeamMembers({
          ...teamMembers,

          shristi: response.data.filter((res) => {
            if (res.group.toLowerCase() === "shristi") return res;
          }),
          web: response.data.filter((res) => {
            if (res.group.toLowerCase() === "web") return res;
          }),
          workshop: response.data.filter((res) => {
            if (res.group.toLowerCase() === "workshop") return res;
          }),
          info: response.data.filter((res) => {
            if (res.group.toLowerCase() === "info") return res;
          }),
          designing: response.data.filter((res) => {
            if (res.group.toLowerCase() === "designing") return res;
          }),
          forestry: response.data.filter((res) => {
            if (res.group.toLowerCase() === "forestry") return res;
          }),
          computer: response.data.filter((res) => {
            if (res.group.toLowerCase() === "cse") return res;
          }),
          event: response.data.filter((res) => {
            if (res.group.toLowerCase() === "event") return res;
          }),
          techno: response.data.filter((res) => {
            if (res.group.toLowerCase() === "techno") return res;
          }),
        });
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  return (
    <section>
      <div className="row m-14">
        <h1 className="font-potra">Our Team</h1>
      </div>
      <div className="row">
        <h1 className="font-potra mt-[3%]">Workshop</h1>
        {teamMembers?.workshop?.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Web Team</h1>
        {teamMembers.web.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Shristi Team</h1>
        {teamMembers?.shristi?.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Workshop Team</h1>
        {teamMembers.workshop.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Info & Pub Team</h1>
        {teamMembers.info.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Design Team</h1>
        {teamMembers.designing.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Forestry Department</h1>
        {teamMembers.forestry.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Cse department</h1>
        {teamMembers.computer.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Event Incharge</h1>
        {teamMembers.event.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%]">Techno Club</h1>
        {teamMembers.techno.map((member) => {
          return <Card member={member} />;
        })}
      </div>
    </section>
  );
}

export default TeamSection;
