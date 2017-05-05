import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import FarmItem from './FarmItem'

class FarmsList extends Component {
  render() {
    return(
      <ul>
        { this.props.farms.map(farm =>
          <FarmItem />
        ) }
      </ul>
    )
  }
}


function mapStateToProps(state) {
  return {
    farms: state.farms
  }
}

export default connect(mapStateToProps)(FarmsList)
