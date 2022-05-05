import React, { useEffect, useReducer } from "react";
import VisibilityReducer from "../reducers/VisiblityReducer";
import { withRouter } from "react-router";
import User from "../methods/users";
import UserFileList from "./UserFileList";
import DashboardTag from "./DashboardTag";
import NavHandler from "./Nav/NavHandler";
import Footer from "./Footer";

const initialVisibility = {
  userDashboard: false,
  patientID: false
}

function UserDashboard() {
  const [visibilityState, dispatch] = useReducer(VisibilityReducer, initialVisibility);

  useEffect(() => {
    User.fetchUserInformation(sessionStorage.getItem("LOGIN_INFO"))
      .then(() => {
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
            <NavHandler isNavTransparent={false} />

            <div className="gradient--blue">
                <div className="max-width dashboard--container">
                    <DashboardTag />
                  
                    <UserFileList patientID={localStorage.getItem('ID')}/>
                </div>
            </div>
          </>
      : null
      }

      <Footer />
    </>
  );
}

export default withRouter(UserDashboard);