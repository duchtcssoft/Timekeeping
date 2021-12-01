import { Button } from "antd";
import React, { useState } from "react";
import axios from "axios";

const GeoLocation = () => {
  const [details, setDetails] = useState(null);
  console.log(details);
  const getUserGeolocationDetails = () => {
    fetch(
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then((response) => response.json())
      .then(
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        (data) => setDetails(data)
      );
  };

  // const getUserGeolocationDetailsS = () => {
  //   axios
  //     .get(
  //       // eslint-disable-next-line @typescript-eslint/comma-dangle
  //       "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
  //     )
  //     .then((response) => {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(() => {
  //       // always executed
  //     });
  // };
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Find my IP and Location</h2>
          <p className="mt-3">
            <Button
              className="btn btn-primary"
              onClick={getUserGeolocationDetails}
            >
              Find my details
            </Button>

            <div className="row justify-content-center mt-3">
              <div className="col-lg-6 text-center text-dark">
                {details && (
                  <ul className="list-group">
                    <li className="list-group-item">
                      Location :
                      {/* {`${details.city}, ${details.country_name}(${details.country_code})`} */}
                    </li>
                    {/* <li className="list-group-item">IP: {details.IPv4}</li> */}
                  </ul>
                )}
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default GeoLocation;
