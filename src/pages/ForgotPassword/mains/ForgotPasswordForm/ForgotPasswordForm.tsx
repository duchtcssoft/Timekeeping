import { ROUTES } from "@/constants/routers";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import classes from "./ForgotPasswordForm.module.scss";

export default function ForgotPasswordForm(props: any) {
  return (
    <div className={classes.wrapper}>
      <Form
        name="normal_login"
        className={classes.forgotPasswordForm}
        initialValues={{ remember: true }}
        onFinish={props.onFinish}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Forgot Password
        </h3>
        <p>
          Enter your email. <br /> We will send new password to your email.
        </p>
        <Form.Item
          className="form-item"
          name={["user", "email"]}
          rules={[{ type: "email" }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your email"
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Send
          </Button>
          <Link style={{ textDecoration: "underline" }} to={ROUTES.SIGN_IN}>
            Back
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
