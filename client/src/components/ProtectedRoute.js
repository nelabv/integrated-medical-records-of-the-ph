import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const AUTH = sessionStorage.getItem("AUTH");

  return (
    <Route {...rest}
      render={(props) => AUTH 
          ? <Component {...props} /> 
          : <Redirect to="/users/login" /> } />
  );
}

export default ProtectedRoute;