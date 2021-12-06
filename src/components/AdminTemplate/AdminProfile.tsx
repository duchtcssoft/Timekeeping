import { useGetAdminProfileAction } from "@/api/AdminProfile";
import { ROUTES } from "@/constants/routers";
import {
  DownOutlined,
  GlobalOutlined,
  LogoutOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from "./AdminProfile.module.scss";

/**
 * FIXME: What is it? Why place this in /src/components?
 */
export default function AdminProfile() {
  // const [adminName, setAdminName] = useState("");
  const history = useHistory();
  const {
    execute: getAdminProfile,
    response: adminProfile,
  } = useGetAdminProfileAction();
  const adminName = adminProfile?.data.name;
  useEffect(() => {
    getAdminProfile({
      cbSuccess: (res: any) => {
        // This is on success callback
        console.log(res);
      },
      cbError: (err: any) => {
        console.log(err);
      },
    });
  }, []);
  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    history.replace(ROUTES.SIGN_IN);
  };
const handleChangePasswordClick = () => {
  history.push(ROUTES.CHANGE_PASSWORD);
};
  const menu = (
    <Menu style={{ borderRadius: "5px" }}>
      <Menu.Item key="0" className={classes.menu_item}>
        <GlobalOutlined />
        <span style={{ marginLeft: "10px" }} className={classes.list_item}>
          Ngôn Ngữ
        </span>
      </Menu.Item>
      <Menu.Item key="1" className={classes.menu_item}>
        <div onClick={handleLogoutClick}>
          <LogoutOutlined />
          <span style={{ marginLeft: "10px" }} className={classes.list_item}>
            Đăng Xuất
          </span>
        </div>
      </Menu.Item>
      <Menu.Item key="0" className={classes.menu_item}>
        <div onClick={handleChangePasswordClick}>
          <LockOutlined />
          <span style={{ marginLeft: "10px" }} className={classes.list_item}>
            Đổi Mật Khẩu
          </span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={classes.wrapper}>
      <Dropdown overlay={menu}>
        <label
          style={{ color: "blue" }}
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {adminName}
          <DownOutlined />
        </label>
      </Dropdown>
    </div>
  );
}
