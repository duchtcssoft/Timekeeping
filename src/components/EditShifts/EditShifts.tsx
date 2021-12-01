import React, { useState } from "react";
import { Modal, Button, TimePicker, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;

const EditShifts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formathour = "HH";
  const formatminutes = "mm";
  const format = "HH:mm";
  const [data, setData] = useState({
    name: "",
    starting_hour: "",
    ending_hour: "",
    starting_minutes: "",
    ending_minutes: "",
    office_id: "",
    coefficient: "",
    break_time: "",
  });
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleChange(e: any) {
    // eslint-disable-next-line no-console
    const { name, value } = e.target;
    setData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function onSubmit() {}
  return (
    <>
      <Button
        type="primary"
        style={{
          border: "none",
          margin: "0 0 0 15px",
          fontSize: "13px",
          color: "#fff",
          padding: "0px 17px",
          borderRadius: "4px",
        }}
        onClick={showModal}
      >
        Edit
      </Button>
      <Modal
        className="AddShift"
        title="Cập nhật ca làm việc"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="Add-Group">
          <p>Tên ca: </p>
          <input
            value={data.name}
            type="text"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <div className="time-group">
            <p>Thời gian bắt đầu: </p>
            <TimePicker
              // value={moment(data.starting_hour)}
              name="starting_hour"
              placeholder="Set giờ"
              defaultValue={moment("08", formathour)}
              format={formathour}
              // onChange={handleChange}
            />
            <TimePicker
              // value={moment(data.starting_minutes)}
              name="starting_munutes"
              placeholder="Set phút"
              defaultValue={moment("00", formatminutes)}
              format={formatminutes}
              // onChange={handleChange}
            />
          </div>
          <div className="time-group">
            <p>Thời gian kết thúc</p>
            <TimePicker
              // value={moment(data.ending_hour)}
              name="ending_hour"
              placeholder="Set giờ"
              defaultValue={moment("17", formathour)}
              format={formathour}
              // onChange={handleChange}
            />
            <TimePicker
              // value={moment(data.ending_minutes)}
              name="ending_minutes"
              placeholder="Set phút"
              defaultValue={moment("00", formatminutes)}
              format={formatminutes}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <p>Thời gian giải lao: </p>
          <TimePicker.RangePicker
            defaultValue={[moment("15:00", format), moment("15:15", format)]}
            format={format}
            // onChange={handleChange}
          />
        </div>
        <div className="Add-Group">
          <p>Hệ số: </p>
          <Select
            defaultValue="1.0"
            style={{ width: 120 }}
            value={data.coefficient}
            // onChange={handleChange}
          >
            <Option name="coefficient" value="1.2">
              1.2
            </Option>
            <Option name="coefficient" value="1.0">
              1.0
            </Option>
            <Option name="coefficient" value="0.5">
              0.5{" "}
            </Option>
          </Select>
        </div>
      </Modal>
    </>
  );
};
export default EditShifts;
