import React from "react";

function ErrorSpan({errorMessage}) {
  return (
    <>
      <div className="error-span--container">
          
          <span>
            {errorMessage}
          </span>
      </div>
    </>
  );
}

export default ErrorSpan;
