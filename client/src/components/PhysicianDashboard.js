import React from "react";
import { Link } from 'react-router-dom';
import NavHandler from "./Nav/NavHandler";
import DashboardTag from "./DashboardTag";
import DevelopersNote from "./DevelopersNote";
import { FaFilePrescription } from 'react-icons/fa';
import { BiUpload } from 'react-icons/bi';
import { VscFileSubmodule } from "react-icons/vsc";
import Footer from "./Footer";

export default function PhysicianDashboard() {
  const note = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

  return (
    <> 
      <NavHandler />

      <div className="default padding-top">
          <DashboardTag />

          <DevelopersNote devNote={note} />

          <Link to="/generate-prescription">
              <div className='wide-btn '>
                <FaFilePrescription size="1.5em" />
                <p>GENERATE PRESCRIPTION</p>
              </div>
          </Link>

          <Link to="/upload">
              <div className='wide-btn '>
                <BiUpload size="1.5em" />
                <p>UPLOAD A FILE TO A PATIENT'S DATABASE</p>
              </div>
          </Link>

          <Link to="/dashboard">
              <div className='wide-btn '>
                <VscFileSubmodule size="1.5em" />
                <p>VIEW A PATIENT'S RECORDS</p>
              </div>
          </Link>
      </div>

      <Footer />
    </>
  );
}