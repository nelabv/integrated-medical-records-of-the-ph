import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, ...rest }) {
  const [auth, setAuth] = useState(false);

  const id = localStorage.getItem("ID");

  useEffect(() => {
    if (id) {
      setAuth(true);
    }
  }, [id]);

  return (
    <Route {...rest}
      render={(props) => auth 
          ? <Redirect to="/dashboard" /> 
          : <Component {...props} /> } 
    />
  );
}

export default PublicRoute;