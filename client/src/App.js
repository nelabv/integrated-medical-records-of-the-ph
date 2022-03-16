import React, { useEffect, useContext } from 'react';
import { AccountContext } from './context/AccountContext';
import User from "./methods/users";
import homepageImg from "./styling/assets/vector-illustration_homepage.png";
import { Link, useHistory } from 'react-router-dom';
import './App.scss';
import NavHandler from './components/Nav/NavHandler';
import Footer from './components/Footer';
import HowItWorks from './pages/HowItWorks';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const { setAccount } = useContext(AccountContext);

  let history = useHistory();

  useEffect(() => {
    const accountID = localStorage.getItem('ID');

    if (accountID) {
      User.fetchUserInformation()
        .then(response => {
          setAccount(response.data);
          history.push('/dashboard');
        })

        .catch(error => console.log(error))
    }
  }, [history, setAccount])
  
  return (
    <div className="center">
      <NavHandler isNavTransparent={true} />

      <div className="homepage--img">
        <img src={homepageImg} alt="IMRP 2021" />
      </div>

      <div className="homepage--container">
        <h1 className="homepage--h1">Your <span className="teal--highlight">medical records </span>in <span className='orange--highlight'>one tap.</span></h1>
        
        <Link to="/login/as">
          <button className="btn--primary">TRY A TESTER ACCOUNT</button>
        </Link>
      </div>

      <HowItWorks />
      
      <Footer />
    </div>
  );
}

export default App;
