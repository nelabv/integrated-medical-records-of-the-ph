import React, { useContext, useEffect, useState } from 'react';
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
              ?     <div className='dashboard--tag'>
                      <span>Good day,</span>
              
                      <span className='dashboard--name'>{ account.firstName} {account.lastName}</span>
                    </div> 
              : null
          }
      </>
  )
}