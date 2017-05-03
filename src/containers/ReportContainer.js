import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

// Styles
import '../stylesheets/css/components/report_container.css'

// Images
var bhboxImage = require('../images/image41.png')

class ReportContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: true,
      fullScreen: false
    }

    this.toggleActive = this.toggleActive.bind(this)
    this.toggleFullScreen = this.toggleFullScreen.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  toggleFullScreen() {
    this.setState({ fullScreen: !this.state.fullScreen })
  }

  render() {
    return(
      <section className={ classnames('report--container', { 'active': this.state.active && this.props.reportType != '', 'full-screen': this.state.fullScreen, 'visible': this.props.reportType != '' }) }>
        <a href='#' className='container--toggler container--toggler-left valign-wrapper' onClick={ this.toggleActive }><i className='material-icons'>play_arrow</i></a>
        <header>
          <a href='#' className='btn-flat' onClick={ this.toggleFullScreen }><i className='material-icons'>picture_in_picture</i></a>
        </header>
        <div className='report--content'>
          <img src={ bhboxImage } alt='BH-BOX' />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    reportType: state.Reports.reportType
  }
}

export default connect(mapStateToProps)(ReportContainer)
