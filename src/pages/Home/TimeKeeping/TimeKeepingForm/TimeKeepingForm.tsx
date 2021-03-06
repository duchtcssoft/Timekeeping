import classes from "./TimeKeepingForm.module.scss";
import { Button, Input, Select, Form, Modal } from "antd";
import { InputField } from "@/custom-field/InputField/InputField";
import { Controller } from "react-hook-form";
import { useTypedForm } from "@/hooks/useTypedForm";
import { useHistory } from "react-router";
import { ROUTES } from "@/constants/routers";
import { Link } from "react-router-dom";

export default function TimeKeepingForm(props: any) {
  const { offices, getOfficeShift, officeId, officeShiftId, missingTime } = props;
  const history = useHistory();
console.log(getOfficeShift);
  const { Option } = Select;
  const { TextArea } = Input;
  const {
    control,
  } = useTypedForm("CheckIn");
  const onSubmit = (values: any) => {
  };
  return (
    <div className={classes.wrapper}>

      <Form onFinish={onSubmit}>
        <div className={classes.avatar}>
        </div>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {props.title}
        </h3>
        <p className={classes.desc}>{props.desc}</p>
        <InputField label="Văn phòng làm việc">
          <Controller
            name="office_id"
            control={control}
            render={({ field }) => (
              props.isCheckOut === true ?
                <p className={classes.input}>
                  .
                  {offices.map((office:any) => (
                  officeId === office.id && office.name
                ))}
                </p>
              :
                <Select
                  {...field}
                  defaultValue={props.getOffice.map((office:any) => (
                    officeId === office.id && office.name
                  ))}
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
        </InputField>

        <InputField label="Ca làm việc">
          <Controller
            name="office_shifts_id"
            control={control}
            render={({ field }) => (
              props.isCheckOut === true ?
                <p className={classes.input}>
                  .
                  {getOfficeShift.map((officeShift:any) => (
                  officeShiftId === officeShift.id && officeShift.name
              ))}
                </p>

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

        <div className={classes.btn_group}>
          <Button
            loading={props.loading}
            className={classes.button}
            type="primary"
            htmlType="submit"
            onClick={props.handleClick}
          >
            Xác Nhận
          </Button>

          <div className={classes.link_group}>
            <Link className={classes.link} to={ROUTES.HOME}>Trang Chủ</Link>
            <Link className={classes.link} to={ROUTES.TIME_KEEPING}>Lịch Sử Chấm Công</Link>
          </div>
        </div>
        <Modal title="Bạn chưa làm đủ thời gian" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
          <p>Còn thiếu {Math.floor(missingTime / 60)} giờ {missingTime % 60} phút</p>
          <p>Vẫn muốn Check Out?</p>
        </Modal>
      </Form>
      <div className={classes.row}></div>
    </div>
  );
}
