import React from "react";
import UploadForm from "../components/FormComponents/UploadForm";
import PatientIDInput from "../components/PatientIDInput";

export default function UploadFile() {
  return (
    <div>
      UPLOAD A FILE 

      <PatientIDInput Component={UploadForm} />
    </div>
  );
}