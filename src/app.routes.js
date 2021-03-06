import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./api/auth";

import Login from './views/login/Login';
import Registro from './views/register/Registro';
import Dashboard from './views/dashboard/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);
export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/registro"  component={Registro}/>      
        <PrivateRoute path="/dashboard" component={Dashboard}/> 
      </Switch>
    </Router>
  );
}
