// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import API_KEY from '../../../config.js';

const mapStyles = {
  width: '50%',
  height: '400px',
};

export class MapContainer extends React.Component {
  componentDidMount() {
    this.props.toggleMapLoading();
  }

  render() {
    return (
      <div className="fadeIn map-container">
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: this.props.currentLat,
            lng: this.props.currentLong
          }
        }
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);