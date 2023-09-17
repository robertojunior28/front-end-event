import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import CreateEvent from "../screens/createEvent/CreateEvent";
import Home from "../screens/home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateEvent} path="/createEvent" />
    </BrowserRouter>
  );
}

export default AppRoutes;
