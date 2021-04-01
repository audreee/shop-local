// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import API_KEY from '../../../config.js';

const mapStyles = {
  width: '50%',
  height: '400px',
};

export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.displayMarkers = this.displayMarkers.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.displayInfoWindow = this.displayInfoWindow.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  displayMarkers() {
    return this.props.businesses.map((business, index) => {
      return <Marker
        key={index}
        id={index}
        onClick={ this.onMarkerClick }
        name={business.name}
        community={business.community}
        category={business.category}
        position={{
          lat: business.lat,
          lng: business.long
        }}
      />
    })
  }

  onMarkerClick (props, marker, e) {
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      }, this.displayInfoWindow
    )
  }

  onClose (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  displayInfoWindow() {
    return(
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        <div>
          <h4 className="info-window info-name">{this.state.selectedPlace.name}</h4>
          <h4 className="info-window info-category">{this.state.selectedPlace.category}</h4>
          <h4 className="info-window info-community"><i className="fas fa-heart"></i> {this.state.selectedPlace.community}-owned business</h4>
        </div>
      </InfoWindow>
    )
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
          {this.displayInfoWindow()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);