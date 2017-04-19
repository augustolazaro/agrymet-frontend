import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, Icon } from 'react-materialize';
import '../stylesheets/css/materialize.css';

class App extends Component {
  render() {
    return (
      <Navbar brand='Agrymet' right>
        <NavItem href='/'>CADASTRE-SE</NavItem>
        <NavItem href='/farm'>LOGIN</NavItem>
        <NavItem href='/'><Icon>more_vert</Icon></NavItem>
      </Navbar>
    )
  }
}

export default App;
