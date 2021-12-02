// libs
// import { Suspense } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import { CssBaseline } from "@mui/material";
// // routes
// import appRoutes from "@/routers";
// // others
// import { store } from "@/redux/store";
import "@/styles/index.css";
import {
  MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import styles from "./layout.module.scss";

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
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="sm"
          collapsedWidth="80"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
        }}
        >
          <div className={styles.logo}>
            <img className={styles.logo_img} alt="CSsoft" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/102812805_102376864857997_8227153299313844344_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cHWZyAQINywAX8TOgR9&_nc_ht=scontent.fhan3-1.fna&oh=cbed7809d2c7032b5a4447c77e4d4efa&oe=61C0AED2" />
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
        <Layout className={styles.site_layout} style={{ marginLeft: collapsed ? 80 : 200, transition: "ease 0.28s" }}>
          <Header className={styles.site_layout_bg} style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: toggle,
            })}
          </Header>
          <Content
            className={styles.site_layout_bg}
            style={{
              margin: "24px 16px",
              padding: 24,
              overflow: "initial",
              minHeight: "90vh",
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </>

  );
}
