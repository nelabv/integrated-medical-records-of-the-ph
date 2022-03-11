import React from "react";

function SuccessMsg({msg}) {
  return (
    <>
      <div className="success-span--container">
          <span>
            {msg}
          </span>
      </div>
    </>
  );
}

export default SuccessMsg;
