import React, { useState, useEffect, useReducer } from "react";
import VisibilityReducer from "../reducers/VisiblityReducer";
import { withRouter } from "react-router";
import User from "../methods/users";
import UserFileList from "./UserFileList";
import DashboardTag from "./DashboardTag";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "./Footer";

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
            <NavHandler />

            
            <div className="default padding-top">
                <DashboardTag name={userInformation.firstName} />
              
                <UserFileList />
            </div>
          </>
      : null
      }

      <Footer />
    </>
  );
}

export default withRouter(UserDashboard);