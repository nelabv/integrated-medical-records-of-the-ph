import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import FormReducer from "../reducers/FormReducer";
import User from "../http";

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
    
    User.login(loginForm)
      .then((response) => {
        sessionStorage.setItem("auth", true);
        history.push("/dashboard");
      })

      .catch((error) => 
        console.error(error.response.data, error.response.status)
      )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={formState.username} onChange={handleInputChange}></input>

        <label>Password</label>
        <input type="password" name="password" value={formState.password} onChange={handleInputChange}></input>

        <input type="submit" />
      </form>
    </>
  );
}