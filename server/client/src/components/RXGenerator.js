import React, { useEffect, useReducer } from "react";
import { useHistory, withRouter } from 'react-router-dom';
import FormReducer from "../reducers/FormReducer";
import PatientForm from "./FormComponents/PatientForm";
import PhysicianForm from "./FormComponents/PhysicianForm";
import MedicationsForm from "./FormComponents/MedicationsForm";

const initialPrescription = {
  name: '',
  specialization: '',
  phoneNumber: '',
  email: '',

  patientFirstName: '',
  patientLastName: '',
  patientAge: '',
  patientSex: '',

  medications: ''
}

function RXGenerator() {
  let history = useHistory();
  
  const [prescriptionForm, dispatch] = useReducer(FormReducer, initialPrescription);

  const handleChange = (e) => {
    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const prescriptionBody = {
      name: prescriptionForm.name[0],
      specialization: prescriptionForm.specialization[0],
      phoneNumber: prescriptionForm.phoneNumber[0],
      email: prescriptionForm.email[0],
    
      patientFirstName: prescriptionForm.patientFirstName[0],
      patientLastName: prescriptionForm.patientLastName[0],
      patientAge: prescriptionForm.patientAge[0],
      patientSex: prescriptionForm.patientSex[0],

      medications: prescriptionForm.medications[0]
    }

    const parsed = JSON.stringify(prescriptionBody);

    fetch("http://localhost:8080/physicians/generate-prescription", { // Does not work in axios for some reason, to FIX
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: parsed
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
        }
      }) 
  }

  useEffect(() => {
    if (sessionStorage.getItem("ENTITY") !== "ADMIN") {
      history.push('/physician/generate-rx');
    }
  }, [history])

  return (
    <>
    <button onClick={e => {handleSubmit(e)}}>testinput</button>

    <form>
      <PhysicianForm
          prescriptionForm={prescriptionForm}
          handleChange={handleChange} />
      <PatientForm
          prescriptionForm={prescriptionForm}
          handleChange={handleChange} />
      <MedicationsForm
          prescriptionForm={prescriptionForm}
          handleChange={handleChange} />
    </form>
    </>
  );
}

export default withRouter(RXGenerator)