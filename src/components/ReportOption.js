import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class ReportOption extends Component {
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
    if(this.state.active){
      return(
        <div className='option col s4'>
          <div className={ classnames('option--container active', { 'disabled': this.props.disabled }) } onClick={ this.toggleActive }>
            <i className='material-icons tiny option--info'>done</i>
            <i className='material-icons medium'>{ this.props.icon }</i>
            <h4 className='option--container-title'>{ this.props.label }</h4>
          </div>
        </div>
      )
    } else {
      return(
        <div className='option col s4'>
          <div className={ classnames('option--container', { 'disabled': this.props.disabled }) } onClick={ this.toggleActive }>
            <i className='material-icons tiny option--info'>info</i>
            <i className='material-icons medium'>{ this.props.icon }</i>
            <h4 className='option--container-title'>{ this.props.label }</h4>
          </div>
        </div>
      )
    }
  }
}

ReportOption.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.boolean
}

ReportOption.defaultProps = {
  disabled: false
}

export default ReportOption
