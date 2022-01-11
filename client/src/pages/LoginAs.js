import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function LoginAs() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <div className="center-align default">
      <h2>Welcome back!</h2>
         <Link to="/users/login">
          <button>Login for Users</button>
        </Link>

        <Link to="/physicians/login">
          <button>Login for Physicians</button>
        </Link>

    </div>
  );
}

export default LoginAs;
