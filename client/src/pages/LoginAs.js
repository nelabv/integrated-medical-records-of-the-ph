import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import NavHandler from '../components/Nav/NavHandler';
import { FaUserAlt, 
  FaHospital, 
  FaHospitalUser 
} from 'react-icons/fa';
import DevelopersNote from "../components/DevelopersNote";
import Footer from "../components/Footer";

const devNote = "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";

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
          <DevelopersNote devNote={devNote} />
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
