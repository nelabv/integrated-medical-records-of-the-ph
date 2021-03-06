import React, { useState} from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

export default function PasswordInput(props) {
  const { formState, onChange, inputID } = props;

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const showOrHidePassword = () => {
    setPasswordVisibility(prevState => !prevState)
  }
  return (
    <>
        <label className='form--label'>Password</label>

        <input className='form--field'
              type={passwordVisibility ? "text" : "password"}
              name="password" 
              value={formState.password} 
              id={inputID}
              onChange={onChange}>

              </input>

          { passwordVisibility 
                ? <span onClick={showOrHidePassword} className="password-hidden">
                        <FaEyeSlash /> Hide password
                  </span>
                : <span onClick={showOrHidePassword} className="password-shown">
                        <FaEye /> Show password
                  </span>
          }
    </>
  );
}