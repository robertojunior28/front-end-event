import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import CreateEvent from "../screens/createEvent/CreateEvent";
import Home from "../screens/home/Home";
import CreateLocal from "../screens/createLocal/CreateLocal";
import UpdateEvent from "../screens/updateEvent/UpdateEvent";
import UpdateLocal from "../screens/updateLocal/UpdateLocal";
import DeleteEvent from "../screens/deleteEvent/DeleteEvent";
import DeleteLocal from "../screens/deleteLocal/DeleteLocal";
import ViewEvents from "../screens/viewEvents/ViewEvents";
import ViewLocals from "../screens/viewLocals/ViewLocals";

function AppRoutes() {
  return (
    <Router>
    <Switch>
    <Route component={Home} path="/" exact />
      <Route component={CreateEvent} path="/createEvent" />
      <Route component={CreateLocal} path="/createLocal" />
      <Route component={UpdateEvent} path="/updateEvent/:id" />
      <Route component={UpdateLocal} path="/updateLocal/:id" />
      <Route component={DeleteEvent} path="/deleteEvent" />
      <Route component={DeleteLocal} path={"/deleteLocal"} />
      <Route component={ViewEvents} path={"/viewEvents"} />
      <Route component={ViewLocals} path={"/viewLocals"} />
    </Switch>
      
    </Router>
  );
}

export default AppRoutes;
