import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import NavSidebar from "./Sidebar";

export default function HamburgerMenu(props) {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const handleClick = () => {
    setSidebarVisibility(prevState => !prevState)
  }

  return (
    <>
          <CgMenuRight size="2em" className="nav--icon" onClick={handleClick}/>

          { sidebarVisibility ? 
                <NavSidebar 
                    handleClick={handleClick} /> 
                : null }
    </>
  );
}