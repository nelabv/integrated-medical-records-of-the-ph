import React, { useState } from "react";

function CommonRXGenerator(props) {
  const { firstName, lastName } = props.patientInfo;
  const { patientID } = props;
  const [prescriptionText, setPrescriptionText] = useState('')
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e) => {
    setPrescriptionText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const prescriptionConfig = {
      patientAge: 1,
      medications: prescriptionText,
      patientID
    }

    fetch("http://localhost:8080/physicians/generate-prescription", { // Does not work in axios for some reason, to FIX
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(prescriptionConfig)
    })

      .then(async res => {
        if (res.status === 200) {
          const blob = await res.blob();
          const file = new Blob(
            [blob], 
            {type: 'application/pdf'}
          );
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);  
          setStatusMsg("File uploaded to patient's database successfully.")
        }
      }) 
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

      <span>{statusMsg}</span>
    </div>
  )
}

export default CommonRXGenerator;