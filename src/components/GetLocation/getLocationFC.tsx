/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button } from "antd";
import { useState } from "react";

function GetLocationFC() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userAdd, setUserAdd] = useState(null);
  const GOOGLE_API_KEY = "AIzaSyBoUNwirqODSJrQXyPKQNK0askP_S40QtE";
  // console.log(typeof latitude);
  // console.log("rounded: ", Math.round(latitude * 100000) / 100000);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        handleLocationError
      );
    } else {
      // eslint-disable-next-line no-alert
      alert("Geo is not support in the browser");
    }
  };

  // eslint-disable-next-line class-methods-use-this
  const getCoordinates = (position: any) => {
    // console.log(position);
    setLatitude(Math.round(position.coords.latitude * 100000) / 100000);
    setLongitude(Math.round(position.coords.longitude * 10000) / 10000);
  };

  const handleLocationError = (error: any) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        // eslint-disable-next-line no-alert
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        // eslint-disable-next-line no-alert
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        // eslint-disable-next-line no-alert
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        // eslint-disable-next-line no-alert
        alert("An unknown error occurred.");
        break;
      default:
        // eslint-disable-next-line no-alert
        alert("An unknown error occurred.");
    }
  };
  return (
    <div>
      <h2 onClick={getLocation}>jaks</h2>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      {/* <img
        style={{ width: "500px", height: "500px" }}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size400x300&sensor=false&markers=color:red%7c${latitude},${longitude}&key=${GOOGLE_API_KEY}`}
        alt=""
      /> */}
    </div>
  );
}
export default GetLocationFC;
