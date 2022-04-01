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

      <div className='gradient--blue'>
          <div className='max-width sign-in--container'>
                  <h2 className='teal--highlight'>Sign in</h2>
                    <span>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam</span>

                  <div className='sign-in--btn-container'>
                    <Link to="/users/login">
                        <button className='btn--primary'>User</button>
                    </Link>

                    <Link to="/physicians/login">
                        <button className='btn--secondary'>Physician</button>
                    </Link>

                    <button className='btn--disabled'>Institution</button>
                  </div>
          </div>
      </div>

      <Footer />
    </>
  );
}

export default LoginAs;
