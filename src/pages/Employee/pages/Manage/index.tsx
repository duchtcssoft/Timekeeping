import MainBreadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/Layout";
import { Form, Input, Select, Button, DatePicker } from "antd";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 2,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 2,
    },
  },
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

const EmployeeManage = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <MainLayout>
      <MainBreadcrumb />
      <div>
        <Form {...formItemLayout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={["user", "name"]} label="Họ tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={["user", "email"]} label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Điện thoại"
            rules={[
              {
                required: true,
                pattern: new RegExp("0[0-9]{9}"),
                message: "Please enter a valid channel ID",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="office"
            label="Văn phòng"
            rules={[{ required: true, message: "Chọn văn phòng" }]}
          >
            <Select placeholder="Văn phòng">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </Form.Item>
          <Form.Item
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
            <Input.Password />
          </Form.Item>

          <Form.Item
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
                  return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="date-picker" label="Ngày sinh">
            <DatePicker />
          </Form.Item>
          <Form.Item name={["user", "address"]} label="Địa chỉ">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...tailFormItemLayout.wrapperCol }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainLayout>
  );
};

export default EmployeeManage;
