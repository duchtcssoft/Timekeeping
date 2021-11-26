import { Form, Input, Button, Checkbox, Avatar } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import classes from "./SignInForm.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routers";

function SignInForm(props: any) {
  return (
    <div className={classes.wrapper}>
      <Form
        style={{ width: "300px" }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={props.onFinish}
      >
        <div className={classes.avatar}>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
        <h3
          style={{
            textAlign: "center",
            margin: "10px 0 40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Sign In
        </h3>
        <Form.Item
          className="form-item"
          name={["user", "email"]}
          rules={[
            { type: "email" },
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            "email"
              ? { required: true, message: "Please input your Password!" }
              : { required: false },
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            style={{ float: "right" }}
            className="login-form-forgot"
            href=""
          >
            Forgot password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button
            // onClick={props.onClick}
            style={{ width: "100%", marginBottom: "20px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Don&#39;t have an account?{" "}
          <Link style={{ textDecoration: "underline" }} to={ROUTES.SIGN_UP}>
            register now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
export default SignInForm;
