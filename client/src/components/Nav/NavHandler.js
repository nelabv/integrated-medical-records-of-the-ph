import React, { useState, useEffect } from "react";
import { FaGripHorizontal } from "react-icons/fa";

function NavHandler() {
  const [navVisibility, setNavVisibility] = useState(true);

  const navbarControl = () => {
    if (window.scrollY > 120) {
      setNavVisibility(false)
    } else {
      setNavVisibility(true)
    }
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

          <FaGripHorizontal size="2em" className="nav-icon"/>
      </div>
    : null}
    </>
  );
}

export default NavHandler;