import React from "react";
import UserFileList from "./UserFileList";

export default function PatientsRecords({patientID, patientInfo}) {
  console.log(patientID)
  return (
    <div>
        <span>Viewing files of patient:</span>
        <h3 className="teal--highlight">{patientInfo.lastName}, {patientInfo.firstName}</h3>
        <span>ID #: {patientID}</span>

        <UserFileList patientID={patientID} /> 
    </div>
  );
}