import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

function NotLoggedIn(props) {
  const { handleClick } = props;

  return ( 
    <div >
        <div className="sidebar-not-logged-in">
          <AiOutlineClose className="nav-icon" size="1.5em" onClick={handleClick}/>
          
          <ul>
            <Link to="/getting-started">
                <li>How It Works</li>
            </Link>

            <Link to="/login/as">
                <li>Try a Tester Account</li>
            </Link>
          </ul>

          <div className="github-repo-link">
            <a href="https://github.com/nelabv/integrated-medical-records-of-the-ph" target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.5em" />
              <span>View Github Repository</span>
            </a>
          </div>
        </div>
    </div>
  );
}

export default NotLoggedIn;