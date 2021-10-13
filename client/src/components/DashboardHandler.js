import React from "react";
import PhysicianDashboard from "./PhysicianDashboard";
import UserDashboard from "./UserDashboard";

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
