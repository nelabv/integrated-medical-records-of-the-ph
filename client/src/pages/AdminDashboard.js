import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router";
import NavHandler from "../components/Nav/NavHandler";
import ForApprovalPhysicians from "../components/ForApprovalPhysicians";
import ForApprovalUsers from "../components/ForApprovalUsers";
import Admin from "../methods/admin";
import Footer from "../components/Footer";

function AdminDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ users, setUsers ] = useState(null);
  const [ physicians, setPhysicians ] = useState(null);

  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('ADMIN') || localStorage.getItem('ADMIN') !== 'true') {
      history.push('/login/as')
    }

    Admin.fetchForApprovalData()
      .then(response => {
          setPhysicians(response.data.physiciansForApproval);
          setUsers(response.data.usersForApproval);
          setIsLoaded(true);
      })
  }, [history])
  
  return (
    <>
      <NavHandler isNavTransparent={false} />

      <div className="gradient--blue">
          <div className="max-width dashboard--container admin--container">
            <h2 className="teal--highlight">Admin Dashboard</h2>

            { isLoaded ? 
                  <>
                    <ForApprovalPhysicians documentArray={physicians}/> 
                    <ForApprovalUsers documentArray={users} />
                  </>
                  : null
            }

          </div>
      </div>

      <Footer />
    </>
  );
}

export default withRouter(AdminDashboard);