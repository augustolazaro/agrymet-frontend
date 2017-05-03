import React, { Component } from 'react'
import Sidebar from '../containers/Sidebar'
import Map from '../components/Map'
import ReportContainer from '../containers/ReportContainer'

class Root extends Component {
  render() {
    return(
      <div>
        <Map />
        <Sidebar />
        <ReportContainer />
      </div>
    )
  }
}

export default Root
