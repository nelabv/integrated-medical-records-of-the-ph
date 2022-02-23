import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AccountContext } from '../context/AccountContext';

export default function DashboardTag() {
  const { account } = useContext(AccountContext);

  return (
    <div className='dashboard-tag'>
      <div className='sample-profile-icon'>
          <FaUserAlt size="1.5em"/>
      </div>

      <div className='profile-name-tag'>
        <span className='small-caps'>HELLO,</span>

        <span >{ account.firstName }</span>
      </div>
    </div>
  )
}