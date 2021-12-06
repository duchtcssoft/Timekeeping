import classes from "./TimeKeepingForm.module.scss";
import { useState, useEffect } from "react";
import { Button, Input, Select, Form } from "antd";
import axios from "axios";
import { BASE_URL } from "@/https/AxiosInstance";
import { useGetOfficesAction } from "@/api/GetOffices";
import { InputField } from "@/custom-field/InputField/InputField";
import { Controller } from "react-hook-form";
import { useTypedForm } from "@/hooks/useTypedForm";

export default function TimeKeepingForm(props: any) {
  const accessToken = localStorage.getItem("accessToken");
  // FIXME: Use response from useGetOfficesAction, don't use below useState:
  // const [getOffice, setGetOffice] = useState([]);
  // const [getOfficeShift, setGetOfficeShift] = useState([]);
  const [getOffice, setGetOffice] = useState([]);
  const [getOfficeShift, setGetOfficeShift] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const { Option } = Select;
  const { TextArea } = Input;

  const { execute: getOffices } = useGetOfficesAction();
  useEffect(() => {
    getOffices({
      cbSuccess: (res: any) => {
        // This is on success callback
        console.log(res);
        setGetOffice(res.data);
      },
      cbError: (err: any) => {
        console.log(err);
      },
    });
  }, []);

  const handleOfficeChange = (value: any) => {
    console.log(`selected ${value}`);
    setIsDisable(true);
    // FIXME: Use buildXHR
    axios({
      method: "get",
      url: `${BASE_URL}/api/office-shifts?office_id=${value}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        console.log("res officeshift: ", res.data.data);
        setGetOfficeShift(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsDisable(false);
      });
  };

  const handleOfficeShiftChange = (values: any) => {
    console.log(`selected ${values}`);
  };

  const onChange = (e: any) => {
    console.log("Change:", e.target.value);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useTypedForm("CheckIn");
  const onSubmit = (values: any) => {
    console.log("form values: ", values);
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.row}>
        <div className={classes.col}>
          <InputField label="Chọn văn phòng làm việc" isRequired>
            <Controller
              name="office_id"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  size="large"
                  defaultValue="Select..."
                  style={{ width: "100%" }}
                  onChange={handleOfficeChange}
                >
                  {getOffice.map((office: any) => (
                    <Option value={office.id} key={office.name}>
                      {office.name}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </InputField>
        </div>
        <div className={classes.col}>
          <InputField label="Chọn ca làm việc" isRequired>
            <Controller
              name="office_shifts_id"
              control={control}
              render={({ field }) => (
                <Select
                  size="large"
                  disabled={isDisable}
                  defaultValue="Select..."
                  style={{ width: "100%" }}
                  onChange={handleOfficeShiftChange}
                >
                  {getOfficeShift.map((officeShift: any) => (
                    <Option value={officeShift.id} key={officeShift.id}>
                      {officeShift.name}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </InputField>
        </div>
        <div className={classes.col}>
          <InputField label="Ghi chú" isRequired>
            <Controller
              name="office_shifts_id"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  showCount
                  maxLength={100}
                  onChange={onChange}
                />
              )}
            />
          </InputField>
        </div>
        <Button
          loading={props.loading}
          style={{ width: "100%", marginBottom: "20px" }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Submit
        </Button>
      </form>
      <div className={classes.row}></div>
    </div>
  );
}
