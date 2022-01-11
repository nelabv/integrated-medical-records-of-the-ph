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
    <div className="center-align default">
      <div className="home-container">
        <h1>integrated medical records of the philippines</h1>
{/*         <Link to="/users/login">
          <button>Login for Users</button>
        </Link>

        <Link to="/physicians/login">
          <button>Login for Physicians</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link> */}

        <Link to="/login/as">
            <button className='primary-btn'>Login</button>  
        </Link>
        
        <Link to="/register">
            <button className='secondary-btn'>Register</button>   
        </Link>
      </div>

        <h2>How it works</h2>

        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
    </div>
  );
}

export default App;
