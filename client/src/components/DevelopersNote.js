import React from "react";
import { FaEnvelopeOpenText } from 'react-icons/fa';

function DevelopersNote(props) {
  const { devNote } = props;
  
  return (
    <div className="developers-note">
      <div className="heading dev-note-text" >
        <FaEnvelopeOpenText size="1.2em"/>

        <span>
          Developer's Note
        </span>
      </div>

      <p>{devNote}</p>
    </div>
  )
}

export default DevelopersNote;