import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Can only be accessed if there is no account logged in.
// Redirects to dashboard if currently logged in.

function UnprotectedRoute({ component: Component, ...rest }) {
  const account = localStorage.getItem("ID");

  return (
    <Route {...rest}
      render={(props) => account  // Should be logged in, else redirect to component
          ? <Redirect to="/dashboard" />
          : <Component {...props} /> } />
  );
}

export default UnprotectedRoute;