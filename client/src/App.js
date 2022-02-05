import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FaNotesMedical, FaGithub } from 'react-icons/fa';
import './App.scss';
import NavHandler from './components/Nav/NavHandler';
import Footer from './components/Footer';

function App() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <>
      <NavHandler />

      <div className="front-homepage">
          <h1>Integrated Medical Records of the Philippines</h1>

          <span>At vero eos et accusamus et iusto odio. Dignissimos ducimus qui blanditiis praesentium voluptatum</span>
          
          
          <Link to="/getting-started">
              <button className='primary-btn'>Get Started</button>
          </Link>
      </div>
      
      <div className='standard-cont'>
            <div className='heading'>
                <FaNotesMedical size="2em" />
                <h2>How it works</h2>
            </div>

            <p className='block-text'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>

            <button className='primary-btn'>
              <FaGithub size="1.5rem" className="button-icon"/>
              View Github Repository
            </button>
      </div>

      <div className='homepage-image-banner'>
        <h3><span className='colored-text'>Quis nostrud exercitation</span> ullamco laboris nisi. </h3>
      </div>
      <Footer />
    </>
  );
}

export default App;
