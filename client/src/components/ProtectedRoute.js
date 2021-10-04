import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const AUTH = sessionStorage.getItem("AUTH");

  // Default redirect as of now is in homepage.
  // There should be a 'general' login page to redirect users to proper login forms.
  
  return (
    <Route {...rest}
      render={(props) => AUTH 
          ? <Component {...props} /> 
          : <Redirect to="/" /> } />
  );
}

export default ProtectedRoute;