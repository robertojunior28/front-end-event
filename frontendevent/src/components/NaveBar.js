import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css';
import NavbarItem from './NavbarItem';

function Navbar(props){
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
                <NavbarItem href="/" label="Home"  />
                <NavbarItem href="/createEvent" label="Criar Evento"  />
                <NavbarItem href="/createLocal" label="Criar Local"  />
                <NavbarItem href="/updateEvent" label="Atualizar Evento"  />
                <NavbarItem href="/updateLocal" label="Atualizar Local"  />
                <NavbarItem href="/deleteEvent" label="Deletar Evento"  />
                <NavbarItem href="/deleteLocal" label="Deletar Local"  />
                <NavbarItem href="/viewEvents" label="Listar Eventos"  />
                <NavbarItem href="/viewLocals" label="Listar Locais"  />
            </ul>
            </div>
        </div>
      </div>
    )
}

export default Navbar;