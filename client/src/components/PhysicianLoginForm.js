import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import FormReducer from "../reducers/FormReducer";
import Physician from "../methods/physicians";
import PasswordInput from "./FormComponents/PasswordInput";
import { setNativeValue } from "./FormComponents/SetNativeValue";

const initialFormState = {
  username: '',
  password: ''
}

export default function PhysicianLoginForm() {
  const [formState, dispatch] = useReducer(FormReducer, initialFormState);
  let history = useHistory();

  const handleInputChange = (e) => {
    dispatch({
      type: 'ON CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginForm = {
      username: formState.username[0],
      password: formState.password[0]
    }

    Physician.login(loginForm)
      .then((response) => {
        sessionStorage.setItem("AUTH", true);
        sessionStorage.setItem("ENTITY", "PHYSICIAN");

        if (response.data.status === 'ADMIN') {
          sessionStorage.setItem("ADMIN", true);
        }
        
        history.push("/dashboard");
      })

      .catch((error) => 
        console.error(error.response.data, error.response.status)
      )
  }

  const setTesterAccount = (e) => {
    e.preventDefault();

    const testerAccount = {
      username: 'monay',
      password: 'monay'
    }

    const usernameField = document.getElementById("user-username");
    const passwordField = document.getElementById("user-password");
    setNativeValue(usernameField, testerAccount.username);
    setNativeValue(passwordField, testerAccount.password);
  }

  return (
    <form className='form-group' onSubmit={handleSubmit}>
    <label className='form-label'>USERNAME</label>
    <input className='form-field' 
            type="text" 
            name="username" 
            value={formState.username} 
            onChange={handleInputChange}></input>

    <PasswordInput onChange={handleInputChange}
                    formState={formState} />

    <div className="form-buttons">            
            <span>No account yet? 
                <span className="colored-text" onClick={setTesterAccount}> Try a tester account.</span>
            </span>

            <input className='primary-btn' type="submit" />
    </div>
  </form>
  );
}