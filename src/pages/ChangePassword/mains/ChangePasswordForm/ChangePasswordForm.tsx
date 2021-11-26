import { ROUTES } from "@/constants/routers";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import classes from "./ChangePasswordForm.module.scss";

export default function ChangePasswordForm() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={classes.wrapper}>
      <Form
        name="normal_login"
        className={classes.forgotPasswordForm}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Create New Password
        </h3>
        <Form.Item
          style={{ display: "block" }}
          className="form-item"
          name="password"
          label="New Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          style={{ display: "block" }}
          className="form-item"
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject();
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
          <Link style={{ textDecoration: "underline" }} to={ROUTES.HOME}>
            Home
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
