import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import CreateEvent from "../screens/createEvent/CreateEvent";
import createUser from "../screens/createUser/createUser";
import Home from "../screens/home/Home";
import CreateLocal from "../screens/createLocal/CreateLocal";
import UpdateEvent from "../screens/updateEvent/UpdateEvent";
import UpdateLocal from "../screens/updateLocal/UpdateLocal";
import DeleteEvent from "../screens/deleteEvent/DeleteEvent";
import DeleteLocal from "../screens/deleteLocal/DeleteLocal";
import ViewEvents from "../screens/viewEvents/ViewEvents";
import ViewLocals from "../screens/viewLocals/ViewLocals";
import Login from "../screens/login/Login";

import { AuthConsumer } from "./SessionProvider";

function RestrictRoute({ component: Component, show, ...props}){
  return (
    <Route exact {...props} render={(componentProps) => {
      if(show){
        return (
          <Component {...componentProps} />
        )
      }else{
        return (
          <Redirect to={ {pathname : '/login', state : {from: componentProps.location}}}/>
        )
      }
    }}/>
  )

}

function AppRoutes(props) {
  return (
    <Router>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={createUser} path="/register" />

      <RestrictRoute show={props.isAuthenticate} component={CreateEvent} path="/createEvent" />
      <RestrictRoute show={props.isAuthenticate} component={CreateLocal} path="/createLocal" />
      <RestrictRoute show={props.isAuthenticate} component={UpdateEvent} path="/updateEvent/:id" />
      <RestrictRoute show={props.isAuthenticate} component={UpdateLocal} path="/updateLocal/:id" />
      <RestrictRoute show={props.isAdmin} component={DeleteEvent} path="/deleteEvent" />
      <RestrictRoute show={props.isAdmin} component={DeleteLocal} path={"/deleteLocal"} />
      <RestrictRoute show={props.isAuthenticate} component={ViewEvents} path={"/viewEvents"} />
      <RestrictRoute show={props.isAuthenticate} component={ViewLocals} path={"/viewLocals"} />
    </Switch>
      
    </Router>
  );
}

export default () => (
  <AuthConsumer>
  {(context) => (
    <AppRoutes isAuthenticate={context.isAuthenticate} isAdmin={context.isAdmin} />
  )}
</AuthConsumer>
)
