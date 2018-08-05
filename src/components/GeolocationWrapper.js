import React, { Component } from 'react';
import GeoLocation from "react-geolocation";
import ColorPage from "./ColorPage.js"

class GeolocationWrapper extends Component {
  render(){
    return(
        <GeoLocation
        onSuccess={console.log}
        enableHighAccuracy
        render={({
          position: { coords: { latitude, longitude } = {} } = {},
          getCurrentPosition
        }) =>
          <div>
            latitude: {latitude}
            longitude: {longitude}
            <ColorPage getCurrentPosition={getCurrentPosition} latitude={latitude} longitude={longitude}/>
          </div>
      }
      />
    );
  }
}

export default GeolocationWrapper;
