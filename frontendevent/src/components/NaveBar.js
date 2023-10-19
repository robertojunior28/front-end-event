import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css';
import NavbarItem from './NavbarItem';
import { AuthConsumer } from '../main/SessionProvider';

function Navbar({ isAuthenticate, isAdmin, logout }) {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">Eventos</a>
        <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" 
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavbarItem render={!isAuthenticate} href="/" label="Home" />
            <NavbarItem render={!isAuthenticate} href="/login" label="Login" />
            <NavbarItem render={!isAuthenticate} href="/register" label="Cadastrar-se" />
            <NavbarItem render={isAuthenticate} href="/login" onClick={logout} label="Sair" />
            <NavbarItem render={isAuthenticate} href="/createEvent" label="Criar Evento" />
            <NavbarItem render={isAuthenticate} href="/createLocal" label="Criar Local" />
            <NavbarItem render={isAuthenticate} href="/updateEvent" label="Atualizar Evento" />
            <NavbarItem render={isAuthenticate} href="/updateLocal" label="Atualizar Local" />
            <NavbarItem render={isAdmin} href="/deleteEvent" label="Deletar Evento" />
            <NavbarItem render={isAdmin} href="/deleteLocal" label="Deletar Local" />
            <NavbarItem render={isAuthenticate} href="/viewEvents" label="Listar Eventos" />
            <NavbarItem render={isAuthenticate} href="/viewLocals" label="Listar Locais" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default () => (
  <AuthConsumer>
    {(context) => (
      <Navbar isAuthenticate={context.isAuthenticate} logout={context.end} isAdmin={context.isAdmin} />
    )}
  </AuthConsumer>
);
