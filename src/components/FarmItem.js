import React, { Component } from 'react'

class FarmItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return(
      <li>
        <input id='farm_A' name='farm' type='radio' value='A' checked={ this.state.active } onClick={ this.toggleActive } />
        <label htmlFor='farm_A'>A</label>
      </li>
    )
  }
}

export default FarmItem
