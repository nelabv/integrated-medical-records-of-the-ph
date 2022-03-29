import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavbarButtons from "./NavbarButtons";

function NavHandler(props) {
  const { isNavTransparent } = props;
  const [hamburgerMenu, showHamburgerMenu] = useState(false);

  const configureNavbar = () => {
    const screenWidth = window.screen.width;

    if (screenWidth < 600) {
      showHamburgerMenu(true);
    } else {
      showHamburgerMenu(false);
    }
  }

  useEffect(() => {
/*     window.addEventListener("scroll", configureNavbar);
    return () => window.removeEventListener("scroll", configureNavbar); */

    const screenWidth = window.screen.width;
    console.log('running');

    if (screenWidth < 600) {
      showHamburgerMenu(true);
    } else {
      showHamburgerMenu(false);
    }
  }, [showHamburgerMenu]);

  return (
    <>
      <div className="nav--bg">
          <div className= {isNavTransparent ? "nav--transparent" : "nav"}>
                <span>IRMP</span> 

                { hamburgerMenu ? 
                      <HamburgerMenu /> : <NavbarButtons />
                }
          </div>

      </div>
    </>
  );
}

export default NavHandler;