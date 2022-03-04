import React, { useState, useReducer } from "react";
import Physician from "../methods/physicians"
import ErrorSpan from "./ErrorSpan";
import FormReducer from "../reducers/FormReducer";

const initialPatientVerificationForm = {
  patientID: 0,
  patientLastName: ''
}

function PatientIDInput({Component}) {
  const [patientID, setPatientID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const [patientInfo, setPatientInfo] = useState('');

  const [patientForm, dispatch] = useReducer(FormReducer, initialPatientVerificationForm);

  const handleChange = (e) => {
    if (e.target.name === 'patientID') {
      setPatientID(e.target.value)
    }

    setShowComponent(false);
    setErrorMessage('')

    let surnameInput = e.target.value.toUpperCase();

    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: surnameInput
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const patientInfo = {
      patientID: patientForm.patientID[0],
      patientLastName: patientForm.patientLastName[0]
    }

    
    Physician.verifyPatientInformation(patientInfo)
      .then(res => {
        if (res.status === 200) {
          setErrorMessage('');
          setPatientInfo(res.data.patientInfo)
          setShowComponent(true);
        }
      })
      .catch(error => {
        if (error.response.headers) {
          setErrorMessage('Patient not found')
        }
      })
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="form-group">
      <div style={{
          display: 'flex', 
          flexDirection: 'column',
          marginBottom: '1em'}}>
            
            <label className="form-label">PATIENT ID</label>
            <input 
              className="form-field"
              type="number"
              style={{
                whiteSpace:'pre-line'
              }}
              value={patientForm.patientID}
              name="patientID"
              onChange={handleChange}
            />

            <label className="form-label">PATIENT LAST NAME</label>
            <input 
              className="form-field"
              type="text"
              style={{
                whiteSpace:'pre-line'
              }}
              value={patientForm.patientLastName}
              name="patientLastName"
              onChange={handleChange}
            />
        </div>

        <input className='primary-btn' type="submit" value="Submit" />
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
