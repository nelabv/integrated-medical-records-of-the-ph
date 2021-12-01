import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "./App";
import UserLogin from "./components/UserLogin";
import PhysicianLogin from "./components/PhysicianLogin";
import DashboardHandler from "./pages/DashboardHandler";
import RXGenerator from "./components/RXGenerator";
import GeneratePrescription from "./pages/GeneratePrescription";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterForm from "./components/RegisterForm";
import UploadFile from "./components/FormComponents/UploadFile";

export const routes = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path="/register" component={RegisterForm} />
      <Route path='/users/login' component={UserLogin} />
      <Route path='/physicians/login' component={PhysicianLogin} />

      <ProtectedRoute path="/dashboard" component={DashboardHandler} />
      <ProtectedRoute path="/generate-prescription" component={GeneratePrescription} />
      <ProtectedRoute path="/upload" component={UploadFile} />

      <ProtectedRoute path="/admin/generate-rx" component={RXGenerator} />


    </Switch>
  </Router>
);