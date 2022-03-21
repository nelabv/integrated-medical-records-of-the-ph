import React, { useState, useEffect } from "react";
import User from "../methods/users";
import UserFileList from "./UserFileList";

export default function PatientsRecords({patientID}) {
  const [patientData, setPatientData] = useState(null);
  const [showFiles, setShowFiles] = useState(false);

  return (
    <div>
        <h3 className="teal--highlight">Fetching files of PATIENT: </h3>
        <UserFileList patientID={patientID} /> 
    </div>
  );
}