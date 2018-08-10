import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          center={center}
          defaultZoom={10}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// {lat: this.props.flat.lat, lng: this.props.flat.lng}
