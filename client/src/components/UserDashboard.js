import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import User from "../http";
import Logout from "./Logout";

function UserDashboard() {
  const [loadDashboard, setLoadDashboard] = useState(false);
  const [userInformation, setUserInformation] = useState();

  useEffect(() => {
    User.fetchUserInformation(sessionStorage.getItem("LOGIN_INFO"))
      .then((response) => {
        setUserInformation(response.data);
        setLoadDashboard(true);
      })

      .catch(error => console.log(error))
  }, [])

  return (
    <>
      { loadDashboard ? 
          <>
            <h1>Hello, {userInformation.firstName}</h1>
            <Logout />
          </>
      : null
      }
    </>
  );
}

export default withRouter(UserDashboard);