import React, { Component } from 'react';
import GeoLocation from "react-geolocation";
import EventPage from "./EventPage.js"

class GeolocationWrapper extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.match.params.eventName);
  }

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
            <EventPage getCurrentPosition={getCurrentPosition} latitude={latitude} longitude={longitude}/>
          </div>
      }
      />
    );
  }
}

export default GeolocationWrapper;
