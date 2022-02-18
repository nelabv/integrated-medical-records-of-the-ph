import React, { useContext } from "react";
import User from "../methods/users";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../context/AccountContext";

export default function Logout() {
  const { setAccount } = useContext(AccountContext);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    User.logout()
      .then((response, err) => {
        if (err)
          throw err;
        
          localStorage.clear();

        setAccount(null)
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