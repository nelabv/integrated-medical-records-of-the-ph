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
import ProtectedRoute from "./components/ProtectedRoute";
import UnprotectedRoute from "./components/UnprotectedRoute";
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
                <UnprotectedRoute path="/register" component={RegisterForm} />
                <UnprotectedRoute path="/login/as" component={LoginAs} />
                <UnprotectedRoute path='/users/login' component={UserLogin} />
                <UnprotectedRoute path='/physicians/login' component={PhysicianLogin} />

                <ProtectedRoute path="/dashboard" component={DashboardHandler} />

                <ProtectedRoute path="/generate-prescription" component={GeneratePrescription} />
                <ProtectedRoute path="/upload" component={UploadFile} />
                <ProtectedRoute path="/files" component={ViewPatientRecords} />

                <ProtectedRoute path="/admin/generate-rx" component={RXGenerator} />

                <Route path="/confirmed" component={UploadSuccess} />
        </Switch>
      </Router>
    </AccountContext.Provider>
  )
}