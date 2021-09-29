import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuth = sessionStorage.getItem("auth");

  return (
    <Route
      {...rest}

      render={(props) =>
        isAuth ? 
          <Component {...props} /> 
          : <Redirect to="/users/login" />
      }
    />
  );
}

export default ProtectedRoute;