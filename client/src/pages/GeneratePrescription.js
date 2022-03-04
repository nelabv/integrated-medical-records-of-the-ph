import React from "react";
import PatientIDInput from "../components/PatientIDInput";
import CommonRXGenerator from "../components/CommonRXGenerator";
import NavHandler from "../components/Nav/NavHandler";
import { BsPatchCheckFill } from 'react-icons/bs';

export default function GeneratePrescription() {
  return (
    <>  
        <NavHandler />

        <div className="gradient-background">
          <div className="default">
            <div className='heading'>
                <BsPatchCheckFill size="2em" />
                <h2>Verify Patient's Information</h2>
            </div>
              <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</span>
              <PatientIDInput Component={CommonRXGenerator} />

          </div>
        </div>
    </>
  );
}
