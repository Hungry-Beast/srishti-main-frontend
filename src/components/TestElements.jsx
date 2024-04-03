import React from "react";
const TestElement = () => {
    // Save the authentication token in the local storage
    localStorage.setItem("authenticationToken", "harshisop");
    localStorage.setItem("userName", "harsh");
    const userName = localStorage.getItem("userName");
    return (
      <div>
        <div>
          <h1>Hello  {userName} </h1>
        </div>
      </div>
    );
  };
  
  export default TestElement;
