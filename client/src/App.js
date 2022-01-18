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
    <div className='home-container'>
      <div className="front-homepage">
        <h1>Integrated Medical Records of the Philippines</h1>

        <div className='button-holder'>
            <Link to="/login/as">
                <button className='primary-btn'>Login</button>  
            </Link>
            
            <Link to="/register">
                <button className='secondary-btn'>Register</button>   
            </Link>
        </div>

      </div>

      <h2>How it works</h2>

      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
    </div>
  );
}

export default App;
