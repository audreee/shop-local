// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import API_KEY from '../../../config.js';

const mapStyles = {
  width: '50%',
  height: '400px',
};

export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
    this.displayMarkers = this.displayMarkers.bind(this);
  }

  displayMarkers() {
    return this.props.businesses.map((business, index) => {
      return <Marker key={index} id={index} position={{
       lat: business.lat,
       lng: business.long
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.businesses !== this.props.businesses) {
      this.displayMarkers();
    }
  }

  componentDidMount() {
    this.displayMarkers();
    this.props.toggleMapLoading();
  }

  render() {
    return (
      <div className="fadeIn map-container">
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: this.props.currentLat,
            lng: this.props.currentLong
          }
        }
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);