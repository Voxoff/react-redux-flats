import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  render() {
    console.log(this.props.selectedFlat)
    let marker = null;
    let center = { lat: this.props.selectedFlat.lat, lng: this.props.selectedFlat.lng };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          center={center}
          defaultZoom={15}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    selectedFlat: state.selectedFlat 
  }
}

export default connect(mapStateToProps, null)(SimpleMap);

