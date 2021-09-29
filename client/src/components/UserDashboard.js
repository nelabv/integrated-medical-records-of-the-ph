import React from "react";
import { withRouter } from "react-router";
import Logout from "./Logout";

function UserDashboard() {
  const cookie = document.cookie;
  console.log(cookie);

  return (
    <>
      <h1>User Dashboard</h1>
      <Logout />
    </>
  );
}

export default withRouter(UserDashboard);