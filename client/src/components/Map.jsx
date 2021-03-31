// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import API_KEY from '../../../config.js';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);