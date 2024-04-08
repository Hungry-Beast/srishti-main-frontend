import React, { useState, useEffect } from "react";
import axios from "axios";
import { prodUrl } from "../../utils/config";
import "./style.css";
import ALoader from "../../utils/ALoader";

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
  const [loading, setLoading] = useState(true);
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
    ele: [],
    mun: [],
    civil: []
  });

  useEffect(() => {
    // Fetch data from API using Axios
    setLoading(true);
    axios
      .get(prodUrl + "/organisers")
      .then((response) => {
        setTeamMembers([...response.data]);
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
          me : response.data.filter((res) => {
            if (res.group.toLowerCase() === "mech") return res;
          }),
          civil : response.data.filter((res) => {
            if (res.group.toLowerCase().trim() === "civil") return res;
          }),
          ele : response.data.filter((res) => {
            if (res.group.toLowerCase().trim() === "ele") return res;
          }),
        });
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      }).finally(() => setLoading(false));
  }, []);

  return (
    <section className="">
    <ALoader isLoading={loading}/>
      <div className="row m-14">
        <h1 className="font-potra text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em] ">Our Team</h1>
      </div>
      <div className="row">
        {/* <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Workshop</h1>
        {teamMembers?.workshop?.map((member) => {
          return <Card member={member} />;
        })} */}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Web Team</h1>
        {teamMembers.web.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Shristi Team</h1>
        {teamMembers?.shristi?.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Workshop Team</h1>
        {teamMembers.workshop.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">info & Pub Team</h1>
        {teamMembers.info.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Design Team</h1>
        {teamMembers.designing.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Forestry Department</h1>
        {teamMembers.forestry.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Cse department</h1>
        {teamMembers.computer.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Mechanical Department</h1>
        {teamMembers.me.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Civil Department</h1>
        {teamMembers.civil.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Electrical Department</h1>
        {teamMembers.ele.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Event Incharge</h1>
        {teamMembers.event.map((member) => {
          return <Card member={member} />;
        })}
        <h1 className="font-potra mt-[3%] text-2xl xs:text-3xl sm:text-4xl md:text-[3.5em]">Techno Club</h1>
        {teamMembers.techno.map((member) => {
          return <Card member={member} />;
        })}
      </div>
    </section>
  );
}

export default TeamSection;
