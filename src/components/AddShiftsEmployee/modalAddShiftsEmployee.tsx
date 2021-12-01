import React, { useState } from "react";
import { Modal, Checkbox, Switch, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./AddShiftEmployee.scss";

const ModalAddShiftsEmployee = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //   const onCheckAllChange = (e) => {
  //     setCheckedList(e.target.checked ? plainOptions : []);
  //     setIndeterminate(false);
  //     setCheckAll(e.target.checked);
  //   };
  return (
    <>
      <Button
        type="primary"
        style={{ margin: "0 10px" }}
        onClick={showModal}
        icon={<PlusOutlined />}
      >
        Thêm ca làm việc
      </Button>
      <Modal
        className="ModalAdd"
        title="Thêm ca làm việc cho nhân viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="SelectUser">
          <Switch defaultChecked />
          Chọn tất cả
        </div>
        <div className="checkboxGroup">
          <Checkbox value="B">Nhân viên B</Checkbox>
          <Checkbox value="C">Nhân viên C</Checkbox>
          <Checkbox value="D">Nhân viên D</Checkbox>
          <Checkbox value="E">Nhân viên E</Checkbox>
        </div>
        <br />
        <div className="Shifts">
          <p>Ca làm việc có thể sắp xếp</p>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="chọn ca làm việc"
            defaultValue={["Ca 1"]}
            // onChange={handleChange}
            optionLabelProp="label"
          >
            <Option value="Ca 1" label="Ca 1">
              Ca 1
            </Option>
            <Option value="Ca 2" label="ca 2">
              Ca 2
            </Option>
            <Option value="Ca 3" label="ca 3">
              Ca 3
            </Option>
            <Option value="Ca 4" label="Ca 4">
              Ca 4
            </Option>
          </Select>
        </div>
        <div className="Note">
          <p>Ghi chú: </p>
          <textarea id="w3review" name="w3review" style={{ width: "100%" }} />
        </div>
      </Modal>
    </>
  );
};
export default ModalAddShiftsEmployee;
