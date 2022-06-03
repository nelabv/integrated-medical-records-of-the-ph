import React, { useState } from 'react';
import { validUsername } from '../../regex';
import UsernameError from './UsernameError';

export default function UsernameInput(props) {
  const { handleChange, reducerForm, setButtonDisabled } = props;
  const [ showErrorMsg, setShowErrorMsg ] = useState(false);

  const validateInput = (e) => {
    e.preventDefault();

    if (e.target.value.length === 0) {
      setShowErrorMsg(false);
    } else if (!validUsername.test(e.target.value)) {
      setShowErrorMsg(true);
      setButtonDisabled(true);
    } else if (validUsername.test(e.target.value)) {
      setShowErrorMsg(false);
    }

    handleChange(e);
  }

  return (
    <>

          <label className='form--label'>Username</label>
          <input 
            type="text"
            value={reducerForm.username}
            name="username"
            className='form--field'
            onChange={e => {
              validateInput(e)
            }}
            required
          />

          { showErrorMsg ? 
                  <UsernameError />
                  
                  
                  
                  : null }
    </>
  );
}
