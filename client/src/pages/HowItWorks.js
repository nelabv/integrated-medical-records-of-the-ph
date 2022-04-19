import React from 'react';
import IconAndText from '../components/IconAndText';
import { FaFileArchive } from 'react-icons/fa';
import { AiOutlineFileSearch, AiOutlineUpload } from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';


const fileDirectory = "Collects its users medical records though a file directory system";

const viewFiles = "Allows participating physicians to view a patient’s files in his/her directory";

const generateRx = "Allows physicians to generate medical prescription based on a patient’s needs, and automatically upload the file to the patient’s database";

const uploadFiles = "Allows physicians to directly upload relevant files to a patient’s database."

function HowItWorks() {
  return (
    <div className='howitworks--container max-width'>

        <h2>How It <span className="teal--highlight">Works</span></h2>

        <span>The Integrated Medical Records of the Philippines (IRMP) envisions organization, transparency, and continuity of care by providing a seamless, and centralized file organization system for its users. This prototype provides two user entities at the moment – for patients and physicians. The app: </span>

        <IconAndText Icon={FaFileArchive} description={fileDirectory} />
        <IconAndText Icon={AiOutlineFileSearch} description={viewFiles} />
        <IconAndText Icon={BiPlusMedical} description={generateRx} />
        <IconAndText Icon={AiOutlineUpload} description={uploadFiles} />

        <a  href="https://github.com/nelabv/integrated-medical-records-of-the-ph" 
            className='btn--primary'
            target="_blank"
            rel='noreferrer'>Github Repository</a>
    </div>
  );
}

export default HowItWorks;
