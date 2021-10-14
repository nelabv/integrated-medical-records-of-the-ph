import React from "react";
import { withRouter } from 'react-router-dom';

function PatientForm(props) {
  const { prescriptionForm, handleChange } = props;

  return (
    <>
        <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>
          
          <label>First Name</label>
          <input 
            type="text"
            value={prescriptionForm.patientFirstName}
            name="patientFirstName"
            onChange={e => {
              handleChange(e)
            }}
          />

          <label>Last Name</label>
          <input 
            type="text"
            value={prescriptionForm.patientLastName}
            name="patientLastName"
            onChange={e => {
              handleChange(e)
            }}
          />

          <label>Age</label>
          <input 
            type="number"
            value={prescriptionForm.patientAge}
            name="patientAge"
            onChange={e => {
              handleChange(e)
            }}
          />

          <label>Sex</label>
          <input 
            type="text"
            value={prescriptionForm.patientSex}
            name="patientSex"
            onChange={e => {
              handleChange(e)
            }}
          />
      </div>
    </>
  );
}

export default withRouter(PatientForm)