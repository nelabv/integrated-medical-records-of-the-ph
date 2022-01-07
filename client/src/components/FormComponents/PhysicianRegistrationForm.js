import React, { useReducer } from 'react';
import FormReducer from '../../reducers/FormReducer';
import CountrySelector from '../CountrySelector';

const initialPhysicianForm = {
  licenseNumber: '',
  specialization: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  country: 'Philippines'
}

function UserRegistrationForm(props) {
  const [physicianForm, dispatch] = useReducer(FormReducer, initialPhysicianForm);

  const handleChange = (e) => {
    let input = e.target.value;

    if (e.target.name !== 'password' && e.target.name !== 'username') {
      input = e.target.value.toUpperCase();
    }

    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: input
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(physicianForm)
/*     // Code below is for registration
    e.preventDefault();
    // Prepare object
    const physicianInformation = {
      licenseNumber: physicianForm.licenseNumber[0],
      specialization: physicianForm.specialization[0],
      username: physicianForm.username[0],
      password: physicianForm.password[0],
      firstName: physicianForm.firstName[0],
      lastName: physicianForm.lastName[0]
    }

    Physician.register(physicianInformation)
        .then((res) => {
          console.log(res);
          alert('registered')
          // do redirections here
        })
        .catch(err => console.log(err)) */
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

          <CountrySelector 
              initialValue={initialPhysicianForm}
              handleChange={handleChange} />

      <button type="submit">Submit</button>

      </div>
    </form>
  );
}

export default UserRegistrationForm;
