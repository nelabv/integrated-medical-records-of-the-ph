import React from "react";
import Logout from "../Logout";
import NavProfile from "./NavProfile";
import { AiOutlineUser } from "react-icons/ai";

function LoggedIn(props) {
  const { handleClick } = props;
  
  return (
    <div className="sidebar-logged-in">
        <NavProfile handleClick={handleClick} />

        <div className="action-with-icon">
          <AiOutlineUser size="1.25em" />
          <button>Profile</button>
        </div>

        <Logout />
    </div>
  );
}

export default LoggedIn;