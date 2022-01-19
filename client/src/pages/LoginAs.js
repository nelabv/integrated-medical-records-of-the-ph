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
    <div className="login-page">
      <h2><span className='colored-text'>Welcome</span> back!</h2>
      <span>View your medical records in one tap.</span>

        <Link to="/users/login">
              <div className='huge-btn'>
                <span>USER</span>
              </div>
        </Link>

        <Link to="/physicians/login">
              <div className='huge-btn'>
                <span>PHYSICIAN</span>
              </div>
        </Link>

        <Link to="/physicians/login">
              <div className='huge-btn'>
                <span>INSTITUTIONS (soon)</span>
              </div>
        </Link>
    </div>
  );
}

export default LoginAs;
