import React from "react";
import { Oval } from  'react-loader-spinner';

function LoadingSpinner() {
  
  return (
    <div className="loading-spinner">
        <span>Please wait while we fetch your files.</span>
        <Oval color="#00BFFF" height={40} width={40} />
    </div>
  );
}

export default LoadingSpinner;