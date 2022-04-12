import React from "react";
import UserFileList from "./UserFileList";

export default function PatientsRecords({patientID}) {
  return (
    <div>
        <h3 className="teal--highlight">Fetching files of PATIENT: </h3>
        <UserFileList patientID={patientID} /> 
    </div>
  );
}