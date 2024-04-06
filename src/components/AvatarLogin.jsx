import React from "react";
  import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button,
  } from "@nextui-org/react";
  import { Avatar } from "@nextui-org/react";

  const AvatarLogin = (props) => {

    


    const handleLogout = () => {
      // Perform logout operations here
      // Clear authentication token from local storage
      localStorage.removeItem("user");
      console.log("logged out");
      // Redirect to login page
      window.location.href = "/";  };
      

    return (
      <div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              className="transition-transform cursor-pointer text-base font-poppins"
              showFallback
              style={{fontFamily: 'Poppins'}}
              name= {JSON.parse(localStorage.getItem("user"))?.name?.charAt(0)?.toUpperCase()}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {props.isLogin ? (
              <DropdownItem
                key="logout"
                color="danger"
              >
                <p className="font-poppins font-bold" onClick={handleLogout}>LOGOUT</p>
              </DropdownItem>
            ) : (
              null
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  };

  export default AvatarLogin;