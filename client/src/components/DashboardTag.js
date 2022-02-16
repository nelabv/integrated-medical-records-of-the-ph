import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

export default function DashboardTag(props) {
  const { name } = props;

  return (
    <div className='dashboard-tag'>
      <div className='sample-profile-icon'>
          <FaUserAlt size="1.5em"/>
      </div>

      <div className='profile-name-tag'>
        <span className='small-caps'>HELLO,</span>

        <span >{ name }</span>
      </div>
    </div>
  )
}