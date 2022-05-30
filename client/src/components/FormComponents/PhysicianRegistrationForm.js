import React, { useState, useReducer } from 'react';
import FormReducer from '../../reducers/FormReducer';
import Physician from "../../methods/physicians";
import PasswordVerifier from './PasswordVerifier';

const initialPhysicianForm = {
  licenseNumber: '',
  specialization: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  sex: '',
  birthdate: ''
}

function UserRegistrationForm(props) {
  const [physicianForm, dispatch] = useReducer(FormReducer, initialPhysicianForm);
  const [ buttonDisable, setButtonDisabled ] = useState(true);

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
    // Prepare object
    const physicianInformation = {
      licenseNumber: physicianForm.licenseNumber[0],
      specialization: physicianForm.specialization[0],
      username: physicianForm.username[0],
      password: physicianForm.password[0],
      firstName: physicianForm.firstName[0],
      lastName: physicianForm.lastName[0],
      birthdate: physicianForm.birthdate[0],
      sex: physicianForm.sex[0]
    }

    Physician.register(physicianInformation)
        .then((res) => {
          console.log(res);
          // do redirections here
        })
        .catch(err => console.log(err))
  }

  return (
    <form className='form--group form--register' onSubmit={handleSubmit}>
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>

          <label className='form--label'>License Number</label>
          <input 
            type="number"
            value={physicianForm.licenseNumber}
            className='form--field'
            name="licenseNumber"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label className='form--label'>Specialization</label>
          <input
            type="text"
            value={physicianForm.specialization}
            name="specialization"
            onChange={e => {
              handleChange(e)
            }}
            className='form--field'
            required
          />

          <label className='form--label'>Username</label>
          <input
            type="text"
            value={physicianForm.username}
            name="username"
            onChange={e => {
              handleChange(e)
            }}
            className='form--field'
            required
          />

          <PasswordVerifier 
                  formState={physicianForm.password}
                  onChange={e => { handleChange(e) }} 
                  inputID='password'
                  setButtonDisabled={setButtonDisabled} />

          <label className='form--label'>First Name</label>
          <input 
            type="text"
            value={physicianForm.firstName}
            name="firstName"
            style={{textTransform: "uppercase"}}
            onChange={e => {
              handleChange(e)
            }}
            className='form--field'
            required
          />

          <label className='form--label'>Last Name</label>
          <input 
            type="text"
            value={physicianForm.lastName}
            name="lastName"
            style={{textTransform: "uppercase"}}
            onChange={e => {
              handleChange(e)
            }}
            className='form--field'
            required
          />

          <label className='form--label'>Sex</label>

          <div>
                <label className='radio-btn'>
                      <span className='checkmark'></span>
                      <input type="radio" 
                              id="male"
                              name="sex" 
                              value="M" 
                              onChange={e => {
                                handleChange(e)
                              }}
                              required/>
                      <span className='label'>Male</span>
                </label>

                <label className='radio-btn'>
                    <span className='checkmark'></span>
                    <input type="radio" 
                            id="female" 
                            name="sex" 
                            value="F" 
                            onChange={e => {
                              handleChange(e)
                            }}/>
                    <span className='label'>Female</span> 
                </label>   
          </div> 

          <label className='form--label' htmlFor="birthdate">Birthday:</label>
          <input type="date" 
                  id="birthdate" 
                  name="birthdate"
                  onChange={e => {
                    handleChange(e)
                  }} 
                  className="form--field"
                  required/>  

          <button type="submit" 
                  className={buttonDisable ? 'btn--disabled' : 'btn--primary'}>Register as Physician</button>

      </div>
    </form>
  );
}

export default UserRegistrationForm;
