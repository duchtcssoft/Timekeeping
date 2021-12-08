import classes from "./TimeKeepingForm.module.scss";
import { Button, Input, Select } from "antd";
import { InputField } from "@/custom-field/InputField/InputField";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useTypedForm } from "@/hooks/useTypedForm";

export default function TimeKeepingForm(props: any) {
  // const [isCheckOut, setIsCheckOut] = useState(false);
  // useEffect(() => {
  //   setIsCheckOut(props.isCheckout);
  // }, []);
  const { Option } = Select;
  const { TextArea } = Input;
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.avatar}>
        </div>
        <h3
          style={{
            margin: "10px 0 40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {props.title}
        </h3>
        <InputField label="Văn phòng làm việc">
          <Controller
            name="office_id"
            control={control}
            render={({ field }) => (
              props.isCheckOut === true ?
                <Select
                  {...field}
                  disabled
                  defaultValue={props.officeName}
                  size="large"
                  style={{ width: "100%" }}
                  onChange={props.handleOfficeChange}
                >
                </Select>
              :
                <Select
                  {...field}
                  defaultValue="asf"
                  size="large"
                  style={{ width: "100%" }}
                  onChange={props.handleOfficeChange}
                >
                  {props.getOffice.map((office: any) => (
                    <Select.Option value={office.id} key={office.name}>
                      {office.name}
                    </Select.Option>
                ))}
                </Select>
            )}
          />
          {/* {errors.office_id && (
            <span className={classes.required}>{errors.office_id.message}</span>
          )} */}
        </InputField>

        <InputField label="Ca làm việc">
          <Controller
            name="office_shifts_id"
            control={control}
            render={({ field }) => (
              props.isCheckOut === true ?
                <Select
                  {...field}
                  defaultValue={props.officeShiftName}
                  size="large"
                  disabled
                  style={{ width: "100%" }}
                  onChange={props.handleOfficeShiftChange}
                >

                </Select>
              :

                <Select
                  {...field}
                  size="large"
                  disabled={props.isDisable}
                  style={{ width: "100%" }}
                  onChange={props.handleOfficeShiftChange}
                >
                  {props.getOfficeShift.map((officeShift: any) => (
                    <Option value={officeShift.id} key={officeShift.id}>
                      {officeShift.name}
                    </Option>
                ))}
                </Select>
            )}
          />
          {/* {errors.office_shifts_id && (
            <span className={classes.required}>{errors.office_shifts_id.message}</span>
          )} */}
        </InputField>

        <InputField label="Ghi Chú">
          <Controller
            name="checkin_note"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                showCount
                maxLength={100}
                onChange={props.onNoteChange}
              />
            )}
          />

        </InputField>

        <Button
          loading={props.loading}
          style={{ width: "100%", marginBottom: "20px" }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={props.handleClick}
        >
          Xác Nhận
        </Button>

      </form>
      <div className={classes.row}></div>
    </div>
  );
}
