import React from "react";
import { Link, useHistory } from "react-router-dom";
import User from "../../methods/users";

function NavHandler(props) {
  const { isNavTransparent } = props;
  let history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();
    
    User.logout()
        .then((res, err) => {
          if (err) throw err;

          console.log(res)
          localStorage.clear();
          history.push("/dashboard")
        })
  }

  return (
    <>
      <div className="nav--bg">
          <div className= {isNavTransparent ? "nav--transparent" : "nav"}>
                <span>IRMP</span> 

                { localStorage.getItem('ID') 
                
                    ? <button className="navbar--btn" onClick={handleLogout} >Logout</button> : 
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