import React, { useEffect, useState } from "react";
import { Modal, Button, TimePicker, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "./AddShifts.scss";
import axios from "axios";
import Cookie from "universal-cookie";

const { Option } = Select;
const cookie = new Cookie();

const FormAddShifts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formathour = "HH";
  const formatminutes = "mm";
  const format = "HH:mm";
  const [name, setName] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endMin, setEndMin] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [coff, setCoff] = useState("");
  const [offices, setOffices] = useState([]);
  const [officeId, setOfficeId] = useState("");
  useEffect(() => {
    getOffices().then((data) => {
      setOffices(data);
    });
  }, []);
  const handleOk = async () => {
    const token = cookie.get("token");
    let check = 0;
    const dataApi: any = {
      name,
      starting_hour: startHour,
      ending_hour: endHour,
      coefficient: coff,
      break_time: breakTime,
      starting_minutes: startMin,
      ending_minutes: endMin,
      office_id: officeId,
    };
    Object.keys(dataApi).forEach((key) => {
      if (dataApi[key] === "") {
        check += 1;
      }
    });
    if (check !== 0) {
      // eslint-disable-next-line no-alert
      alert("Vui lòng nhập đủ thông tin !");
      return;
    }
    await axios
      .post(`${process.env.REACT_APP_DOMAIN_URL}api/office-shifts`, dataApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // eslint-disable-next-line @typescript-eslint/comma-dangle
      })
      .then((res) => {
        setIsModalVisible(false);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleChange = (e: any) => {
    // eslint-disable-next-line no-console
    const { name, value } = e.target;
    setName(value);
  };
  async function getOffices() {
    const token = cookie.get("token");
    const tmp: any = [];
    return axios
      .get(`${process.env.REACT_APP_DOMAIN_URL}api/offices?page=1&limit=6`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res.data.data.forEach((e: any) => {
          tmp.push({ id: e.id, name: e.name });
        });
        return tmp;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div>
        <Button
          type="primary"
          style={{ height: "40px", margin: "0 10px" }}
          onClick={showModal}
          icon={<PlusOutlined />}
        >
          Thêm ca làm việc
        </Button>
        <Modal
          className="AddShift"
          title="Thêm ca làm việc"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="Add-Group">
            <p>Tên văn phòng: </p>
            <Select
              style={{ width: 120 }}
              onChange={(value) => {
                setOfficeId(value);
              }}
              value={officeId}
            >
              {offices.map((e: any) => (
                <Option value={e.id} name="office_id">
                  {e.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="Add-Group">
            <p>Tên ca: </p>
            <input
              value={name}
              type="text"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div>
            <div className="time-group">
              <p>Thời gian bắt đầu: </p>
              <TimePicker
                name="starting_hour"
                placeholder="Set giờ"
                format={formathour}
                onChange={(time, timeString) => {
                  setStartHour(timeString);
                }}
              />
              <TimePicker
                name="starting_minutes"
                placeholder="Set phút"
                format={formatminutes}
                onChange={(time, timeString) => {
                  setStartMin(timeString);
                }}
              />
            </div>
            <div className="time-group">
              <p>Thời gian kết thúc</p>
              <TimePicker
                name="ending_hour"
                placeholder="Set giờ"
                format={formathour}
                onChange={(time, timeString) => {
                  setEndHour(timeString);
                }}
              />
              <TimePicker
                name="ending_minutes"
                placeholder="Set phút"
                format={formatminutes}
                onChange={(time, timeString) => {
                  setEndMin(timeString);
                }}
              />
            </div>
          </div>
          <div>
            <p>Thời gian giải lao: </p>
            <TimePicker
              disabledHours={() => {
                const arr = [];
                const limit = 2;
                for (let i = limit + 1; i < 24; i += 1) {
                  arr.push(i);
                }
                return arr;
              }}
              format={format}
              onChange={(time, timeString) => {
                setBreakTime(timeString);
              }}
            />
          </div>
          <div className="Add-Group">
            <p>Hệ số: </p>
            <Select
              value={coff}
              style={{ width: 120 }}
              onChange={(value) => {
                setCoff(value);
              }}
            >
              <Option name="coefficient" value="1.2">
                1.2
              </Option>
              <Option name="coefficient" value="1.0">
                1.0
              </Option>
              <Option name="coefficient" value="0.5">
                0.5
              </Option>
            </Select>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default FormAddShifts;
