import React from "react";
import {FaWindowClose} from 'react-icons/fa';

function NavSidebar(props) {
  const { handleClick } = props;
  return (
    <>
      <div className="nav-sidebar-overlay" ></div>

      <div className="nav-sidebar">
        <FaWindowClose className="nav-icon" size="1.5em" onClick={handleClick}/>
      </div>
    </>
  );
}

export default NavSidebar;