import React from "react";
import 'bootswatch/dist/flatly/bootstrap.css';
import './App.css';

import Navbar from "./components/NaveBar";
import AppRoutes from "./main/AppRoutes";
import SessionProvider from "./main/SessionProvider";

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

export default class App extends React.Component {

  render(){
    return(
      <SessionProvider>
        <Navbar />
        <AppRoutes />
      </SessionProvider>
    )
  }

}

