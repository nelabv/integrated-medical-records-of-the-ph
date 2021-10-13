import React from "react";
import { withRouter } from 'react-router-dom';

function PhysicianForm(props) {
  const { prescriptionForm, handleChange } = props;

  return (
    <>
        <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>
          
          <label>Physician Name</label>
          <input 
            type="text"
            value={prescriptionForm.name}
            name="name"
            onChange={e => {
              handleChange(e)
            }}
          />
          <span>Please input the name only. Titles will be generated automatically.</span>

          <label>Specialization</label>
          <input 
            type="text"
            value={prescriptionForm.specialization}
            name="specialization"
            onChange={e => {
              handleChange(e)
            }}
          />

          <label>Phone Number</label>
          <input 
            type="text"
            pattern="[0-9]*"
            value={prescriptionForm.phoneNumber}
            name="phoneNumber"
            onChange={e => {
              handleChange(e)
            }}
          />
          
          <label>Email</label>
          <input 
            type="email"
            value={prescriptionForm.email}
            name="email"
            onChange={e => {
              handleChange(e)
            }}
          />
      </div>
    </>
  );
}

export default withRouter(PhysicianForm)