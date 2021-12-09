/* eslint-disable no-alert */
import { useGetOfficesAction } from "@/api/Offices/GetOffices";
import { useRequestCheckOut } from "@/api/TimeKeeping/CheckOut";
import { useGetTimeKeepingList } from "@/api/TimeKeeping/TimeKeepingList";
import MainLayout from "@/components/Layout/Layout";
import { ROUTES } from "@/constants/routers";
import { BASE_URL } from "@/https/AxiosInstance";
import ReactHookForm from "@/providers/ReactHookForm";
import { schemaTimekeeping } from "@/react-hook-form/validations/TimeKeeping";
import getCookie from "@/utils/cookies/getCookies";
import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TimeKeepingForm from "../TimeKeepingForm/TimeKeepingForm";

export default function Checkout() {
  const [getLatitude, setGetLatitude] = useState("");
  const [getLongitude, setGetLongitude] = useState("");
  const [inputNote, setInputNote] = useState("");
  const history = useHistory();
  const [timeKeepingId, setTimeKeepingId] = useState(0);
  const [officeId, setOfficeId] = useState(0);
  const [officeShiftId, setOfficeShiftId] = useState(0);
  const [timeKeeping, setTimeKeeping] = useState([] as any);
  const [offices, setOffices] = useState([] as any);
  const [officeShifts, setOfficeShifts] = useState([] as any);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkInHour, setCheckInHour] = useState(0);
  const [checkInMinute, setCheckInMinute] = useState(0);
  // API Call
  const { execute: getTimeKeepingList, response: responseTimeKeepingList, error: timeKeepingError } = useGetTimeKeepingList();
  const { execute: getOffices, response: listOffices } = useGetOfficesAction();
  const { execute: requestCheckOut, isLoading } = useRequestCheckOut();

// ===============
  const today = new Date();
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();

  useEffect(() => {
    getOffices({
      cbSuccess: (res) => {
        setOffices(res.data);
      },
    });
  }, []);
  const token = getCookie("access_token");

  useEffect(() => {
  if (officeId !== 0) {
    axios({
      method: "get",
      url: `${BASE_URL}/api/office-shifts?office_id=${officeId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setOfficeShifts(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
}
  }, [officeId]);
  useEffect(() => {
    getTimeKeepingList({
      cbSuccess: (res) => {
        setTimeKeeping(res.data);
        // console.log("data inner: ", res.data[lastElement].id);
        setTimeKeepingId(res.data[res.data.length - 1].id);
        setOfficeId(res.data[res.data.length - 1].office_id);
        setOfficeShiftId(res.data[res.data.length - 1].office_shifts_id);
        setCheckInHour(res.data[res.data.length - 1].checkin_hour);
        setCheckInMinute(res.data[res.data.length - 1].checkin_minutes);
      },
    });
  }, []);

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

  const totalTime = Math.abs((currentHour * 60 + currentMinute) - (checkInHour * 60 + checkInMinute));
  console.log("total time: ", totalTime);
  const handleClick = () => {
    // FIXME: Use buildXHR
    if (totalTime < 540)
    setIsModalVisible(true);
    else
    axios({
      method: "post",
      url: `${BASE_URL}/api/timekeeping/check-out/${timeKeepingId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        checkout_hour: currentHour,
        checkout_minutes: currentMinute,
        checkout_note: inputNote,
        latitude: getLatitude,
        longitude: getLongitude,
     },
    })
      .then((res) => {
        console.log("cuccess");
        history.push(ROUTES.TIME_KEEPING);
      })
      .catch((err) => {
        if (err.response) {
        console.log("response: ", err.response);
         message.error(err.response.data.error.message);
       }
       if (err.request) {
       console.log(err.request);
       }
      });
  };

  const onNoteChange = (e: any) => {
    console.log("Change:", e.target.value);
    setInputNote(e.target.value);
  };
  const handleOk = () => {
    axios({
      method: "post",
      url: `${BASE_URL}/api/timekeeping/check-out/${timeKeepingId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        checkout_hour: currentHour,
        checkout_minutes: currentMinute,
        checkout_note: inputNote,
        latitude: getLatitude,
        longitude: getLongitude,
     },
    })
      .then((res) => {
        console.log("cuccess");
        history.push(ROUTES.TIME_KEEPING);
      })
      .catch((err) => {
        if (err.response) {
        console.log("response: ", err.response);
         message.error(err.response.data.error.message);
       }
       if (err.request) {
       console.log(err.request);
       }
      });
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <MainLayout>
      <ReactHookForm validateSchema={schemaTimekeeping}>
        <TimeKeepingForm
          title="Chấm Công Ra"
          desc="Thông Tin Check Out"
          officeId={officeId}
          officeShiftId={officeShiftId}
          offices={offices}
          officeShifts={officeShifts}
          // officeName={officeName}
          handleClick={handleClick}
          onNoteChange={onNoteChange}
          isCheckOut
          loading={isLoading}
          timeKeeping={timeKeeping}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
      </ReactHookForm>
    </MainLayout>
  );
}
