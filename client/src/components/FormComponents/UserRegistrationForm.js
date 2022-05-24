import React, { useReducer, useState } from 'react';
import User from "../../methods/users.js";
import PasswordVerifier from './PasswordVerifier';
import FormReducer from '../../reducers/FormReducer';
import BloodTypeForm from './BloodTypeForm';
import AddressSelector from './AddressSelector.js';

const initialUserRegistration = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  sex: '',
  birthdate: '',
  bloodType: '',
  address: {
    region: '',
    province: '',
    city: '',
    barangay: '',
    houseNumberStreet: ''
  }
}

function UserRegistrationForm() {
  const [userRegForm, dispatch] = useReducer(FormReducer, initialUserRegistration);

  const [ houseNumberStreet, setHouseNumberStreet ] = useState('');

  const handleChange = (e, address) => {
    // Check if address is to be changed.
    let input = e.target.value;

    if (e.target.name !== 'password' && e.target.name !== 'username' && e.target.id === 'region') {
      input = e.target.value.toUpperCase();
    }

    dispatch({
      type: address ? "UPDATE ADDRESS": "ON CHANGE",
      field: address ? e.target.id: e.target.name,
      payload: address ? e.target.selectedOptions[0].text: input
    })
  }

  const handleHouseNumberStreet = (e) => {
    dispatch({
      type: "UPDATE ADDRESS",
      field: e.target.id,
      payload: e.target.value
    })

    setHouseNumberStreet(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare object
    const userInformation = {
      username: userRegForm.username[0],
      password: userRegForm.password[0],
      firstName: userRegForm.firstName[0],
      lastName: userRegForm.lastName[0],
      sex: userRegForm.sex[0],
      birthdate: userRegForm.birthdate[0],
      bloodType: userRegForm.bloodType[0],
      address: {
        region: userRegForm.address.region[0],
        province: userRegForm.address.province[0],
        city: userRegForm.address.city[0],
        barangay: userRegForm.address.barangay[0],
        houseNumberStreet: userRegForm.address.houseNumberStreet[0]
      }
    }

    console.log(userInformation)

/*     User.register(userInformation)
        .then((res) => {
          console.log(res)

          // do redirections here
        })
        .catch(err => console.log(err)) */
  }

  return (
    <form className='form--group' onSubmit={handleSubmit}>
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>

          <label>Username</label>
          <input 
            type="text"
            value={userRegForm.username}
            name="username"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <PasswordVerifier 
                  formState={userRegForm.password}
                  onChange={e => { handleChange(e) }} 
                  inputID='password' />

          
          <label>First Name</label>
          <input 
            type="text"
            value={userRegForm.firstName}
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
            value={userRegForm.lastName}
            name="lastName"
            style={{textTransform: "uppercase"}}
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>Sex</label>

          <label htmlFor="male">Male</label>
          <input type="radio" 
                  id="male"
                  name="sex" 
                  value="M" 
                  onChange={e => {
                    handleChange(e)
                  }}
                  required />

          <label htmlFor="female">Female</label>   
          <input type="radio" 
                  id="female" 
                  name="sex" 
                  value="F" 
                  onChange={e => {
                    handleChange(e)
                  }}/>    
          
          <label htmlFor="birthdate">Birthday:</label>
          <input type="date" 
                  id="birthdate" 
                  name="birthdate"
                  onChange={e => {
                    handleChange(e)
                  }} required/>    

          <BloodTypeForm handleChange={handleChange} />

          <AddressSelector handleChange={handleChange} 
                          userRegForm={userRegForm}
                          houseNumberStreet={houseNumberStreet}
                          handleHouseNumberStreet={handleHouseNumberStreet} />

          <button type="submit">Register as User</button>
      </div>
    </form>
  );
}

export default UserRegistrationForm;
