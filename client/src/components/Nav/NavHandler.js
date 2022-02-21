import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import NavSidebar from "./Sidebar";

function NavHandler() {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const handleClick = () => {
    setSidebarVisibility(prevState => !prevState)
  }

  return (
    <>
      <div className="nav">
          <span>LOGO</span>

          <CgMenuRight size="2em" className="nav-icon" onClick={handleClick}/>

          { sidebarVisibility ? 
                <NavSidebar 
                    handleClick={handleClick} /> 
                : null }
      </div>
    </>
  );
}

export default NavHandler;