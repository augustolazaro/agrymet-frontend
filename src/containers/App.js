import React, { Component } from 'react'
import '../stylesheets/css/materialize.css'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import AgrymaxNavbar from '../components/AgrymaxNavbar'

class App extends Component {
  render() {
    return(
      <AgrymaxNavbar logged={true} />
    )
  }
}

export default App
