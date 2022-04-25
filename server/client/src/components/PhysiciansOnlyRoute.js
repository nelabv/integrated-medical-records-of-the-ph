import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PhysiciansOnlyRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => localStorage.getItem("ENTITY") 
          ? <Component {...props} /> 
          : <Redirect to="/login/as" /> } 
    />
  );
}

export default PhysiciansOnlyRoute;