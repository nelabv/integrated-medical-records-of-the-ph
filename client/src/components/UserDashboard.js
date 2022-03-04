import React, { useEffect, useReducer } from "react";
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

  useEffect(() => {
    User.fetchUserInformation(sessionStorage.getItem("LOGIN_INFO"))
      .then((response) => {
        console.log(response);
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
                <div className="dashboard--container">
                    <DashboardTag />
                  
                    <UserFileList />
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