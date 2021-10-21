import React, {useEffect, useReducer} from "react";
import { useHistory } from 'react-router-dom'
import FormReducer from "../reducers/FormReducer";
import Physician from "../methods/physicians"

const initialFormState = {
  firstName: '',
  lastName: ''
}

function PatientIDInput() {
  let history = useHistory();
  const [patientForm, dispatch] = useReducer(FormReducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    Physician.generatePrescription({
      firstName: patientForm.firstName[0],
      lastName: patientForm.lastName[0]
    })
  }

  useEffect(() => {
    if (sessionStorage.getItem('ENTITY')) {
      history.push('/admin/generate-rx')
    }
  }, [history])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div style={{
          display: 'flex', 
          flexDirection: 'column',
          marginBottom: '1em'}}>
            
            <label>Patient Last Name</label>
            <input 
              type="text"
              style={{
                whiteSpace:'pre-line'
              }}
              value={patientForm.lastName}
              name="lastName"
              onChange={e => {
                handleChange(e)
              }}
            />

            <label>Patient First Name</label>
            <input 
              type="text"
              style={{
                whiteSpace:'pre-line'
              }}
              value={patientForm.firstName}
              name="firstName"
              onChange={e => {
                handleChange(e)
              }}
            />
        </div>

        <button type="submit">Verify</button>
    </form>
    </>
  );
}

export default PatientIDInput;
