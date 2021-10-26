import React, { useState } from "react";

function CommonRXGenerator(props) {
  const { firstName, lastName, birthdate, bloodType } = props.patientInfo;
  const [prescriptionText, setPrescriptionText] = useState('')

  const handleChange = (e) => {
    setPrescriptionText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prescriptionText)
    setPrescriptionText('')
  }

  return (
    <div>
      Generating prescription for <span style={{textTransform: 'uppercase'}}>{lastName}, {firstName}</span>

      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>
          <form onSubmit={handleSubmit}>
              <textarea 
                style={{
                  whiteSpace:'pre-line'
                }}
                value={prescriptionText}
                name="medications"
                onChange={e => {
                  handleChange(e)
                }}
              />

              <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default CommonRXGenerator;