import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import FormReducer from "../reducers/FormReducer";
import User from "../methods/users";
import { setNativeValue } from "./FormComponents/SetNativeValue";
import PasswordInput from "./FormComponents/PasswordInput";

const initialFormState = {
  username: '',
  password: ''
}

export default function UserLoginForm() {
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
    
    User.login(loginForm)
      .then((response) => {
        console.log(response);

        sessionStorage.setItem("AUTH", true);
        sessionStorage.setItem("ID", response.data.id);
        history.push("/dashboard");
      })

      .catch((error) => 
        console.error(error.response.data, error.response.status)
      )
  }

  const setTesterAccount = (e) => {
    e.preventDefault();

    const testerAccount = {
      username: 'johnsmith',
      password: 'johnsmith'
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
              id="user-username"
              onChange={handleInputChange}></input>

        <PasswordInput 
              formState={formState}
              onChange={handleInputChange}
              inputID="user-password" />

        <div className="form-buttons">            
            <span>No account yet? 
                <span className="colored-text" onClick={setTesterAccount}> Try a tester account.</span>
            </span>

            
            <input className='primary-btn' type="submit" />
        </div>
      </form>
  );
}