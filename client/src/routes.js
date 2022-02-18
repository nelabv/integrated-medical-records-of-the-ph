import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
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
import GettingStarted from "./pages/GettingStarted";
import { AccountContext } from "./context/AccountContext";

export default function Routes() {
  const [ account, setAccount ]  = useState('tseting');

  return (
    <AccountContext.Provider value={{account, setAccount}}>
      <Router>
        <Switch>
                <UnprotectedRoute exact path='/' component={App} />
                <UnprotectedRoute path="/getting-started" component={GettingStarted} />
                <UnprotectedRoute path="/register" component={RegisterForm} />
                <UnprotectedRoute path="/login/as" component={LoginAs} />
                <UnprotectedRoute path='/users/login' component={UserLogin} />
                <UnprotectedRoute path='/physicians/login' component={PhysicianLogin} />

                <ProtectedRoute path="/dashboard" component={DashboardHandler} />

                <ProtectedRoute path="/generate-prescription" component={GeneratePrescription} />
                <ProtectedRoute path="/upload" component={UploadFile} />

                <ProtectedRoute path="/admin/generate-rx" component={RXGenerator} />

                <Route path="/confirmed" component={UploadSuccess} />
        </Switch>
      </Router>
    </AccountContext.Provider>
  )
}