// libs
// import { Suspense } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import { CssBaseline } from "@mui/material";
// // routes
// import appRoutes from "@/routers";
// // others
// import { store } from "@/redux/store";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Col, Breadcrumb } from "antd";
import React, { useState } from "react";
import styles from "./layout.module.scss";
import "@/styles/index.css";
import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;

/**
 * App
 */
interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}>
            <img
              className={styles.logo_img}
              alt="CSsoft"
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/102812805_102376864857997_8227153299313844344_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cHWZyAQINywAX8TOgR9&_nc_ht=scontent.fhan3-1.fna&oh=cbed7809d2c7032b5a4447c77e4d4efa&oe=61C0AED2"
            />
            <h3 className={styles.logo_title}>CSsoft</h3>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.site_layout}>
          <Header
            className={styles.site_layout_bg}
            style={{ padding: 0, display: "flex" }}
          >
            <Col>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: styles.trigger,
                  onClick: toggle,
                  // eslint-disable-next-line @typescript-eslint/comma-dangle
                }
              )}
            </Col>
            <Col>
              <Menu mode="horizontal" defaultSelectedKeys={["4"]}>
                <Menu.Item key="4">Cài đặt</Menu.Item>
              </Menu>
            </Col>
          </Header>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Cài đặt</Breadcrumb.Item>
              <Breadcrumb.Item>Ca làm việc</Breadcrumb.Item>
              <Breadcrumb.Item>Chi nhánh</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className={styles.site_layout_bg}
              style={{
                margin: "0px 0px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
