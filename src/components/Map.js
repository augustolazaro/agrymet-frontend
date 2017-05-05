import React, { Component } from 'react'
import { Gmaps, Marker } from 'react-gmaps'

const apiKey = "AIzaSyDaBb44itnGQVy2NUY23ucm382tGmmmxTQ"
const gmParams = { v: '3.exp', key: apiKey }
const pinIcon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF7400|FFFFFF'
const kmlLayer = 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: {
        lat: '-14.235',
        lng: '-51.9253'
      }
    }
  }

  render() {
    return(
      <Gmaps
        width={ '100%' }
        height={ 'calc(100vh - 64px)' }
        lat={ this.state.coords.lat }
        lng={ this.state.coords.lng }
        zoom={ 10 }
        mapTypeId={ 'satellite' }
        loadingMessage={ 'Carregando mapa da fazenda' }
        params={ gmParams }>
        <Marker
          lat={ this.state.coords.lat }
          lng={ this.state.coords.lng }
          draggable={ false }
          title={ 'Fazenda Santa Maria' }
          icon={ pinIcon }
        />
      </Gmaps>
    )
  }
}

export default Map
