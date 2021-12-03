import classes from "./TimeKeepingForm.module.scss";
import { useState, useEffect } from "react";
import { Button, Input, Select } from "antd";
import BASE_URL from "@/api/BaseUrl/BaseUrl";
import axios from "axios";
import { useTypedForm } from "@/hooks/useTypedForm";

export default function TimeKeepingForm(props: any) {
  const accessToken = localStorage.getItem("accessToken");
  const [getOffice, setGetOffice] = useState([]);
  const [getOfficeShift, setGetOfficeShift] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const { Option } = Select;
  const { TextArea } = Input;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useTypedForm("CheckIn");

  useEffect(() => {
    const fetchTables = async () => {
      setLoading(true);
      await axios
        .get(`${BASE_URL}/offices`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log("res: ", res);

          setGetOffice(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTables();
  }, []);

  const handleOfficeChange = (value: any) => {
    // console.log(`selected ${value}`);
    setIsDisable(true);
    axios
      .get(`${BASE_URL}/office-shifts?office_id=${value}`, {
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
        setLoading(false);
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

  const onSubmit = (values: any) => {
    console.log("form values: ", values);
  };
  return (
    <div className={classes.wrapper}>
      <form onSubmit={onSubmit} className={classes.row}>
        <div className={classes.col}>
          <label>Chọn văn phòng làm việc</label>
          <Select
            loading={loading}
            defaultValue="Select..."
            style={{ width: "100%" }}
            onChange={handleOfficeChange}
          >
            {getOffice.map((office: any) => (
              <Option value={office.id} key={office.id}>
                {office.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className={classes.col}>
          <label>Chọn ca làm việc</label>
          <Select
            disabled={isDisable}
            loading={loading}
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
        </div>
        <div className={classes.col}>
          <label>Ghi chú</label>
          <TextArea showCount maxLength={100} onChange={onChange} />
        </div>
        <Button
          loading={props.loading}
          // onClick={props.onClick}
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
