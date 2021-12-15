import { ROUTES } from "@/constants/routers";
import { useRouter } from "@/hooks/router/useRouter";
import "@/styles/index.css";
import {
  AreaChartOutlined, BankOutlined, HomeOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined, SolutionOutlined, TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AdminProfile from "../AdminTemplate/AdminProfile";
import styles from "./layout.module.scss";

const { Header, Sider, Content } = Layout;

/**
 * MainLayout
 * TODO: Split it to small piece components
 */
interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const history = useHistory();
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handleClick = () => {
    history.push(ROUTES.TIME_KEEPING);
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
            <img
              className={styles.logo_img}
              alt="CSsoft"
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/102812805_102376864857997_8227153299313844344_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cHWZyAQINywAX8TOgR9&_nc_ht=scontent.fhan3-1.fna&oh=cbed7809d2c7032b5a4447c77e4d4efa&oe=61C0AED2"
            />
            <h3 className={styles.logo_title}>CSsoft</h3>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              onClick={() => {
                router.push(ROUTES.HOME);
              }}
            >
              Trang chủ
            </Menu.Item>
            <Menu.Item key="2" icon={<BankOutlined />}>
              Chi nhánh
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
              Nhân viên
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<SolutionOutlined />}
              onClick={handleClick}
            >
              Chấm công
            </Menu.Item>
            <Menu.Item key="5" icon={<AreaChartOutlined />}>
              Dashboard
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className={styles.site_layout}
          style={{ marginLeft: collapsed ? 80 : 200, transition: "ease 0.28s" }}
        >
          <Header
            className={styles.site_layout_bg}
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.trigger,
                onClick: toggle,
                // eslint-disable-next-line @typescript-eslint/comma-dangle
              }
            )}
            <AdminProfile />
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
