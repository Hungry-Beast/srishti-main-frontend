import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { prodUrl } from "../../config";
import "./style.css";

function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([{
    id: '',
    name: '',
    role: '',
    twitter: '',
    linkedin: '',
    profileImg: ''  
  }]);

  useEffect(() => {
    // Fetch data from API using Axios
    axios.get('https://shristi-backend.azurewebsites.net/team')
      .then(response => {
        setTeamMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching team members:', error);
      });
  }, []);

  return (
    <section>
      <div className="row">
        <h1>Our Team</h1>
      </div>
      <div className="row">
        {teamMembers.map(member => (
          <div className="column" key={member.id}>
            <div className="card">
              <div className="img-container">
                <img src={member.profileImg} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="icons">
                <a href={member.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.linkedin}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.github}>
                  <i className="fab fa-github"></i>
                </a>
                <a href={`mailto:${member.email}`}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;