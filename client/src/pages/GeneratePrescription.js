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
          <div className="generate-rx--container">
              <h2 className="teal--highlight">Verify Patient's Information</h2>
                  <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</span>
                  
                  <PatientIDInput Component={CommonRXGenerator} />
          </div>
        </div>

        <Footer />
    </>
  );
}
