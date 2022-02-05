import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import NavHandler from '../components/Nav/NavHandler';
import { FaUserAlt, 
  FaHospital, 
  FaHospitalUser 
} from 'react-icons/fa';
import Footer from "../components/Footer";

function LoginAs() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <>
      <NavHandler />

      <div className='login-image'>
        <h2>Welcome</h2>
          <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</span>
      </div>

      <div className="login-page">
          <h3>No account? Register.</h3>
          <div>
              <Link to="/users/login">
                    <div className='login-as-btn'>
                      <FaUserAlt size="1.5em" />
                      <p>USER</p>
                    </div>
              </Link>

              <Link to="/physicians/login">
                    <div className='login-as-btn'>
                      <FaHospitalUser size="1.5em" />
                      <p>PHYSICIAN</p>
                    </div>
              </Link>

              <Link to="/physicians/login">
                    <div className='login-as-btn'>
                      <FaHospital size="1.5em" />
                      <p>INSTITUTIONS (soon)</p>
                    </div>
              </Link>
          </div>

      </div>

      <Footer />
    </>
  );
}

export default LoginAs;
