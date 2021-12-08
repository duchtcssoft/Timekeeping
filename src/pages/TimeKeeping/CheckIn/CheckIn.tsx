/* eslint-disable no-alert */

import { useGetOfficesAction } from "@/api/Offices/GetOffices";
import { useRequestCheckIn } from "@/api/TimeKeeping/CheckIn";
import MainLayout from "@/components/Layout/Layout";
import { ROUTES } from "@/constants/routers";
import { BASE_URL } from "@/https/AxiosInstance";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaTimekeeping } from "@/react-hook-form/validations/TimeKeeping";
import getCookie from "@/utils/cookies/getCookies";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TimeKeepingForm from "../TimeKeepingForm/TimeKeepingForm";

export default function CheckIn() {
  const [getLatitude, setGetLatitude] = useState("");
  const [getLongitude, setGetLongitude] = useState("");
  const [inputOffice, setInputOffice] = useState(0);
  const [inputOfficeShift, setInputOfficeShift] = useState(0);
  const [inputNote, setInputNote] = useState("");
  const [getOffice, setGetOffice] = useState([]);
  const [getOfficeShift, setGetOfficeShift] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const { execute: getOffices } = useGetOfficesAction();
  const { execute: requestCheckIn, isLoading } = useRequestCheckIn();
  const history = useHistory();

  const today = new Date();
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
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

  const getCoordinates = (position: any) => {
    setGetLatitude(position.coords.latitude.toString());
    setGetLongitude(position.coords.longitude.toString());
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

  useEffect(() => {
    getOffices({
      cbSuccess: (res: any) => {
        // This is on success callback
        setGetOffice(res.data);
      },
      cbError: (err: any) => {
        console.log(err);
      },
    });
  }, []);

  const token = getCookie("access_token");
  const handleOfficeChange = (value: any) => {
    console.log(`selected ${value}`);
    setInputOffice(value);

    setIsDisable(true);
    // FIXME: Use buildXHR

    axios({
      method: "get",
      url: `${BASE_URL}/api/office-shifts?office_id=${value}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setGetOfficeShift(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsDisable(false);
      });
  };

  const handleOfficeShiftChange = (value: any) => {
    console.log(`selected ${value}`);
    setInputOfficeShift(value);
  };
  const onNoteChange = (e: any) => {
    console.log("Change:", e.target.value);
    setInputNote(e.target.value);
  };

  console.log(getLatitude, getLongitude, currentHour, ":", currentMinute);

  const handleClick = () => {
    requestCheckIn({
      data: {
        checkin_hour: currentHour,
        checkin_minutes: currentMinute,
        office_id: inputOffice,
        office_shifts_id: inputOfficeShift,
        checkin_note: inputNote,
        latitude: getLatitude,
        longitude: getLongitude,
      },
      cbSuccess: (res: any) => {
        console.log(res);
        history.push(ROUTES.TIME_KEEPING);
      },
      cbError: (err) => {
        if (err.response) {
          console.log("response: ", err.response);
          // message.error(err.response.data.error.message);
        }
        if (err.request) {
          console.log(err.request);
        }
        // FIXME: We have thousand of other error, And this code like will log 1 error for all that error
        // This is a very "obvious bug", How many bug like this are there in This source?
      },
    },

    );
  };
  return (
    <MainLayout>

      <ReactHookForm validateSchema={schemaTimekeeping}>
        <TimeKeepingForm
          title="Chấm Công Vào"
          inputOffice={inputOffice}
          inputOfficeShift={inputOfficeShift}
          inputNote={inputNote}
          handleClick={handleClick}
          getOffice={getOffice}
          getOfficeShift={getOfficeShift}
          handleOfficeChange={handleOfficeChange}
          handleOfficeShiftChange={handleOfficeShiftChange}
          onNoteChange={onNoteChange}
          isDisable={isDisable}
          loading={isLoading}
        />
      </ReactHookForm>
    </MainLayout>
  );
}
