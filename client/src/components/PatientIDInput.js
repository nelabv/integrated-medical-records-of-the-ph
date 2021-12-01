import React, { useState } from "react";
import Physician from "../methods/physicians"
import ErrorSpan from "./ErrorSpan";

function PatientIDInput({Component}) {
  const [patientID, setPatientID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const [patientInfo, setPatientInfo] = useState('');

  const handleChange = (e) => {
    setPatientID(e.target.value)
    setShowComponent(false);
    setErrorMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Physician.fetchPatientData(patientID)
      .then(res => {
        if (res.status === 200) {
          setPatientInfo(res.data.patientInfo)
          setShowComponent(true);
        }
      })
      .catch(error => {
        if (error.response.status) {
          setErrorMessage("Patient not found!")
        }
      })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div style={{
          display: 'flex', 
          flexDirection: 'column',
          marginBottom: '1em'}}>
            
            <label>Patient ID Number:</label>
            <input 
              type="number"
              style={{
                whiteSpace:'pre-line'
              }}
              value={patientID}
              onChange={handleChange}
            />
        </div>

        <button type="submit">Verify</button>
        <ErrorSpan errorMessage={errorMessage} />
    </form>

    { showComponent 
      ? <Component 
            patientInfo={patientInfo} 
            patientID={patientID} /> 
      : null}
    </>
  );
}

export default PatientIDInput;
