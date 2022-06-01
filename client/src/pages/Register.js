import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import NavHandler from '../components/Nav/NavHandler';
import Footer from "../components/Footer";

function Register() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <>
      <NavHandler isNavTransparent={true}/>

      <div className='gradient--blue'>
          <div className='max-width sign-in--container'>
                  <h2 className='teal--highlight'>Register an Account</h2>
                    <span>Tester accounts for both patients and physicians are available for use. Submitted accounts are subject to admin review and approval.</span>

                  <div className='sign-in--btn-container'>
                    <Link to="/register/user">
                        <button className='btn--primary'>User</button>
                    </Link>

                    <Link to="/register/physician">
                        <button className='btn--secondary'>Physician</button>
                    </Link>
                  </div>
          </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;
