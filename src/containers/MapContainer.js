import Map from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    if(!this.props.loaded){
      return(<div>Loading...</div>)
    }

    return(
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container)
