/* eslint-disable no-alert */

import { useState, useEffect } from "react";

/**
 * FIXME: What is is? Should it be placed in /components/molecules?
 */
function GetLocationAndTime() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError,
        );
      } else {
        alert("Geo is not support in the browser");
      }
    }, [],
      );

  // eslint-disable-next-line class-methods-use-this
  const getCoordinates = (position: any) => {
    // console.log(position);
    setLatitude(Math.round(position.coords.latitude * 100000) / 100000);
    setLongitude(Math.round(position.coords.longitude * 10000) / 10000);
  };

  const handleLocationError = (error: any) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };
  return (
    <div>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>

    </div>
  );
}
export default GetLocationAndTime;
