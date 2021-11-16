import React, { useReducer, useState } from 'react';
import FormReducer from '../reducers/FormReducer';
import UserRegistrationForm from './FormComponents/UserRegistrationForm';

const initialUserForm = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  sex: '',
  birthdate: '',
  bloodType: ''
}

function RegisterForm() {
  const [userForm, dispatch] = useReducer(FormReducer, initialUserForm);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleChange = (e) => {
    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleVisibility = (formType) => {
    if (formType === "USER") {
      setShowUserForm(prevState => !prevState)
    }
  }

  return (
    <>
    <h1>View your medical records in one tap</h1>
    <p>Register as:</p>

    <button>Physician</button>
    <button onClick={() => handleVisibility('USER')}>User</button>

    { showUserForm 
        ? <UserRegistrationForm 
              userForm={userForm} 
              handleChange={handleChange} />
        : null }
    </>
  );
}

export default RegisterForm;
