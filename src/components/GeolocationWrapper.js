import React, { Component } from 'react';
import GeoLocation from "react-geolocation";
import EventPage from "./EventPage.js"

class GeolocationWrapper extends Component {
  render(){
    return(
        <GeoLocation
        enableHighAccuracy
        render={({
          position: { coords: { latitude, longitude } = {} } = {},
          getCurrentPosition
        }) =>
          <EventPage getCurrentPosition={getCurrentPosition} latitude={latitude} longitude={longitude}/>
      }
      />
    );
  }
}

export default GeolocationWrapper;
