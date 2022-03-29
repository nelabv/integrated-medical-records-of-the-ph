import React, { useContext } from "react";
import User from "../methods/users";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../context/AccountContext";
import { BiLogOut } from 'react-icons/bi';
 
export default function Logout() {
  const { setAccount } = useContext(AccountContext);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    User.logout()
      .then((response, err) => {
        if (err) throw err;
        
        localStorage.clear();

        history.push("/dashboard");
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="action-with-icon">
        <BiLogOut size="1.25em" />
        <button>Logout</button>
      </form>
    </>
  );
}