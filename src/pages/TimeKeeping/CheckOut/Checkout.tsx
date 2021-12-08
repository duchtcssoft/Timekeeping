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
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TimeKeepingForm from "../TimeKeepingForm/TimeKeepingForm";

export default function Checkout() {
  const { execute: getTimeKeepingList, response: responseTimeKeepingList, error: timeKeepingError } = useGetTimeKeepingList();
  const [inputNote, setInputNote] = useState("");
  const { execute: getOffices, response: listOffices } = useGetOfficesAction();
  const { execute: requestCheckOut, isLoading } = useRequestCheckOut();
  const history = useHistory();

  const today = new Date();
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();

  console.log("list office: ", listOffices);

  const token = getCookie("access_token");
  const handleOfficeChange = (value: any) => {
    console.log(`selected ${value}`);

    // FIXME: Use buildXHR

    axios({
      method: "get",
      url: `${BASE_URL}/api/office-shifts?office_id=${value}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onNoteChange = (e: any) => {
    console.log("Change:", e.target.value);
    setInputNote(e.target.value);
  };

  const handleClick = () => {
    requestCheckOut({
      data: {
        checkout_hour: currentHour,
        checkout_minutes: currentMinute,
        checkout_note: inputNote,
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

  useEffect(() => {
    getTimeKeepingList({
      cbSuccess: (res) => {
        console.log("list cham cong: ", res.data);
        // console.log(a.slice(0, 10));
        // setDate(res.data);
      },
    });
  }, []);
  return (
    <MainLayout>
      <ReactHookForm validateSchema={schemaTimekeeping}>
        <TimeKeepingForm
          title="Chấm Công Ra"
          // officeName={getOfficeName}
          handleClick={handleClick}
          onNoteChange={onNoteChange}
          isCheckOut
          loading={isLoading}
        />
      </ReactHookForm>
    </MainLayout>
  );
}
