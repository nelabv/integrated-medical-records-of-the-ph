import React from "react";
import { Link } from "react-router-dom";

function NavHandler(props) {
  const { isNavTransparent } = props;

  return (
    <>
      <div className="nav--bg">
          <div className= {isNavTransparent ? "nav--transparent" : "nav"}>
                <span>IRMP</span> 

                { localStorage.getItem('ID') ? <button className="navbar--btn" >Logout</button> : 
                      <>
                          <Link to='/login/as'  className="navbar--btn">
                              Login
                          </Link>
                      </>
                }
          </div>

      </div>
    </>
  );
}

export default NavHandler;