import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import FormReducer from "../reducers/FormReducer";
import Physician from "../methods/physicians";
import PasswordInput from "./FormComponents/PasswordInput";
import { setNativeValue } from "./FormComponents/SetNativeValue";
import { AccountContext } from "../context/AccountContext";

const initialFormState = {
  username: '',
  password: ''
}

export default function PhysicianLoginForm() {
  const { setAccount } = useContext(AccountContext);

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
        localStorage.setItem("AUTH", true);
        localStorage.setItem("ID", response.data.id);
        localStorage.setItem("ENTITY", "PHYSICIAN");
        setAccount(response.data.physicianData)
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

    const usernameField = document.getElementById("physician-username");
    const passwordField = document.getElementById("physician-password");
    setNativeValue(usernameField, testerAccount.username);
    setNativeValue(passwordField, testerAccount.password);
  }

  return (
    <form className='form--group' onSubmit={handleSubmit}>
      <label className='form--label'>USERNAME</label>
      <input className='form--field' 
              type="text" 
              name="username" 
              value={formState.username} 
              id="physician-username"
              onChange={handleInputChange}></input>

    <PasswordInput onChange={handleInputChange}
                    formState={formState}
                    inputID="physician-password" />
    
    <input className='btn--primary' type="submit" />

    <div className="login--tester-container">
            <span>No account yet? 
                    <span className="teal--highlight" onClick={setTesterAccount}> Try a tester account.</span>
            </span>
    </div>
  </form>
  );
}