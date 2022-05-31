import React, { useState, useReducer } from "react";
import Physician from "../methods/physicians"
import ErrorSpan from "./ErrorSpan";
import FormReducer from "../reducers/FormReducer";
import { setNativeValue } from "./FormComponents/SetNativeValue";

const initialPatientVerificationForm = {
  patientID: 0,
  patientLastName: ''
}

function PatientIDInput({Component}) {
  const [patientID, setPatientID] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [showComponent, setShowComponent] = useState(false);
  // eslint-disable-next-line
  const [patientInfo, setPatientInfo] = useState('');

  const [patientForm, dispatch] = useReducer(FormReducer, initialPatientVerificationForm);

  const setTesterAccount = (e) => {
    e.preventDefault();
               
    const testerAccount = {
      idNumber: '1653991372357',
      lastName: 'SMITH'
    }

    const patientIDNumber = document.getElementById("patient-id-number");
    const patientLasTName = document.getElementById("patient-last-name");
    setNativeValue(patientIDNumber, testerAccount.idNumber);
    setNativeValue(patientLasTName, testerAccount.lastName);
  }

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
          setPatientInfo(res.data.patientData);
          setShowComponent(true);
        }
      })
      .catch(error => {
        if (error.response.headers) {
          setErrorMessage('Patient not found. Please check if Patient ID and Patient Last Name is correct.')
        }
      })
  }

  return (
    <>
        <form onSubmit={handleSubmit} className="form--group">
                <label className="form--label">PATIENT ID</label>
                <input 
                  className="form--field"
                  type="text"
                  style={{
                    whiteSpace:'pre-line'
                  }}
                  id="patient-id-number"
                  value={patientForm.patientID}
                  name="patientID"
                  onChange={handleChange}
                />

                <label className="form--label">PATIENT LAST NAME</label>
                <input 
                  className="form--field"
                  type="text"
                  style={{
                    whiteSpace:'pre-line'
                  }}
                  value={patientForm.patientLastName}
                  name="patientLastName"
                  id="patient-last-name"
                  onChange={handleChange}
                />

            <span className="teal--highlight" onClick={setTesterAccount}>Click here to input sample user data.</span>

            <input className='btn--primary' type="submit" value="Submit" />
            
            { errorMessage ? <ErrorSpan errorMessage={errorMessage} /> : null }

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
