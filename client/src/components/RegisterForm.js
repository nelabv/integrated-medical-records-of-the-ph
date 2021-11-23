import React, { useState } from 'react';
import UserRegistrationForm from './FormComponents/UserRegistrationForm';
import PhysicianRegistrationForm from './FormComponents/PhysicianRegistrationForm';

function RegisterForm() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showPhysicianForm, setShowPhysicianForm] = useState(false);

  const handleVisibility = (formType) => {
    if (formType === "USER") {
      setShowUserForm(prevState => !prevState);
      setShowPhysicianForm(false);
    } else {
      setShowPhysicianForm(true);
      setShowUserForm(false)
    }
  }

  return (
    <>
    <h1>View your medical records in one tap</h1>
    <p>Register as:</p>

    <button onClick={() => handleVisibility()}>Physician</button>
    <button onClick={() => handleVisibility('USER')}>User</button>

    { showUserForm 
        ? <UserRegistrationForm />
        : null }

    { showPhysicianForm
        ? <PhysicianRegistrationForm />
        : null
    }
    </>
  );
}

export default RegisterForm;
