import React, { useContext, useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AccountContext } from '../context/AccountContext';

export default function DashboardTag() {
  const [tagVisibility, setTagVisibility] = useState(false);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    if (account) {
      setTagVisibility(true)
    }
  }, [account])

  return (
      <>
          {
            tagVisibility 
              ?     <div className='dashboard-tag'>
                        <div className='sample-profile-icon'>
                            <FaUserAlt size="1.5em"/>
                        </div>
                  
                        <div className='profile-name-tag'>
                          <span className='small-caps'>HELLO,</span>
                  
                          <span >{ account.firstName }</span>
                        </div>
                    </div> 
              : null
          }
      </>
  )
}