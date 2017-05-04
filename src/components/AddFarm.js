import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import scriptLoader from 'react-async-script-loader'

scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDaBb44itnGQVy2NUY23ucm382tGmmmxTQ'])
class AddFarm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }

    this.geocoder = new window.google.maps.Geocoder()
    this.autocomplete = undefined

    this.toggleActive = this.toggleActive.bind(this)
    this.findGeocode = this.findGeocode.bind(this)
  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidUpdate() {
    let input = this.geoInput
    let options = {}
    this.autocomplete = new window.google.maps.places.Autocomplete(input, options)
    this.autocomplete.addListener('place_changed', this.findGeocode)
  }

  findGeocode() {
    let place = this.autocomplete.getPlace()
    console.log(place.geometry.location.lat(), place.geometry.location.lng())
  }

  componentShape() {
    if(this.state.active || this.props.active) {
      return(
        <div>
          <input ref={ (input) => { this.geoInput = input } } type='text' placeholder='Localize no mapa' name='location' />
        </div>
      )
    } else {
      return(
        <Link to='#' className='button button--square button--square-default' onClick={ this.toggleActive }>
          <i className='material-icons'>add</i>
        </Link>
      )
    }
  }

  render() {
    return(
      this.componentShape()
    )
  }
}

export default AddFarm
