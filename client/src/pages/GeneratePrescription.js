import React from "react";
import PatientIDInput from "../components/PatientIDInput";
import CommonRXGenerator from "../components/CommonRXGenerator";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function GeneratePrescription() {
  return (
    <>  
        <NavHandler />

        <div className="gradient--blue">
          <div className="max-width generate-rx--container">
              <h2 className="teal--highlight">Generate Prescription</h2>
                  <span>Enter the ID and surname to be able to generate a prescription and upload it to a patient’s directory.</span>
                  
                  <PatientIDInput Component={CommonRXGenerator} />
          </div>
        </div>

        <Footer />
    </>
  );
}
