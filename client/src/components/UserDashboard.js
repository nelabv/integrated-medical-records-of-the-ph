import React, { useState, useEffect, useReducer } from "react";
import VisibilityReducer from "../reducers/VisiblityReducer";
import { withRouter } from "react-router";
import User from "../methods/users";
import Logout from "./Logout";
import UserFileList from "./UserFileList";

const initialVisibility = {
  userDashboard: false,
  patientID: false
}

function UserDashboard() {
  const [visibilityState, dispatch] = useReducer(VisibilityReducer, initialVisibility);
  const [userInformation, setUserInformation] = useState();

  useEffect(() => {
    User.fetchUserInformation(sessionStorage.getItem("LOGIN_INFO"))
      .then((response) => {
        setUserInformation(response.data);
        dispatch({
          type: 'TOGGLE_VISIBILITY',
          payload: 'userDashboard'
        })
      })

      .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      { visibilityState.userDashboard ? 
          <>
            <h1>Hello, {userInformation.firstName}</h1>
            
            <Logout />
            <UserFileList />
          </>
      : null
      }
    </>
  );
}

export default withRouter(UserDashboard);