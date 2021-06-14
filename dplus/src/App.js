import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from './Components/Routes/PublicRoute'
import ProtectedRoute from './Components/Routes/ProtectedRoute'

// Pages
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login.email'
import LoginPassword from "./Pages/Login/Login.password";
import Accounts from "./Pages/Accounts/Accounts";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <main>
    <Router>
      <Switch>
      <ProtectedRoute path="/dashboard" component={Dashboard}/>
        <ProtectedRoute path="/accounts" component={Accounts}/>
        <PublicRoute path="/login/password" component={LoginPassword}/>
        <PublicRoute path="/login" component={Login}/>
        <PublicRoute path="/" component={Home}/>
      </Switch>
    </Router>
  </main>
  );
}

export default App;
