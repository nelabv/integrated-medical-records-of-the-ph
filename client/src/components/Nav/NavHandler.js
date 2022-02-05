import React, { useState, useEffect } from "react";
import { FaGripHorizontal } from "react-icons/fa";
import NavSidebar from "./Sidebar";

function NavHandler() {
  const [navVisibility, setNavVisibility] = useState(true);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const navbarControl = () => {
    if (window.scrollY > 120) {
      setNavVisibility(false);
    } else {
      setNavVisibility(true);
    }
  }

  const handleClick = () => {
    setSidebarVisibility(prevState => !prevState)
  }

  useEffect(()=>{
    window.addEventListener('scroll', navbarControl);

    return () => window.removeEventListener('scroll', navbarControl);
  },[])

  return (
    <>
    { navVisibility ? 
      <div className="nav">
          <span>LOGO</span>

          <FaGripHorizontal size="2em" className="nav-icon" onClick={handleClick}/>

          { sidebarVisibility ? 
                <NavSidebar 
                    handleClick={handleClick} /> 
                : null }
      </div>
    : null}
    </>
  );
}

export default NavHandler;