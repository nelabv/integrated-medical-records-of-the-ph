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
import UploadFile from "./pages/UploadFile";
import UploadSuccess from "./pages/UploadSuccess";

export const routes = (
  <Router>
    <Switch>
      {/* ----- UNPROTECTED ROUTES ----- */}
      <Route exact path='/' component={App} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/login/as" component={LoginAs} />
      <Route path='/users/login' component={UserLogin} />
      <Route path='/physicians/login' component={PhysicianLogin} />

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