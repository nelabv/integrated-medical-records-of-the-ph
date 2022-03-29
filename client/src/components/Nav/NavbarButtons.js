import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarButtons(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('AUTH')) {
      setLoggedIn(true);
    }
  }, [setLoggedIn, loggedIn])

  return (
    <>
        {
          loggedIn ? 
          
                <button className="navbar--btn" >Logout</button> 
                
                
                : 
                <>
                    <Link to='/login/as'  className="navbar--btn">
                        Login
                    </Link>
                </>
        }
    </>
  );
}