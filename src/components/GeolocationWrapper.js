import React, { Component } from 'react';
import GeoLocation from "react-geolocation";
import EventPage from "./EventPage.js"

class GeolocationWrapper extends Component {
  render(){
    return(
        <GeoLocation
        onError={console.log}
        enableHighAccuracy
        render={({
          position: { coords: { latitude, longitude } = {} } = {},
          getCurrentPosition
        }) =>
          <EventPage 
            getCurrentPosition={getCurrentPosition}
            latitude={latitude}
            longitude={longitude}
            eventId={this.props.match.params.eventName}
          />
      }
      />
    );
  }

  getScreenPosition(lat, lon, latsw, lonsw, latne, lonne) {
    var deltaY = (latne - latsw)/30
    var deltaX = (lonne - lonsw)/30
    var yPos = (lat - latsw)/deltaY
    var xPos = (lon - lonsw)/deltaX
    return [xPos, yPos]
  }
}

export default GeolocationWrapper;
