import React, { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import Logout from "./Logout"

export default function PhysicianDashboard() {
  let history = useHistory();
  
  useEffect(() => {
    if (sessionStorage.getItem("ENTITY") !== "PHYSICIAN") {
      history.push('/')
    }
  }, [history])

  return (
    <>
      <Logout />

      <Link to="/physician/generate-rx" >
        <button>Generate Prescription</button>
      </Link>
    </>
  );
}