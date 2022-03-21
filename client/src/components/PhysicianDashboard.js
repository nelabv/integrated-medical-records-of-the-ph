import React from "react";
import { Link } from 'react-router-dom';
import NavHandler from "./Nav/NavHandler";
import DashboardTag from "./DashboardTag";
import { FaFilePrescription } from 'react-icons/fa';
import { BiUpload } from 'react-icons/bi';
import { VscFileSubmodule } from "react-icons/vsc";
import Footer from "./Footer";

export default function PhysicianDashboard() {
  return (
    <> 
      <NavHandler isNavTransparent={false} />

      <div className="gradient--blue">
                <div className="dashboard--container">
                    <DashboardTag />

                    <div className="physiciandashboard--actions">
                        <h3>Actions</h3>
                        <Link to="/generate-prescription">
                            <div className='physiciandashboard--actions--icon'>
                              <FaFilePrescription size="1.5em" />
                              <span>GENERATE PRESCRIPTION</span>
                            </div>
                        </Link>

                        <Link to="/upload">
                            <div className='physiciandashboard--actions--icon'>
                              <BiUpload size="1.5em" />
                              <span>SEND FILE TO A PATIENT</span>
                            </div>
                        </Link>

                        <Link to="/view">
                            <div className='physiciandashboard--actions--icon'>
                              <VscFileSubmodule size="1.5em" />
                              <span>VIEW PATIENT'S RECORDS</span>
                            </div>
                        </Link>
                    </div>
                </div>
      </div>

      <Footer />
    </>
  );
}