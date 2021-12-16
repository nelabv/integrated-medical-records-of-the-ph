import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

export default function UploadSuccess(props) {
  const data = props.history.location.state?.test;

  let history = useHistory();

  useEffect(() => {
    if (!data) {
      history.push('/')
    }
  }, [data, history])
  
  return (
    <div>
      <h1>UPLOAD SUCCESS</h1>
    </div>
  );
}