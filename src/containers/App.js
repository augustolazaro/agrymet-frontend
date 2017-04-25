import React, { Component } from 'react'
import '../stylesheets/css/materialize.css'
import '../stylesheets/css/common.css'
import 'jquery'
import AgrymaxNavbar from '../components/AgrymaxNavbar'

class App extends Component {
  render() {
    return(
      <AgrymaxNavbar logged={false} />
    )
  }
}

export default App
