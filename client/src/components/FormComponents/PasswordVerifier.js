import React, { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export default function PasswordVerifier(props) {
  const { formState, onChange, inputID, setButtonDisabled } = props;
  const [ verifyInput, setVerifyInput ] = useState('');
  const [ passwordErrorMsg, setPasswordErrorMsg ] = useState(''); // Set status if passwords match or not
  const [ passwordsMatch, setPasswordsMatch ] = useState(false);

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const showOrHidePassword = () => {
    setPasswordVisibility(prevState => !prevState)
  }

  const handleChange = (e) => {
    const passwordInput = formState[0];
    const confirmPasswordInput = e.target.value
    setVerifyInput(e.target.value);


    // Check if inputs from A and B match

    if (passwordInput.length === 0 || confirmPasswordInput.length === 0) {
      setPasswordErrorMsg('');
    } else if (passwordInput !== e.target.value) {
      setPasswordErrorMsg("Please make sure your passwords match.");
      setButtonDisabled(true)
      setPasswordsMatch(false);
    } else if (passwordInput === e.target.value) {
      setPasswordErrorMsg("Passwords match.");
      setPasswordsMatch(true);
      setButtonDisabled(false)
    }
  }

  return (
    <>
        <label className='form--label'>Password</label>

        <input className='form--field'
              type={passwordVisibility ? "text" : "password"}
              name="password" 
              value={formState.password} 
              id={inputID}
              onChange={onChange}
              required >

              </input>

          <label className='form--label'>Confirm your Password</label>

          <input className='form--field'
                type={passwordVisibility ? "text" : "password"}
                name="password" 
                value={verifyInput} 
                id="password-verifier"
                onChange={(e) => {
                  handleChange(e);
                }}
                required >

                </input>
          

          { passwordVisibility 
                ? <span onClick={showOrHidePassword} className="password-hidden">
                        <FaEyeSlash /> Hide password
                  </span>
                : <span onClick={showOrHidePassword} className="password-shown">
                        <FaEye /> Show password
                  </span>
          }

          <span className={passwordsMatch ? "pw-verify--match" : "pw-verify--not-match"}>{passwordErrorMsg}</span>
    </>
  );
}