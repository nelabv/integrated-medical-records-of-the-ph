import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import FormReducer from "../../reducers/FormReducer";
import Admin from "../../methods/admin";
import PasswordInput from "../FormComponents/PasswordInput";

const initialFormState = {
  username: '',
  password: ''
}

export default function AdminLoginForm() {
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
    
    Admin.login(loginForm)
      .then((response) => {
        localStorage.setItem("AUTH", true);
        localStorage.setItem("ID", response.data.id);
        localStorage.setItem("ADMIN", true);
        // history.push("/dashboard");
      })

      .catch((error) => 
        console.error(error.response.data, error.response.status)
      )
  }

  return (
      <form className='form--group' onSubmit={handleSubmit}>
        <label className='form--label'>Username</label>
        <input className='form--field' 
              type="text" 
              name="username" 
              value={formState.username} 
              id="admin-username"
              onChange={handleInputChange}></input>

        <PasswordInput 
              formState={formState}
              onChange={handleInputChange}
              inputID="admin-password" />

        <input className='btn--primary' type="submit" />
      </form>
  );
}