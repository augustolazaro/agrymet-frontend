import React, { Component } from 'react'
import Map from 'google-maps-react'

class Root extends Component {
  render() {
    return(
      <Map google={this.props.google} zoom={14} />
    )
  }
}

export default Root
