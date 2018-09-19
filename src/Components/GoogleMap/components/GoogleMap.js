import React, {Component, Fragment} from 'react'
import GoogleMapReact from 'google-map-react'
export default class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  handleClick = () => {

  }
  render() {
    // style={{ height: '80vh', width: '100%' }}
    return (
        <Fragment>
          <button onClick={this.handleClick}>Click</button>
          <GoogleMapReact
            style={{}}
            className='map-content'
            bootstrapURLKeys={{ key: 'AIzaSyAe959g3LBoVwmnMgiJK-obD_VstyruD4Y' }}
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }
            >
          </GoogleMapReact>
        </Fragment>
    )
  }
}
