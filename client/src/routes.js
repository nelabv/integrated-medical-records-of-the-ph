import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import UserLogin from "./components/UserLogin";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/users/login' component={UserLogin} />

      <ProtectedRoute path="/dashboard" component={UserDashboard} />

    </Switch>
  </Router>
);