import React from "react";
import GeoLocation from "react-geolocation";

export default () => {
  return (
    <GeoLocation
      onSuccess={console.log}
      enableHighAccuracy
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) =>
        <div>
          <pre>
            latitude: {latitude} 
            longitude: {longitude}
          </pre>
        </div>
    }
    />
  );
};