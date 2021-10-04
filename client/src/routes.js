import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import UserLogin from "./components/UserLogin";
import PhysicianLogin from "./components/PhysicianLogin";
import UserDashboard from "./components/UserDashboard";
import PhysicianDashboard from "./components/PhysicianDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/users/login' component={UserLogin} />
      <Route path='/physicians/login' component={PhysicianLogin} />

      <ProtectedRoute path="/dashboard" component={UserDashboard} />
      <ProtectedRoute path="/physician/dashboard" component={PhysicianDashboard} />
    </Switch>
  </Router>
);