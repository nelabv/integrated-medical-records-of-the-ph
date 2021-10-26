import React from "react";

function ErrorSpan({errorMessage}) {
  return (
    <>
      <div style={{
          display: 'flex', 
          flexDirection: 'column',
          marginBottom: '1em'}}>
            
          <span style={{color: 'red'}}>
            {errorMessage}
          </span>
      </div>
    </>
  );
}

export default ErrorSpan;
