import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PhysicianDashboard from "../components/PhysicianDashboard";
import UserDashboard from "../components/UserDashboard";

export default function DashboardHandler() {
  const entity = localStorage.getItem("ENTITY");

  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('ID')) {
      history.push('/');
    }
  }, )

  return (
    <>
      { entity === "PHYSICIAN"
       ? <PhysicianDashboard />
       : <UserDashboard /> }
    </>
  );
}
