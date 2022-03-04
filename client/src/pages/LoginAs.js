import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import NavHandler from '../components/Nav/NavHandler';
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
      <NavHandler isNavTransparent={true}/>

      <div className='sign-in--container'>
        <h2>Sign in</h2>
          <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</span>

        <div className='sign-in--btn-container'>
          <Link to="/users/login">
              <button className='btn--primary'>USER</button>
          </Link>

          <Link to="/physicians/login">
              <button className='btn--secondary'>PHYSICIANS</button>
          </Link>

          <button className='btn--disabled'>INSTITUTIONS (Coming Soon)</button>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default LoginAs;
