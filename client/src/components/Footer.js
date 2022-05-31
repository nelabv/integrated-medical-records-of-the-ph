import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
      <div className='footer--max'> 
          <div className='footer--nav--container'>
            <div className='footer--links'>
              <div className='github--repo'>
                  <a  href="https://github.com/nelabv/integrated-medical-records-of-the-ph" 
                        target="_blank"
                        rel='noreferrer'>
                          <FaGithub size="1.5em"/>Github Repository
                  </a>
              </div>

              <div>
                  <AiOutlineMail size="1.25em" />
                  nielleangelabv@gmail.com
              </div>
            </div>

            <Link to='/admin/login'  className="navbar--btn">
              Admin Access
            </Link>
          </div>
          
          <div className='footer--irmp'>
              <span>Integrated Medical Records of the Philippines</span>

              <span>2021</span>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
