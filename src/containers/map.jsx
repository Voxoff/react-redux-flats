import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';



class SimpleMap extends Component {
  render() {
    let markers = this.props.flats.map((flat) => {return {lat: flat.lat, lng: flat.lng, name: flat.name}});
    console.log(markers)
    const Marker = ({ text, lat, lng }) => (
      <div style={{
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
        {text}
      </div>
    );

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          center={{ lat: this.props.selectedFlat.lat, lng: this.props.selectedFlat.lng }}
          defaultZoom={15}
        >
        {console.log(this.props.flats[0])}
        {this.props.flats.map(function(flat) { return <Marker lat={flat.lat} 
          lng={flat.lng} 
          text={flat.name} 
          key={flat.name}/>
        })}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    selectedFlat: state.selectedFlat,
    flats: state.flats 
  }
}

export default connect(mapStateToProps, null)(SimpleMap);

