import { React, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import User from "./methods/users";
import Physician from "./methods/physicians";
import RegisterForm from "./pages/RegisterForm";
import LoginAs from "./pages/LoginAs";
import UserLogin from "./pages/UserLogin";
import PhysicianLogin from "./pages/PhysicianLogin";

import DashboardHandler from "./pages/DashboardHandler";
import RXGenerator from "./components/RXGenerator";
import GeneratePrescription from "./pages/GeneratePrescription";
import PublicRoute from './components/PublicRoute';
import PhysiciansOnlyRoute from "./components/PhysiciansOnlyRoute";
import UploadFile from "./pages/UploadFile";
import UploadSuccess from "./pages/UploadSuccess";
import { AccountContext } from "./context/AccountContext";
import ViewPatientRecords from './pages/ViewPatientRecords';

export default function Routes() {
  const [ account, setAccount ]  = useState(null);

  // Retrieve account data if an account is logged in
  useEffect(() => {
    const accountID = localStorage.getItem('ID');

    if (accountID) {
      if (localStorage.getItem('ENTITY') === 'PHYSICIAN') {
        Physician.fetchPhysicianInformation()
          .then(response => {
            setAccount(response.data)
          })
          .catch(error => console.log(error))
      } else {
        User.fetchUserInformation()
          .then(response => {
            setAccount(response.data)
          })

          .catch(error => console.log(error))
      }
    }
  }, [setAccount])

  return (
    <AccountContext.Provider value={{account, setAccount}}>
      <Router>
        <Switch>
                <Route exact path='/' component={App} />

                {/* ALL OPEN ACCESS ROUTES */}
                <PublicRoute path="/register" component={RegisterForm} />
                <PublicRoute path="/login/as" component={LoginAs} />
                <PublicRoute path='/users/login' component={UserLogin} />
                <PublicRoute path='/physicians/login' component={PhysicianLogin} />

                <Route path="/dashboard" component={DashboardHandler} />

                {/* PHYSICIANS ONLY */}
                <PhysiciansOnlyRoute path="/generate-prescription" userAccess={false} component={GeneratePrescription} />
                <PhysiciansOnlyRoute path="/upload"  component={UploadFile} />
                <PhysiciansOnlyRoute path="/view" component={ViewPatientRecords} />

                <PhysiciansOnlyRoute path="/admin/generate-rx" component={RXGenerator} />

                <Route path="/confirmed" component={UploadSuccess} />
        </Switch>
      </Router>
    </AccountContext.Provider>
  )
}