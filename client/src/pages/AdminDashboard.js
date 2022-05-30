import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

function AdminDashboard() {
  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('ADMIN') || localStorage.getItem('ADMIN') !== 'true') {
      history.push('/login/as')
    }
  }, [history])
  
  return (
    <>
      <NavHandler isNavTransparent={false} />

      <div className="gradient--blue">
          <div className="max-width dashboard--container admin--container">
            <h2 className="teal--highlight">Admin Dashboard</h2>
          </div>
      </div>

      <Footer />
    </>
  );
}

export default withRouter(AdminDashboard);