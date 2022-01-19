import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import FormReducer from "../reducers/FormReducer";
import Physician from "../methods/physicians";

const initialFormState = {
  username: '',
  password: ''
}

export default function UserLogin() {
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

  return (
    <div className="form-page">
      <h2><span className="colored-text">PHYSICIANS'</span> PORTAL</h2>

      <form className='form-group' onSubmit={handleSubmit}>
        <label className='form-label'>USERNAME</label>
        <input className='form-field' 
                type="text" 
                name="username" 
                value={formState.username} 
                onChange={handleInputChange}></input>

        <label className='form-label'>PASSWORD</label>
        <input className='form-field' 
                type="password" 
                name="password" 
                value={formState.password} 
                onChange={handleInputChange}></input>

        <input className='primary-btn' type="submit" />
      </form>
    </div>
  );
}