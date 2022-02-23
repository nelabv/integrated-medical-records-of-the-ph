import React from "react";
import { Link } from 'react-router-dom';
import NavHandler from "./Nav/NavHandler";

export default function PhysicianDashboard() {
  return (
    <> 
      <NavHandler />

      <Link to="/generate-prescription" >
        <button>Generate Prescription</button>
      </Link>

      <Link to="/upload" >
        <button>Upload Document</button>
      </Link>
    </>
  );
}