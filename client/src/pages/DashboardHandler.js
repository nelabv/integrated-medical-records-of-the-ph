import React from "react";
import PhysicianDashboard from "../components/PhysicianDashboard";
import UserDashboard from "../components/UserDashboard";

export default function DashboardHandler() {
  const entity = sessionStorage.getItem("ENTITY");

  return (
    <>
      { entity === "PHYSICIAN"
       ? <PhysicianDashboard/>
       : <UserDashboard/> }
    </>
  );
}