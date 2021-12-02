// libs
import { Button, Select } from "antd";
// hooks

//
import MainLayout from "@/components/Layout/Layout";
import TableShiftsEmployee from "@/components/TableShiftsEmployee";
import axios from "axios";
import { useState } from "react";
// TODO: talk

/**
 * Home
 */
function handleChange(value: any) {
  console.log(`selected ${value}`);
}
function handleSubmit() {
  // axios
  // .post("http://timekeeping.cssdemoco.com/api/office-shifts", {
  //   id: data.id,
  //   password: data.password,
  // })
  // .then((res) => {
  //   if (res.status == 200) {
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     // console.log(res.data.user.role);
  //     cookies.set(
  //       "access_token",
  //       JSON.stringify(res.data.tokens.access.token)
  //     );
  //     cookies.set(
  //       "refresh_token",
  //       JSON.stringify(res.data.tokens.refresh.token)
  //     );
  //   }
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
}
export default function Setting() {
  const { Option } = Select;

  return (
    <MainLayout>
      <div className="SettingShiftEmployee">
        Chọn trụ sở làm việc trước khi bắt đầu xếp lịch
        <Select
          defaultValue="Tất cả"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="Tất cả">Tất cả</Option>
          <Option value="Chi nhánh 1">Chi Nhánh 1</Option>
          <Option value="Chi nhánh 2">Chi Nhánh 2</Option>
          <Option value="Chi nhánh 3">Chi nhánh 3</Option>
        </Select>
      </div>
      <TableShiftsEmployee />
    </MainLayout>
  );
}
