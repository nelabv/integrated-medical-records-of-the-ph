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

export const routes = (
  <Router>
    <Switch>
      {/* ----- UNPROTECTED ROUTES ----- */}
      <UnprotectedRoute exact path='/' component={App} />
      <UnprotectedRoute path="/getting-started" component={GettingStarted} />
      <UnprotectedRoute path="/register" component={RegisterForm} />
      <UnprotectedRoute path="/login/as" component={LoginAs} />
      <UnprotectedRoute path='/users/login' component={UserLogin} />
      <UnprotectedRoute path='/physicians/login' component={PhysicianLogin} />

      {/* ----- PROTECTED ROUTES ----- */}
      <ProtectedRoute path="/dashboard" component={DashboardHandler} />

      {/* ----- PHYSICIAN: PROTECTED ROUTES ----- */}
      <ProtectedRoute path="/generate-prescription" component={GeneratePrescription} />
      <ProtectedRoute path="/upload" component={UploadFile} />

      {/* ----- Note: ADMIN SECTION is a work in progress ----- */}
      <ProtectedRoute path="/admin/generate-rx" component={RXGenerator} />

      {/* ----- Note: OTHERS ----- */}
      <Route path="/confirmed" component={UploadSuccess} />
    </Switch>
  </Router>
);