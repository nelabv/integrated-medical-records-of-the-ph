import React, { useReducer } from 'react';
import FormReducer from '../../reducers/FormReducer';
import Physician from "../../methods/physicians";

const initialPhysicianForm = {
  licenseNumber: '',
  specialization: '',
  username: '',
  password: '',
  firstName: '',
  lastName: ''
}

function UserRegistrationForm(props) {
  const [physicianForm, dispatch] = useReducer(FormReducer, initialPhysicianForm);

  const handleChange = (e) => {
    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // Code below is for registration
    e.preventDefault();
    // Prepare object
    const physicianInformation = {
      licenseNumber: physicianForm.licenseNumber[0],
      specialization: physicianForm.specialization[0].toUpperCase(),
      username: physicianForm.username[0],
      password: physicianForm.password[0],
      firstName: physicianForm.firstName[0].toUpperCase(),
      lastName: physicianForm.lastName[0].toUpperCase(),
      country: physicianForm.country[0],
    }

    Physician.register(physicianInformation)
        .then((res) => {
          console.log(res);
          alert('registered')
          // do redirections here
        })
        .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>

          <label>License Number</label>
          <input 
            type="number"
            value={physicianForm.licenseNumber}
            name="licenseNumber"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>Specialization</label>
          <input
            type="text"
            value={physicianForm.specialization}
            name="specialization"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>Username</label>
          <input
            type="text"
            value={physicianForm.username}
            name="username"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={physicianForm.password}
            name="password"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>First Name</label>
          <input 
            type="text"
            value={physicianForm.firstName}
            name="firstName"
            style={{textTransform: "uppercase"}}
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>Last Name</label>
          <input 
            type="text"
            value={physicianForm.lastName}
            name="lastName"
            style={{textTransform: "uppercase"}}
            onChange={e => {
              handleChange(e)
            }}
            required
          />

      <button type="submit">Submit</button>

      </div>
    </form>
  );
}

export default UserRegistrationForm;
