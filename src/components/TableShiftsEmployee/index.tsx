/* eslint-disable @typescript-eslint/semi */
/* eslint-disable array-callback-return */
import React from "react";
import "./shiftsEmployee.scss";
import { LeftOutlined, RightOutlined, PlusOutlined } from "@ant-design/icons";
import ModalAddShiftsEmployee from "../AddShiftsEmployee/modalAddShiftsEmployee";
import { Input, Select } from "antd";

const { Search } = Input;

const data = [
  {
    id: "1",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "2",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "3",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "4",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "5",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
];

const onSearch = (value: any) => console.log(value);
function TableShiftsEmployee() {
  return (
    <>
      <div className="ShiftsEmployee-wrapper">
        <div className="header-shiftEmployeeRight">
          <div className="Search">
            <Search
              placeholder="Tên ca làm việc"
              onSearch={onSearch}
              enterButton
            />
          </div>
          <ModalAddShiftsEmployee />
          <LeftOutlined className="pagination" />
          <RightOutlined className="pagination" />
        </div>
        <div className="content-shiftEmployee">
          <table>
            <thead>
              <tr className="table-title">
                <th className="table-text">STT</th>
                <th className="table-text">Nhân Viên</th>
                <th className="table-text">Ca làm việc</th>
              </tr>
            </thead>
            <tbody>
              {data.map((index, key) => (
                <tr key={key}>
                  <td style={{ textAlign: "center" }}>{index.id}</td>
                  <td
                    style={{
                      textAlign: "left",
                      padding: "0 0 0 7px",
                      width: 250,
                    }}
                  >
                    {index.name}
                  </td>
                  <td>{index.shifts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default TableShiftsEmployee;
