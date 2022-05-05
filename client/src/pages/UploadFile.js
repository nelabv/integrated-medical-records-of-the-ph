import React from "react";
import UploadForm from "../components/FormComponents/UploadForm";
import PatientIDInput from "../components/PatientIDInput";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function UploadFile() {
  return (
    <>
        <NavHandler />

        <div className="gradient--blue">
          <div className="max-width generate-rx--container">
              <h2 className="teal--highlight">Upload a file to a patient's database</h2>
                  <span>Please enter the ID and surname to be able to upload medical files to a patient’s directory.</span>
                  
                  <PatientIDInput Component={UploadForm} />
          </div>
        </div>

        <Footer />
    </>
  );
}