import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <>
      MediRecords 2021
      <Link to="/users/login">
        <button>Login for Users</button>
      </Link>

      <Link to="/physicians/login">
        <button>Login for Physicians</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </>
  );
}

export default App;
