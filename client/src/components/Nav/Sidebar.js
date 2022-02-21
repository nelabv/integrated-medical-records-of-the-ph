import React from "react";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

function NavSidebar(props) {
  const account = localStorage.getItem('ID');

  const { handleClick } = props;

  return (
    <>
      <div className="nav-sidebar-overlay" ></div>

      <div className="nav-sidebar">
        { account 
                ? <LoggedIn handleClick={handleClick} />
                : <NotLoggedIn handleClick={handleClick} /> }
      </div>
    </>
  );
}

export default NavSidebar;