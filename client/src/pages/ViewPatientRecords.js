import React from "react";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";
import PatientIDInput from "../components/PatientIDInput";
import PatientsRecords from "../components/PatientsRecords";

export default function ViewPatientRecords() {
  return (
    <> 
      <NavHandler isNavTransparent={false} /> 

      <div className="gradient--blue">
        <div className="max-width dashboard--container view-records--container">
            <h2 className="teal--highlight">View Patient's Records</h2>
            <span>Please enter the ID and surname to be able to view a patient’s file directory.</span>

            <PatientIDInput Component={PatientsRecords} />
        </div>
      </div>

      <Footer />
    </>
  );
}