import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../../context/AccountContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

function NavProfile(props) {
  const [userInitials, setUserInitials] = useState('');
  const {account} = useContext(AccountContext);
  const { handleClick } = props;
  
  useEffect(() => {
    if (account) {
      setUserInitials(`${account.firstName.charAt(0)}${account.lastName.charAt(0)}`)
    }
  }, [account])

  return (
    <div className="account-header">
        <AiOutlineArrowLeft size="1.5em" onClick={handleClick} />

        <div className="sample-user-image">
                  <span>{ userInitials }</span>
        </div>

        <span className="user-full-name">
                {account.firstName} {account.lastName}
        </span>

        <span className="username">@{account.username}</span>
    </div>
  );
}

export default NavProfile;