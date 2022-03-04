import React from "react";
import Logout from "../Logout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function LoggedIn(props) {
  const { handleClick } = props;
  
  return (
    <div className="sidebar-logged-in">
        <AiOutlineArrowLeft size="1.5em" onClick={handleClick} />

        <Logout />
    </div>
  );
}

export default LoggedIn;