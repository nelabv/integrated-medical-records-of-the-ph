import React from 'react';

export default function UsernameError() {

  return (
    <div className='username--error'>
      <ul style={{listStyleType: 'circle'}}>
        <li>Only contains <b>alphanumeric characters, underscore and dot.</b></li>
        <li>Number of characters <b>must be between 8 to 20.</b></li>
        <li>Underscore and dot can't be at the end or start of a username <em>(e.g _username / username_ / .username / username.).</em></li>
        <li>Underscore and dot can't be next to each other (e.g user_.name).</li>
        <li>Underscore or dot can't be used multiple times in a row <em>(e.g user__name / user..name).</em></li>
      </ul>
    </div>
  );
}
