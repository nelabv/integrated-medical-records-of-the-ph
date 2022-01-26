import React from "react";
import User from "../methods/users";
import { useHistory } from "react-router-dom";

export default function Logout() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    User.logout()
      .then((response, err) => {
        if (err)
          throw err;
        
        sessionStorage.clear();
        history.push("/");
      })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <button>Logout</button>
    </form>
    </>
  );
}