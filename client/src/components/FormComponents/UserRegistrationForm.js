import React from 'react';
import User from "../../methods/users.js";
import BloodTypeForm from './BloodTypeForm';

function UserRegistrationForm(props) {
  const { userForm, handleChange, hasEmptyField } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare object
    const userInformation = {
      username: userForm.username[0],
      password: userForm.password[0],
      firstName: userForm.firstName[0],
      lastName: userForm.lastName[0],
      sex: userForm.sex[0],
      birthdate: userForm.birthdate[0],
      bloodType: userForm.bloodType[0],
    }

    User.register(userInformation)
        .then((res) => {
          console.log(res)
        })
        .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>

          <label>Username</label>
          <input 
            type="text"
            value={userForm.username}
            name="username"
            onChange={e => {
              handleChange(e)
            }}
            required
          />

          <label>Password</label>
          <input 
            type="password"
            value={userForm.password}
            name="password"
            onChange={e => {
              handleChange(e)
            }}
            required
          />
          
          <label>First Name</label>
          <input 
            type="text"
            value={userForm.firstName}
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
            value={userForm.lastName}
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
                  }} />    

          <BloodTypeForm handleChange={handleChange} />

          { hasEmptyField 
              ? <div>WALANG BUTTON DAPAT</div> 
              : <button type="submit">Register as User</button>
          }
      </div>
    </form>
  );
}

export default UserRegistrationForm;
