import { ROUTES } from "@/constants/routers";
import { display } from "@mui/system";
import { Form, Input, InputNumber, Button, Select, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

function SignupForm(props: any) {
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <div className="wrapper">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={props.onFinish}
        validateMessages={validateMessages}
      >
        <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Register</h3>
        <p style={{ marginTop: "40px" }}>
          Let&#39;s get you all set up you can verify your personal account{" "}
          <br /> and begin setting up your profile
        </p>
        <div className="form-group">
          <Form.Item
            className="form-item"
            name={["user", "name"]}
            label="Company name"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            className="form-item"
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input size="large" />
          </Form.Item>
        </div>

        <div className="form-group">
          <Form.Item
            className="form-item"
            name={["user", "phone"]}
            label="Phone Number"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            className="form-item"
            name={["user", "address"]}
            label="Address"
          >
            <Input size="large" />
          </Form.Item>
        </div>

        <div className="form-group">
          <Form.Item
            className="form-item"
            name="password"
            label="Password"
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
          {/* <Form.Item className='form-item'
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item> */}
        </div>

        <Form.Item
          className="form-item"
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        >
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Button style={{ width: "200px" }} type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <Form.Item>
          <p>
            Already have an account?{" "}
            <Link style={{ textDecoration: "underline" }} to={ROUTES.SIGN_IN}>
              Sign in
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
}
export default SignupForm;
