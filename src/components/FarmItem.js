import React, { Component } from 'react'

class FarmItem extends Component {
  render() {
    return(
      <li>
        <input id='farm_A' name='farm' type='radio' value='A' />
        <label htmlFor='farm_A'>A</label>
      </li>
    )
  }
}

export default FarmItem
