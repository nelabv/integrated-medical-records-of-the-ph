import React, { useEffect, useContext } from 'react';
import { AccountContext } from './context/AccountContext';
import User from "./methods/users";
import HomepageBanner from './components/HomepageBanner';
import { useHistory } from 'react-router-dom';
import './App.scss';
import NavHandler from './components/Nav/NavHandler';
import Footer from './components/Footer';
import HowItWorks from './pages/HowItWorks';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const { setAccount } = useContext(AccountContext);

  let history = useHistory();

  useEffect(() => {
    // This redirects user to dashboard if already logged in
    const accountID = localStorage.getItem('ID');
    const physicianAccess = localStorage.getItem('ENTITY');

    if (physicianAccess) {
      history.push('/dashboard');
    } else if (accountID) {
      User.fetchUserInformation()
      .then(response => {
        console.log(response)
        setAccount(response.data);
        history.push('/dashboard');
      })

      .catch(error => console.log(error))
    }
  }, [history, setAccount])
  
  return (
    <>
        <NavHandler isNavTransparent={false} />

        <div className="center">
          <HomepageBanner />

          <HowItWorks />
          
          <Footer />
        </div>
    </>
  );
}

export default App;
