import React, { Component } from 'react'

// Styles
import '../stylesheets/css/materialize.css'
import '../stylesheets/css/common.css'

// Components
import Navbar from '../components/Navbar'

class App extends Component {
  render() {
    return(
      <Navbar logged={ false } />
    )
  }
}

export default App
