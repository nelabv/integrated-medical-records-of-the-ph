import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PatientsOnlyRoute({ component: Component, userAccess: UserAccess, ...rest }) {
  const [auth, setAuth] = useState(false);

  const entity = localStorage.getItem("ENTITY");
  const id = localStorage.getItem('ID');

  useEffect(() => {
    if (!entity && id) {
      setAuth(true);
    }
  }, [entity, id]);

  return (
    <Route {...rest}
      render={(props) => auth
          ? <Redirect to="/" /> 
          : <Component {...props} /> } 
    />
  );
}

export default PatientsOnlyRoute;