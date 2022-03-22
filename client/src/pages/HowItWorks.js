import React from 'react';

function HowItWorks() {
  return (
    <div className="center gradient--gray">
      <div className='howitworks--container max-width'>
        <div className="howitworks--img"></div>

        <h2>How It <span className="teal--highlight">Works</span></h2>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>


        <a  href="https://github.com/nelabv/integrated-medical-records-of-the-ph" 
            className='btn--primary'
            target="_blank"
            rel='noreferrer'>Github Repository</a>
      </div>
    </div>
  );
}

export default HowItWorks;
