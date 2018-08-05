import React, { Component } from 'react';
import GeoLocation from "react-geolocation";
import ColorPage from "./ColorPage.js"

class GeolocationWrapper extends Component {
  render(){
    return(
        <GeoLocation
        enableHighAccuracy
        render={({
          position: { coords: { latitude, longitude } = {} } = {},
          getCurrentPosition
        }) =>
            <ColorPage getCurrentPosition={getCurrentPosition} latitude={latitude} longitude={longitude}/>
      }
      />
    );
  }
}

export default GeolocationWrapper;
