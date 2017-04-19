import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Root from '../containers/Root'
import Farm from '../containers/Farm'

class AgrymaxNavbar extends Component {
  navItems() {
    if (this.props.logged){
      return(
        <div>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/farm'>Fazenda</NavItem>
        </div>
      )
    } else {
      return(
        <NavItem href='/'>CADASTRE-SE</NavItem>
      )
    }
  }

  render() {
    return(
      <Router>
        <div>
          <Navbar brand='Agrymet' right>
            <div>{ this.navItems() }</div>
          </Navbar>

          <Route exact path='/' component={Root} />
          <Route path='/farm' component={Farm} />
        </div>
      </Router>
    )
  }
}

export default AgrymaxNavbar
