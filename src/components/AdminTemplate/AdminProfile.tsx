import BASE_URL from "@/api/BaseUrl/BaseUrl";
import { ROUTES } from "@/constants/routers";
import {
  DownOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from "./AdminProfile.module.scss";

export default function AdminProfile() {
  const [adminName, setAdminName] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "post",
      url: `${BASE_URL}/auth/profile`,
    }).then((res) => {
      // console.log("profile", res.data.data.name);
      setAdminName(res.data.data.name);
    });
  });

  const accessToken = localStorage.getItem("accessToken");
  // console.log("accesstoken: ", accessToken);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  axios.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
    // eslint-disable-next-line no-sequences
  }),
    (error: any) => Promise.reject(error);

  const handleLogoutClick = () => {
    localStorage.removeItem("accessToken");
    history.replace(ROUTES.SIGN_IN);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" className={classes.menu_item}>
        <GlobalOutlined />
        <span className={classes.list_item}>Language</span>
      </Menu.Item>
      <Menu.Item key="1" className={classes.menu_item}>
        <div onClick={handleLogoutClick}>
          <LogoutOutlined />
          <span className={classes.list_item}>Sign out</span>
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
          {adminName} <DownOutlined />
        </label>
      </Dropdown>
    </div>
  );
}
