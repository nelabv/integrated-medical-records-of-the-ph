import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import UserLogin from "./components/UserLogin";
import PhysicianLogin from "./components/PhysicianLogin";
import DashboardHandler from "./components/DashboardHandler";
import RXGenerator from "./components/RXGenerator";
import PatientIDInput from "./components/PatientIDInput";
import ProtectedRoute from "./components/ProtectedRoute";

export const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/users/login' component={UserLogin} />
      <Route path='/physicians/login' component={PhysicianLogin} />

      <ProtectedRoute path="/dashboard" component={DashboardHandler} />
      <ProtectedRoute path="/physician/generate-rx" component={PatientIDInput} />

      <ProtectedRoute path="/admin/generate-rx" component={RXGenerator} />
    </Switch>
  </Router>
);