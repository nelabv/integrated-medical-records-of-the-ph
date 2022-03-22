import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import NavSidebar from "./Sidebar";

function NavHandler(props) {
  const { isNavTransparent } = props;
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const handleClick = () => {
    setSidebarVisibility(prevState => !prevState)
  }

  return (
    <>
      <div className= {isNavTransparent ? "max-width nav--transparent" : "max-width nav"}>
            <span>LOGO</span> 

            <CgMenuRight size="2em" className="nav--icon" onClick={handleClick}/>

            { sidebarVisibility ? 
                  <NavSidebar 
                      handleClick={handleClick} /> 
                  : null }
      </div>
    </>
  );
}

export default NavHandler;