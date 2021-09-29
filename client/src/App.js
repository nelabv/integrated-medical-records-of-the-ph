import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      MediRecords 2021
      <Link to="/users/login">
        <button>Login for Users</button>
      </Link>
    </>
  );
}

export default App;
