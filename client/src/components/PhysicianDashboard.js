import React from "react";
import { Link } from 'react-router-dom';
import NavHandler from "./Nav/NavHandler";
import DashboardTag from "./DashboardTag";
import DevelopersNote from "./DevelopersNote";

export default function PhysicianDashboard() {
  const note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
  
  return (
    <> 
      <NavHandler />

      <div className="default padding-top">
          <DashboardTag />

          <DevelopersNote devNote={note} />

          <Link to="/generate-prescription" >
            <button>Generate Prescription</button>
          </Link>

          <Link to="/upload" >
            <button>Upload Document</button>
          </Link>
      </div>
    </>
  );
}