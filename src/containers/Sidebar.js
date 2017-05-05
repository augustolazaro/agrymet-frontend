import React, { Component } from 'react'
import FarmForm from '../components/FarmForm'
import classnames from 'classnames'

class Sidebar extends Component {
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
      <aside className={ classnames('sidebar', { 'active': this.state.active }) }>
        <a href='#' className='container--toggler container--toggler-right valign-wrapper' onClick={ this.toggleActive }><i className='material-icons'>play_arrow</i></a>
        <div className='sidebar--content'>
          <FarmForm />
        </div>
      </aside>
    )
  }
}

export default Sidebar
