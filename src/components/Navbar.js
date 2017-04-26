import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import Root from '../containers/Root'
import Farm from '../containers/Farm'
import Login from '../containers/LoginPage'

// Styles
import '../stylesheets/css/navbar.css'

// Actions
import { setApplication } from '../actions/application'

class Navbar extends Component {
  navItems() {
    if (this.props.logged){
      return(
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/farm'>Fazenda</Link></li>
        </ul>
      )
    } else {
      return(
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><Link to='#'>CADASTRE-SE</Link></li>
          <li><Link to='/login'>LOGIN</Link></li>
        </ul>
      )
    }
  }

  render() {
    return(
      <Router>
        <div>
          <nav>
            <div className='nav-wrapper'>
              <a href='#!' className='brand-logo center dropdown-button' data-activates='application-dropdown' data-beloworigin='true'>
                { this.props.application }
                <i className='material-icons right'>arrow_drop_down</i>
              </a>
              <ul id='application-dropdown' className='dropdown-content'>
                <li className='center-align'><label>especificar cultura:</label></li>
                <li>
                  <Link to='#' onClick={ e => {
                    e.preventDefault()
                    this.props.changeApplication('smart_cana')
                  } }>
                    <i className='material-icons left'>android</i>
                    <span>SMART CANA</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <i className='material-icons left'>android</i>
                    <span>SMART CAFÉ</span>
                  </Link>
                </li>
              </ul>
              { this.navItems() }
            </div>
          </nav>

          <Route exact path='/' component={Root} />
          <Route path='/farm' component={Farm} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    application: state.Application.application
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeApplication: (application) => {
      dispatch(setApplication(application))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
