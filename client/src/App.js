import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './App.scss'

function App() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <div>
      <div>
        <h1>MediRecords</h1>
        <Link to="/users/login">
          <button>Login for Users</button>
        </Link>

        <Link to="/physicians/login">
          <button>Login for Physicians</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>

      <div>
        <h2>How it works</h2>

        <p>An organized health record system is a mislooked problem in most third world countries which results to misdiagnosis.
          MediRecords is a project that aims to provide an organized medical health record system.</p>
      </div>
    </div>
  );
}

export default App;
