import React, { useState } from "react";

function CommonRXGenerator(props) {
  // eslint-disable-next-line
  const { patientInfo , patientID } = props;
  const [prescriptionText, setPrescriptionText] = useState('Enter medications (e.g. Amoxicillin 250 mg tablets)')
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
    <>
      <div>
          <form onSubmit={handleSubmit}>
                <textarea 
                 className="textarea"
                  value={prescriptionText}
                  name="medications"
                  onChange={e => {
                    handleChange(e)
                  }}
                />

                <button className="btn--secondary" type="submit">Submit</button>
            </form>

            <span>{statusMsg}</span>
      </div>
    </>
  )
}

export default CommonRXGenerator;