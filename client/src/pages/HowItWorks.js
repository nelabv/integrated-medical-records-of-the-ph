import React from 'react';

function HowItWorks() {
  return (
    <div className='howitworks--container max-width'>

        <h2>How It <span className="teal--highlight">Works</span></h2>

        <p>The Integrated Medical Records of the Philippines (IRMP) envisions organization, transparency, and continuity of care by providing a seamless, and centralized file organization system for its users. This prototype provides two user entities at the moment – for patients and physicians. 

        The app (1) collects its users medical records though a file directory system; (2) allows participating physicians to view a patient’s files in his/her directory; (3) allows physicians to generate medical prescription based on a patient’s needs, and automatically upload the file to the patient’s database; (4) allows physicians to directly upload relevant files to a patient’s database.

        The app, presently in its infancy stage, pursues to develop more features in the next coming months.
        </p>


        <a  href="https://github.com/nelabv/integrated-medical-records-of-the-ph" 
            className='btn--primary'
            target="_blank"
            rel='noreferrer'>Github Repository</a>
    </div>
  );
}

export default HowItWorks;
